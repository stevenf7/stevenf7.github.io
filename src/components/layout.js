/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import BackgroundIcons from "./BackgroundIcons"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <BackgroundIcons />
      <div className="content-wrapper">
        <Navbar></Navbar>
        <main>{children}</main>
      </div>
    </div>
  )
}
export default Layout
