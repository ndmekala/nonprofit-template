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
    text: "Sermons",
    route: "/sermons",
    button: false,
  },
  {
    text: "About",
    route: "/about",
    button: false,
  },
  {
    text: "Ministries",
    route: "/ministries",
    button: false,
  },
  {
    text: "Contact",
    route: "/contact",
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
    <nav className="w-full bg-sienna">
      <ul className={`flex-wrap sm:flex justify-end py-2 mr-8`}>
        <li className="h-6 block relative ml-4 my-2 sm:hidden sm:mt-0" onClick={toggleMenuOpen}>
            <div className="w-8 h-8 absolute top-0 right-0">
                <span className="block bg-bone rounded-sm mt-0.5 w-7 h-1"></span>
                <span className="block bg-bone rounded-sm mt-1 w-7 h-1"></span>
                <span className="block bg-bone rounded-sm mt-1 w-7 h-1"></span>
            </div>
        </li>
        {links.map((link) => (
          <li className={`text-center w-100 my-3 ml-4 ${menuOpen ? "block" : "hidden"} sm:block sm:w-auto sm:text-left`}>
            <Link
              key={link.text}
              className={`py-2 ${
                link.button
                  ? "px-4 text-bone bg-cadet hover:bg-bone hover:text-cadet"
                  : "text-bone hover:text-cadet px-1"
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