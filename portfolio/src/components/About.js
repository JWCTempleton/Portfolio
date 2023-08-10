import "./About.css";
import { Fade } from "react-awesome-reveal";

const About = ({ darkMode }) => (
  <div className={darkMode ? "about dark" : "about"}>
    <div className="about-section" id="about">
      <Fade duration={3200}>
        <h2>About Me</h2>
      </Fade>
      <Fade cascade damping={0.5}>
        <div className="about-div">
          <div className="about-img-section">
            <img
              className="about-img"
              src="./jwct-profile-pic.jpeg"
              alt="profile-pic"
            />
          </div>
          <div className="about-text-section">
            <p>
              I graduated Summa Cum Laude from Saint Mary's College of
              California with a B.S. in Business Administration. In my senior
              year I was accepted into the Technology, Engineering, and Business
              program which introduced me to a brand new world of web design.
            </p>
            <br />
            <p>
              I am comfortable working with React for front end development and
              have been learning about back end development. This includes
              working with Express as well as database design with both
              relational (postgres) as well as non-relational (mongo) databases.
            </p>
          </div>
        </div>
        <div>
          <a href="./JWCT_dev_2023.pdf" target="_blank" rel="noreferrer">
            <button className="about-button">My Resume</button>
          </a>
        </div>
      </Fade>
    </div>
  </div>
);

export default About;
