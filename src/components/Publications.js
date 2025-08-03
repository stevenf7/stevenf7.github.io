import React from "react"
import Fade from "react-reveal/Fade"
import "../styles/publications.scss"

// Import publication images/videos
import hriLabGif from "../images/publications/hri_lab.gif"
import urLousdVideo from "../images/publications/ur_lousd.mp4"
import h1SilVideo from "../images/publications/h1_sil.mp4"

const Publications = () => {
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
          <h1>Publications</h1>
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
                    {publication.imageSrc.endsWith('.mp4') && (
                      <video
                        className="background-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={publication.imageSrc} type="video/mp4" />
                      </video>
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
                      View Publication
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