import React from "react"
import "./style.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <header>
    <h1>Kyle Goldfarb</h1>
      <ul class="nav">
        <li>
        <Link to="/about">About</Link>

        </li>
        <li>
        <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link> 
        </li>
      </ul>
  </header>
  )
}

export default Nav