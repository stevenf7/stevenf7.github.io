import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import h1 from "./../images/h1.gif"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/NVIDIA.scss"

const Nvidia = () => {
  return (
    <div className="section" id="nvidia">
      <div className="container">
        <Fade bottom cascade>
          <h1>NVIDIA Robotics</h1>
        </Fade>
        <div className="nvidia-section">
          <div className="content">
            <Fade bottom cascade>
              <p>
                {data.nvidiaExperience[0]}
                <br />
                <br />
                {data.nvidiaExperience[1]}
              </p>
            </Fade>
          </div>
          <img src={h1} alt="NVIDIA Robotics" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default Nvidia
