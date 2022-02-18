import React, { Fragment } from "react";
import { BsBrightnessHighFill, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDark, active }) => {
  return (
    <Fragment>
      <div className="flex flex-row justify-between xl:w-8/12 mx-auto p-6">
        <h1 className="bold-font text-2xl text-gray-500">
          <Link to={"/"}>
            Kolade <b className="text-indigo-600">Joseph</b>
          </Link>
        </h1>

        <ul className="flex flex-row xl:w-5/12 justify-between regular-font text-gray-500 items-center">
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
            <Link to={"/contact"}>Contact</Link>
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
