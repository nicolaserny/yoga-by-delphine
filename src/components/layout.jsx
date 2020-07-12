import React from "react";

const Layout = ({ className, children }) => (
  <div
    className={`grid grid-rows-layout max-w-screen-xl my-12 mx-auto ${className}`}
  >
    {children}
  </div>
);

export default Layout;
