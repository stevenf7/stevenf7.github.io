import React from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import selfImage from "./../images/SelfPhoto4.webp"
import "../styles/about.scss"

const About = () => {
  const { language } = useLanguage();
  return (
    <div className="section" id="about">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.about, language)}</h1>
        </Fade>
        <div className="about-section">
          <div className="content">
            <Fade bottom distance="20px">
              <p>
                {getText(data.aboutParaOne, language)}
                <br />
                <br />
                {getText(data.aboutParaTwo, language)}
                <br />
                <br />
                {getText(data.aboutParaThree, language)}
              </p>
            </Fade>
          </div>
          <Fade bottom duration={1000} distance="20px">
            <div className="image-container">
              <img src={selfImage} alt="Steven Feng" className="img-fluid" loading="lazy" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
