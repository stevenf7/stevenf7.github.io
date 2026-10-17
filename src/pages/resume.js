import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Fade from "../components/animations/Fade"
import "../css/resume.scss"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"

const ResumeContent = () => {
  const { language } = useLanguage()

  const resumeUrls = {
    en: "https://drive.google.com/file/d/1fPQOUJndzVjnpf468iD_SXImoHbwJZ6j/preview",
    zh: "https://drive.google.com/file/d/1fPQOUJndzVjnpf468iD_SXImoHbwJZ6j/preview",
  }

  const resumeUrl = resumeUrls[language] || resumeUrls.en
  const resumeTitle = getText(data.nav.resume, language)

  return (
    <section className="section" id="resume" aria-labelledby="resume-heading">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1 id="resume-heading">{resumeTitle}</h1>
        </Fade>
        <Fade bottom duration={0.6} distance="20px">
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
    </section>
  )
}

export default function Resume() {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO
        title={data.seo.resumeTitle}
        description={data.seo.description}
        pathname="/resume/"
      />
      <ResumeContent />
    </Layout>
  )
}
