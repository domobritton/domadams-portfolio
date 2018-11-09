import React from 'react'
import { Link } from 'gatsby'
import {
  FaHome, FaUser, FaCog, FaEye, FaEnvelope
} from "react-icons/fa";

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="inner-header">
          <ul className="nav">
          <li id="home-link"
          data-hover="Home" >
            <Link to='/'><FaHome /></Link>
          </li>
          <li data-hover="About">
            <Link to='/about'><FaUser /></Link>
          </li>
          <li data-hover="Skills">
            <Link to='/skills'><FaCog /></Link>
          </li>
          <li data-hover="Work">
            <Link to='/portfolio'><FaEye /></Link> 
            </li>
            <li data-hover="Email">
            <Link to='/contact'><FaEnvelope /></Link>
            </li>
          </ul>
        </div>
    </div>
)

export default Header
