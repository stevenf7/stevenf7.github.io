import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Fade from "../components/animations/Fade"
import "../css/resume.scss"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import resumePdf from "../images/resume.pdf"

const ResumeContent = () => {
  const { language } = useLanguage()
  const resumeTitle = getText(data.nav.resume, language)

  return (
    <section className="section" id="resume" aria-labelledby="resume-heading">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1 id="resume-heading">{resumeTitle}</h1>
        </Fade>
        <Fade bottom duration={0.6} distance="20px">
          <iframe
            src={resumePdf}
            className="Resume"
            title={resumeTitle}
          />
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
