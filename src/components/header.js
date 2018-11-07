import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#181818',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '.50rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#ef4135',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <ul style={{float: 'right'}}>
        <li style={{marginRight: '1.5rem'}}>
          <Link style={{color: '#ef4135', fontSize: '1rem'}} to='/about'>About Me</Link>
        </li>
        <li style={{marginRight: '1.5rem'}}>
          <Link style={{color: '#ef4135', fontSize: '1rem'}} to='/skills'>Skills</Link>
        </li>
        <li style = {{marginRight: '1.5rem'}}>
          <Link style={{color: '#ef4135', fontSize: '1rem'}} to='/portfolio'>Portfolio</Link> 
          </li>
          <li style={{marginRight: '1.5rem'}}>
          <Link style={{color: '#ef4135', fontSize: '1rem'}} to='/contact'>Contact Me</Link>
          </li>
        </ul>
      </h1>
    </div>
  </div>
)

export default Header
