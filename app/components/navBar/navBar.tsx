import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import Button from "../button";
import MenuIcon from "./menuIcon";
import MobileMenu from "./mobileMenu";

const StyledNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  children,
  to,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `mr-4 mb-3 p-1 font-sans text-xl lg:mb-0 lg:text-lg xl:mr-6 ${
          isActive
            ? "relative font-semibold after:absolute after:bottom-[3px] after:left-[4px] after:m-0 after:block after:h-[2px] after:w-[calc(100%_-_0.5rem)] after:bg-purple-600 after:content-[''] hover:text-gray-800"
            : "font-medium hover:text-gray-900"
        } text-gray-800 no-underline`
      }
      prefetch="intent"
    >
      {children}
    </NavLink>
  );
};

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const closedByMouseRef = useRef(false);
  const blurTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(blurTimerRef.current), []);

  const handleDismiss = () => {
    setShowMobileMenu(false);
    if (closedByMouseRef.current) {
      closedByMouseRef.current = false;
      // Wait for the leave transition: the dialog restores focus to the burger when it unmounts.
      blurTimerRef.current = setTimeout(() => {
        burgerButtonRef.current?.blur();
      }, 350);
    }
  };

  return (
    <nav className="relative flex w-full flex-nowrap items-center lg:items-baseline">
      <div className="shrink-0 grow">
        <Link to="/">
          <span className="inline-block text-left align-baseline font-sans text-xl font-semibold text-gray-800 lg:text-2xl">
            Yoga <span className="text-purple-600">by</span> Delphine
          </span>
        </Link>
      </div>
      <ul
        className={`hidden w-screen grow-0 list-none items-baseline bg-white pt-24 pl-12 lg:static lg:w-auto lg:bg-transparent lg:pt-0 lg:pl-0 xl:flex`}
      >
        <li>
          <StyledNavLink to="/">Accueil</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/schedule">Programme</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/gift-cards">Cartes-cadeaux</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/videos">Vidéos</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">A propos</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </li>
        <li>
          <Button
            as={Link}
            variant="outline"
            colorScheme="purple"
            to="/schedule"
            prefetch="intent"
            className="mt-2 lg:mt-0"
            responsive={false}
            size="base"
          >
            Réserver
          </Button>
        </li>
      </ul>
      <button
        ref={burgerButtonRef}
        className={`relative grow-0 self-end focus:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 xl:hidden`}
        onClick={() => {
          clearTimeout(blurTimerRef.current);
          setShowMobileMenu(true);
        }}
      >
        <MenuIcon open={showMobileMenu} />
        <span className="sr-only">Menu</span>
      </button>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={handleDismiss}
        closedByMouseRef={closedByMouseRef}
      />
    </nav>
  );
};

export default NavBar;
