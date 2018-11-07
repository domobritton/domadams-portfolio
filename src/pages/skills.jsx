import React from "react";
import Layout from "../components/layout";

const skillsPage = () => (
  <Layout>
    <div className="skills">
      <h2>Skills & Experience</h2>
      <p>
        Javascript, Typescript, jQuery, React, Redux, Node js, Express js,
        MongoDB, Ruby, Ruby on Rails, Rspec, Jasmine, WordPress, SQL, AWS,
        HTML5, CSS3, Docker, Git.
      </p>
      <p>
        Would you like to know more about me? Please check out my
        <a href="" target="_blank"> LinkedIn </a>
        profile, or <a href="" target="_blank"> Contact me </a> directly.
      </p>
      <div className="download-btn">
        <a>Download My Resume</a>
      </div>
    </div>
  </Layout>
);

export default skillsPage;
