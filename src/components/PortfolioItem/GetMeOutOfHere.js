import React from "react"
import getMeOut from "./getMeOutOfHere.png"
import "./styleGet.css"

const GetMeOutOfHere = () => {
  return(
    <div className="aboutContainer">
    <div className="imageContainerGet" style={{backgroundImage: `url(${{getMeOut}})`}}>
    </div>
    <div className="bioContainer"> 
    <h2>
      Get Me Out of Here
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="infoContainer">
      <h3>Personal Info</h3>
    <ul class="info-list">
      <li>Deployed Application: <a href="https://kylegold.github.io/get-me-out-of-here/"> Get Me Out of Here</a></li>
      <li>Github Repo: <a href="https://github.com/kylegold/get-me-out-of-here"> Get Me Out of Here Repo</a></li>
    </ul>
    </div>
    </div>
  </div>
  )
}

export default GetMeOutOfHere