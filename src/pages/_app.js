import "../../styles/globals.css";
import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
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
  };
  return (
    <>
      <Head>
        <title>Kolade Joseph</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-white dark:bg-black flex flex-col min-h-screen justify-between">
        <Navbar toggleDark={toggleDark} active={active} />
        <section className="my-auto">
          <Component {...pageProps} />
        </section>
        <Footer />
      </div>
      {/* <div className="bg-white dark:bg-black flex flex-col min-h-screen justify-between">
        <Navbar />
        <section className="my-auto">
          <Home />
        </section>
        <Footer />
      </div> */}
    </>
  );
}

export default MyApp;
