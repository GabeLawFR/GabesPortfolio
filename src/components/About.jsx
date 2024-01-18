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
          Greetings! I am Gabriel Lawson, a recent graduate of FullStack
          Academy—an immersive online coding bootcamp. My educational journey
          through this demanding program has cultivated a profound passion for
          intricate problem-solving and a resolute commitment to crafting
          innovative solutions.
        </p>
        <br />
        <p className="text-xl text-gray-200">
          As a Software Developer, I bring forth a dedicated and motivated
          approach to my work, thriving within collaborative team environments.
          My expertise spans both front-end and back-end technologies, refined
          through hands-on projects and a steadfast commitment to continuous
          learning. My capacity to swiftly assimilate new skills has proven
          instrumental during the dynamic bootcamp experience.
        </p>
        <br />
        <p className="text-xl text-gray-200">
          I specialize in the optimization of tools and environments,
          approaching challenges with a harmonious blend of critical thinking,
          empathy, and patience. As a resilient and inventive collaborator, I
          excel in effective time-management and multitasking, always
          maintaining meticulous attention to detail.
        </p>
      </div>
      <div></div>
    </div>
  );
}
