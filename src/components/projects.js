import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import Carousel from "react-bootstrap/Carousel"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
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
          <h1>{getText(data.sections.projects, language)}</h1>
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
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index} className="CarouselItem">
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
      </div>
    </div>
  )
}

export default Project
