import React from "react"
import Card from "./atoms/Card"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import {useState} from "react"
import Modal from "./modal"

const Work = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);

  const [id, setId] = useState(0);
  
  // Navigation functions for modal
  const handlePrevious = () => {
    if (id > 0) {
      setId(id - 1);
    }
  };
  
  const handleNext = () => {
    if (id < data.projects.length - 1) {
      setId(id + 1);
    }
  };

  return (
    <div className="section" id="work">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.internships, language)}</h1>
        </Fade>
        <div className="work-wrapper">
          <div className="grid">
            <Fade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  id={index}
                  heading={getText(project.title, language)}
                  paragraph={getText(project.para, language)}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  setOpenModal = {setOpenModal}
                  setId = {setId}
                ></Card>
              ))}
            </Fade>
          </div>

          {openModal&&<Modal 
            closeModal={setOpenModal} 
            id={id} 
            totalItems={data.projects.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />}
    
        </div>
      </div>
    </div>
  )
}

export default Work
