import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-purple-900 to-red-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-48 sm:mt-0 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400">
            About Me
          </p>
        </div>
      <p className="text-xl mt-20 text-gray-200">
        Software Developer, dedicated and motivated team-player, yearning to
        optimize tools and work environment. Thrives to solve complex problems,
        may they be human or technical, with critical-thinking, empathy and
        patience. Resilient creative collaborator, effective in time-management
        and multitasking while attentive to details.
      </p>
      <br />
      <p className="text-xl
      text-gray-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        voluptate ea ratione magnam nesciunt fugiat esse voluptatum commodi ab,
        minus itaque id, nam natus, nostrum eveniet exercitationem sit non
        repellat neque suscipit beatae qui dolore perferendis? Tempora ad ipsa
        veritatis, tempore magni nam et minima quisquam, nesciunt unde culpa
        fugiat.
      </p>
      </div>
    </div>
  );
}
