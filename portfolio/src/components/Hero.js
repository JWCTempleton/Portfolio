import "./Hero.css";
import Toggler from "./Toggler";
const Hero = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="hero">
      <Toggler toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <h1>Hi, I'm Jacob Templeton</h1>
      <svg
        className={darkMode ? "background--custom dark" : "background--custom"}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFFF00"
          fillOpacity="0.7"
          d="M-100 -100L200 -100L200 50L-100 50Z"
          style={{ animation: "path0 5s linear infinite alternate" }}
        />
        <path
          fill="#00FFFF"
          fillOpacity="0.7"
          d="M-100 -100L200 -100L200 50L-100 50Z"
          style={{ animation: "path1 9.5s linear infinite alternate" }}
        />
        <path
          fill="#FF00FF"
          fillOpacity="0.2"
          d="M-100 -100L200 -100L200 20L-100 20Z"
          style={{ animation: "path2 11s linear infinite alternate" }}
        />
      </svg>
    </div>
  );
};

export default Hero;
