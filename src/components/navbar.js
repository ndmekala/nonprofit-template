import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";

const links = [
  {
    text: "Home",
    route: "/",
    button: false,
  },
  {
    text: "Blog",
    route: "/blog",
    button: false,
  },
  {
    text: "Give Now",
    route: "/give",
    button: true,
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = function () {
    let stateCopy = !menuOpen;
    setMenuOpen(stateCopy);
  };
  return (
    <nav className="w-full">
      <ul className={`flex-wrap sm:flex justify-end py-8 mr-8`}>
        <li className="h-6 block relative mt-4 ml-4 sm:hidden sm:mt-0" onClick={toggleMenuOpen}>
            <div className="w-8 h-8 absolute top-0 right-0">
                <span className="block bg-purple-500 rounded-sm mt-0.5 w-7 h-1"></span>
                <span className="block bg-purple-500 rounded-sm mt-1 w-7 h-1"></span>
                <span className="block bg-purple-500 rounded-sm mt-1 w-7 h-1"></span>
            </div>
        </li>
        {links.map((link) => (
          <li className={`text-center w-100 ml-4 mt-4 ${menuOpen ? "block" : "hidden"} sm:block sm:w-auto sm:text-left`}>
            <Link
              key={link.text}
              className={`py-2 ${
                link.button
                  ? "px-4 text-white bg-purple-500 hover:bg-purple-200 hover:text-purple-500"
                  : "text-purple-500 hover:text-purple-800 px-1"
              }`}
              to={link.route}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
