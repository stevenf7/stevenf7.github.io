import React, { useEffect, useRef, useState } from "react";
import { isVideoFile } from "../../utils/media";
import { observeVideo } from "../../utils/videoPlayback";

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

  useEffect(() => {
    setHasError(false);
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError || !autoPlay) return undefined;
    return observeVideo(video);
  }, [autoPlay, hasError, src]);

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
      onError={() => setHasError(true)}
    />
  );
};

export default ViewportVideo;
