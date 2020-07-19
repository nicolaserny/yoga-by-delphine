import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = ({ className, children }) => (
  <div
    className={`grid grid-rows-layout max-w-screen-xl my-12 mx-auto ${className}`}
  >
    <header className="w-full">
      <NavBar />
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
