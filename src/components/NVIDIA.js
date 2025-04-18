import React, { useState, useRef } from "react"
import Fade from "react-reveal/Fade"
import Carousel from "react-bootstrap/Carousel"
import data from "../data"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/NVIDIA.scss"

// Import NVIDIA images from the nvidia folder
import h1Gif from "./../images/nvidia/h1.mp4"
import h1FlipGif from "./../images/nvidia/h1_Flip.mp4"
import leatherbackVideo from "./../images/nvidia/Leatherback.mp4"
import h1TrainVideo from "./../images/nvidia/h1_Train.mp4"
import frankaMoveitVideo from "./../images/nvidia/Franka Moveit.mp4"
import frankaDrawerVideo from "./../images/nvidia/Franka Drawer.mp4"
import carterOutdoorVideo from "./../images/nvidia/Carter Outdoor.mp4"
import agilityWalkVideo from "./../images/nvidia/Agility Walk.mp4"
import gtc_lousd from "./../images/nvidia/IMG_2228.jpg"
import gtc_sil from "./../images/nvidia/gtc_sil.jpg"
import newton from "./../images/nvidia/newton.jpg"

const NVIDIA = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]); // Create a ref to store video elements
  
  // Create an array of carousel items with descriptions
  const carouselItems = [
    {
      media: h1FlipGif,
      type: 'video',
      title: "H1 humanoid robot tries to backflip",
      description: "H1 attempted a backflip, but it didn't go as planned."
    },
    {
      media: h1TrainVideo,
      type: 'video',
      title: "Training H1 humanoids to walk",
      description: "H1 robot during training phase."
    },
    {
      media: h1Gif,
      type: 'video',
      title: "H1 humanoid robot walking in Isaac Sim",
      description: "H1 is able to walk around using a reinforcement learning policy trained from Isaac Lab."
    },
    {
      media: frankaMoveitVideo,
      type: 'video',
      title: "Franka robot simulation",
      description: "Franka robot demonstrating MoveIt integration."
    },
    {
      media: frankaDrawerVideo,
      type: 'video',
      title: "Reinforcement learning based drawer manipulation",
      description: "Franka robot performing drawer manipulation task."
    },
    {
      media: leatherbackVideo,
      type: 'video',
      title: "Car simulation",
      description: "RC car simulation"
    },
    {
      media: carterOutdoorVideo,
      type: 'video',
      title: "Outdoor robot simulation",
      description: "Robot outdoor simulation"
    },
    {
      media: agilityWalkVideo,
      type: 'video',
      title: "Agility humanoid robot walking",
      description: "Agility humanoid robot demonstrating walking capabilities."
    },
    {
      media: gtc_lousd,
      type: 'image',
      title: "Robot Composition talk at GTC 2025",
      description: "Giving a lecture at GTC 2025 on USD composition."
    },
    {
      media: gtc_sil,
      type: 'image',
      title: "ROS training lab at GTC 2025",
      description: "Giving a lecture at GTC 2025 on ROS integration with Isaac Sim."
    },
    {
      media: newton,
      type: 'image',
      title: "Presenting the next generation simulator Newton at GTC 2025",
      description: "Presenting Newton, next generation robotics simulator at our both at NVIDIA GTC 2025."
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
          <div className="carousel-container">
            <Carousel 
              className="nvidia-carousel"
              activeIndex={activeIndex}
              onSelect={(index) => {
                setActiveIndex(index);
                // Reset the video playback
                if (videoRefs.current[index]) {
                  videoRefs.current[index].currentTime = 0; // Reset to the beginning
                  videoRefs.current[index].play(); // Play the video
                }
              }}
              interval={3000} // Auto-slide every 3 seconds
            >
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  {item.type === 'video' ? (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)} // Assign ref to video element
                      className="d-block w-100"
                      src={item.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      className="d-block w-100"
                      src={item.media}
                      alt={item.title}
                      fluid
                    />
                  )}
                  <Carousel.Caption className="carousel-caption">
                    <h3>{item.title}</h3>
                    {/* <p>{item.description}</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="content">
            {data.nvidiaExperience.map((exp, index) => (
              <Fade bottom distance="20px" key={index}>
                <p>{exp}</p>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NVIDIA
