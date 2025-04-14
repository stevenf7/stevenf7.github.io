import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>Skills</h1>
          <h2>{data.skillsSubHeading}</h2>
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
