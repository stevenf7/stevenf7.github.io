// Safari blocks autoplay entirely in some modes (Low Power Mode, the
// "Auto-Play Video Previews" accessibility setting). Blocked videos get
// native controls and are retried on the first user gesture.
const blockedVideos = new Set();
let isListeningForGesture = false;
let viewportObserver = null;

const retryBlockedVideos = () => {
  blockedVideos.forEach((video) => attemptPlay(video));
};

const listenForGesture = () => {
  if (isListeningForGesture) return;
  isListeningForGesture = true;
  ["touchend", "click", "keydown"].forEach((eventName) =>
    document.addEventListener(eventName, retryBlockedVideos, { passive: true })
  );
};

export const attemptPlay = (video) => {
  video.defaultMuted = true;
  video.muted = true;
  video.playsInline = true;

  const playPromise = video.play();
  if (!playPromise || typeof playPromise.then !== "function") return;

  playPromise
    .then(() => {
      if (blockedVideos.delete(video)) video.removeAttribute("controls");
    })
    .catch((error) => {
      if (error?.name !== "NotAllowedError") return;
      blockedVideos.add(video);
      video.setAttribute("controls", "");
      listenForGesture();
    });
};

const getViewportObserver = () => {
  if (viewportObserver || typeof IntersectionObserver === "undefined") {
    return viewportObserver;
  }
  viewportObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          attemptPlay(target);
        } else if (!target.paused) {
          target.pause();
        }
      });
    },
    { rootMargin: "200px 0px" }
  );
  return viewportObserver;
};

// Plays the video while it is near the viewport and pauses it otherwise,
// so tablets are not decoding every video on the page at once.
export const observeVideo = (video) => {
  const observer = getViewportObserver();
  if (!observer) {
    attemptPlay(video);
    return () => blockedVideos.delete(video);
  }
  observer.observe(video);
  return () => {
    observer.unobserve(video);
    blockedVideos.delete(video);
  };
};
