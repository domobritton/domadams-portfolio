import React from "react";
import Layout from "../components/layout";
import PageTransition from "gatsby-plugin-page-transitions";

const skillsPage = () => (
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
    <div className="skills">
      <h2>Skills & Experience</h2>
      <p>
        Javascript, Typescript, jQuery, React, Redux, Node js, Express js,
        MongoDB, Ruby, Ruby on Rails, Rspec, Jasmine, WordPress, SQL, AWS,
        HTML5, CSS3, Docker, Git.
      </p>
      <p>
        I have many years experience as a front-end developer and WordPress,
        creating responsive websites of a high quality.
      </p>
      <p>
        In my experience as a freelancer and working for agencies I have also
        obtained an eye for detail and appreciation for design, knowledge of
        integrating with and developing server-side, as well as knowing how to
        efficiently project manage and work with clients and colleagues
        successfully.
      </p>
      <p>
        I now specialise in front-end development but my knowledge of multiple
        fields allows me to work on a project with the full scope in mind;
        simplifying the process of our working together and producing a more
        cohesive experience for your users.
      </p>
      <p>
        Would you like to know more about me? Please check out my
        <a
          href="https://www.linkedin.com/in/domonicbrittonadams/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn{" "}
        </a>
        profile, or{" "}
        <a
          href="https://github.com/domobritton"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Contact me{" "}
        </a>{" "}
        directly.
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
  </Layout>
  </PageTransition>
);

export default skillsPage;
