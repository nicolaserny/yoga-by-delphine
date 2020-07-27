import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = ({ className, children }) => (
  <div className="min-h-realsm lg:min-h-real mx-8 lg:mx-20">
    <div
      className={`grid grid-rows-layout max-w-screen-xl my-6 lg:my-12 mx-auto ${className}`}
    >
      <header className="w-full">
        <NavBar />
      </header>
      <main className="self-center">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
