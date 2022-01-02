import React from "react";



const Card = ({id, heading, paragraph, imgUrl, projectLink, setOpenModal, setId}) => {
  return (
   
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>

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
