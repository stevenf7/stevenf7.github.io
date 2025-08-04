import React from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/footer.scss"

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom distance="20px" duration={1000}>
            <h1>{getText(data.sections.contact, language)}</h1>
          </Fade>
          <Fade bottom distance="20px" delay={300} duration={1000}>
            <h2>{getText(data.contactSubHeading, language)}</h2>
          </Fade>
          <Fade bottom>
            <a className="email-link" href={`mailto:${data.contactEmail}`}>
              {data.contactEmail}
            </a>
            <div className="social-icons">
              {data.social.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialLink.img} alt="icons"></img>
                </a>
              ))}
            </div>
          </Fade>
          <Fade bottom>
          <span>
            Made by <span role="img" aria-label="duck">🦆</span>
            <a href="https://www.linkedin.com/in/stevenfeng7/"> Ji Yuan "Steven" Feng</a>
          </span>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer
