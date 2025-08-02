import React, { useState, useRef, useEffect } from "react"
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
import claw from "./../images/nvidia/claw.mp4"

const NVIDIA = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef([]);
  const carouselRef = useRef(null);
  
  // Detect mobile device with better initialization
  useEffect(() => {
    const checkMobile = () => {
      const mobileState = window.innerWidth <= 768;
      console.log(`Mobile state detected: ${mobileState}, width: ${window.innerWidth}`);
      setIsMobile(mobileState);
    };
    
    // Ensure initial state is set correctly
    if (typeof window !== 'undefined') {
      checkMobile();
    }
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
      media: claw,
      type: 'video',
      title: "High fidelity claw simulation",
      description: "Claw robot grasping task."
    },
    {
      media: leatherbackVideo,
      type: 'video',
      title: "Ackermann steering simulation",
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
      title: "Agility humanoid robot locomotion policy",
      description: "Agility humanoid robot demonstrating walking capabilities."
    },
    {
      media: gtc_lousd,
      type: 'image',
      title: "Giving a presentation on building robot digital twins at GTC 2025",
      description: "Giving a lecture at GTC 2025 on USD composition."
    },
    {
      media: gtc_sil,
      type: 'image',
      title: "ROS software-in-the-loop simulation lab at GTC 2025",
      description: "Giving a lecture at GTC 2025 on ROS integration with Isaac Sim."
    },
    {
      media: newton,
      type: 'image',
      title: "Presenting the next generation simulator Newton at GTC 2025",
      description: "Presenting Newton, next generation robotics simulator at our both at NVIDIA GTC 2025."
    }
  ];

  // Handle carousel selection with minimal video handling
  const handleCarouselSelect = (index) => {
    const startTime = performance.now();
    console.log(`Carousel select triggered: ${index}, isMobile: ${isMobile}`);
    setActiveIndex(index);
    
    // Log performance safely (only to console, no state updates)
    logPerformance('carousel_select', startTime);
    
    // Handle video loading for both mobile and desktop
    setTimeout(() => {
      try {
        // Pause all other videos first
        videoRefs.current.forEach((videoRef, i) => {
          if (videoRef && i !== index) {
            videoRef.pause();
          }
        });
        
        // Handle current video based on device type
        const currentVideo = videoRefs.current[index];
        if (currentVideo) {
          // Check if video element is ready
          if (currentVideo.readyState >= 1) { // HAVE_METADATA or higher
            if (isMobile) {
              // On mobile: Load the video, reset to start, and autoplay
              currentVideo.currentTime = 0;
              currentVideo.play().catch((error) => {
                console.warn('Mobile autoplay failed:', error);
                // Fallback: just load the video
                currentVideo.load();
              });
              console.log(`Mobile: Playing video ${index}`);
            } else {
              // On desktop: Play the video
              currentVideo.currentTime = 0;
              currentVideo.play().catch((error) => {
                console.warn('Desktop play failed:', error);
              });
            }
          } else {
            // Video not ready, wait for it to load
            console.log(`Video ${index} not ready, waiting for load...`);
            const handleLoadedData = () => {
              currentVideo.removeEventListener('loadeddata', handleLoadedData);
              if (isMobile) {
                currentVideo.currentTime = 0;
                currentVideo.play().catch(() => console.warn('Delayed mobile play failed'));
              } else {
                currentVideo.currentTime = 0;
                currentVideo.play().catch(() => console.warn('Delayed desktop play failed'));
              }
            };
            currentVideo.addEventListener('loadeddata', handleLoadedData);
            currentVideo.load();
          }
        }
      } catch (error) {
        // Silently handle errors to not interfere with carousel
        console.warn('Video handling error:', error);
      }
    }, 100);
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
          <h1>NVIDIA</h1>
          <h3>{data.nvidiaTime}</h3>
        </Fade>
        
        <div className="nvidia-section">
          <div className="carousel-container">
            <Carousel 
              ref={carouselRef}
              className="nvidia-carousel"
              activeIndex={activeIndex}
              onSelect={handleCarouselSelect}
              interval={2000} // 2 second auto-advance on both desktop and mobile
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
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="d-block w-100"
                      src={item.media}
                      autoPlay={index === activeIndex} // Autoplay current active video on both mobile and desktop
                      muted
                      loop
                      playsInline
                      preload={isMobile ? "auto" : "metadata"} // Load full video on mobile, metadata on desktop
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
