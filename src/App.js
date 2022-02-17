import "./App.css";
import Navbar from "./components/Navbar";
import About from "./screens/About";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const toggleDark = (e) => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "dark";
    }
  };
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-black flex flex-col min-h-screen justify-between">
        <Navbar toggleDark={toggleDark} />

        <section className="flex-1 my-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<About />} />
            {/* <Home /> */}
            {/* <About /> */}
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
