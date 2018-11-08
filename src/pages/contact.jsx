import React from "react";
import Layout from "../components/layout";
import { FaPhone } from "react-icons/fa";

const contactPage = () => (
    <Layout>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <p>
          I am actively seeking new opportunities in the San Francisco Bay Area.
          <br />
          I'd love to hear from you.
        </p>
        <p>
          <em>@</em> dom@domadams.me
        </p>
        <p>
          <FaPhone /> 415.686.9140
        </p>
      </div>
    </Layout>
);

export default contactPage;
