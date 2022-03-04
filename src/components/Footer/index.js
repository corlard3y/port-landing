import React, { Fragment } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <div className="w-full xl:w-8/12 mx-auto p-4 xl:p-6 flex md:flex-row flex-col-reverse items-center">
        <ul className="list-none flex flex-row justify-between items-center w-11/12 md:w-2/6 xl:w-1/3 mx-auto text-gray-500">
          <li>
            <a
              href="https://github.com/corlard3y"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-indigo-600"
            >
              <BsGithub size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kolade-oyewumi-644492195/"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-indigo-600"
            >
              <BsLinkedin size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/corlard3y"
              target="_blank"
              className=" hover:text-indigo-600"
              rel="noreferrer"
            >
              <BsTwitter size={25} />
            </a>
          </li>
        </ul>

        <div className="mb-8 lg:mb-0 md:my-auto">
          <a
            href="mailto:oyewumi.koladej@gmail.com"
            className="flex flex-row items-center hover:underline text-gray-500"
          >
            <p className="text-xs actual-font ml-2">
              oyewumi.koladej@gmail.com
            </p>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
