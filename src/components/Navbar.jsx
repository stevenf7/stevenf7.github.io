import React from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";

const Navbar = () => {
  const { language, getLanguageUrl } = useLanguage();
  const resumeHref = getLanguageUrl(language, "/resume");

  const navItems = [
    { key: "home", label: data.nav.home, hash: "#home" },
    { key: "nvidia", label: data.nav.nvidia, hash: "#nvidia" },
    { key: "education", label: data.nav.education, hash: "#education" },
    { key: "publications", label: data.nav.publications, hash: "#publications" },
    { key: "projects", label: data.nav.projects, hash: "#projects" },
    { key: "contact", label: data.nav.contact, hash: "#contact" },
  ];

  return (
    <header className="site-header">
      <div className="container">
        <nav
          className="navbar-wrapper"
          aria-label={language === "zh" ? "主导航" : "Primary navigation"}
        >
          <div className="left-nav">
            <a href={resumeHref} className="nav-link resume-nav-link">
              {getText(data.nav.resume, language)}
            </a>
          </div>

          <div className="center-nav">
            <div className="links-wrapper">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={getLanguageUrl(language, "/", item.hash)}
                  className={`nav-link${
                    item.key !== "home" ? " nav-link-desktop-only" : ""
                  }`}
                >
                  {getText(item.label, language)}
                </a>
              ))}
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
