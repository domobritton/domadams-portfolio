import React from 'react';
import Image from "../components/image";
import Layout from '../components/layout';

const aboutPage = () => (
  <Layout>
    <div className="about">
      <div className="left">
        <h2>About Me</h2>
        <p className="effect-shine">
          I thrive at the intersection of creativity and tech innovation—
          contributing ideas that are not often explored and are outside the box
          to add value to any project. Working with a team of people from
          diverse backgrounds, experiences, and skills are what excites me most
          about software development. When I am not in front of my mac, I am
          enjoying quality time with my family at the ocean, or on the trail in
          Marin.
        </p>
      <div className="download-btn">
      <a>Download My Resume</a>
      </div>
      </div>
      <div className="right">
      <Image />
      </div>
    </div>
  </Layout>
);

export default aboutPage
