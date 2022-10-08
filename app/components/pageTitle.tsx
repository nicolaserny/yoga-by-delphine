import React from "react";

const PageTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="mt-3 lg:mt-12 text-gray-800 text-xl lg:text-2xl font-semibold">
    {children}
  </h1>
);

export default PageTitle;
