import React, { useEffect, useCallback } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "./../data"
import "./../css/modal.scss"

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.webm', '.mp4', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

export default function Modal({ closeModal, id, type = "project", totalItems = 0, onPrevious, onNext }) {
  const { language } = useLanguage();
  // Determine which data to use based on the type
  const content = type === "project" ? data.projects[id] : data.education[id];
  
  // Navigation handlers with useCallback to prevent re-renders
  const handlePrevious = useCallback(() => {
    if (onPrevious && id > 0) {
      onPrevious();
    }
  }, [onPrevious, id]);
  
  const handleNext = useCallback(() => {
    if (onNext && id < totalItems - 1) {
      onNext();
    }
  }, [onNext, id, totalItems]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeModal(false);
      }
    };
    
    try {
      document.addEventListener('keydown', handleKeyDown);
    } catch (error) {
      console.warn('Error adding keydown listener:', error);
    }
    
    return () => {
      // Safely remove event listener
      try {
        document.removeEventListener('keydown', handleKeyDown);
      } catch (error) {
        // Suppress any DOM manipulation errors
        console.warn('Error removing keydown listener:', error);
      }
    };
  }, [id, totalItems, handlePrevious, handleNext, closeModal]);
  
  useEffect(() => {
    // Simple approach: just disable scrolling without positioning tricks
    try {
      document.body.classList.add('modal-open');
    } catch (error) {
      // Suppress any DOM manipulation errors
      console.warn('Modal body class addition failed:', error);
    }
    
    // Clean up function to re-enable scrolling when modal is unmounted
    return () => {
      try {
        document.body.classList.remove('modal-open');
      } catch (error) {
        // Suppress any DOM manipulation errors
        console.warn('Modal body class removal failed:', error);
      }
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
        
        {/* Navigation arrows - desktop only */}
        {totalItems > 1 && (
          <>
            {/* Previous arrow */}
            {id > 0 && (
              <button 
                className="modal-nav-btn modal-prev"
                onClick={handlePrevious}
                aria-label="Previous item"
              >
                <span>&#8249;</span>
              </button>
            )}
            
            {/* Next arrow */}
            {id < totalItems - 1 && (
              <button 
                className="modal-nav-btn modal-next"
                onClick={handleNext}
                aria-label="Next item"
              >
                <span>&#8250;</span>
              </button>
            )}
          </>
        )}
        <div className="title">
          <h1>{type === "project" ? getText(content.position, language) : getText(content.title, language)}</h1>
          <h2>{type === "project" ? content.date : ""}</h2>
        </div>
        <div className="body">
        {isVideoFile(content.workImg || content.imageSrc) ? (
          <video 
            src={content.workImg || content.imageSrc} 
            className="img-fluid modal-media" 
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
          />
        ) : (
          <img src={content.workImg || content.imageSrc} alt="" className="img-fluid modal-media" />
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
