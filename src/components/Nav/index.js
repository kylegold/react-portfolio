import React from "react"
import "./style.css"

const Nav = () => {
  return(
    <header>
    <h1>Kyle Goldfarb</h1>
      <ul class="nav">
        <li>
          <a href="./index.html">About</a>
        </li>
        <li>
          <a href="./portfolio.html">Portfolio</a>
        </li>
        <li>
         <a href="./contact.html">Contact</a> 
        </li>
      </ul>
  </header>
  )
}

export default Nav