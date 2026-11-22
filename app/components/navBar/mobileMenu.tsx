import { Dialog, DialogPanel } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "../button";
import MenuIcon from "./menuIcon";

const NavLink: React.FC<{
  children: React.ReactNode;
  to: string;
  onDismiss: () => void;
}> = ({ children, to, onDismiss }) => (
  <Link
    to={to}
    className={`block p-3 pl-12 text-xl font-medium text-gray-800 no-underline hover:bg-gray-100 hover:text-gray-900`}
    onClick={onDismiss}
    prefetch="intent"
  >
    {children}
  </Link>
);

const MobileMenu: React.FC<{
  isOpen: boolean;
  onDismiss: () => void;
  closedByMouseRef: React.RefObject<boolean>;
}> = ({ isOpen, onDismiss, closedByMouseRef }) => {
  // Starts as a burger, then morphs into an X once mounted (and back on close).
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => {
      cancelAnimationFrame(id);
      setShown(false);
    };
  }, [isOpen]);

  return (
    <Dialog
      transition
      open={isOpen}
      onClose={onDismiss}
      className="z-50 transition duration-300 ease-out data-closed:opacity-0 motion-reduce:transition-none"
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="fixed inset-0 bg-white"
        onMouseDown={() => {
          closedByMouseRef.current = true;
        }}
        onTouchStart={() => {
          closedByMouseRef.current = true;
        }}
      >
        <DialogPanel aria-label="Menu">
          <button
            className={`fixed top-6 right-8 -m-3 p-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 lg:top-12 lg:right-[5rem]`}
            onClick={onDismiss}
          >
            <MenuIcon open={shown} />
            <span className="sr-only">Menu</span>
          </button>
          <ul className={`block list-none pt-24`}>
            <li>
              <NavLink to="/" onDismiss={onDismiss}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/schedule" onDismiss={onDismiss}>
                Programme
              </NavLink>
            </li>
            <li>
              <NavLink to="/gift-cards" onDismiss={onDismiss}>
                Cartes-cadeaux
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" onDismiss={onDismiss}>
                Vidéos
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onDismiss={onDismiss}>
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onDismiss={onDismiss}>
                Contact
              </NavLink>
            </li>
            <li>
              <Button
                as={Link}
                variant="outline"
                colorScheme="purple"
                to="/schedule"
                onClick={onDismiss}
                className="mt-3 ml-12"
                responsive={false}
                size="xlarge"
                prefetch="intent"
              >
                Réserver
              </Button>
            </li>
          </ul>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileMenu;
