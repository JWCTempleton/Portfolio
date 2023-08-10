import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="App">
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} />
    </div>
  );
}

export default App;
