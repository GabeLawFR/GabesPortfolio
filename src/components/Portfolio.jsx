import React from "react";
import OnlineGallerie from "../assets/Projects/OnlineGallerie.png";
import Strangers from "../assets/Projects/Strangers.png";
import PuppyBowl from "../assets/Projects/PuppyBowl.png";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: OnlineGallerie,
      gitLink: "https://github.com/Groupe3-Capstone-Project/CapstoneProject",
    },
    {
      id: 2,
      src: Strangers,
      gitLink: "https://github.com/GabeLawFR/StrangersThings",
      demoLink: "https://strangers-things-gl.netlify.app/",
    },
    {
      id: 3,
      src: PuppyBowl,
      gitLink: "https://github.com/GabeLawFR/PuppyBowl_React",
      demoLink: "https://puppybowl-react-gl.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-red-500 to-blue-500 w-full text-gray-200 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, gitLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
