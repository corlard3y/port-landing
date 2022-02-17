import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="xl:w-8/12 mx-auto h-auto my-auto">
        <p className="actual-font text-center mt-12 text-sm w-2/3 leading-loose mx-auto text-gray-500">
          I'm a self taught developer, passionate in building responsive,
          beautiful and accessible apps using clean and elegant code. When I’m
          not behind the screen, I love playing the
          <span className="text-indigo-600"> {""}guitar.</span>
        </p>

        <p className="actual-font text-center mt-4 text-sm w-2/3 leading-loose mx-auto text-gray-500">
          Here are a few technologies I've been working with recently:
        </p>

        <div className="flex flex-row justify-between w-1/3 mx-auto">
          <ul className="actual-font text-sm text-gray-500 list-disc listings">
            <li>HTML & CSS</li>
            <li>JavaScript/Typescript</li>
            <li>React/React Native</li>
            <li>Next JS</li>
            <li>Bootstrap/TailwindCSS</li>
          </ul>
          <ul className="actual-font text-sm text-gray-500 list-disc listings">
            <li>Node JS/Express JS</li>
            <li>Mongoose/Sequelize</li>
            <li>MySql/MongoDB</li>
            <li>Heroku/Vercel/Netlify</li>
            <li>Git/Github/Bitbucket</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
