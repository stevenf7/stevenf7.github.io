import React, { useState, useEffect, useRef } from "react"
import Fade from "./animations/Fade"
import { Carousel } from "react-bootstrap"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/NVIDIA.scss"

// Import NVIDIA images from the nvidia folder
import gr1ImitationVideo from "./../images/nvidia/gr1_imitation.mp4"
import h1FlipGif from "./../images/nvidia/h1_Flip.mp4"
import leatherbackVideo from "./../images/nvidia/Leatherback.mp4"
import h1TrainVideo from "./../images/nvidia/h1_Train.mp4"
import frankaMoveitVideo from "./../images/nvidia/Franka Moveit.mp4"
import frankaDrawerVideo from "./../images/nvidia/Franka Drawer.mp4"
import carterOutdoorVideo from "./../images/nvidia/Carter Outdoor.mp4"
import agilityWalkVideo from "./../images/nvidia/Agility Walk.mp4"
import gtc_lousd from "./../images/nvidia/IMG_2228.webp"
import gtc_sil from "./../images/nvidia/gtc_sil.webp"
import newton from "./../images/nvidia/newton.webp"
import claw from "./../images/nvidia/claw.mp4"
import urLousdVideo from "./../images/publications/ur_lousd.mp4"
import siggraphTalk from "./../images/nvidia/IMG_2877.webp"

const NVIDIA = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const videoRefs = useRef({});
  
  // Enhanced mobile and iOS detection
  useEffect(() => {
    const checkDevice = () => {
      try {
        const mobile = window.innerWidth <= 768;
        const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        
        setIsMobile(mobile);
        setIsIOS(ios);
        
        // Log device info for debugging
        if (ios) {
          console.log('iPhone detected - applying performance optimizations');
        }
        if (isSafari) {
          console.log('Safari detected - MP4 videos should work well');
        }
      } catch (error) {
        console.warn('Error in device detection:', error);
      }
    };
    
    try {
      checkDevice();
      window.addEventListener('resize', checkDevice);
    } catch (error) {
      console.warn('Error setting up device detection:', error);
    }
    
    return () => {
      try {
        window.removeEventListener('resize', checkDevice);
      } catch (error) {
        console.warn('Error removing resize listener:', error);
      }
    };
  }, []);
  
  // Media mapping for carousel items
  const mediaMap = {
    gr1ImitationVideo,
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
    newton,
    siggraphTalk
  };

  // Get carousel items from data with translated content
  const carouselItems = data.nvidiaCarouselItems.map(item => ({
    ...item,
    media: mediaMap[item.media],
    title: getText(item.title, language),
    description: getText(item.description, language)
  }));

  // Handle carousel selection with video preloading
  const handleCarouselSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
    
    // Handle video playback
    const currentVideo = videoRefs.current[selectedIndex];
    if (currentVideo && currentVideo.tagName === 'VIDEO') {
      try {
        currentVideo.play().catch(error => {
          console.warn(`Could not autoplay video ${selectedIndex}:`, error);
        });
      } catch (error) {
        console.warn(`Error playing video ${selectedIndex}:`, error);
      }
    }
    
    // Pause other videos
    Object.keys(videoRefs.current).forEach(index => {
      const video = videoRefs.current[index];
      if (video && video.tagName === 'VIDEO' && parseInt(index) !== selectedIndex) {
        try {
          video.pause();
        } catch (error) {
          console.warn(`Error pausing video ${index}:`, error);
        }
      }
    });
  };

  // Handle video load events
  const handleVideoLoad = (index) => {
    if (isIOS) {
      console.log(`iPhone: Video ${index} loaded successfully`);
    }
  };

  return (
    <div className="section" id="nvidia">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.nvidia, language)}</h1>
          <h3>{getText(data.nvidiaTime, language)}</h3>
        </Fade>
        
        <div className="nvidia-section">
          <div className="carousel-container">
            <Carousel 
              className="nvidia-carousel"
              activeIndex={activeIndex}
              onSelect={handleCarouselSelect}
              interval={isIOS ? 5000 : 3000} // Back to 5 seconds for iPhone
              touch={true}
              indicators={!isMobile} // Hide indicators on mobile
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
                      ref={el => {
                        try {
                          videoRefs.current[index] = el;
                        } catch (error) {
                          console.warn(`Error setting video ref for index ${index}:`, error);
                        }
                      }}
                      className="d-block w-100"
                      src={item.media}
                      autoPlay={index === 0}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      loading="lazy"
                      onLoadedData={() => {
                        try {
                          handleVideoLoad(index);
                        } catch (error) {
                          console.warn(`Error in handleVideoLoad for index ${index}:`, error);
                        }
                      }}
                      onPlay={() => {
                        try {
                          console.log(`Video ${index} started playing`);
                        } catch (error) {
                          console.warn(`Error in video play handler for index ${index}:`, error);
                        }
                      }}
                      onPause={() => {
                        try {
                          console.log(`Video ${index} paused`);
                        } catch (error) {
                          console.warn(`Error in video pause handler for index ${index}:`, error);
                        }
                      }}
                      onError={(e) => {
                        try {
                          console.error(`Video ${index} failed to load:`, e);
                        } catch (error) {
                          console.warn(`Error in video error handler for index ${index}:`, error);
                        }
                      }}
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
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
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
