import React, { useState } from "react";
import Fade from "./animations/Fade";
import ViewportVideo from "./atoms/ViewportVideo";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";
import { NVIDIA_MEDIA as MEDIA_MAP } from "../media";
import "../styles/NVIDIA.scss";

const NVIDIA = () => {
  const { language } = useLanguage();
  const [showAllDemos, setShowAllDemos] = useState(false);

  const featuredDemo = {
    ...data.nvidiaFeaturedDemo,
    media: MEDIA_MAP[data.nvidiaFeaturedDemo.media],
    badge: getText(data.nvidiaFeaturedDemo.badge, language),
    title: getText(data.nvidiaFeaturedDemo.title, language),
    description: getText(data.nvidiaFeaturedDemo.description, language),
  };

  const caseStudies = data.nvidiaCaseStudies.map((study) => ({
    ...study,
    media: MEDIA_MAP[study.media],
    category: getText(study.category, language),
    title: getText(study.title, language),
    summary: getText(study.summary, language),
    highlights: getText(study.highlights, language) || [],
    link: study.link
      ? {
          ...study.link,
          text: getText(study.link.text, language),
        }
      : null,
  }));

  const galleryItems = data.nvidiaCarouselItems.map((item) => ({
    ...item,
    media: MEDIA_MAP[item.media],
    category: getText(item.category, language),
    title: getText(item.title, language),
    description: getText(item.description, language),
  }));

  return (
    <section className="section" id="nvidia" aria-labelledby="nvidia-heading">
      <div className="container">
        <Fade bottom distance="20px">
          <div className="nvidia-header">
            <h2 id="nvidia-heading">{getText(data.sections.nvidia, language)}</h2>
            <p className="nvidia-role-subtitle">
              {getText(data.nvidiaTime, language)}
            </p>
            <p className="nvidia-lead">{getText(data.nvidiaLead, language)}</p>
          </div>
        </Fade>

        <div className="nvidia-section">
          <Fade bottom distance="20px">
            <div className="nvidia-featured-showcase">
              <div className="nvidia-featured-media">
                <ViewportVideo
                  src={featuredDemo.media}
                  alt={featuredDemo.title}
                  className="nvidia-media-element"
                />
              </div>
              <div className="nvidia-featured-copy">
                <span className="nvidia-eyebrow-pill">{featuredDemo.badge}</span>
                <h3>{featuredDemo.title}</h3>
                <p>{featuredDemo.description}</p>

                <ul className="nvidia-impact-list">
                  {data.nvidiaExperience.map((item, index) => (
                    <li key={index}>{getText(item, language)}</li>
                  ))}
                </ul>

                <div className="nvidia-tag-row" aria-label="NVIDIA technologies">
                  {featuredDemo.tags.map((tag) => (
                    <span key={tag} className="nvidia-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Fade>

          <div className="nvidia-case-grid">
            {caseStudies.map((study) => (
              <Fade bottom distance="20px" key={study.id}>
                <article className="nvidia-case-card">
                  <div className="nvidia-case-media">
                    {study.type === "video" ? (
                      <ViewportVideo
                        src={study.media}
                        alt={study.title}
                        className="nvidia-media-element"
                      />
                    ) : (
                      <img
                        src={study.media}
                        alt={study.title}
                        className="nvidia-media-element"
                        loading="lazy"
                      />
                    )}
                    <span className="nvidia-case-category">{study.category}</span>
                  </div>

                  <div className="nvidia-case-body">
                    <h3>{study.title}</h3>
                    <p>{study.summary}</p>

                    <ul className="nvidia-case-highlights">
                      {Array.isArray(study.highlights) &&
                        study.highlights.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ul>

                    <div className="nvidia-card-footer">
                      <div className="nvidia-tag-row">
                        {study.tags.map((tag) => (
                          <span key={tag} className="nvidia-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {study.link && (
                        <a
                          href={study.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nvidia-case-link"
                        >
                          {study.link.text}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Fade>
            ))}
          </div>

          <div className="nvidia-gallery-toggle-wrap">
            <button
              type="button"
              className="nvidia-gallery-toggle"
              aria-expanded={showAllDemos}
              aria-controls="nvidia-full-gallery"
              onClick={() => setShowAllDemos((prev) => !prev)}
            >
              {getText(
                showAllDemos
                  ? data.buttons.showFewerDemos
                  : data.buttons.viewAllDemos,
                language
              )}
            </button>
          </div>

          {showAllDemos && (
            <div
              id="nvidia-full-gallery"
              className="nvidia-gallery-grid"
              aria-label={
                language === "zh"
                  ? "全部 NVIDIA 仿真演示与演讲"
                  : "All NVIDIA simulation demos and talks"
              }
            >
              {galleryItems.map((item, index) => (
                <article className="nvidia-gallery-card" key={`${item.title}-${index}`}>
                  <div className="nvidia-gallery-media">
                    {item.type === "video" ? (
                      <ViewportVideo
                        src={item.media}
                        alt={item.title}
                        className="nvidia-media-element"
                      />
                    ) : (
                      <img
                        src={item.media}
                        alt={item.title}
                        className="nvidia-media-element"
                        loading="lazy"
                      />
                    )}
                    {item.category && (
                      <span className="nvidia-gallery-badge">{item.category}</span>
                    )}
                  </div>
                  <div className="nvidia-gallery-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NVIDIA;
