import React, { useEffect } from "react"
import data from "./../data"
import "./../css/modal.scss"

export default function Modal({ closeModal, id, type = "project" }) {
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
          <h1>{type === "project" ? content.position : content.title}</h1>
          <h2>{type === "project" ? content.date : ""}</h2>
        </div>
        <div className="body">
        <img src={content.workImg || content.imageSrc} alt="" className="img-fluid" />

        <ul>
        {content.description.map((text, index) => (
                <li key={index}>{text}</li>
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
