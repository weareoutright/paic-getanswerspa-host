import React from "react";

const arrowDown = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="arrow_downward_alt">
      <mask
        id="mask0_1_68"
        style={{ "mask-type": "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_68)">
        <path
          id="arrow_downward_alt_2"
          d="M12 24L0 12.9231L2.8 10.3385L10 16.9846V0H14V16.9846L21.2 10.3385L24 12.9231L12 24Z"
          fill="white"
        />
      </g>
    </g>
  </svg>
);

const svgs = {
  "arrow-downward-alt": arrowDown,
};

export const getSvg = (name) => {
  return svgs[name];
};
