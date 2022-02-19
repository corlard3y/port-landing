import React, { Fragment } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <div className="xl:w-8/12 mx-auto py-6 flex flex-row items-center">
        <ul className="list-none flex flex-row justify-between items-center xl:w-1/3 mx-auto text-gray-700">
          <li>
            <a
              href="https://github.com/corlard3y"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kolade-oyewumi-644492195/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/corlard3y"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size={25} />
            </a>
          </li>
        </ul>

        <div>
          <a
            href="mailto:oyewumi.koladej@gmail.com"
            className="flex flex-row items-center hover:underline text-gray-700"
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
