import React from "react";

const bar =
  "origin-center transition-all duration-300 ease-out [transform-box:fill-box] motion-reduce:transition-none";

const MenuIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g className="stroke-gray-800" strokeWidth="3" strokeLinecap="round">
      <line
        x1="9"
        x2="37"
        y1="13.5"
        y2="13.5"
        className={`${bar} ${open ? "translate-y-[9px] rotate-45" : ""}`}
      />
      <line
        x1="9"
        x2="37"
        y1="22.5"
        y2="22.5"
        className={`${bar} ${open ? "scale-x-0 opacity-0" : ""}`}
      />
      <line
        x1="9"
        x2="37"
        y1="31.5"
        y2="31.5"
        className={`${bar} ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
      />
    </g>
  </svg>
);

export default MenuIcon;
