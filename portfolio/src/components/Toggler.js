import "./Toggler.css";
const Toggler = ({ toggleDarkMode, darkMode }) => {
  return (
    <span className={darkMode ? "dark" : ""}>
      <div
        className={darkMode ? "toggler dark" : "toggler"}
        onClick={toggleDarkMode}
      >
        <p className="toggler--light">Light</p>
        <div className="toggler--slider">
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </span>
  );
};

export default Toggler;
