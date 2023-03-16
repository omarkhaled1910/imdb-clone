import React from "react";
interface Props {
  color?: string;
  height?: string;
  width?: string;
}

const Arrow: React.FC<Props> = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      fill={color || "white"}
      id="iconContext-arrow-drop-down"
      viewBox="0 0 24 24"
      role="presentation"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
    </svg>
  );
};

export default Arrow;
