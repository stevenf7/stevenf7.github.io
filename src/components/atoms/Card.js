import React from "react";
import ViewportVideo, { isVideoFile } from "./ViewportVideo";
import { useLanguage } from "../../contexts/LanguageContext";
import data, { getText } from "../../data";

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

  const openCardModal = () => {
    setId(id);
    setOpenModal(true);
  };

  return (
    <article className="card">
      <div className="card-media" aria-hidden="true">
        {isVideo ? (
          <ViewportVideo
            src={imgUrl}
            alt={heading}
            className="card-media-element"
          />
        ) : (
          <img
            src={imgUrl}
            alt=""
            className="card-media-element card-logo-image"
            loading="lazy"
          />
        )}
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
