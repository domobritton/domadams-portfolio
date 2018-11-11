import React from "react";
import { Link } from "gatsby";
import Image from "../components/image";
import Layout from "../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";
import styled from "styled-components";
import Code from '../components/code'

const aboutPage = () => (
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
      <div className="code">
        <Code />
      </div>
      <div className="about">
        <div className="left">
          <h2>About Me</h2>
          <p className="effect-shine">
            I thrive at the intersection of creativity and tech innovation—
            contributing ideas that are not often explored and are outside the
            box to add value to any project. My skills are broad: from ux to
            design, front end to back end development. Working with a team of
            people from diverse backgrounds, experiences, and skills are what
            excites me most about software development.
          </p>
          <p>
            When I am not in front of my mac, I am enjoying quality time with my
            family at the ocean, or on the trail in Marin.
          </p>
          <div className="download-btn">
            <a
              href="../images/domadams-profile.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download My Resume
            </a>
          </div>
        </div>
        <div className="right">
          <Image />
        </div>
      </div>
      <div className="right-arrows-container">
        <Link to="/skills">
          <div className="right-arrow right-arrow-one" />
          <div className="right-arrow right-arrow-two" />
        </Link>
      </div>
    </Layout>
  </PageTransition>
);

export default aboutPage;
