import React from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { Link } from "gatsby";

const NavLink: React.FC<{ to: string; onDismiss: () => void }> = ({
  children,
  to,
  onDismiss,
}) => (
  <Link
    to={to}
    className={`block p-3 pl-12  text-xl font-medium no-underline hover:bg-gray-100 hover:text-gray-900 text-gray-800`}
    onClick={onDismiss}
  >
    {children}
  </Link>
);

const MobileMenu: React.FC<{ isOpen: boolean; onDismiss: () => void }> = ({
  isOpen,
  onDismiss,
}) => {
  return (
    <DialogOverlay
      className="fixed inset-0 bg-white"
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContent aria-label="Menu">
        <button
          className={`fixed top-8 right-6 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2`}
          onClick={onDismiss}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.848 23.056L36.112 34.32l-1.792 1.792-11.264-11.264-11.264 11.264L10 34.32l11.264-11.264L10 11.792 11.792 10l11.264 11.264L34.32 10l1.792 1.792-11.264 11.264z"
              className="fill-gray-800"
            />
          </svg>
          <span className="sr-only">Menu</span>
        </button>
        <ul className={`block list-none pt-24`}>
          <li>
            <NavLink to="/" onDismiss={onDismiss}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule/" onDismiss={onDismiss}>
              Programme
            </NavLink>
          </li>
          <li>
            <NavLink to="/gift-cards/" onDismiss={onDismiss}>
              Cartes-cadeaux
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/" onDismiss={onDismiss}>
              A propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact/" onDismiss={onDismiss}>
              Contact
            </NavLink>
          </li>
          <li>
            <Link
              to="/schedule/"
              onClick={onDismiss}
              className="secondary inline-block ml-12 mt-3"
            >
              Réserver
            </Link>
          </li>
        </ul>
      </DialogContent>
    </DialogOverlay>
  );
};

export default MobileMenu;
