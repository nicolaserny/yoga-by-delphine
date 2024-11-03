import React from "react";

const PageTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="mt-3 text-xl font-semibold text-gray-800 lg:mt-12 lg:text-2xl">
    {children}
  </h1>
);

export default PageTitle;
