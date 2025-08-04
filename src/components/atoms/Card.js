import React from "react";

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.webm', '.mp4', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const Card = ({id, heading, paragraph, imgUrl, projectLink, setOpenModal, setId, type = "project"}) => {
  const isVideo = isVideoFile(imgUrl);
  
  return (
   
    <div className="card">
      {isVideo ? (
        // Video background
        <div className="background-video">
          <video
            className="background-video-element"
            src={imgUrl}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="video-overlay" />
        </div>
      ) : (
        // Image background
        <div 
          className="background-image"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" + imgUrl + ")"
          }}
        />
      )}
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text" dangerouslySetInnerHTML={{ __html: paragraph }}></p>

        <button 
          onClick= {()=>{
            setOpenModal(true);
            setId(id);
          }}
          type="button" className="btn"> Explore
        </button>
        
      </div>
      
    </div>
    
  )
}

export default Card
