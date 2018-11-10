import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { FaPhone } from "react-icons/fa"
import PageTransition from "gatsby-plugin-page-transitions"

const contactPage = () => (
  <PageTransition
    defaultStyle={{
      transition: "left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
      left: "100%",
      position: "absolute",
      width: "100%"
    }}
    transitionStyles={{
      entering: { left: "0%" },
      entered: { left: "0%" },
      exiting: { left: "100%" }
    }}
    transitionTime={500}
  >
    <Layout>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <p>
          I am actively seeking new front-end developer opportunities in the San Francisco Bay Area.
          I'd love to connect and learn about your product and culture.
        </p>
        <p>
          <em>@ </em>
          <a href="mailto:webmaster@example.com">dom@domadams.me</a>
        </p>
        <p>
          <FaPhone /> 415.686.9140
        </p>
      </div>
      <div className="right-arrows-container">
        <Link to="/">
          <div className="right-arrow right-arrow-one" />
          <div className="right-arrow right-arrow-two" />
        </Link>
      </div>
    </Layout>
  </PageTransition>
);

export default contactPage;
