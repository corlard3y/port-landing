import React, { Fragment } from "react";
import { BsBrightnessHighFill, BsMoonFill } from "react-icons/bs";

const Navbar = ({ toggleDark }) => {
  return (
    <Fragment>
      <div className="flex flex-row justify-between xl:w-8/12 mx-auto p-6">
        <h1 className="bold-font text-2xl text-gray-500">
          Kolade <b className="text-indigo-600">Joseph</b>
        </h1>

        <ul className="flex flex-row xl:w-5/12 justify-between regular-font text-gray-500 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Projects</li>
          <li>
            <button
              className="bg-gray-200 p-1 rounded-sm"
              onClick={() => toggleDark()}
            >
              <BsBrightnessHighFill
                className="border border-gray-200 p-1 rounded-full"
                size={25}
              />
            </button>
          </li>
          <li>
            <button className="bg-gray-200 p-1 rounded-sm">
              <BsMoonFill
                className="border border-gray-200 p-1 rounded-full"
                size={25}
              />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
