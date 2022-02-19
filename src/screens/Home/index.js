import React, { Fragment } from "react";
import avatar from "../../assets/imgs/image.png";

const Home = () => {
  return (
    <Fragment>
      <div className="xl:w-8/12 mx-auto">
        <div className="w-36 border border-gray-200 mx-auto rounded-lg p-2 bg-gray-300 dark:bg-black dark:border-none">
          <img src={avatar} alt="" className="my-auto mx-auto" />
        </div>

        <h1 className="text-center mt-8 bold-font text-2xl text-gray-500">
          Hi - I'm Kolade
        </h1>

        <h2 className="w-48 p-1 bold-font text-white rounded-md shadow-md mx-auto mt-8 bg-indigo-600 text-center">
          Software Developer
        </h2>

        <p className="actual-font text-center mt-12 text-sm w-2/3 leading-loose mx-auto text-gray-500">
          Innovative Software Developer with 3+ years of solid experience
          building and maintaining responsive websites and apps in collaborative
          environments. I find creative ways to solve problems for users while
          delivering the best experiences. I am always striving for mastery in
          my craft and offer full commitment to teamwork.
        </p>

        <p className="actual-font text-center mt-4 text-sm w-2/3 leading-loose mx-auto text-gray-500">
          I currently work as a Front-end Developer at{" "}
          <a
            href="https://datazen.online"
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-600"
          >
            Datazen
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
