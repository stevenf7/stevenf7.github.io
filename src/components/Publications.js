import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import { getText } from "../data"
import "../styles/publications.scss"

// Import publication images/videos
import hriLabGif from "../images/publications/hri_lab.gif"
import urLousdVideo from "../images/publications/ur_lousd.webm"
import h1SilVideo from "../images/publications/h1_sil.webm"

const Publications = () => {
  const { language } = useLanguage();
  const [videoErrors, setVideoErrors] = useState({});

  const handleVideoError = (publicationId) => {
    console.warn(`Video failed to load for publication ${publicationId}`);
    setVideoErrors(prev => ({ ...prev, [publicationId]: true }));
  };
  
  // Publication data with actual links
  const publicationsData = [
    {
      id: 0,
      title: "Quantifying Human Mental State in Interactive pHRI: Maintaining Balancing",
      subtitle: "IEEE Robotics and Automation Letters, 2025",
      imageSrc: hriLabGif,
      projectLink: "https://ieeexplore.ieee.org/document/10873829",
      type: "IEEE"
    },
    {
      id: 1,
      title: "Learn OpenUSD: Robotics Best Practices",
      subtitle: "ACM SIGGRAPH, 2025",
      imageSrc: urLousdVideo,
      projectLink: "https://dl.acm.org/doi/10.1145/3721251.3736528",
      type: "ACM"
    },
    {
      id: 2,
      title: "Digital Twin Robotics: Immersive Software-in-the-Loop Testing with OpenUSD, Isaac Sim, and ROS",
      subtitle: "ACM SIGGRAPH, 2025",
      imageSrc: h1SilVideo,
      projectLink: "https://dl.acm.org/doi/10.1145/3721251.3734066",
      type: "ACM"
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
                        ? `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.15)), url(${publication.imageSrc})`
                        : 'none'
                    }}
                  >
                    {publication.imageSrc.endsWith('.webm') && !videoErrors[publication.id] && (
                      <video
                        className="background-video"
                        src={publication.imageSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        webkit-playsinline="true"
                        preload="auto"
                        controls={false}
                        disablePictureInPicture
                        onError={() => handleVideoError(publication.id)}
                        onLoadStart={() => console.log(`Loading video for publication ${publication.id}`)}
                        style={{
                          WebkitTransform: 'translateZ(0)',
                          transform: 'translateZ(0)',
                        }}
                      />
                    )}
                    {publication.imageSrc.endsWith('.webm') && videoErrors[publication.id] && (
                      <div 
                        className="background-video video-fallback"
                        data-failed="true"
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
                          <small>Video preview<br/>not available on<br/>this device</small>
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