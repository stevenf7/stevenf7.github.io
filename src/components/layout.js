import React from "react";
import Navbar from "./Navbar";
import BackgroundIcons from "./BackgroundIcons";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import data, { getText } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/mains.scss";

const SkipToMainLink = () => {
  const { language } = useLanguage();
  return (
    <a className="skip-link" href="#main-content">
      {getText(data.nav.skipToContent, language)}
    </a>
  );
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="layout-container">
          <SkipToMainLink />
          <BackgroundIcons />
          <div className="content-wrapper">
            <Navbar />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Layout;
