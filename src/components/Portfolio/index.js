import React from "react"
import getMeOut from "./getMeOutOfHere.png"
import quizz from "./quizzinc_logo.png"
import "./style.css"

const Portfolio = () => {
  return(
    <>
    <div className="card">
    <img src={getMeOut} alt="Avatar" style={{width:"100%"}} />
    <div className="container">
      <h4><b>Get Me Out Of Here</b></h4>
      <p>Find your pandemic escape route!</p>
    </div>
  </div>
  <div className="card">
    <img src={quizz} alt="Avatar" style={{width:"100%"}} />
    <div className="container">
      <h4><b>QuizzInc</b></h4>
      <p>Test yourself and your friends!</p>
    </div>
  </div>
  </>
  )
}

export default Portfolio