import { LANGUAGE_EVENT, getLanguageUrl, readLanguage } from "../utils/language";

const updateLanguageLinks = () => {
  const language = readLanguage();
  document.querySelectorAll("a[data-lang-path]").forEach((link) => {
    link.setAttribute(
      "href",
      getLanguageUrl(language, link.dataset.langPath, link.dataset.langHash || "")
    );
  });
};

const updateLanguageAttributes = () => {
  const language = readLanguage();
  document.querySelectorAll("[data-aria-label-en]").forEach((element) => {
    const label =
      element.dataset[language === "zh" ? "ariaLabelZh" : "ariaLabelEn"];
    if (label) element.setAttribute("aria-label", label);
  });
};

const revealOnScroll = () => {
  const elements = document.querySelectorAll(".fade-in-section");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -80px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
};

const showVideoFallback = (video) => {
  const fallback = document.createElement("div");
  fallback.className = `${video.className} video-fallback`;
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", video.getAttribute("aria-label") || "");
  const text = document.createElement("span");
  text.textContent =
    readLanguage() === "zh"
      ? video.dataset.fallbackZh || video.dataset.fallbackEn
      : video.dataset.fallbackEn;
  fallback.appendChild(text);
  video.replaceWith(fallback);
};

const playMuted = (video) => {
  video.defaultMuted = true;
  video.muted = true;
  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
};

const autoplayViewportVideos = () => {
  const videos = document.querySelectorAll("video[data-viewport-video]");
  const observer =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) playMuted(entry.target);
            });
          },
          { rootMargin: "300px 0px", threshold: 0.1 }
        )
      : null;

  videos.forEach((video) => {
    if (video.error) {
      showVideoFallback(video);
      return;
    }
    video.addEventListener("error", () => showVideoFallback(video), { once: true });
    if (observer) {
      observer.observe(video);
    } else {
      playMuted(video);
    }
  });
};

updateLanguageLinks();
updateLanguageAttributes();
window.addEventListener(LANGUAGE_EVENT, () => {
  updateLanguageLinks();
  updateLanguageAttributes();
});
revealOnScroll();
autoplayViewportVideos();
