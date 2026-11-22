import React from "react";
import Footer from "./footer";
import { NavBar } from "./navBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <div
      className={`grid-rows-layout mx-8 mt-6 grid flex-1 lg:mx-20 lg:mt-12 xl:mx-0`}
    >
      <header className="width-constraints">
        <NavBar />
      </header>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
