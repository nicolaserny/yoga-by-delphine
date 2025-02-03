import React from "react";
import Footer from "./footer";
import { NavBar } from "./navBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <div
      className={`min-h-realsm grid-rows-layout lg:min-h-real mx-8 my-6 grid lg:mx-20 lg:my-12 xl:mx-0`}
    >
      <header className="width-constraints">
        <NavBar />
      </header>
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
