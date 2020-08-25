import React, { useState } from "react";
import { Link } from "gatsby";

const NavLink = ({ children, to, menuOpen }) => (
  <Link
    to={to}
    className={`${
      menuOpen ? "block" : ""
    } mr-4 xl:mr-6 p-1 mb-3 lg:mb-0 text-xl lg:text-lg font-medium no-underline hover:text-gray-900 text-gray-800`}
    {...(!menuOpen && {
      activeClassName: "font-semibold active-nav-link hover:text-gray-800",
    })}
  >
    {children}
  </Link>
);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex flex-no-wrap items-baseline w-full relative">
      <span className="inline-block flex-grow flex-shrink-0 text-gray-800 text-xl lg:text-2xl font-semibold text-left align-baseline">
        Yoga <span className="text-purple-600">by</span> Delphine
      </span>
      <ul
        className={`fixed z-30 inset-0 ${
          menuOpen ? "block" : "hidden"
        } lg:flex  lg:static flex-grow-0 list-none items-baseline w-screen lg:w-auto pl-12 pt-24 lg:pl-0 lg:pt-0 bg-white lg:bg-transparent `}
      >
        <li>
          <NavLink menuOpen={menuOpen} to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink menuOpen={menuOpen} to="/schedule/">
            Programme
          </NavLink>
        </li>
        <li>
          <NavLink menuOpen={menuOpen} to="/about/">
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink menuOpen={menuOpen} to="/contact/">
            Contact
          </NavLink>
        </li>
        <li>
          <Link to="/schedule/" className="secondary inline-block mt-2 lg:mt-0">
            Réserver
          </Link>
        </li>
      </ul>
      <button
        className={`lg:hidden ${
          menuOpen ? "fixed top-0 right-0 mr-8 mt-6" : "relative"
        } z-50  flex-grow-0 self-end focus:outline-none `}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={
              menuOpen
                ? "M24.848 23.056L36.112 34.32l-1.792 1.792-11.264-11.264-11.264 11.264L10 34.32l11.264-11.264L10 11.792 11.792 10l11.264 11.264L34.32 10l1.792 1.792-11.264 11.264z"
                : "M36.627 12.005c.112.015.141.015.251.043a1.507 1.507 0 011.121 1.388c.023.561-.278 1.1-.767 1.374-.149.082-.311.14-.478.168-.112.02-.141.017-.254.022h-28c-.113-.005-.142-.002-.253-.022a1.505 1.505 0 01-1.086-.803 1.496 1.496 0 011.086-2.153c.111-.02.14-.017.253-.022h28l.127.005zM36.627 21.005c.112.015.141.015.251.043a1.507 1.507 0 011.014.893c.209.52.104 1.129-.266 1.55a1.497 1.497 0 01-.872.487c-.112.02-.141.017-.254.022h-28c-.113-.005-.142-.002-.253-.022a1.511 1.511 0 01-.479-.168 1.517 1.517 0 01-.756-1.501 1.496 1.496 0 01.45-.892c.215-.206.491-.345.785-.395.111-.02.14-.017.253-.022h28l.127.005zM36.627 30.005c.112.015.141.015.251.043.288.075.551.237.748.461.37.421.475 1.03.266 1.55a1.504 1.504 0 01-1.138.919c-.112.02-.141.017-.254.022h-28c-.113-.005-.142-.002-.253-.022a1.505 1.505 0 01-1.024-.692 1.507 1.507 0 01.151-1.777 1.497 1.497 0 01.873-.487c.111-.02.14-.017.253-.022h28l.127.005z"
            }
            className="fill-gray-800"
          />
        </svg>
        <span className="sr-only">Menu</span>
      </button>
    </nav>
  );
};

export default NavBar;
