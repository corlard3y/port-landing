import "./App.css";
import Navbar from "./components/Navbar";
import About from "./screens/About";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./screens/Projects";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState(false);

  const toggleDark = (e) => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "light";
      setActive(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "dark";
      setActive(false);
    }
    console.log(localStorage.theme);
  };
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-black flex flex-col min-h-screen justify-between">
        <Navbar toggleDark={toggleDark} active={active} />

        <section className="my-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </section>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
