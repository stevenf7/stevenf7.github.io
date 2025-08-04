import React from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"

const Skills = () => {
  const { language } = useLanguage();
  return (
    <div className="section" id="skills">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.skills, language)}</h1>

        </Fade>
        <div className="skills-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {data.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.img} alt={skill.title} />
                  <h3>{skill.title}</h3>
                  <p>{skill.para}</p>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
