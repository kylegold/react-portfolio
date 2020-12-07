import React from "react"
import "./style.css"

const Nav = () => {
  return(
    <header>
    <h1>Kyle Goldfarb</h1>
      <ul class="nav">
        <li>
          <a href="./about">About</a>
        </li>
        <li>
          <a href="./portfolio">Portfolio</a>
        </li>
        <li>
         <a href="./contact">Contact</a> 
        </li>
      </ul>
  </header>
  )
}

export default Nav