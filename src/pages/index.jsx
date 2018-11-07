import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () => (
  <Layout>
    <div className="index">
      <h2>Hi, I'm Domonic.</h2>
      <h3>Full Stack Web Developer.</h3>
      <p>Ruby / Javascript / React / Redux / Rails / Wordpress</p>
      <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
      </div>
      <div className="social-links">
      <ul>
        <li>
            <a href="" target="_blank"><i className="fab fa-github fa-2x"></i></a>
        </li>
        <li>
            <a href="" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
        </li>
      </ul>
      </div>
      <div className="contact-btn">
      <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage
