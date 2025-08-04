import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../css/resume.scss"
import { Container } from "react-bootstrap"
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
    <Container>
      <h1>{resumeTitle}</h1>
      <iframe 
        src={resumeUrl} 
        width="850" 
        height="1100" 
        allow="autoplay" 
        className="Resume" 
        title={resumeTitle}
      >
        {resumeTitle}
      </iframe>
    </Container>
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


