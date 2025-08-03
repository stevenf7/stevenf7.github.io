import React from "react"
import LanguageToggle from "./LanguageToggle"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"

const Navbar = () => {
  const { language, getLanguageUrl } = useLanguage();
  let resumelink = getLanguageUrl(language, "/resume");
  
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="left-nav">
            <button 
              onClick= {event =>  window.location.href=resumelink } 
              type="button" className="btn">
              {getText(data.nav.resume, language)}
            </button>
          </div>
          
          <div className="center-nav">
            <div className="links-wrapper">
              <button onClick= {event =>  window.location.href=getLanguageUrl(language, '/') + '#home'} type="button">
                {getText(data.nav.home, language)}
              </button>
              <button onClick= {event =>  window.location.href=getLanguageUrl(language, '/') + '#nvidia'} type="button">
                {getText(data.nav.work, language)}
              </button>
              <button onClick= {event =>  window.location.href=getLanguageUrl(language, '/') + '#contact'} type="button">
                {getText(data.nav.contact, language)}
              </button>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
