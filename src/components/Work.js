import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import {useState} from "react"
import Modal from "./modal"

const Work = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);

  const [id, setId] = useState(0);

  return (
    <div className="section" id="work">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.internships, language)}</h1>
        </Fade>
        <div className="work-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  id={index}
                  heading={project.title}
                  paragraph={getText(project.para, language)}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  setOpenModal = {setOpenModal}
                  setId = {setId}
                ></Card>
              ))}
            </Fade>
          </div>

          {openModal&&<Modal closeModal={setOpenModal} id={id} />}
    
        </div>
      </div>
    </div>
  )
}

export default Work
