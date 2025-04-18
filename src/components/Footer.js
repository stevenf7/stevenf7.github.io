import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <h1>Contact</h1>
          <h2>{data.contactSubHeading}</h2>
          <Fade bottom>
            <a className="email-link" href={`mailto:${data.contactEmail}`}>
              {data.contactEmail}
            </a>
            <div className="social-icons">
              {data.social.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialLink.img} alt="icons"></img>
                </a>
              ))}
            </div>
          </Fade>
          <span>
            Made by <span role="img" aria-label="duck">🦆</span>
            <a href="https://www.linkedin.com/in/stevenfeng7/">Ji Yuan "Steven" Feng</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
