import React, { useState } from "react";
import Card from "./atoms/Card";
import Fade from "./animations/Fade";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";
import Modal from "./modal";

const Work = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(0);

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
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="container">
        <Fade bottom distance="20px">
          <h2 id="work-heading">{getText(data.sections.internships, language)}</h2>
        </Fade>
        <div className="work-wrapper">
          <div className="grid">
            {data.projects.map((project, index) => (
              <Fade bottom distance="20px" key={getText(project.title, "en")}>
                <Card
                  id={index}
                  heading={getText(project.title, language)}
                  subtitle={project.date ? project.date.trim() : ""}
                  paragraph={getText(project.para, language)}
                  imgUrl={project.imageSrc}
                  setOpenModal={setOpenModal}
                  setId={setId}
                />
              </Fade>
            ))}
          </div>

          {openModal && (
            <Modal
              closeModal={setOpenModal}
              id={id}
              totalItems={data.projects.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
