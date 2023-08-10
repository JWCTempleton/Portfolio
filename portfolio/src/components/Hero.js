import "./Hero.css";
import Toggler from "./Toggler";

const Hero = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="hero">
      <Toggler toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="hero-section">
        <p className="hero-text">
          <span className={darkMode ? "fade-first dark" : "fade-first"}>
            Hi,{" "}
          </span>
          <span className={darkMode ? "fade-second dark" : "fade-second"}>
            I'm <span className="text-background">Jacob Templeton</span>...
          </span>
          <br />
          <span className={darkMode ? "fade-third dark" : "fade-third"}>
            your next web developer.
          </span>
        </p>
        <div className="button-section fade-third">
          <a href="#about">
            <button className="hero-button">About Me</button>
          </a>
          <a href="#projects">
            <button className="hero-button">My Projects</button>
          </a>
        </div>
      </div>
      <svg
        className={darkMode ? "background--custom dark" : "background--custom"}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFFF00"
          fillOpacity="0.7"
          d="M-100 -100L200 -100L200 50L-100 40Z"
          style={{ animation: "path0 5s linear infinite alternate" }}
        />
        <path
          fill="#00FFFF"
          fillOpacity="0.7"
          d="M-100 -100L200 -100L200 50L-100 40Z"
          style={{ animation: "path1 9.5s linear infinite alternate" }}
        />
        <path
          fill="#FF00FF"
          fillOpacity="0.2"
          d="M-100 -100L200 -100L200 20L-100 25Z"
          style={{ animation: "path2 11s linear infinite alternate" }}
        />
      </svg>
    </div>
  );
};

export default Hero;
