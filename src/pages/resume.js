import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Fade from "../components/animations/Fade"
import "../css/resume.scss"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"

// Component that uses the language context - must be inside Layout
const ResumeContent = () => {
  const { language } = useLanguage();
  
  // Resume PDF URLs - can be configured for different languages
  const resumeUrls = {
    en: "https://drive.google.com/file/d/1fPQOUJndzVjnpf468iD_SXImoHbwJZ6j/preview",
    zh: "https://drive.google.com/file/d/1fPQOUJndzVjnpf468iD_SXImoHbwJZ6j/preview" // Same for now, can be updated later
  };
  
  const resumeUrl = resumeUrls[language] || resumeUrls.en;
  const resumeTitle = getText(data.nav.resume, language);

  return (
    <div className="section" id="resume">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{resumeTitle}</h1>
        </Fade>
        <Fade bottom duration={1000} distance="20px">
          <iframe 
            src={resumeUrl} 
            allow="autoplay" 
            className="Resume" 
            title={resumeTitle}
          >
            {resumeTitle}
          </iframe>
        </Fade>
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <div>
      <Layout>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Resume" />
        <ResumeContent />
      </Layout>
    </div>
  )
}


