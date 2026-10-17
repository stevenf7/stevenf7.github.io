import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Fade from "./animations/Fade";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";
import imgUrl from "../images/headerphoto2.webp";

const Header = () => {
  const { language, getLanguageUrl } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const specialtyWords = getText(data.heroSpecialties, language);
  const primarySpecialty = Array.isArray(specialtyWords)
    ? specialtyWords[0]
    : specialtyWords;

  return (
    <section className="section" id="home" aria-label={getText(data.name, language)}>
      <div className="container">
        <div
          className="header-wrapper"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10, 18, 28, 0.22) 0%, rgba(10, 18, 28, 0.52) 56%, rgba(10, 18, 28, 0.84) 100%), url(${imgUrl})`,
          }}
        >
          <div className="hero-content">
            <Fade bottom distance="20px">
              <p className="hero-eyebrow">
                {getText(data.heroEyebrow, language)}
              </p>
            </Fade>

            <Fade bottom distance="20px">
              <h1 className="hero-name">
                {getText({ en: "Hi, I'm", zh: "你好，我是" }, language)}{" "}
                {getText(data.name, language)}
              </h1>
            </Fade>

            <Fade bottom distance="20px">
              <p className="hero-role-line">
                <span>
                  {getText({ en: "Focused on", zh: "深耕于" }, language)}{" "}
                </span>
                <strong className="hero-specialty">
                  {!hasMounted || prefersReducedMotion || !Array.isArray(specialtyWords) ? (
                    primarySpecialty
                  ) : (
                    <Typewriter
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={65}
                      deleteSpeed={42}
                      delaySpeed={1600}
                      words={specialtyWords}
                    />
                  )}
                </strong>
              </p>
            </Fade>

            <Fade bottom distance="20px">
              <p className="hero-summary">
                {getText(data.headerParagraph, language)}
              </p>
            </Fade>

            <Fade bottom distance="20px">
              <div className="hero-actions">
                <a
                  href={getLanguageUrl(language, "/", "#nvidia")}
                  className="primary-btn hero-primary-cta"
                >
                  {getText(data.buttons.selectedWork, language)}
                </a>
                <a
                  href={getLanguageUrl(language, "/resume")}
                  className="secondary-btn hero-secondary-cta"
                >
                  {getText(data.buttons.resumeCta, language)}
                </a>
                <a
                  href="https://www.linkedin.com/in/stevenfeng7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn hero-tertiary-cta"
                >
                  {getText(data.buttons.connect, language)}
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
