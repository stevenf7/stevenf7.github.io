import React, { useState } from "react";
import Card from "./atoms/Card";
import Fade from "./animations/Fade";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";
import Modal from "./modal";

const Education = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(0);

  const handlePrevious = () => {
    if (id > 0) {
      setId(id - 1);
    }
  };

  const handleNext = () => {
    if (id < data.education.length - 1) {
      setId(id + 1);
    }
  };

  return (
    <section
      className="section"
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <Fade bottom distance="20px">
          <h2 id="education-heading">
            {getText(data.sections.education, language)}
          </h2>
        </Fade>
        <div className="education-wrapper">
          <div className="grid">
            {data.education.map((school, index) => (
              <Fade bottom distance="20px" key={getText(school.title, "en")}>
                <Card
                  id={index}
                  heading={getText(school.title, language)}
                  paragraph={getText(school.para, language)}
                  imgUrl={school.imageSrc}
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
              type="education"
              totalItems={data.education.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
