import "./Projects.css";
import { Fade } from "react-awesome-reveal";

const Projects = ({ darkMode }) => (
  <div>
    <div
      className={darkMode ? "projects-section dark" : "projects-section"}
      id="projects"
    >
      <h2 className="projects-title mb-small">My Projects</h2>
      <Fade duration={1800}>
        <div className="projects-content mb-medium">
          <div className="projects-text">
            <a href="https://fullstack-note-app.fly.dev/">
              <h2>Full Stack Note App</h2>
            </a>
            <p>
              My first comprehensive full stack app. React front end with MUI
              styling, Express backend and Postgres DB. Front end routing using
              react-router-dom. Users can create accounts, choose whether their
              created notes will be public or private, view their personal notes
              in the User section, and view all publicly created notes. User
              passwords are hashed before saving to DB.
            </p>
            <a href="https://github.com/JWCTempleton/full-stack-notes-app">
              <p
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: ".8rem",
                  fontWeight: "900",
                  alignItems: "center",
                }}
              >
                Github Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
              </p>
            </a>
          </div>

          <div className="projects-image">
            <a href="https://fullstack-note-app.fly.dev/">
              <img
                className="projects-photo"
                src="./laptop-2.jpg"
                alt="laptop"
              />
            </a>
          </div>
        </div>
      </Fade>
      <Fade duration={1800}>
        <div className="projects-content mb-medium reverse">
          <div className="projects-image">
            <a href="http://skycamaviation.com">
              <img
                className="projects-photo"
                src="./laptop-4.jpg"
                alt="laptop"
              />
            </a>
          </div>
          <div className="projects-text">
            <a href="http://skycamaviation.com">
              <h2>SkyCam Aviation</h2>
            </a>
            <p>
              A complete and comprehensive redesign of the SkyCam Aviation
              website built using WordPress and Colibri that is live and in use.
              Although I prefer working with React, this project was a lot of
              fun and a great experience. In this project I also edited the copy
              content and worked on SEO optimization.{" "}
            </p>
            <a href="http://skycamaviation.com">
              <p
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: ".8rem",
                  fontWeight: "900",
                  alignItems: "center",
                }}
              >
                Website Link
              </p>
            </a>
          </div>
        </div>
      </Fade>
      <Fade duration={1800}>
        <div className="projects-content mb-medium">
          <div className="projects-text">
            <a href="https://jwctempleton.github.io/hacker-news-search/">
              <h2>HackerNews Search</h2>
            </a>
            <p>
              A React project focused on incorporating API data to the front
              end. Axios library used to fetch data, async/wait functions and
              advanced state handling using reducers round out this project.
            </p>
            <a href="https://github.com/JWCTempleton/hacker-news-search">
              <p
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: ".8rem",
                  fontWeight: "900",
                  alignItems: "center",
                }}
              >
                Github Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
              </p>
            </a>
          </div>

          <div className="projects-image">
            <a href="https://jwctempleton.github.io/hacker-news-search/">
              <img
                className="projects-photo"
                src="./laptop-1.jpg"
                alt="laptop"
              />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default Projects;
