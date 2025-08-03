/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import BackgroundIcons from "./BackgroundIcons"
import { LanguageProvider } from "../contexts/LanguageContext"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="layout-container">
        <BackgroundIcons />
        <div className="content-wrapper">
          <Navbar></Navbar>
          <main>{children}</main>
        </div>
      </div>
    </LanguageProvider>
  )
}
export default Layout
