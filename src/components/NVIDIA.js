import React, { useState, useRef, useEffect } from "react"
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
  const [isInitialized, setIsInitialized] = useState(false);
  const videoRefs = useRef([]);
  const carouselRef = useRef(null);
  
  // Detect mobile device with better initialization
  useEffect(() => {
    const checkMobile = () => {
      const mobileState = window.innerWidth <= 768;
      console.log(`Mobile state detected: ${mobileState}, width: ${window.innerWidth}`);
      setIsMobile(mobileState);
    };
    
    // Detect Safari for special handling
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    // Ensure initial state is set correctly
    if (typeof window !== 'undefined') {
      checkMobile();
      // Longer delay for Safari due to stricter DOM timing
      const delay = isSafari ? 300 : 100;
      setTimeout(() => setIsInitialized(true), delay);
    }
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Safari-specific cleanup with additional safety
  useEffect(() => {
    return () => {
      // Safari-safe cleanup with double-checking
      try {
        if (videoRefs.current) {
          videoRefs.current.forEach((video, i) => {
            if (video && video.parentNode) {
              try {
                // Only manipulate if element is still in DOM
                if (video.pause && typeof video.pause === 'function') {
                  video.pause();
                }
                // Safari-specific: clear src to help with memory management
                if (video.src) {
                  video.removeAttribute('src');
                  video.load();
                }
              } catch (error) {
                // Safari might throw errors during cleanup - ignore them
              }
            }
          });
          // Clear refs array for Safari
          videoRefs.current = [];
        }
      } catch (error) {
        // Global catch for Safari-specific cleanup issues
        console.warn('Safari cleanup error:', error);
      }
    };
  }, []);

  // Performance monitoring - simplified to avoid state update loops
  const logPerformance = (action, startTime) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    // Just log to console instead of updating state to prevent loops
    console.log(`Performance: ${action} took ${duration.toFixed(2)}ms`);
    
    if (duration > 100) {
      console.warn(`Slow operation detected: ${action} took ${duration.toFixed(2)}ms`);
    }
  };
  
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

  // Handle carousel selection with minimal video handling
  const handleCarouselSelect = (index) => {
    const startTime = performance.now();
    console.log(`Carousel select triggered: ${index}, isMobile: ${isMobile}`);
    setActiveIndex(index);
    
    // Log performance safely (only to console, no state updates)
    logPerformance('carousel_select', startTime);
    
    // Only handle video operations after component is initialized
    if (!isInitialized) {
      return;
    }
    
    // Handle video loading for both mobile and desktop
    // Use longer timeout for Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const timeout = isSafari ? 200 : 100;
    
    setTimeout(() => {
      try {
        // Safely pause all other videos first
        videoRefs.current.forEach((videoRef, i) => {
          if (videoRef && videoRef.pause && i !== index) {
            try {
              videoRef.pause();
            } catch (error) {
              console.warn(`Error pausing video ${i}:`, error);
            }
          }
        });
        
        // Handle current video based on device type
        const currentVideo = videoRefs.current[index];
        if (currentVideo && currentVideo.readyState !== undefined) {
          // Check if video element is ready and still mounted
          if (currentVideo.readyState >= 1) { // HAVE_METADATA or higher
            if (isMobile) {
              // On mobile: Load the video, reset to start, and autoplay
              try {
                currentVideo.currentTime = 0;
                currentVideo.play().catch((error) => {
                  console.warn('Mobile autoplay failed:', error);
                  // Fallback: just load the video if it still exists
                  if (currentVideo && currentVideo.load) {
                    currentVideo.load();
                  }
                });
                console.log(`Mobile: Playing video ${index}`);
              } catch (error) {
                console.warn('Mobile video access error:', error);
              }
            } else {
              // On desktop: Play the video
              try {
                currentVideo.currentTime = 0;
                currentVideo.play().catch((error) => {
                  console.warn('Desktop play failed:', error);
                });
              } catch (error) {
                console.warn('Desktop video access error:', error);
              }
            }
          } else {
            // Video not ready, wait for it to load
            console.log(`Video ${index} not ready, waiting for load...`);
            const handleLoadedData = () => {
              // Safely remove event listener only if video element still exists
              if (currentVideo && currentVideo.removeEventListener) {
                currentVideo.removeEventListener('loadeddata', handleLoadedData);
              }
              // Safely access video properties only if element still exists
              if (currentVideo && currentVideo.play) {
                if (isMobile) {
                  currentVideo.currentTime = 0;
                  currentVideo.play().catch(() => console.warn('Delayed mobile play failed'));
                } else {
                  currentVideo.currentTime = 0;
                  currentVideo.play().catch(() => console.warn('Delayed desktop play failed'));
                }
              }
            };
            if (currentVideo && currentVideo.addEventListener) {
              currentVideo.addEventListener('loadeddata', handleLoadedData);
            }
            if (currentVideo && currentVideo.load) {
              currentVideo.load();
            }
          }
        }
      } catch (error) {
        // Silently handle errors to not interfere with carousel
        console.warn('Video handling error:', error);
      }
    }, timeout);
  };

  // Handle video loading errors - simplified to avoid state update loops
  const handleVideoError = (index) => {
    console.warn(`Failed to load video at index ${index}`);
    // Remove setPerformanceData to prevent infinite loops
  };

  // Handle video load success - simplified to avoid state update loops
  const handleVideoLoad = (index) => {
    console.log(`Video loaded successfully at index ${index}`);
    // Remove setPerformanceData to prevent infinite loops
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
                ref={carouselRef}
                className="nvidia-carousel"
                activeIndex={activeIndex}
                onSelect={handleCarouselSelect}
                interval={3000} // 2 second auto-advance on both desktop and mobile
                touch={true} // Enable touch controls for mobile
                indicators={true} // Show indicators for navigation
                controls={true} // Show controls for navigation
                slide={true} // Ensure slide transitions work
                wrap={true} // Allow wrapping from last to first
                keyboard={false} // Disable keyboard navigation to avoid conflicts
                variant="dark"
              >
                {carouselItems.map((item, index) => (
                  <Carousel.Item key={index}>
                    {item.type === 'video' ? (
                      <video
                        ref={(el) => {
                          // Safari-safe video ref assignment
                          try {
                            if (videoRefs.current && el !== null) {
                              // For Safari, ensure element is properly attached before storing ref
                              if (el.parentNode) {
                                videoRefs.current[index] = el;
                              } else {
                                // Retry after a short delay for Safari
                                setTimeout(() => {
                                  if (el && el.parentNode && videoRefs.current) {
                                    videoRefs.current[index] = el;
                                  }
                                }, 50);
                              }
                            } else if (el === null && videoRefs.current) {
                              // Safely clear ref when element is unmounted
                              videoRefs.current[index] = null;
                            }
                          } catch (error) {
                            console.warn(`Error setting video ref for index ${index}:`, error);
                          }
                        }}
                        className="d-block w-100"
                        src={item.media}
                        autoPlay={isInitialized && index === activeIndex} // Only autoplay after initialization
                        muted
                        loop
                        playsInline
                        preload={isMobile ? "metadata" : "metadata"} // Safari-safe: use metadata only to prevent issues
                        onError={() => handleVideoError(index)}
                        onLoadedData={() => handleVideoLoad(index)}
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
