"use client"
// React Peer Dependencies
import React from "react";
// Types And Interfaces
import {SVGProps} from "@/components/custom/buildings/SvgView";

function Building1({onClick: clickHandler, className}: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      clipRule="evenodd"
      viewBox="0 0 1000 1000"
      className={className}
    >
      <g>
        <a onClick={clickHandler} >
          <path
            fill="#fff"
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M395.529 3.428h495.968v217.594H395.529V3.428z"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="#fff"
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M665.314 221.022h226.183v405.603H665.314V221.022z"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="#fff"
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M891.497 626.625l-35.269 29.923"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="#fff"
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M360.261 33.351l35.268-29.923"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M856.228 251.076l35.269-29.281"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M855.869 33.647L890.814 4.43"
          ></path>
        </a>
      </g>
      <g>
        <a onClick={clickHandler} >
          <path
            fill="#fff"
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M360.261 33.351h495.967v217.594H360.261V33.351z"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="#fff"
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M630.223 251.076l34.431-29.281"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="#fff"
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M360.322 250.623l35.565-29.94"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="#fff"
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M630.045 250.945h226.183v405.603H630.045V250.945z"
          ></path>
        </a>
        <a onClick={clickHandler} >
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth="2.466"
            d="M665.495 626.22l-35.157 30.147"
          ></path>
        </a>
      </g>
      <clipPath>
        <path d="M0 0H1000V1000H0z"></path>
      </clipPath>
    </svg>
  );
}

export default Building1;
