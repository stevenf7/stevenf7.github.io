import React, { useEffect, useRef, useState, useCallback } from "react";
import ViewportVideo, { isVideoFile } from "./ViewportVideo";
import { useLanguage } from "../../contexts/LanguageContext";
import data, { getText } from "../../data";

const INITIAL_EDGE_COLORS = [
  { match: "airlab", color: "#333333" },
  { match: "stanford", color: "#ffffff" },
  { match: "University-of-Waterloo", color: "#ffffff" },
  { match: "Uwaterloo", color: "#000000" },
  { match: "Tesla", color: "#1e1e1e" },
  { match: "NVIDIA", color: "#181818" },
  { match: "ecobee", color: "#134445" },
  { match: "Khazanah", color: "#316b45" },
  { match: "Ford", color: "#0d2240" },
];

const getInitialEdgeColor = (url) => {
  if (!url || typeof url !== "string") return "#ffffff";
  const lower = url.toLowerCase();
  const entry = INITIAL_EDGE_COLORS.find((item) =>
    lower.includes(item.match.toLowerCase())
  );
  return entry ? entry.color : "#ffffff";
};

const sampleImageEdgeColor = (imgElement) => {
  if (typeof document === "undefined" || !imgElement) return null;
  const width = imgElement.naturalWidth;
  const height = imgElement.naturalHeight;
  if (!width || !height) return null;

  try {
    const sampleSize = 64;
    const canvas = document.createElement("canvas");
    canvas.width = sampleSize;
    canvas.height = sampleSize;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;

    ctx.drawImage(imgElement, 0, 0, sampleSize, sampleSize);
    const { data: pixels } = ctx.getImageData(0, 0, sampleSize, sampleSize);

    const coords = [];
    for (let i = 1; i < sampleSize - 1; i++) {
      coords.push([i, 1]);
      coords.push([i, sampleSize - 2]);
      coords.push([1, i]);
      coords.push([sampleSize - 2, i]);
    }

    let rSum = 0;
    let gSum = 0;
    let bSum = 0;
    let opaqueCount = 0;
    let transparentCount = 0;

    coords.forEach(([x, y]) => {
      const idx = (y * sampleSize + x) * 4;
      const alpha = pixels[idx + 3];
      if (alpha < 40) {
        transparentCount += 1;
      } else {
        rSum += pixels[idx];
        gSum += pixels[idx + 1];
        bSum += pixels[idx + 2];
        opaqueCount += 1;
      }
    });

    if (transparentCount > opaqueCount || opaqueCount === 0) {
      return "#ffffff";
    }

    const r = Math.round(rSum / opaqueCount);
    const g = Math.round(gSum / opaqueCount);
    const b = Math.round(bSum / opaqueCount);
    return `rgb(${r}, ${g}, ${b})`;
  } catch (error) {
    return null;
  }
};

const Card = ({
  id,
  heading,
  subtitle,
  paragraph,
  imgUrl,
  setOpenModal,
  setId,
}) => {
  const { language } = useLanguage();
  const isVideo = isVideoFile(imgUrl);
  const imgRef = useRef(null);
  const [edgeColor, setEdgeColor] = useState(() => getInitialEdgeColor(imgUrl));

  const updateEdgeColor = useCallback(() => {
    if (!imgRef.current) return;
    const sampled = sampleImageEdgeColor(imgRef.current);
    if (sampled) {
      setEdgeColor(sampled);
    }
  }, []);

  useEffect(() => {
    setEdgeColor(getInitialEdgeColor(imgUrl));
    if (imgRef.current && imgRef.current.complete) {
      updateEdgeColor();
    }
  }, [imgUrl, updateEdgeColor]);

  const openCardModal = () => {
    setId(id);
    setOpenModal(true);
  };

  return (
    <article
      className="card"
      style={{
        "--card-edge-color": edgeColor,
      }}
    >
      <div className="card-media" aria-hidden="true">
        {!isVideo && (
          <div
            className="card-media-backdrop"
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          />
        )}
        {isVideo ? (
          <ViewportVideo
            src={imgUrl}
            alt={heading}
            className="card-media-element"
          />
        ) : (
          <img
            ref={imgRef}
            src={imgUrl}
            alt=""
            className="card-media-element card-logo-image"
            loading="lazy"
            onLoad={updateEdgeColor}
          />
        )}
        <div className="card-media-blend" />
      </div>

      <div className="content">
        {subtitle && <p className="card-meta">{subtitle}</p>}
        <h3 className="header">{heading}</h3>
        <p className="text">{paragraph}</p>

        <button
          onClick={openCardModal}
          type="button"
          className="btn"
          aria-label={`${getText(data.buttons.explore, language)}: ${heading}`}
        >
          {getText(data.buttons.explore, language)}
        </button>
      </div>
    </article>
  );
};

export default Card;
