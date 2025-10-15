import React, { useState, useEffect, useRef } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"

const Skills = () => {
  const { language } = useLanguage();
  const [skills, setSkills] = useState([...data.skills]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // Check if device is desktop (> 768px) - only load drag functionality on desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop(desktop);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Load saved order from localStorage
  useEffect(() => {
    if (isDesktop && typeof window !== 'undefined') {
      const savedOrder = localStorage.getItem('skillsOrder');
      if (savedOrder) {
        try {
          const parsedOrder = JSON.parse(savedOrder);
          setSkills(parsedOrder);
        } catch (e) {
          console.error('Failed to parse saved skills order:', e);
        }
      }
    }
  }, [isDesktop]);

  // Drag and drop handlers (only active on desktop)
  const handleDragStart = (index) => {
    if (!isDesktop) return;
    dragItem.current = index;
    setDraggedIndex(index);
  };

  const handleDragEnter = (index) => {
    if (!isDesktop) return;
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (!isDesktop) return;
    
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const newSkills = [...skills];
      const draggedItemContent = newSkills[dragItem.current];
      
      // Remove dragged item
      newSkills.splice(dragItem.current, 1);
      
      // Insert at new position
      newSkills.splice(dragOverItem.current, 0, draggedItemContent);
      
      setSkills(newSkills);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('skillsOrder', JSON.stringify(newSkills));
      }
    }
    
    dragItem.current = null;
    dragOverItem.current = null;
    setDraggedIndex(null);
  };

  const handleDragOver = (e) => {
    if (!isDesktop) return;
    e.preventDefault();
  };

  return (
    <div className="section" id="skills">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.skills, language)}</h1>
        </Fade>
        <div className="skills-wrapper">
          <div className={`grid ${isDesktop ? 'draggable' : ''}`}>
            <Fade bottom distance="20px">
              {skills.map((skill, index) => (
                <div
                  key={`${skill.title}-${index}`}
                  className={`skill-item ${draggedIndex === index ? 'dragging' : ''} ${isDesktop ? 'desktop-draggable' : ''}`}
                  draggable={isDesktop}
                  onDragStart={() => handleDragStart(index)}
                  onDragEnter={() => handleDragEnter(index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                >
                  <img src={skill.img} alt={skill.title} loading="lazy" />
                  <h3>{skill.title}</h3>
                  <p>{skill.para}</p>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
