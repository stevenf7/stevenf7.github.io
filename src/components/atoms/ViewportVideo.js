import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".avi"];

export const isVideoFile = (url) => {
  if (!url || typeof url !== "string") return false;
  const cleanUrl = url.split("?")[0].toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => cleanUrl.endsWith(ext));
};

const ViewportVideo = ({
  src,
  alt = "",
  className = "",
  poster,
  autoPlay = true,
  controls = false,
  fallbackText = "Video preview unavailable on this device",
  style,
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const reducedMotionActive = Boolean(hasMounted && prefersReducedMotion);
  const shouldAutoPlay = Boolean(autoPlay && !reducedMotionActive);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const target = containerRef.current;
    if (!target || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
          }
          setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.25);
        });
      },
      {
        rootMargin: "240px 0px",
        threshold: [0, 0.25, 0.6],
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || hasError) return;

    video.muted = true;
    video.loop = true;

    if (isVisible && shouldAutoPlay) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } else {
      try {
        video.pause();
      } catch (error) {
        // Ignore browser media pause timing issues.
      }
    }
  }, [hasError, isVisible, shouldAutoPlay, shouldLoad, src]);

  if (hasError || !src) {
    return (
      <div
        ref={containerRef}
        className={`${className} video-fallback`.trim()}
        role="img"
        aria-label={alt || fallbackText}
        style={style}
      >
        <span>{fallbackText}</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="viewport-video-shell"
      style={{ width: "100%", height: "100%", ...style }}
    >
      <video
        ref={videoRef}
        className={className}
        src={shouldLoad ? src : undefined}
        poster={poster}
        autoPlay={shouldAutoPlay && isVisible}
        muted
        loop
        playsInline
        controls={controls || reducedMotionActive}
        preload={shouldLoad ? "metadata" : "none"}
        disablePictureInPicture
        aria-label={alt || undefined}
        onLoadedData={(event) => {
          if (isVisible && shouldAutoPlay) {
            const playPromise = event.currentTarget.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          }
        }}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default ViewportVideo;
