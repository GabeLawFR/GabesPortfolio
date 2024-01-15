import React from "react";
import Avatar from "../assets/IMG/heroImageFix.jpeg";
import { LiaArrowRightSolid } from "react-icons/lia";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-purple-900"
    >
      <div className="max-w-screen-lg mx-auto mb-3 flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-20">
            FullStack Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Hi, I'm Gabe, a passionate full-stack developer with a keen eye for front-end aesthetics and a robust back-end foundation.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-fuchsia-500 to-purple-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <LiaArrowRightSolid size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Avatar}
            alt="myAvatar"
            className="rounded-2xl  mx-auto mb-5 w-3/6 md:w-2/4  ring-2 ring-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
