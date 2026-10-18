import React, { useState } from "react";
import Fade from "./animations/Fade";
import Card from "./atoms/Card";
import ViewportVideo from "./atoms/ViewportVideo";
import Modal from "./modal";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText, resolveAsset } from "../data";
import "../styles/projects.scss";

import airplaneImage from "../images/ProjectPhotos/airplane.webp";
import watoImage from "../images/ProjectPhotos/Wato.webp";
import hisecurityImage from "../images/ProjectPhotos/HiSecurity2.webp";
import pilotImg from "../images/ProjectPhotos/Pilot.webp";
import vexImg from "../images/ProjectPhotos/VEX.webp";
import wearableImg from "../images/ProjectPhotos/wearableHacks.webp";
import webappImg from "../images/ProjectPhotos/WebappProjects.webp";
import mte380Img from "../images/ProjectPhotos/mte380.webp";
import capstoneVideo from "../images/ProjectPhotos/capstone.mp4";

const MEDIA_SOURCES = {
  airplaneImage,
  watoImage,
  capstoneVideo,
  webappImg,
  wearableImg,
  mte380Img,
  hisecurityImage,
  vexImg,
  pilotImg,
};

const MEDIA_MAP = Object.fromEntries(
  Object.entries(MEDIA_SOURCES).map(([key, asset]) => [key, resolveAsset(asset)])
);

const Project = () => {
  const { language } = useLanguage();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  const handlePrevious = () => {
    if (modalId > 0) {
      setModalId(modalId - 1);
    }
  };

  const handleNext = () => {
    if (modalId < data.projects.length - 1) {
      setModalId(modalId + 1);
    }
  };

  const projectItems = data.projectsCarouselItems.map((item) => ({
    ...item,
    media: MEDIA_MAP[item.media],
    tag: getText(item.tag, language),
    title: getText(item.title, language),
    subtitle: getText(item.subtitle, language),
    description: getText(item.description, language),
    buttons: item.buttons.map((btn) => ({
      ...btn,
      text: getText(btn.text, language),
    })),
  }));

  const featuredProjects = projectItems.filter((item) => item.featured);
  const additionalProjects = projectItems.filter((item) => !item.featured);
  const visibleProjects = showAllProjects ? projectItems : featuredProjects;

  return (
    <section
      className="section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <Fade bottom distance="20px">
          <h2 id="projects-heading">
            {getText(data.sections.projects, language)}
          </h2>
        </Fade>

        <div className="project-wrapper">
          <div className="projects-grid">
            {visibleProjects.map((item) => (
              <Fade bottom distance="20px" key={item.title}>
                <article className="project-card">
                  <div className="project-media">
                    {item.type === "video" ? (
                      <ViewportVideo
                        src={item.media}
                        alt={item.title}
                        className="project-media-element"
                      />
                    ) : (
                      <img
                        src={item.media}
                        alt={item.title}
                        className="project-media-element"
                        loading="lazy"
                      />
                    )}
                    {item.tag && <span className="project-tag">{item.tag}</span>}
                  </div>

                  <div className="project-body">
                    <h3>{item.title}</h3>
                    {item.subtitle && (
                      <p className="project-subtitle">{item.subtitle}</p>
                    )}
                    <p className="project-description">{item.description}</p>

                    {item.buttons.length > 0 && (
                      <div className="project-links">
                        {item.buttons.map((button) => (
                          <a
                            key={button.url}
                            href={button.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                          >
                            {button.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Fade>
            ))}
          </div>

          {showAllProjects && (
            <div className="internships-subsection" id="work">
              <Fade bottom distance="20px">
                <h3 className="internships-subheading">
                  {getText(data.sections.internships, language)}
                </h3>
              </Fade>
              <div className="work-wrapper">
                <div className="grid">
                  {data.projects.map((project, index) => (
                    <Fade
                      bottom
                      distance="20px"
                      key={getText(project.title, "en")}
                    >
                      <Card
                        id={index}
                        heading={getText(project.title, language)}
                        subtitle={project.date ? project.date.trim() : ""}
                        paragraph={getText(project.para, language)}
                        imgUrl={project.imageSrc}
                        setOpenModal={setOpenModal}
                        setId={setModalId}
                      />
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
          )}

          {(additionalProjects.length > 0 || data.projects.length > 0) && (
            <div className="projects-toggle-wrap">
              <button
                type="button"
                className="projects-toggle-btn"
                aria-expanded={showAllProjects}
                onClick={() => setShowAllProjects((prev) => !prev)}
              >
                {getText(
                  showAllProjects
                    ? data.buttons.showFewerProjects
                    : data.buttons.viewAllProjects,
                  language
                )}
              </button>
            </div>
          )}

          {openModal && (
            <Modal
              closeModal={setOpenModal}
              id={modalId}
              totalItems={data.projects.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
