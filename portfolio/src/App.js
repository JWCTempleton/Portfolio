import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="App">
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
