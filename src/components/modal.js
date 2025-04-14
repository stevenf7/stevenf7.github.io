import React from "react"
import data from "./../data"
import "./../css/modal.scss"

export default function Modal({ closeModal, id }) {
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
          <h1>{data.projects[id].position}</h1>
          <h2>{data.projects[id].date}</h2>
        </div>
        <div className="body">
        <img src={data.projects[id].workImg} alt="" className="img-fluid" />

        <ul>
        {data.projects[id].description.map((text, index) => (
                <li>{text}</li>
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
