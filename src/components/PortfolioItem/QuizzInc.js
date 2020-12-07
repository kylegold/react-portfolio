import React from "react"
import Quizz from "./quizz.png"
import "./styleQuiz.css"

const GetMeOutOfHere = () => {
  return(
    <div className="aboutContainer">
    <div className="imageContainerQuiz" style={{backgroundImage: `url(${{Quizz}})`}}>
    </div>
    <div className="bioContainer"> 
    <h2>
      QuizzInc
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="infoContainer">
      <h3>Personal Info</h3>
    <ul class="info-list">
    <li>Deployed Application: <a href="https://stormy-shelf-50629.herokuapp.com/"> QuizzInc</a></li>
        <li>Github Repo:<a href="https://github.com/kylegold/Project-Two"> QuizzInc Repo</a></li>
    </ul>
    </div>
    </div>
  </div>
  )
}

export default GetMeOutOfHere