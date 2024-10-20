import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import h1 from "./../images/h1.gif"
import "bootstrap/dist/css/bootstrap.min.css"

const Nvidia = () => {
  return (
    <div className="secion" id="nvidia">
      <div className="container">
        <Fade bottom cascade>
          <h1> NVIDIA Robotics Simulation Engineer</h1>
        </Fade>
        <div className="nvidia-section">
          <div className="content">
            <Fade bottom cascade>
              <p>
                {data.nvidiaExperience[0]}
                <br></br>
                <br></br>
                {data.nvidiaExperience[1]}
                <br></br>
                <br></br>
                {data.nvidiaExperience[2]}
                <br></br>
                <br></br>
                {data.nvidiaExperience[3]}
                <br></br>
                <br></br>
                {data.nvidiaExperience[4]}                
                <br></br>
                <br></br>
                {data.nvidiaExperience[5]}

              </p>
            </Fade>
          </div>
          <img src={h1} alt="h1" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default Nvidia
