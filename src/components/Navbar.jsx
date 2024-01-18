import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white backdrop-blur-md fixed z-50">
      <div>
        <h1 className="text-5xl ml-2">Gabe Lawson</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200 hover:text-xl"
          >
            <Link to={link} smooth duration={500} offset={-50}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          onClick={() => setNav(!nav)}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 text-gray-200"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 w-3/5 text-center cursor-pointer my-4 py-6 capitalize text-4xl hover:scale-125 duration-200 rounded-xl shadow-md shadow-purple-300 backdrop-blur-sm"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
