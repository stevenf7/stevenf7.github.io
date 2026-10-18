import React from "react";
import Fade from "./animations/Fade";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";

const Skills = () => {
  const { language } = useLanguage();
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <Fade bottom distance="20px">
          <h2 id="skills-heading">{getText(data.sections.skills, language)}</h2>
        </Fade>
        <div className="skills-wrapper">
          <div className="grid">
            {data.skills.map((skill, index) => (
              <Fade bottom distance="20px" key={index}>
                <div className="skill-item">
                  <img src={skill.img} alt="" aria-hidden="true" loading="lazy" />
                  {skill.title && <h3>{getText(skill.title, language)}</h3>}
                  <p>{getText(skill.para, language)}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
