import React from 'react'
import { Link } from 'gatsby'
import ProfileImage from '../components/profileImage'
import Layout from '../components/layout'
import CodeImage from '../components/codeImage'
import Particles from '../components/particles'

const aboutPage = () => (
  <>
    <Particles />
    <Layout>
      <div className="code">
        <CodeImage />
      </div>
      <div className="about">
        <div className="left">
          <h2>About Me</h2>
          <p>
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
              href="https://drive.google.com/file/d/1zXCDOc7GPU-3GmhqvwYTeqoWnX7P04yW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download My Resume
            </a>
          </div>
        </div>
        <div className="right">
          <ProfileImage />
        </div>
      </div>
      <div className="right-arrows-container">
        <Link to="/skills">
          <div className="right-arrow right-arrow-one" />
          <div className="right-arrow right-arrow-two" />
        </Link>
      </div>
    </Layout>
  </>
)

export default aboutPage
