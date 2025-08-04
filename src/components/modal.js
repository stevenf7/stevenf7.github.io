import React, { useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "./../data"
import "./../css/modal.scss"

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.webm', '.mp4', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

export default function Modal({ closeModal, id, type = "project" }) {
  const { language } = useLanguage();
  // Determine which data to use based on the type
  const content = type === "project" ? data.projects[id] : data.education[id];
  
  useEffect(() => {
    // Save the current scroll position
    const scrollY = window.scrollY;
    
    // Disable scrolling when modal is mounted and keep the visual position
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');
    
    // Clean up function to re-enable scrolling when modal is unmounted
    return () => {
      // Remove the modal-open class
      document.body.classList.remove('modal-open');
      
      // Reset the body position
      document.body.style.top = '';
      
      // Restore the scroll position
      window.scrollTo(0, scrollY);
    };
  }, []);
  
  return (
    <>
      <div 
        className="modalBackground" 
        onClick={() => closeModal(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            closeModal(false);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      ></div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
          <h3>&#215;</h3>
          </button>
        </div>
        <div className="title">
          <h1>{type === "project" ? getText(content.position, language) : getText(content.title, language)}</h1>
          <h2>{type === "project" ? content.date : ""}</h2>
        </div>
        <div className="body">
        {isVideoFile(content.workImg || content.imageSrc) ? (
          <video 
            src={content.workImg || content.imageSrc} 
            className="img-fluid" 
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img src={content.workImg || content.imageSrc} alt="" className="img-fluid" />
        )}

        <ul>
        {content.description.map((desc, index) => (
                <li key={index}>{getText(desc, language)}</li>
              ))}
          
          </ul>
        </div>
        {/* <div className="footer">
          <button onClick={() => closeModal(false)}>close</button>
        </div> */}
      </div>
    </>
  )
}
