import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import data from "../data"
import {useState} from "react"
import Modal from "./modal"

const Education = () => {
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className="section" id="education">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>Education</h1>
          <h2>{data.educationSubHeading}</h2>
        </Fade>
        <div className="education-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {data.education.map((school, index) => (
                <Card
                  key={index}
                  id={index}
                  heading={school.title}
                  paragraph={school.para}
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