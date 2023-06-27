import React from "react";
import { SvgProps } from "../../types/svgTypes";
import clsx from "clsx";

const Check = (props: SvgProps) => {
  const { className, height, style, width } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={width || "24"}
      height={height || "24"}
      style={style}
      className={clsx([className], "w-6 h-6")}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

export default Check;
