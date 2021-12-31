import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"
import {useState} from "react"
import Modal from "./modal"

const Work = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1 >Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  setOpenModal = {setOpenModal}
                ></Card>
              ))}
            </Fade>
          </div>

          {openModal&&<Modal closeModal={setOpenModal} />}
    
        </div>
      </div>
    </div>
  )
}

export default Work
