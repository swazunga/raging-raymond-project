import React from "react";

function Wave() {
  return (
    <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
      className="waves"
      preserveAspectRatio="none"
      viewBox="0 24 150 28"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        ></path>
      </defs>
      <g className="parallax">
        <use x="48" fill="rgba(255,255,255,0.7" xlinkHref="#gentle-wave"></use>
        <use
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
          xlinkHref="#gentle-wave"
        ></use>
        <use
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
          xlinkHref="#gentle-wave"
        ></use>
        <use x="48" y="7" fill="#fff" xlinkHref="#gentle-wave"></use>
      </g>
    </svg>
  );
}

export default Wave;
