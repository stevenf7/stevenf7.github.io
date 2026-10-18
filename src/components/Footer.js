import React from "react";
import Fade from "./animations/Fade";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";
import "../styles/footer.scss";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="footer-container">
          <Fade bottom distance="20px">
            <h2 id="contact-heading">{getText(data.sections.contact, language)}</h2>
          </Fade>
          <Fade bottom distance="20px" delay={0.1}>
            <p className="contact-subheading">
              {getText(data.contactSubHeading, language)}
            </p>
          </Fade>
          <Fade bottom distance="20px" delay={0.2}>
            <p className="personal-note">{getText(data.personalNote, language)}</p>
          </Fade>
          <Fade bottom distance="20px">
            <a className="email-link" href={`mailto:${data.contactEmail}`}>
              {data.contactEmail}
            </a>
            <div className="social-icons">
              {data.social.map((socialLink) => (
                <a
                  key={socialLink.label}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.label}
                >
                  <img src={socialLink.img} alt="" aria-hidden="true" loading="lazy" />
                </a>
              ))}
            </div>
          </Fade>
          <Fade bottom distance="20px">
            <span>
              {getText(data.footer.madeBy, language)}{" "}
              <span role="img" aria-label="duck">
                🦆
              </span>
              <a
                href="https://www.linkedin.com/in/stevenfeng7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {getText(data.name, language)}
              </a>
            </span>
          </Fade>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
