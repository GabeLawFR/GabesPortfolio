import React from "react";
import OnlineGallerie from "../assets/Projects/OGtrim.png";
import Strangers from "../assets/Projects/Strangers.png";
import PuppyBowl from "../assets/Projects/PuppyBowl.png";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      title: "The Online Gallery",
      info: "Collaborated with an international team of developers to create a dynamic online store for art enthusiasts using React, JavaScript, TailwindCSS, and PostgreSQL",
      src: OnlineGallerie,
      gitLink: "https://github.com/Groupe3-Capstone-Project/CapstoneProject",
    },
    {
      id: 2,
      title: "Stranger's Things",
      info: "A clone of Craigslist made in React, developed using JavaScript and styled with ChakraUI",
      src: Strangers,
      gitLink: "https://github.com/GabeLawFR/StrangersThings",
      demoLink: "https://strangers-things-gl.netlify.app/",
    },
    {
      id: 3,
      title: "PuppyBowl",
      info: "Developed and design the front-end of a PuppyBowl Roaster Manager using React, JavaScript and CSS",
      src: PuppyBowl,
      gitLink: "https://github.com/GabeLawFR/PuppyBowl_React",
      demoLink: "https://puppybowl-react-gl.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-red-500 to-blue-500 w-full text-gray-200 md:h-screen pt-2"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here :</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, info, gitLink, demoLink }) => (
            <div key={id} className=" p-1 flex flex-col h-full shadow-md shadow-blue-900 border rounded-lg hover:border-black hover:scale-105 duration-300">
              <div className="p-2 text-center">
                <h2 className="text-2xl font-bold text-white pb-2">{title}</h2>
              </div>
              <img
                src={src}
                alt=""
                className="w-full h-auto max-h-40 object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="p-2 pt-4 flex-grow">
                <p className="text-gray-200">{info}</p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 text-center rounded-md border hover:bg-black hover:border-black duration-300 "
                >
                  Demo
                </a>
                <a
                  href={gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 text-center rounded-md border  hover:bg-black hover:border-black duration-300"
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
