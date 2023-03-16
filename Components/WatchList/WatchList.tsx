import Arrow from "@/assets/Arrow";
import Plus from "@/assets/plus";
import { Typography } from "@/pages/movie-detail/[MID]";
import React from "react";
import styled from "styled-components";

const WatchList = () => {
  return (
    <Container>
      <Item width="90%">
        <Plus />
        <IconContainer>
          <Typography marginBlock="5px"> Add to Watch List</Typography>
          <Typography fontSize={"12px"} marginBlock="1px">
            {" "}
            added by 2555 users
          </Typography>
        </IconContainer>
      </Item>
      <Item width="8%">
        <Arrow width={"60px"} height={"60px"} />
      </Item>
    </Container>
  );
};
const Container = styled.div<{ justifyContent?: string; gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "10px"};
  /* height: 35px; */
  padding-block: 20px;
  justify-content: ${({ justifyContent }) => justifyContent || "start"};
  width: 100%;
  height: 50px;
`;
const Item = styled.div<{ width: string; gap?: string }>`
  width: ${({ width }) => width};
  background-color: #3f3a3a;
  padding-inline: 15px;
  height: 100%;
  padding-block: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 3px;
`;
const IconContainer = styled.div``;
export default WatchList;
