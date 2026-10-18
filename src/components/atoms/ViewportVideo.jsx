import React, { useEffect, useRef, useState, useCallback } from "react";
import { isVideoFile } from "../../utils/media";

export { isVideoFile };

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
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  const forcePlay = useCallback(
    (videoElement) => {
      const video = videoElement || videoRef.current;
      if (!video || !autoPlay) return;

      video.defaultMuted = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.defaultMuted = true;
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          }, 120);
        });
      }
    },
    [autoPlay]
  );

  useEffect(() => {
    setHasError(false);
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError) return undefined;

    forcePlay(video);

    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            forcePlay(video);
          }
        });
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [forcePlay, hasError, src]);

  if (hasError || !src) {
    return (
      <div
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
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      muted
      loop
      playsInline
      controls={controls}
      preload="metadata"
      disablePictureInPicture
      aria-label={alt || undefined}
      style={style}
      onLoadedMetadata={(event) => forcePlay(event.currentTarget)}
      onLoadedData={(event) => forcePlay(event.currentTarget)}
      onCanPlay={(event) => forcePlay(event.currentTarget)}
      onEnded={(event) => {
        const video = event.currentTarget;
        video.currentTime = 0;
        forcePlay(video);
      }}
      onError={() => setHasError(true)}
    />
  );
};

export default ViewportVideo;
