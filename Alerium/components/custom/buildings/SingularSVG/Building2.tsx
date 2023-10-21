import * as React from "react";
import { SVGProps } from "@/components/custom/buildings/SvgView";

const Building2 = ({ onClick }: SVGProps) => {
  // Define your path data
  const pathData = [
    "M4.33 108.452h247.395v622.396H4.33V108.452Z",
    "M22.559 133.843h247.396v622.396H22.559V133.843Z",
    "m269.955 564.007-18.23-24.565",
    "m252.313 302.002 17.642 25.2",
    "M251.725 301.811h178.386v237.631H251.725V301.811Z",
    "M269.955 327.202H448.34v237.63H269.955v-237.63Z",
    "m251.725 108.452 18.23 25.391",
    "m430.111 301.811 18.229 25.391",
    "m430.111 539.442 17.205 24.565",
    "m251.725 730.848 18.23 25.391",
    "m22.559 756.239-18.23-25.391",
    "M22.36 133.8 4.33 108.452",
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeMiterlimit={10}
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      viewBox="0 0 1000 1000"
    >
      <g onClick={onClick}>
        {pathData.map((d, index) => (
          <path
            key={index}
            fill="#fff"
            fillOpacity={0}
            stroke="#000"
            strokeLinecap="butt"
            strokeWidth={2.466}
            d={d}
          />
        ))}
      </g>
    </svg>
  );
};

export default Building2;
