import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import selfImage from "./../images/SelfPhoto4.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/about.scss"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>About</h1>
        </Fade>
        <div className="about-section">
          <div className="content">
            <Fade bottom distance="20px">
              <p>
                {data.aboutParaOne}
                <br />
                <br />
                {data.aboutParaTwo}
                <br />
                <br />
                {data.aboutParaThree}
              </p>
            </Fade>
          </div>
          <Fade bottom duration={1000} distance="20px">
            <div className="image-container">
              <img src={selfImage} alt="Steven Feng" className="img-fluid" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
