import React from "react"
import data from "./../yourdata"
import "./../css/modal.scss"

export default function Modal({ closeModal, id }) {
  return (
    <>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{data.projects[id].title}</h1>
        </div>
        <div className="body">
          <p>{data.projects[id].description}</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>close</button>
        </div>
      </div>
    </>
  )
}
