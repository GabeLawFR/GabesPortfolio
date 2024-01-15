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
      <p className="text-xl text-gray-200">
      Hi ! 
        My name is Gabriel Lawson, recently graduated from the rigorous online coding bootcamp FullStack Academy. Armed with a love for learning, teamwork and commitment to creating innovative solutions, my coding adventure has equipped me with a robust skill set encompassing both front-end and back-end technologies. I have a knack for quickly absorbing new skills, a trait that proved invaluable during the immersive bootcamp experience, and a will to always learn more.
      </p>
      <br />
      <p className="text-xl
      text-gray-200">
        Software Developer, dedicated and motivated team-player, yearning to
        optimize tools and work environment. I thrives to solve complex problems,
        may they be human or technical, with critical-thinking, empathy and
        patience. Resilient creative collaborator, effective in time-management
        and multitasking while attentive to details.
      </p>
      </div>
    </div>
  );
}
