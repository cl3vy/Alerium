// React Peer Dependencies
import React from 'react';
// Types And Interfaces
import {SVGProps} from "@/components/custom/buildings/SvgView";

const Building3 = ({ onClick:}) => {
  return (
    <svg
      height="100%"
      strokeMiterlimit="10"
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      version="1.1"
      viewBox="0 0 1000 1000"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs />
      <a onClick={clickHandler}>
        <path
          d="M395.529 3.4283L891.497 3.4283L891.497 221.022L395.529 221.022L395.529 3.4283Z"
          fill="#ffffff"
          fillOpacity="0"
          fillRule="nonzero"
          opacity="1"
          stroke="#000000"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="2.46567"
        />
      </a>
      <a onClick={clickHandler}>
        <path
          d="M665.314 221.022L891.497 221.022L891.497 626.625L665.314 626.625L665.314 221.022Z"
          fill="#ffffff"
          fillOpacity="0"
          fillRule="nonzero"
          opacity="1"
          stroke="#000000"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="2.46567"
        />
      </a>
      <a onClick={clickHandler}>
        <path
          d="M891.497 626.625L856.228 656.548"
          fill="#ffffff"
          fillOpacity="0"
          fillRule="nonzero"
          opacity="1"
          stroke="#000000"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="2.46567"
        />
      </a>
      <a onClick={clickHandler}>
        <path
          d="M360.261 33.351L395.529 3.4283"
          fill="#ffffff"
          fillOpacity="0"
          fillRule="nonzero"
          opacity="1"
          stroke="#000000"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="2.46567"
        />
      </a>
      <a onClick={clickHandler}>
        <path
          d="M856.228 251.076L891.497 221.795"
          fill="none"
          opacity="1"
          stroke="#000000"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="2.46567"
        />
      </a>
      <a onClick={clickHandler}>
        <path
          d="M855.869 33.6468L890.814 4.43023"
          fill="none"
          opacity="1"
          stroke="#000000"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeWidth="2.46567"
        />
      </a>
      {/* Add more <a> elements for other <path> elements here */}
    </svg>
  );
};

export default Building3;
