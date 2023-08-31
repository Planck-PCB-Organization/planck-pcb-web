import clsx from "clsx";
import { SvgProps } from "../../types/svgTypes";

const Chevron = (props: SvgProps) => {
  const { className, height, style, width } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={width || "24"}
      height={height || "24"}
      style={style}
      className={clsx([className], "w-6 h-6")}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default Chevron;
