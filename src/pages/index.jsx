import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import PageTransition from 'gatsby-plugin-page-transitions'
import Code from '../components/code'

const IndexPage = () => (
  <PageTransition
    defaultStyle={{
      transition: "left 1000ms cubic-bezier(0.47, 0, 0.75, 0.72)",
      left: "100%",
      position: "absolute",
      width: "100%"
    }}
    transitionStyles={{
      entering: { left: "0%" },
      entered: { left: "0%" },
      exiting: { left: "100%" }
    }}
    transitionTime={1000}
  >
    <Layout>
      <div className="code"><Code /></div>
      <div className="index">
        <h2>Hi, I'm Domonic.</h2>
        <h3>Full Stack Web Developer.</h3>
        <p>Ruby / Javascript / React / Redux / Rails / Wordpress</p>
        <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }} />
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
  </PageTransition>
);

export default IndexPage
