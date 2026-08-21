import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../data"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import Skills from "../components/skills"
import Footer from "../components/Footer"
import Project from "../components/projects"
import Nvidia from "../components/NVIDIA"
import Education from "../components/Education"
import Publications from "../components/Publications"

const IndexPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title={data.seo.title} description={data.seo.description} />
    <Header></Header>
    <Education></Education>
    <Publications></Publications>
    <Nvidia></Nvidia>
    <Work></Work>
    <Project></Project>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
