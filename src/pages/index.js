import React from "react";
import Head from "next/head";
import Home from "./home";

export default function index() {
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
