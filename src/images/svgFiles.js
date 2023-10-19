import React from "react";

const arrowDown = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="arrow_downward_alt">
      <mask
        id="mask0_1_68"
        style={{ maskType: "alpha" }}
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

const openButton = (
  <svg
    width="24"
    height="25"
    viewBox="-5.5 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="close">
      <mask
        id="mask0_31_382"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="25"
      >
        <rect id="Bounding box" y="0.5" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_31_382)">
        <path
          id="close_2"
          d="M12.9899 21.4095L11.01 21.4095L11.01 13.4899L3.09041 13.4899V11.5101L11.01 11.5101L11.01 3.59045L12.9899 3.59045L12.9899 11.5101L20.9095 11.5101V13.4899L12.9899 13.4899L12.9899 21.4095Z"
          fill="white"
        />
      </g>
    </g>
  </svg>
);

const arrowBack = (
  <svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="arrow_back_ios">
      <mask
        id="mask0_38_462"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="12"
      >
        <rect
          id="Bounding box"
          y="12"
          width="12"
          height="24"
          transform="rotate(-90 0 12)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_38_462)">
        <path
          id="arrow_back_ios_2"
          d="M22 2L12 12L2 2L3.775 0.224999L12 8.45L20.225 0.225L22 2Z"
          fill="#EAB0C1"
        />
      </g>
    </g>
  </svg>
);

const arrowForward = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
  >
    <mask
      id="mask0_38_459"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="12"
    >
      <rect
        x="24"
        width="12"
        height="24"
        transform="rotate(90 24 0)"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_38_459)">
      <path
        d="M2 10L12 -4.37114e-07L22 10L20.225 11.775L12 3.55L3.775 11.775L2 10Z"
        fill="white"
      />
    </g>
  </svg>
);

const closeButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="-5.5 0 24 25"
    fill="none"
  >
    <mask
      id="mask0_31_295"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="25"
    >
      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_31_295)">
      <path
        d="M11.01 13.4899L3.09041 13.4899V11.5101L11.01 11.5101L12.9899 11.5101L20.9095 11.5101V13.4899L12.9899 13.4899L11.01 13.4899Z"
        fill="white"
      />
    </g>
  </svg>
);

const svgs = {
  "arrow-downward-alt": arrowDown,
  "open-button": openButton,
  "arrow-back": arrowBack,
  "arrow-forward": arrowForward,
  "close-button": closeButton,
};

export const getSvg = (name) => {
  return svgs[name];
};
