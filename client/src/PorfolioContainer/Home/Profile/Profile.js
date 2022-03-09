import React from "react";
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
      <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">

            <a href="https://www.linkedin.com/in/kesse1/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/kesse1">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
              </div>
          </div>

          <div className="profile-details-name">
              <span className="primary-text">
                 {''}
                 Hello, I'M <span className="highlighted-text">Kesse</span>
              </span>
          </div>
          <div className="profile-details-role">
              <span className="primary-text">
                  {""}
                  <h1>
                    {""}
                    <Typical
                    loop ={Infinity}
                     steps={[
                         "Dedicated Dev ⌨",
                         1000,
                         "Full Stack Developer 💻",
                         1000,
                         "MERN Stack Dev 🌐",
                         1000,
                         "Software Engineer ⚙",
                         1000,
                         "Cross Platform Dev 🛑",
                         1000,
                     ]}
                    />
                  </h1>
                  </span>
                  <span className="profile-role-tagline">
                  The Messiah of client-side and server-side operations.
                  </span>
             
          </div>
          <div className="profile-options">
              <button className="btn primary-btn" 
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Hire Me
              </button>
              <a href="01Albert.pdf" download='Albert 01Albert.pdf'>
               <button className='btn highlighted-btn'>Get Resume</button>
               </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
