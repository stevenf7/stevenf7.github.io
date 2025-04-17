import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import Carousel from "react-bootstrap/Carousel"
import data from "../data"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/NVIDIA.scss"

// Import NVIDIA images from the nvidia folder
import h1Gif from "./../images/nvidia/h1.gif"
import h1FlipGif from "./../images/nvidia/h1_flip.gif"
// import img2309 from "./../images/nvidia/IMG_2309.jpg"
import gtc_lousd from "./../images/nvidia/IMG_2228.jpg"
import img1667 from "./../images/nvidia/IMG_1667.jpg"
import isaacSim from "./../images/nvidia/IsaacSim.jpg"
import gtc_sil from "./../images/nvidia/gtc_sil.jpg"
import newton from "./../images/nvidia/newton.jpg"

const NVIDIA = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Create an array of carousel items with descriptions
  const carouselItems = [
    {
      image: h1FlipGif,
      title: "H1 Backflip",
      description: "H1 attempted a backflip, but it didn't go as planned."
    },
    {
      image: h1Gif,
      title: "H1 Locomotion Policy",
      description: "H1 is able to walk around using a reinforcement learning policy trained from Isaac Lab."
    },
    {
      image: gtc_lousd,
      title: "Robot Composition talk at GTC 2025",
      description: "Giving a lecture at GTC 2025 on USD composition."
    },
    {
      image: gtc_sil,
      title: "ROS training lab at GTC 2025",
      description: "Giving a lecture at GTC 2025 on ROS integration with Isaac Sim."
    },
    // {
    //   image: img2309,
    //   title: "GTC connect with expert, Robotics",
    //   description: "Chatting with the robotics experts on topics from plants to rocket simulation using Isaac Sim"
    // },
    {
      image: img1667,
      title: "GTC connect with expert, Digital Twins",
      description: "Chatting with the digital twins experts simulating a whole AI factory using Omniverse"
    },
    {
      image: newton,
      title: "Presenting the Newton Simulator at GTC 2025",
      description: "Presenting Newton, next generation robotics simulator at our both at NVIDIA GTC 2025."
    },
    {
      image: isaacSim,
      title: "A1 quadruped locomotion simulation",
      description: "Simulating A1 quadruped robot in Isaac Sim."
    }
  ];

  return (
    <div className="section" id="nvidia">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>NVIDIA</h1>
          <h3>{data.nvidiaTime}</h3>
        </Fade>
        <div className="nvidia-section">
          <div className="content">
            {data.nvidiaExperience.map((exp, index) => (
              <Fade bottom distance="20px" key={index}>
                <p>{exp}</p>
              </Fade>
            ))}
          </div>
          <div className="carousel-container">
            <Carousel 
              className="nvidia-carousel"
              activeIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}
              interval={3000} // Auto-slide every 3 seconds
            >
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.title}
                    fluid
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>{item.title}</h3>
                    {/* <p>{item.description}</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NVIDIA
