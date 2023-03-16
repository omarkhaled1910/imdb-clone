import React from "react";
import styled from "styled-components";

interface Props {
  number: number;
  title: string;
  icon: JSX.Element;
}
export const Media: React.FC<Props> = ({ title, icon, number }) => {
  return (
    <MediaContainer>
      {icon}
      {`${number}   ${title}`}
    </MediaContainer>
  );
};
const MediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #3a3737;
  color: white;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 290px;
  @media only screen and (max-width: 1000px) {
    max-width: 100%;
    padding-block: 10px;
    flex-direction: row;
    gap: 10px;
  }
`;
