import { LANGUAGE_EVENT, getLanguageUrl, readLanguage } from "../utils/language";
import { observeVideo } from "../utils/videoPlayback";

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

const autoplayViewportVideos = () => {
  document.querySelectorAll("video[data-viewport-video]").forEach((video) => {
    if (video.error) {
      showVideoFallback(video);
      return;
    }
    const stopObserving = observeVideo(video);
    video.addEventListener(
      "error",
      () => {
        stopObserving();
        showVideoFallback(video);
      },
      { once: true }
    );
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
