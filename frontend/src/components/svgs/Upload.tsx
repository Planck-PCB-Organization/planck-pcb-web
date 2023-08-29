import clsx from "clsx";
import { SvgProps } from "../../types/svgTypes";

const Upload = (props: SvgProps) => {
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
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
      />
    </svg>
  );
};

export default Upload;
