import React from 'react'
import { Link } from 'gatsby'
import {
  FaHome, FaUser, FaCog, FaEye, FaEnvelope
} from "react-icons/fa";

const Header = () => (
  <div className="header">
    <div className="inner-header">
          <ul className="nav">
          <li className="outer-link" >
            <Link to='/'
            activeClassName="active"><FaHome /></Link >
          </li>
          <li className="outer-link"  data-hover="About">
            <Link to='/about/' activeClassName="active"><FaUser /></Link>
          </li>
          <li className="outer-link"  data-hover="Skills">
            <Link to='/skills/' activeClassName="active"><FaCog /></Link>
          </li>
          <li className="outer-link"  data-hover="Work">
            <Link to='/portfolio/' activeClassName="active"><FaEye /></Link> 
            </li>
            <li className="outer-link" data-hover="Email">
            <Link to='/contact/' activeClassName="active"><FaEnvelope /></Link>
            </li>
          </ul>
        </div>
    </div>
)

export default Header
