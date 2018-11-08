import React from 'react'
import { Link } from 'gatsby'
import {
  FaHome, FaUser, FaCog, FaEye, FaEnvelope
} from "react-icons/fa";

const Header = ({ siteTitle }) => (
  <div className="header">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        height: 50,
        padding: '0rem 1.0875rem',
      }}
    >
        <ul className="nav">
        <li>
          <Link to='/'><FaHome /> </Link>
        </li>
        <li>
          <Link style={{color: '#ef4135', fontSize: '1rem'}} to='/about'><FaUser /></Link>
        </li>
        <li>
          <Link style={{color: '#ef4135', fontSize: '1rem'}} to='/skills'><FaCog /></Link>
        </li>
        <li>
          <Link style={{color: '#ef4135', fontSize: '1rem'}} to='/portfolio'><FaEye /></Link> 
          </li>
          <li>
          <Link style={{color: '#ef4135', fontSize: '1rem'}} to='/contact'><FaEnvelope /></Link>
          </li>
        </ul>
    </div>
  </div>
)

export default Header
