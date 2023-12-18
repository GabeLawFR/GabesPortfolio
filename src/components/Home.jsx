import React from "react";
import Avatar from "../assets/IMG/AvatarImage.png";
import { LiaArrowRightSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div
      name="home"
      class="h-screen w-full bg-gradient-to-b from-black via-black to-purple-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">FullStack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm super cool, nice and efficient, and also French with a capital f
          </p>

          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-fuchsia-500 to-purple-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 px-1">
                <LiaArrowRightSolid />
              </span>
            </button>
          </div>
        </div>

        <div>
            <img src={Avatar} alt="myAvatar" className="rounded-2xl mx-auto w-2/3 md:w-2/4"/>
        </div>
      </div>
    </div> 
  );
}
