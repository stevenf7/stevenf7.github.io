import React, { useState, useRef, useEffect } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import { getText } from "../data"
import "../styles/publications.scss"

// Import publication images/videos
import hriLabGif from "../images/publications/hri_lab.gif"
import destrahVideo from "../images/publications/destrah.mp4"
import urLousdVideo from "../images/publications/ur_lousd.mp4"
import h1SilVideo from "../images/publications/h1_sil.mp4"
import h1TrainVideo from "../images/nvidia/h1_Train.mp4"
import carterOutdoorVideo from "../images/nvidia/Carter Outdoor.mp4"
import clawVideo from "../images/nvidia/claw.mp4"

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const Publications = () => {
  const { language } = useLanguage();
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef([]);

  // Force video play when videos come into view (helps with iOS autoplay restrictions)
  useEffect(() => {
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            try {
              forceVideoPlay(video);
            } catch (error) {
              console.warn('Error forcing video play:', error);
            }
          }
        });
      }, {
        threshold: 0.5 // Trigger when 50% of video is visible
      });

      // Observe all video elements
      videoRefs.current.forEach(video => {
        if (video) {
          try {
            observer.observe(video);
          } catch (error) {
            console.warn('Error observing video:', error);
          }
        }
      });

      return () => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Error disconnecting observer:', error);
        }
      };
    } catch (error) {
      console.warn('Error setting up intersection observer:', error);
    }
  }, []); // Remove the mutable dependency

  const handleVideoError = (publicationId) => {
    console.warn(`Video failed to load for publication ${publicationId}`);
    setVideoErrors(prev => ({ ...prev, [publicationId]: true }));
  };

  const forceVideoPlay = (videoElement) => {
    if (videoElement) {
      videoElement.muted = true; // Ensure it's muted for autoplay
      videoElement.loop = true;  // Ensure looping is enabled
      
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay failed, attempting manual play:', error);
          // Try again after a short delay
          setTimeout(() => {
            videoElement.play().catch(e => console.log('Manual play also failed:', e));
          }, 100);
        });
      }
    }
  };

  const handleVideoEnded = (videoElement) => {
    // Fallback for devices where loop attribute might not work
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play().catch(e => console.log('Loop restart failed:', e));
    }
  };

  const canPlayVideo = (publication) => {
    // Only show fallback if there was an actual error, not for iOS WebM incompatibility
    return !videoErrors[publication.id];
  };
  
  // Publication data with actual links
  const publicationsData = [
    {
      id: 0,
      title: "Configure and Tune Robot Assets With OpenUSD and PhysX",
      subtitle: "NVIDIA GTC 2026",
      imageSrc: destrahVideo,
      projectLink: "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-dlit81697/",
      type: "NVIDIA"
    },
    {
      id: 1,
      title: "Quantifying Human Mental State in Interactive pHRI: Maintaining Balancing",
      subtitle: "IEEE Robotics and Automation Letters, 2025",
      imageSrc: hriLabGif,
      projectLink: "https://ieeexplore.ieee.org/document/10873829",
      type: "IEEE"
    },
    {
      id: 2,
      title: "Learn OpenUSD: Robotics Best Practices",
      subtitle: "ACM SIGGRAPH, 2025",
      imageSrc: urLousdVideo,
      projectLink: "https://dl.acm.org/doi/10.1145/3721251.3736528",
      type: "ACM"
    },
    {
      id: 3,
      title: "Digital Twin Robotics: Immersive Software-in-the-Loop Testing with OpenUSD, Isaac Sim, and ROS",
      subtitle: "ACM SIGGRAPH, 2025",
      imageSrc: h1SilVideo,
      projectLink: "https://dl.acm.org/doi/10.1145/3721251.3734066",
      type: "ACM"
    },
    {
      id: 4,
      title: "Isaac Lab: A GPU-Accelerated Simulation Framework for Multi-Modal Robot Learning",
      subtitle: "NVIDIA White Paper, 2025",
      imageSrc: h1TrainVideo,
      projectLink: "https://arxiv.org/abs/2511.04831",
      type: "NVIDIA"
    },
    {
      id: 5,
      title: "Software-in-the-Loop Testing for Robots With OpenUSD, Isaac Sim, and ROS I",
      subtitle: "NVIDIA GTC 2025",
      imageSrc: carterOutdoorVideo,
      projectLink: "https://www.nvidia.com/en-us/on-demand/session/gtc25-dlit71326/",
      type: "NVIDIA"
    },
    {
      id: 6,
      title: "Learn OpenUSD: Robotics Best Practices I",
      subtitle: "NVIDIA GTC 2025",
      imageSrc: clawVideo,
      projectLink: "https://www.nvidia.com/en-us/on-demand/session/gtc25-dlit71288/",
      type: "NVIDIA"
    }
  ];

  return (
    <div className="section" id="publications">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText({ en: "Publications", zh: "发表论文" }, language)}</h1>
        </Fade>
        <div className="publications-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {publicationsData.map((publication, index) => (
                <div key={index} className="publication-card">
                  <div 
                    className="background-media"
                    style={{
                      backgroundImage: publication.imageSrc.endsWith('.gif') 
                        ? `linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(240, 248, 255, 0.5) 70%, rgba(240, 248, 255, 0.9) 85%, rgba(240, 248, 255, 1.0) 100%), url(${publication.imageSrc})`
                        : 'none'
                    }}
                  >
                    {isVideoFile(publication.imageSrc) && canPlayVideo(publication) && (
                      <video
                        ref={el => {
                          try {
                            videoRefs.current[publication.id] = el;
                          } catch (error) {
                            console.warn(`Error setting video ref for publication ${publication.id}:`, error);
                          }
                        }}
                        className="background-video"
                        src={publication.imageSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        loading="lazy"
                        controls={false}
                        disablePictureInPicture
                        onError={() => {
                          try {
                            handleVideoError(publication.id);
                          } catch (error) {
                            console.warn(`Error in video error handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onLoadStart={() => {
                          try {
                            console.log(`Loading video for publication ${publication.id}`);
                          } catch (error) {
                            console.warn(`Error in video load start handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onCanPlay={(e) => {
                          try {
                            console.log(`Video can play for publication ${publication.id}`);
                            forceVideoPlay(e.target);
                          } catch (error) {
                            console.warn(`Error in video can play handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onLoadedData={(e) => {
                          try {
                            console.log(`Video loaded for publication ${publication.id}`);
                            forceVideoPlay(e.target);
                          } catch (error) {
                            console.warn(`Error in video loaded data handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onEnded={(e) => {
                          try {
                            console.log(`Video ended for publication ${publication.id}, restarting loop`);
                            handleVideoEnded(e.target);
                          } catch (error) {
                            console.warn(`Error in video ended handler for publication ${publication.id}:`, error);
                          }
                        }}
                        style={{
                          WebkitTransform: 'translateZ(0)',
                          transform: 'translateZ(0)',
                        }}
                      />
                    )}
                    {isVideoFile(publication.imageSrc) && !canPlayVideo(publication) && (
                      <div 
                        className="background-video video-fallback"
                        style={{
                          backgroundColor: '#e9ecef',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem',
                          color: '#666',
                          textAlign: 'center',
                          padding: '20px'
                        }}
                      >
                        <div>
                          🎬<br/>
                          <small>Video preview not available<br/>on this device</small>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="content">
                    <div className="publication-type" data-type={publication.type}>{publication.type}</div>
                    <h3 className="header">{publication.title}</h3>
                    <h4 className="subtitle">{publication.subtitle}</h4>
                    <button 
                      onClick={() => {
                        window.open(publication.projectLink, "_blank");
                      }}
                      type="button" 
                      className="btn"
                    > 
                      {getText({ en: "View Publication", zh: "查看论文" }, language)}
                    </button>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications