import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import data from "../data";
import Header from "../components/Header";
import Nvidia from "../components/NVIDIA";
import Publications from "../components/Publications";
import Work from "../components/Work";
import Project from "../components/projects";
import Education from "../components/Education";
import Skills from "../components/skills";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title={data.seo.title} description={data.seo.description} pathname="/" />
    <Header />
    <Nvidia />
    <Publications />
    <Work />
    <Project />
    <Education />
    <Skills />
    <Footer />
  </Layout>
);

export default IndexPage;
