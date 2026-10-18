import React from "react";
import Fade from "./animations/Fade";
import ViewportVideo, { isVideoFile } from "./atoms/ViewportVideo";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";
import "../styles/publications.scss";

import hriLabGif from "../images/publications/hri_lab.gif";
import destrahVideo from "../images/publications/destrah.mp4";
import urLousdVideo from "../images/publications/ur_lousd.mp4";
import h1SilVideo from "../images/publications/h1_sil.mp4";
import h1TrainVideo from "../images/nvidia/h1_Train.mp4";
import carterOutdoorVideo from "../images/nvidia/Carter Outdoor.mp4";
import clawVideo from "../images/nvidia/claw.mp4";
import dextrousHandImage from "../images/nvidia/IMG_8301.webp";
import robotStackVideo from "../images/nvidia/Robot Stack2.mp4";

const PUBLICATION_MEDIA = {
  hriLabGif,
  destrahVideo,
  urLousdVideo,
  h1SilVideo,
  h1TrainVideo,
  carterOutdoorVideo,
  clawVideo,
  dextrousHandImage,
  robotStackVideo,
};

const Publications = () => {
  const { language } = useLanguage();

  const publicationsData = data.publications.map((publication) => ({
    ...publication,
    title: getText(publication.title, language),
    subtitle: getText(publication.subtitle, language),
    imageSrc: PUBLICATION_MEDIA[publication.media],
  }));

  return (
    <section
      className="section"
      id="publications"
      aria-labelledby="publications-heading"
    >
      <div className="container">
        <Fade bottom distance="20px">
          <h2 id="publications-heading">
            {getText(data.sections.publications, language)}
          </h2>
        </Fade>
        <div className="publications-wrapper">
          <div className="grid">
            {publicationsData.map((publication) => (
              <Fade bottom distance="20px" key={publication.id}>
                <article className="publication-card">
                  <div
                    className="background-media"
                    style={{
                      backgroundImage: !isVideoFile(publication.imageSrc)
                        ? `var(--pub-media-bottom-gradient, linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(240, 248, 255, 0.5) 70%, rgba(240, 248, 255, 0.9) 85%, rgba(240, 248, 255, 1.0) 100%)), url(${publication.imageSrc})`
                        : "none",
                    }}
                  >
                    {isVideoFile(publication.imageSrc) && (
                      <ViewportVideo
                        src={publication.imageSrc}
                        alt={publication.title}
                        className="background-video"
                        fallbackText={getText(
                          {
                            en: "Video preview unavailable on this device",
                            zh: "当前设备无法预览视频",
                          },
                          language
                        )}
                      />
                    )}
                  </div>
                  <div className="content">
                    <div
                      className="publication-type"
                      data-type={publication.type}
                    >
                      {publication.type}
                    </div>
                    <h3 className="header">{publication.title}</h3>
                    <p className="subtitle">{publication.subtitle}</p>
                    {publication.projectLink && (
                      <a
                        href={publication.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        {getText(data.buttons.viewPublication, language)}
                      </a>
                    )}
                  </div>
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
