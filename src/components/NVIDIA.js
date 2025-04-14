import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import h1 from "./../images/h1.gif"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/NVIDIA.scss"

const NVIDIA = () => {
  return (
    <div className="section" id="nvidia">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>NVIDIA</h1>
          <h2>{data.nvidiaTime}</h2>
        </Fade>
        <div className="nvidia-section">
          <div className="content">
            {data.nvidiaExperience.map((exp, index) => (
              <Fade bottom distance="20px" key={index}>
                <p>{exp}</p>
              </Fade>
            ))}
          </div>
          <img src={h1} alt="NVIDIA Robotics" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default NVIDIA
