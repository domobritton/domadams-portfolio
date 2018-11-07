import React from "react";
import Intrst from "../images/intrst.gif";
import Crushd from "../images/crushd.gif";
import NeueWeather from "../images/neueweather.gif";
import Resilient from "../images/resilient.gif";
import Seismic from "../images/seismic.gif";
import Silent from "../images/silentdisco.gif";
import Layout from "../components/layout";

const portfolioPage = () => (
  <Layout>
    <h2>Portfolio</h2>
    <div className="portfolio">
      <div className="left">
        <img src={Intrst} />
        <p>
          Formulated an algorithm that displays a masonry grid of images, that
          resizes and reduces displayed columns dynamically Designed an infinite
          scroll which initially fills the browser with images and continuously
          listens for scroll events in order to execute seamless AJAX requests
          Built higher order component for modal functionality which can be
          passed to other components as needed utilizing the UI slice of state
          Integrated AWS S3 ActiveStorage to simplify image storage code and
          provide lightning fast image loading to the browser
        </p>
        <div className="portfolio-links">
          <ul>
            <li>
              <a href="" target="_blank">
                <i className="fas fab fa-link fa-lg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="fab fa-github fa-lg" />
              </a>
            </li>
          </ul>
        </div>
        <img src={Silent} />
        <p>
          Silent Storm Sound System is a leading wireless headset provider known
          for creating unique silent disco experiences across America. I built
          this website to replace an older site, updating the look and designing
          the site to funnel more business to the client.
        </p>
        <div className="portfolio-links">
          <ul>
            <li>
              <a href="" target="_blank">
                <i className="fas fab fa-link fa-lg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="fab fa-github fa-lg" />
              </a>
            </li>
          </ul>
        </div>
        <img src={NeueWeather} />
        <p>
          Implemented Pusher, an API normally used for messaging apps to handle
          updates to weather data from Dark Sky API in real-time Designed an
          algorithm that creates new divs on the fly and inserts them into their
          parent div at randomly generated points to simulate a galaxy of stars
          in the browser window Applied CSS animations with keyframes to
          generate a “twinkling” effect on stars
        </p>
        <div className="portfolio-links">
          <ul>
            <li>
              <a href="" target="_blank">
                <i className="fas fab fa-link fa-lg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="fab fa-github fa-lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <img src={Seismic} />
        <p>
          Worked closely with the VP of Design and VP of Product to design a new
          website for their robotic clothing company, focusing on a clean and
          easy to use experience with forward-thinking CSS and interface design
          Maintained effective communication and planning throughout to ensure
          that code was pixel perfect to branding guidelines On contract to
          build Seismic’s online store (January 2019)
        </p>
        <div className="portfolio-links">
          <ul>
            <li>
              <a href="" target="_blank">
                <i className="fas fab fa-link fa-lg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="fab fa-github fa-lg" />
              </a>
            </li>
          </ul>
        </div>
        <img src={Resilient} />
        <p>
          This client came to me looking for a new website that would be easy to
          maintain with the ability to easily add blogging capabilities at a
          future date.
        </p>
        <div className="portfolio-links">
          <ul>
            <li>
              <a href="" target="_blank">
                <i className="fas fab fa-link fa-lg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="fab fa-github fa-lg" />
              </a>
            </li>
          </ul>
        </div>
        <img src={Crushd} />
        <p>
          Utilized Firebase to store compressed video files in the cloud and
          lazy loading on the client-side to reduce latency
        </p>
        <div className="portfolio-links">
          <ul>
            <li>
              <a href="" target="_blank">
                <i className="fas fab fa-link fa-lg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="fab fa-github fa-lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default portfolioPage;
