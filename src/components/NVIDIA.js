import React, { useState, useEffect } from "react"
import Fade from "./animations/Fade"
import Carousel from "react-bootstrap/Carousel"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/NVIDIA.scss"

// Import NVIDIA images from the nvidia folder
import h1FlipGif from "./../images/nvidia/h1_Flip.webm"
import leatherbackVideo from "./../images/nvidia/Leatherback.webm"
import h1TrainVideo from "./../images/nvidia/h1_Train.webm"
import frankaMoveitVideo from "./../images/nvidia/Franka Moveit.webm"
import frankaDrawerVideo from "./../images/nvidia/Franka Drawer.webm"
import carterOutdoorVideo from "./../images/nvidia/Carter Outdoor.webm"
import agilityWalkVideo from "./../images/nvidia/Agility Walk.webm"
import gtc_lousd from "./../images/nvidia/IMG_2228.webp"
import gtc_sil from "./../images/nvidia/gtc_sil.webp"
import newton from "./../images/nvidia/newton.webp"
import claw from "./../images/nvidia/claw.webm"
import urLousdVideo from "./../images/publications/ur_lousd.webm"

const NVIDIA = () => {
  const { language } = useLanguage();
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
  
  // Media mapping for carousel items
  const mediaMap = {
    h1FlipGif,
    h1TrainVideo,
    urLousdVideo,
    frankaMoveitVideo,
    frankaDrawerVideo,
    claw,
    leatherbackVideo,
    carterOutdoorVideo,
    agilityWalkVideo,
    gtc_lousd,
    gtc_sil,
    newton
  };

  // Get carousel items from data with translated content
  const carouselItems = data.nvidiaCarouselItems.map(item => ({
    ...item,
    media: mediaMap[item.media],
    title: getText(item.title, language),
    description: getText(item.description, language)
  }));

  // Handle carousel selection
  const handleCarouselSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="section" id="nvidia">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.nvidia, language)}</h1>
          <h3>{getText(data.nvidiaTime, language)}</h3>
        </Fade>
        
        <div className="nvidia-section">
          <Fade bottom distance="20px">
            <div className="carousel-container">
              <Carousel 
                className="nvidia-carousel"
                activeIndex={activeIndex}
                onSelect={handleCarouselSelect}
                interval={3000}
                touch={true}
                indicators={true}
                controls={true}
                slide={true}
                wrap={true}
                keyboard={false}
                variant="dark"
              >
                {carouselItems.map((item, index) => (
                  <Carousel.Item key={index}>
                    {item.type === 'video' ? (
                      <video
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
                        loading="lazy"
                      />
                    )}
                    <Carousel.Caption className={`carousel-caption ${isMobile ? 'mobile-caption' : ''}`}>
                      <h3>{item.title}</h3>
                      {!isMobile && <p>{item.description}</p>}
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Fade>
          <div className="content">
            {data.nvidiaExperience.map((exp, index) => (
              <Fade bottom distance="20px" key={index}>
                <p>{getText(exp, language)}</p>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NVIDIA
