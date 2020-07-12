import React from "react";
import { Link } from "gatsby";

const NavLink = ({ children, to }) => (
  <Link
    to={to}
    className="mr-8 text-lg font-medium no-underline hover:text-black text-gray-800"
    activeClassName="font-bold border-b-2 border-purple-500 hover:text-gray-800"
  >
    {children}
  </Link>
);

const NavBar = () => (
  <nav className="flex flex-no-wrap items-baseline w-full ">
    <span className="inline-block flex-grow flex-shrink-0 text-gray-800 text-lg font-semibold text-left align-baseline">
      Yoga <span className="text-purple-700">by</span> Delphine
    </span>
    <ul className="flex flex-grow-0 list-none items-baseline">
      <li>
        <NavLink to="/">Accueil</NavLink>
      </li>
      <li>
        <NavLink to="/agenda">Programme</NavLink>
      </li>
      <li>
        <NavLink to="/courses">Cours</NavLink>
      </li>
      <li>
        <NavLink to="/about">A propos</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
