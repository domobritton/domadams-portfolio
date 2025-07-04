import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import CodeImage from '../components/codeImage'
import Particles from '../components/particles'

const IndexPage = () => (
  <Layout>
    <div className="code">
      <CodeImage />
    </div>
    <Particles />
    <div className="index">
      <h2>Hi, I'm Domonic.</h2>
      <h3>Full Stack Web Developer.</h3>
      <p>Typescript / ReactJS / NodeJS / Ruby on Rails</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
      <div className="social-links">
        <ul>
          <li>
            <a
              href="https://github.com/domobritton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/domonicbrittonadams/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-btn">
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
    <div className="right-arrows-container">
      <Link to="/about">
        <div className="right-arrow right-arrow-one" />
        <div className="right-arrow right-arrow-two" />
      </Link>
    </div>
  </Layout>
)

export default IndexPage
