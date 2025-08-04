import React from "react"
import Card from "./atoms/Card"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import {useState} from "react"
import Modal from "./modal"

const Education = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className="section" id="education">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.education, language)}</h1>
        </Fade>
        <div className="education-wrapper">
          <div className="grid">
            <Fade>
              {data.education.map((school, index) => (
                <Card
                  key={index}
                  id={index}
                  heading={getText(school.title, language)}
                  paragraph={getText(school.para, language)}
                  imgUrl={school.imageSrc}
                  projectLink={school.url}
                  setOpenModal={setOpenModal}
                  setId={setId}
                  type="education"
                />
              ))}
            </Fade>
          </div>
          {openModal && <Modal closeModal={setOpenModal} id={id} type="education" />}
        </div>
      </div>
    </div>
  )
}

export default Education 