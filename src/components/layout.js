import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = ({ className, children, mainWithFullWidth = false }) => (
  <div className="">
    <div
      className={`min-h-realsm lg:min-h-real grid grid-rows-layout  my-6 lg:my-12 mx-8 lg:mx-20`}
    >
      <header className="width-constraints">
        <NavBar />
      </header>
      <main className={mainWithFullWidth ? "w-full" : "width-constraints"}>
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default Layout;
