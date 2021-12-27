import React from "react"
import Fade from "react-reveal/Fade"
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/projects.scss"

import airplaneImage from "../images/ProjectPhotos/airplane.png"
import watoImage from "../images/ProjectPhotos/Wato.jpg"
import hisecurityImage from "../images/ProjectPhotos/Hsecurity.jpg"
import pilotImg from "../images/ProjectPhotos/Pilot.jpg"
import vexImg from "../images/ProjectPhotos/VEX.jpg"
import wearableImg from "../images/ProjectPhotos/wearableHacks.png"
import webappImg from "../images/ProjectPhotos/WebappProjects.png"
import mte380Img from "../images/ProjectPhotos/mte380.png"

const Project = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="project-wrapper">
          <Fade bottom>
            <h2>Projects and Hobbies</h2>
          </Fade>
          <Carousel className="masterCarousel">
            <Carousel.Item className="CarouselItem" interval={2000}>
              <img
                className="d-block w-100"
                src={airplaneImage}
                alt="Airplane Project"
                fluid
              ></img>

              <Carousel.Caption className="carouselCaption">
                <h3>Airplane Project (2020)</h3>
                <h4> The sky is calling! </h4>
                <p>
                   In this project, I built a
                  remote controlled airplane from scratch using raspberry pi and esp8266 modules, and
                  designed software and mechanical architectures from scratch in a team of two.
                </p>
                <button
                  onClick={event =>
                    (window.location.href =
                      "https://github.com/The-Airplane-Project/Remote-Controlled-Airplane")
                  }
                  type="button"
                  className="btn"
                >
                  Read More
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem" interval={2000}>
              <img
                className="d-block w-100"
                src={watoImage}
                alt="Watonomous"
                fluid
              />
              <Carousel.Caption className="carouselCaption">
                <h3>Watonomous</h3>
                <h4>Bolty!</h4>
                <p>
                  Watonomous is a University of Waterloo design team that turns
                  a chevy bolt to a level 4 autonomous vehicle. At Watonomous, I
                  worked on local planning for the vehicle, particularly with the
                  MPC controller and gained valuable experience with ROS.
                </p>
                
                <button
                  onClick={event =>
                    (window.location.href =
                      "https://www.watonomous.ca/")
                  }
                  type="button"
                  className="btn"
                >
                  Read more
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem" interval={2000}>
              <img
                className="d-block w-100"
                src={webappImg}
                alt="Webapps"
                fluid
              />
              <Carousel.Caption className="carouselCaption">
                <h3>Webapp Hackathon Projects</h3>
                <h4>Best Use of Google Cloud Award (Purrtector, NWHacks 2021)</h4>
                <p>
                  Intelibatch (left) is a webapp for displaying and predicting COVID19 cases across North America using React (front end), Flask (back end), and Tensorflow (prediction) to compute the optimal batch size for repeated testing<br></br><br></br>
                  Purrtech (right) is a chrome extension for encouraging planet positive behaviors by rewarding users with digital pets using React and Flask.
                </p>
                <button
                  onClick={event =>
                    (window.location.href =
                      "https://devpost.com/software/pool-sampler")
                  }
                  type="button"
                  className="btn"
                >
                  Intelibatch
                </button>
                <button
                  onClick={event =>
                    (window.location.href =
                      "https://devpost.com/software/purrtech")
                  }
                  type="button"
                  className="btn"
                >
                  Purrtector
                </button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="CarouselItem" interval={2000}>
              <img
                className="d-block w-100"
                src={wearableImg}
                alt="Wearables"
                fluid
              />
              <Carousel.Caption className="carouselCaption">
                <h3>Wearable Hackathon Projects</h3>
                <h4>1st Place (VisionSense, MakeUofT 2019)</h4>
                <p>
                  VisionSense (left) is an IoT outfit to haptically guide users with visual impairments/obstructions while monitoring their environment<br></br><br></br>
                  Nightlight (right) is a wearable that allows bike users to signal turns at night via motion-sensing technologies which will activate turn lights
                </p>
                <button
                  onClick={event =>
                    (window.location.href =
                      "https://devpost.com/software/visionsense")
                  }
                  type="button"
                  className="btn"
                >
                  VisionSense
                </button>
                <button
                  onClick={event =>
                    (window.location.href =
                      "https://devpost.com/software/team-18-go-team")
                  }
                  type="button"
                  className="btn"
                >
                  NightLight
                </button>


              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem" interval={2000}>
              <img
                className="d-block w-100"
                src={mte380Img}
                alt="bofa"
                fluid
              />
              <Carousel.Caption className="carouselCaption">
                <h3>BOFA, the Line Follower Robot</h3>
                <h4>2nd highest competition mark</h4>
                <p>
                  Lead the mechanical design for a line following robot using SolidWorks, drafted Bill of Material, and oversee software, mechanical, and electrical developments as project manager
                </p>
                <button
                  onClick={event =>
                    (window.location.href =
                      "https://github.com/B-O-F-A")
                  }
                  type="button"
                  className="btn"
                >
                  Read More
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem" interval={2000}>
              <img
                className="d-block w-100"
                src={hisecurityImage}
                alt="hisecurity"
                fluid
              />
              <Carousel.Caption className="carouselCaption">
                <h3>HiSecurity!</h3>
                <h4>Hack the north, 2019</h4>
                <p>
                This camera system which utilizes machine vision (OpenCV and Sktlearn) to physically track and identify faces using the stepper motors onboard. The handy ui also enables users to track the system remotely and in real time.
                </p>
                <button
                  onClick={event =>
                    (window.location.href =
                      "https://devpost.com/software/acs-htn2019")
                  }
                  type="button"
                  className="btn"
                >
                  Read More
                </button>

              </Carousel.Caption>
            </Carousel.Item>




            <Carousel.Item className="CarouselItem" interval={2000}>
              <img
                className="d-block w-100"
                src={vexImg}
                alt="vex"
                fluid
              />
              <Carousel.Caption className="carouselCaption">
                <h3>VEX Robotics</h3>
                <h4>Finalists, Alberta Provincial Championship 2017 and 2018</h4>
                <p>
                Over the three years, we explored various robotics systems such as holonomic drives, reverse double four bar lifts, and even learned C programming and programed PID controllers from scratch in a team of three.
                <br></br>Furthermore, we qualified and competed at VEX World Robotics Championship representing Canada twice, and this experience ultimately propelled me towards a career in robotics engineering.
                </p>

                <button
                  onClick={event =>
                    (window.location.href =
                      "https://globalnews.ca/video/3355924/sir-winston-churchill-students-head-to-vex-robotics-world-championship/")
                  }
                  type="button"
                  className="btn"
                >
                  Read More
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem" interval={2000}>
              <img
                className="d-block w-100"
                src={pilotImg}
                alt="pilot"
                fluid
              />
              <Carousel.Caption className="carouselCaption">
                <h3>Pilot</h3>
                <h4>"Oh! I slipped the surly bonds of earth and danced the skies on bright yellow wings."</h4>
                <p>
                   I finally touched the sky when I earned my glider pilot license in grade 10 and private pilot license in grade 11. This was an breathtaking experiences that inspires me to build robotics airplanes to this date.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Project
