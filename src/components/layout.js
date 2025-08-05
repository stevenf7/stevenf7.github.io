/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import Navbar from "./Navbar"
import BackgroundIcons from "./BackgroundIcons"
import { LanguageProvider } from "../contexts/LanguageContext"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  // Handle potential CSS loading issues in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Add a small delay to ensure CSS is loaded before any HMR updates
      const timer = setTimeout(() => {
        // Force a reflow to ensure CSS is properly applied
        // eslint-disable-next-line no-unused-expressions
        document.body.offsetHeight;
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

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
