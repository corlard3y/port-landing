import { Fragment } from "react";
import { BsBrightnessHighFill, BsMoonFill, BsTextRight } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import Fade from "react-reveal/Reveal";

const Navbar = ({ toggleDark, active }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const openNav = () => {
    if (document.getElementById("myNav")) {
      document.getElementById("myNav").style.width = "100%";
    }
  };

  const closeNav = () => {
    console.log("seen");
    if (document.getElementById("myNav")) {
      document.getElementById("myNav").style.width = "0%";
      console.log("seenn");
    }
  };

  return (
    <>
      <Fragment>
        {/* <Fade top> */}
        <div className="flex flex-row justify-between items-center w-full xl:w-8/12 mx-auto p-4 xl:p-6">
          <h1 className="bold-font text-2xl text-gray-500">
            <Link href={"/"}>
              <b className="text-indigo-600 cursor-pointer">
                <b className="text-gray-500 mr-2">Kolade</b>Joseph
              </b>
            </Link>
          </h1>

          <div className="md:hidden" onClick={() => openNav()}>
            <BsTextRight size={23} color="#4b5563" />
          </div>

          <div id="myNav" className="overlay">
            <a href="#!" className="closebtn" onClick={() => closeNav()}>
              &times;
            </a>
            <div className="overlay-content regular-font text-lg">
              <Link href={"/"}>
                <a onClick={() => closeNav()}>Home</a>
              </Link>
              <Link href={"/about"}>
                <a onClick={() => closeNav()}>Skills</a>
              </Link>
              <Link href={"/projects"}>
                <a onClick={() => closeNav()}>Projects</a>
              </Link>
              <a
                href="https://drive.google.com/file/d/18ha80LXA0ooTUr1IjMkhQZhz8lkUhz8v/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="w-40 mx-auto bg-indigo-600 p-1 rounded-sm text-white"
                onClick={() => closeNav()}
              >
                Resume
              </a>
              {/* {!active ? (
                <li className="mt-4 mx-auto">
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
                <li className="mt-4 mx-auto">
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
              )} */}
            </div>
          </div>

          <ul className="hidden md:flex flex-row sm:w-5/12 xl:w-4/12 justify-between regular-font text-gray-500 items-center">
            <li>
              <Link href={"/"}>
                <a
                  className={
                    currentRoute === "/" ? `text-indigo-500 bold-font cat` : ""
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a
                  className={
                    currentRoute === "/about"
                      ? `text-indigo-500 bold-font cat`
                      : ""
                  }
                >
                  Skills
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/projects"}>
                <a
                  className={
                    currentRoute === "/projects"
                      ? `text-indigo-500 bold-font cat`
                      : ""
                  }
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/18ha80LXA0ooTUr1IjMkhQZhz8lkUhz8v/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 p-1 rounded-sm actual-font text-sm text-white"
              >
                Resume
              </a>
            </li>
            {/* {!active ? (
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
            )} */}
          </ul>
        </div>
        {/* </Fade> */}
      </Fragment>
    </>
  );
};

export default Navbar;
