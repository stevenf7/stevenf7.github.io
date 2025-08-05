import React, { useState, useEffect } from "react"
import Fade from "./animations/Fade"
import Carousel from "react-bootstrap/Carousel"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/projects.scss"

import airplaneImage from "../images/ProjectPhotos/airplane.webp"
import watoImage from "../images/ProjectPhotos/Wato.webp"
import hisecurityImage from "../images/ProjectPhotos/HiSecurity2.webp"
import pilotImg from "../images/ProjectPhotos/Pilot.webp"
import vexImg from "../images/ProjectPhotos/VEX.webp"
import wearableImg from "../images/ProjectPhotos/wearableHacks.webp"
import webappImg from "../images/ProjectPhotos/WebappProjects.webp"
import mte380Img from "../images/ProjectPhotos/mte380.webp"
import capstoneVideo from "../images/ProjectPhotos/capstone.webm"

const Project = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Media mapping for carousel items
  const mediaMap = {
    airplaneImage,
    watoImage,
    capstoneVideo,
    webappImg,
    wearableImg,
    mte380Img,
    hisecurityImage,
    vexImg,
    pilotImg
  };

  // Get carousel items from data with translated content
  const carouselItems = data.projectsCarouselItems.map(item => ({
    ...item,
    media: mediaMap[item.media],
    title: getText(item.title, language),
    subtitle: getText(item.subtitle, language),
    description: getText(item.description, language),
    buttons: item.buttons.map(btn => ({
      ...btn,
      text: getText(btn.text, language)
    }))
  }));

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    try {
      window.addEventListener('resize', checkMobile);
    } catch (error) {
      console.warn('Error adding resize listener:', error);
    }
    
    return () => {
      try {
        window.removeEventListener('resize', checkMobile);
      } catch (error) {
        console.warn('Error removing resize listener:', error);
      }
    };
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
          <h1>{getText(data.sections.projects, language)}</h1>
        </Fade>
        <Fade bottom distance="20px">
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
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  {item.type === 'video' ? (
                    <div className="video-container">
                      <video
                        className="d-block"
                        src={item.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  ) : (
                    <img
                      className="d-block w-100"
                      src={item.media}
                      alt={item.title}
                    />
                  )}
                  <Carousel.Caption className="carouselCaption">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                    {item.buttons.map((button, buttonIndex) => (
                      <button
                        key={buttonIndex}
                        onClick={() => window.open(button.url)}
                        type="button"
                        className="btn"
                      >
                        {button.text}
                      </button>
                    ))}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Project
