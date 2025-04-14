import React from "react"

const Navbar = () => {
  let resumelink = "/resume/";
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
        <button 
          onClick= {event =>  window.location.href=resumelink } 
          type="button" className="btn"> Resume
        </button>
          <div className="links-wrapper">
            <button onClick= {event =>  window.location.href='/#home'} type="button">Home</button>
            <button onClick= {event =>  window.location.href='/#about'} type="button">About</button>
            <button onClick= {event =>  window.location.href='/#nvidia'} type="button">Work</button>
            <button onClick= {event =>  window.location.href='/#education'} type="button">Education</button>
            <button onClick= {event =>  window.location.href='/#work'} type="button">Internships</button>
            <button onClick= {event =>  window.location.href='/#projects'} type="button">Projects</button>
            <button onClick= {event =>  window.location.href='/#skills'} type="button">Skills</button>
            <button onClick= {event =>  window.location.href='/#contact'} type="button">Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
