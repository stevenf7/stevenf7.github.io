import React, { useState, useEffect } from "react"
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
import capstoneVideo from "../images/ProjectPhotos/capstone.mp4"

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle carousel selection
  const handleCarouselSelect = (selectedIndex) => {
    console.log(`Projects carousel select: ${selectedIndex}, isMobile: ${isMobile}`);
    try {
      setActiveIndex(selectedIndex);
    } catch (error) {
      console.error('Error in projects carousel selection:', error);
    }
  };

  return (
    <div className="section" id="projects">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>Projects</h1>
        </Fade>
        <div className="project-wrapper">
          <Carousel 
            className="masterCarousel" 
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
            touch={true} 
            interval={3000}
            indicators={true}
            controls={true}
            keyboard={false}
            slide={true}
            wrap={true}
            variant="dark"
          >
            <Carousel.Item className="CarouselItem">
              <img
                className="d-block w-100"
                src={airplaneImage}
                alt="Airplane Project"

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
                    (window.open(
                      "https://github.com/The-Airplane-Project/Remote-Controlled-Airplane"))
                  }
                  type="button"
                  className="btn"
                >
                  Read More
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem">
              <img
                className="d-block w-100"
                src={watoImage}
                alt="Watonomous"

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
                    (window.open(
                      "https://www.watonomous.ca/"))
                  }
                  type="button"
                  className="btn"
                >
                  Read more
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem">
              <div className="video-container">
                <video
                  className="d-block"
                  src={capstoneVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <Carousel.Caption className="carouselCaption">
                <h3>Capstone Project (2023)</h3>
                <h4>Multi-robot exploration and SLAM in a simulated warehouse</h4>
                <p>
                  Initial prototype of a single robot SLAM system for exploring and mapping a 80000 sqft virtual warehouse.
                </p>
                                <button
                  onClick={event =>
                    (window.open(
                      "https://github.com/FireScopeRobotics"))
                  }
                  type="button"
                  className="btn"
                >
                  Read more
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem">
              <img
                className="d-block w-100"
                src={webappImg}
                alt="Webapps"

              />
              <Carousel.Caption className="carouselCaption">
                <h3>Webapp Hackathon Projects</h3>
                <h4>Best Use of Google Cloud Award (Purrtector, NWHacks 2021)</h4>
                <p>
                  Intelibatch (left) is a webapp for displaying and predicting COVID19 cases across North America using React (front end), Flask (back end), and Tensorflow (prediction) to compute the optimal batch size for repeated testing.
                  Purrtector (right) is a chrome extension for encouraging planet positive behaviors by rewarding users with digital pets using React and Flask.
                </p>
                <button
                  onClick={event =>
                    (window.open(
                      "https://devpost.com/software/pool-sampler"))
                  }
                  type="button"
                  className="btn"
                >
                  Intelibatch
                </button>
                <button
                  onClick={event =>
                    (window.open(
                      "https://devpost.com/software/purrtech"))
                  }
                  type="button"
                  className="btn"
                >
                  Purrtector
                </button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="CarouselItem">
              <img
                className="d-block w-100"
                src={wearableImg}
                alt="Wearables"

              />
              <Carousel.Caption className="carouselCaption">
                <h3>Wearable Hackathon Projects</h3>
                <h4>1st Place (VisionSense, MakeUofT 2019)</h4>
                <p>
                  VisionSense (left) is an IoT outfit to haptically guide users with visual impairments/obstructions while monitoring their environment.
                  Nightlight (right) is a wearable that allows bike users to signal turns at night via motion-sensing technologies which will activate turn lights.
                </p>
                <button
                  onClick={event =>
                    (window.open(
                      "https://devpost.com/software/visionsense"))
                  }
                  type="button"
                  className="btn"
                >
                  VisionSense
                </button>
                <button
                  onClick={event =>
                    (window.open(
                      "https://devpost.com/software/team-18-go-team"))
                  }
                  type="button"
                  className="btn"
                >
                  NightLight
                </button>


              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem">
              <img
                className="d-block w-100"
                src={mte380Img}
                alt="bofa"

              />
              <Carousel.Caption className="carouselCaption">
                <h3>BOFA, the Line Follower Robot</h3>
                <h4>2nd highest competition mark</h4>
                <p>
                  Lead the mechanical design for a line following robot using SolidWorks, drafted Bill of Material, and oversee software, mechanical, and electrical developments as project manager
                </p>
                <button
                  onClick={event =>
                    (window.open(
                      "https://github.com/B-O-F-A"))
                  }
                  type="button"
                  className="btn"
                >
                  Read More
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem">
              <img
                className="d-block w-100"
                src={hisecurityImage}
                alt="hisecurity"

              />
              <Carousel.Caption className="carouselCaption">
                <h3>HiSecurity!</h3>
                <h4>Hack the north, 2019</h4>
                <p>
                This camera system which utilizes machine vision (OpenCV and Sktlearn) to physically track and identify faces using the stepper motors onboard. The handy ui also enables users to track the system remotely and in real time.
                </p>
                <button
                  onClick={event =>
                    (window.open(
                      "https://devpost.com/software/acs-htn2019"))
                  }
                  type="button"
                  className="btn"
                >
                  Read More
                </button>

              </Carousel.Caption>
            </Carousel.Item>




            <Carousel.Item className="CarouselItem">
              <img
                className="d-block w-100"
                src={vexImg}
                alt="vex"

              />
              <Carousel.Caption className="carouselCaption">
                <h3>VEX Robotics</h3>
                <h4>Finalists, Alberta Provincial Championship 2017 and 2018</h4>
                <p>
                Over the three years, we explored various robotics systems such as holonomic drives, reverse double four bar lifts, and even learned C programming and programed PID controllers from scratch in a team of three.
                </p>

                <button
                  onClick={event =>
                    (window.open(
                      "https://globalnews.ca/video/3355924/sir-winston-churchill-students-head-to-vex-robotics-world-championship/")
                      )  }
                  type="button"
                  className="btn"
                >
                  Read More
                </button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem">
              <img
                className="d-block w-100"
                src={pilotImg}
                alt="pilot"

              />
              <Carousel.Caption className="carouselCaption">
                <h3>Pilot</h3>
                <h4>"Oh! I slipped the surly bonds of earth and danced the skies on bright yellow wings."</h4>
                <p>
                   I finally touched the sky when I earned my glider pilot license in 2016 and private pilot license in 2017. This was an breathtaking experiences that inspires me to build robotics airplanes to this date.
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
