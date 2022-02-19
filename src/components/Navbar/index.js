import React, { Fragment } from "react";
import { BsBrightnessHighFill, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDark, active }) => {
  return (
    <Fragment>
      <div className="flex flex-row justify-between w-11/12 xl:w-8/12 mx-auto p-6">
        <h1 className="bold-font text-2xl text-gray-500">
          <Link to={"/"}>
            Kolade <b className="text-indigo-600">Joseph</b>
          </Link>
        </h1>

        <ul className="hidden lg:flex flex-row lg:w-3/12 xl:w-4/12 justify-between regular-font text-gray-500 items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <a
              // href="https://docs.google.com/document/d/1Q4PFWKHWL9fMV58TpHL5jFfFFI4VGH1xGwzooOfuwWE/edit?usp=sharing"
              href="https://drive.google.com/file/d/1yCSl4xj4zgFPWKF2zBhUNEBXHqRJbfnh/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-600 p-1 rounded-sm text-white"
            >
              Resume
            </a>
          </li>
          {!active ? (
            <li>
              <button
                className="bg-gray-200 p-1 rounded-sm"
                onClick={() => toggleDark()}
              >
                <BsMoonFill
                  className="border border-gray-200 p-1 rounded-full"
                  size={25}
                />
              </button>
            </li>
          ) : (
            <li>
              <button
                className="bg-gray-800 p-1 rounded-sm"
                onClick={() => toggleDark()}
              >
                <BsBrightnessHighFill
                  className="border border-gray-800 p-1 rounded-full"
                  size={25}
                />
              </button>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
