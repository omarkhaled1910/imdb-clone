import dynamic from "next/dynamic";
import ThreeDots from "@/assets/ThreeDots";
import React from "react";
import styled from "styled-components";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
interface Props {
  url?: string;
}
const Video: React.FC<Props> = ({ url }) => {
  return (
    <VideoElment
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/v=VO7mwIEos2A&ab_channel=IMDb"
    />
  );
};
const VideoElment = styled.iframe`
  border: none;
`;
export default Video;
