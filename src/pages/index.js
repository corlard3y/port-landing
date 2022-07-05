import React, { useEffect } from "react";
import Head from "next/head";
import Home from "./home";

export default function index() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans&display=swap";
    // link.integrity =
    //   "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link)
  }, [])
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
      <Home />
    </>
  );
}
