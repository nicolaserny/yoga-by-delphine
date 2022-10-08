import React from "react";
import { NavBar } from "./navBar";
import Footer from "./footer";
import Announcement from "./announcement";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <Announcement />
    <div
      className={`min-h-realsm lg:min-h-real grid grid-rows-layout  my-6 lg:my-12 mx-8 lg:mx-20 xl:mx-0`}
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
