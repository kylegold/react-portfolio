import React from "react"
import "./style.css"
import profilePicture from "./profilePicture.png"

const About = () => {
  const style = {
    backgroundImage: "url(" + { profilePicture } + ")"
  }
  return(
    <div className="aboutContainer">
      <div className="imageContainer" style={style}>
      </div>
      <div className="bioContainer"> 
      <h2>
        Kyle Goldfarb
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="infoContainer">
        <h3>Personal Info</h3>
      <ul class="info-list">
        <li>Location: New York</li>
        <li>Email: example@email.com</li>
        <li>Portfolio: example portfolio</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default About