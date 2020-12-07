import React from "react"
import getMeOut from "./getMeOutOfHere.png"
import quizz from "./quizzinc_logo.png"
import "./style.css"
import {Link} from "react-router-dom"

const Portfolio = () => {
  return(
    <>
    <Link to="/portfolio/getmeoutofhere">
    <div className="card">
    <img src={getMeOut} alt="Avatar" style={{width:"100%"}} />
    <div className="container">
      <h4><b>Get Me Out Of Here</b></h4>
      <p>Find your pandemic escape route!</p>
    </div>
  </div>
  </Link>
  <Link to="/portfolio/quizzinc">
  <div className="card">
    <img src={quizz} alt="Avatar" style={{width:"100%"}} />
    <div className="container">
      <h4><b>QuizzInc</b></h4>
      <p>Test yourself and your friends!</p>
    </div>
  </div>
  </Link>
  </>
  )
}

export default Portfolio