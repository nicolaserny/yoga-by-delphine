import React from "react";
import NavBar from "./navBar";

const Layout = ({ className, children }) => (
  <div
    className={`grid grid-rows-layout max-w-screen-xl my-12 mx-auto ${className}`}
  >
    <header className="w-full">
      <NavBar />
    </header>
    <main>{children}</main>
    <footer>
      <span> footer</span>
    </footer>
  </div>
);

export default Layout;
