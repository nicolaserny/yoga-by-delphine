import React from "react";
import { NavBar } from "./navBar";
import Footer from "./footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <div
      className={`mx-8 my-6 grid min-h-realsm  grid-rows-layout lg:mx-20 lg:my-12 lg:min-h-real xl:mx-0`}
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
