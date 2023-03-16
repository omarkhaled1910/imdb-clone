import React from "react";
interface Props {
  color?: string;
}
const WatchListIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      id="iconContext-watchlist"
      viewBox="0 0 24 24"
      fill={color || "white"}
      role="presentation"
    >
      <path
        d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
        fill={color || "white"}
      ></path>
    </svg>
  );
};

export default WatchListIcon;
