import React, { useState } from "react";
import { NavLink, Link } from "@remix-run/react";
import MobileMenu from "./mobileMenu";

const StyledNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  children,
  to,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `mr-4 xl:mr-6 p-1 mb-3 lg:mb-0 text-xl lg:text-lg ${
          isActive
            ? "font-semibold active-nav-link hover:text-gray-800"
            : "font-medium hover:text-gray-900"
        } no-underline  text-gray-800`
      }
      prefetch="intent"
    >
      {children}
    </NavLink>
  );
};

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="flex flex-nowrap items-baseline w-full relative">
      <span className="inline-block grow shrink-0 text-gray-800 text-xl lg:text-2xl font-semibold text-left align-baseline">
        Yoga <span className="text-purple-600">by</span> Delphine
      </span>
      <ul
        className={`hidden xl:flex  lg:static grow-0 list-none items-baseline w-screen lg:w-auto pl-12 pt-24 lg:pl-0 lg:pt-0 bg-white lg:bg-transparent `}
      >
        <li>
          <StyledNavLink to="/">Accueil</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/schedule/">Programme</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/gift-cards/">Cartes-cadeaux</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about/">A propos</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact/">Contact</StyledNavLink>
        </li>
        <li>
          <Link
            to="/schedule/"
            prefetch="intent"
            className="secondary inline-block mt-2 lg:mt-0"
          >
            Réserver
          </Link>
        </li>
      </ul>
      <button
        className={`xl:hidden relative grow-0 self-end focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2`}
        onClick={() => setShowMobileMenu(true)}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.627 12.005c.112.015.141.015.251.043a1.507 1.507 0 011.121 1.388c.023.561-.278 1.1-.767 1.374-.149.082-.311.14-.478.168-.112.02-.141.017-.254.022h-28c-.113-.005-.142-.002-.253-.022a1.505 1.505 0 01-1.086-.803 1.496 1.496 0 011.086-2.153c.111-.02.14-.017.253-.022h28l.127.005zM36.627 21.005c.112.015.141.015.251.043a1.507 1.507 0 011.014.893c.209.52.104 1.129-.266 1.55a1.497 1.497 0 01-.872.487c-.112.02-.141.017-.254.022h-28c-.113-.005-.142-.002-.253-.022a1.511 1.511 0 01-.479-.168 1.517 1.517 0 01-.756-1.501 1.496 1.496 0 01.45-.892c.215-.206.491-.345.785-.395.111-.02.14-.017.253-.022h28l.127.005zM36.627 30.005c.112.015.141.015.251.043.288.075.551.237.748.461.37.421.475 1.03.266 1.55a1.504 1.504 0 01-1.138.919c-.112.02-.141.017-.254.022h-28c-.113-.005-.142-.002-.253-.022a1.505 1.505 0 01-1.024-.692 1.507 1.507 0 01.151-1.777 1.497 1.497 0 01.873-.487c.111-.02.14-.017.253-.022h28l.127.005z"
            className="fill-gray-800"
          />
        </svg>
        <span className="sr-only">Menu</span>
      </button>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </nav>
  );
};

export default NavBar;
