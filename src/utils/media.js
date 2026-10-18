const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".avi"];

export const isVideoFile = (url) => {
  if (!url || typeof url !== "string") return false;
  const cleanUrl = url.split("?")[0].toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => cleanUrl.endsWith(ext));
};
