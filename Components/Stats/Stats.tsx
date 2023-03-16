import BlueFav from "@/assets/BlueFav";
import Fav from "@/assets/Fav";
import Popular from "@/assets/Popular";
import { Typography } from "@/pages/movie-detail/[MID]";
import React from "react";
import styled from "styled-components";
import { Container } from "../common/common";
interface Props {
  showHeader?: boolean;
}
const Stats: React.FC<Props> = ({ showHeader }) => {
  return (
    <StatsContainer>
      <StatsItem>
        {showHeader && <Typography>Imdb Rating</Typography>}
        <Container>
          <Typography marginBlock="0px">8.3 /10</Typography>
          <Fav />
        </Container>
      </StatsItem>
      <StatsItem>
        {showHeader && <Typography>Your Rating</Typography>}
        <Container>
          <Typography marginBlock="0px">8.3 /10</Typography>
          <BlueFav />
        </Container>
      </StatsItem>
      <StatsItem>
        {showHeader && <Typography>Popularity</Typography>}
        <Container>
          <Typography marginBlock="0px">8.3 /10</Typography>
          <Popular />
        </Container>
      </StatsItem>
    </StatsContainer>
  );
};
const StatsContainer = styled.div`
  display: flex;
  gap: 30px;
  max-width: 350px;
  align-items: center;
`;
const StatsItem = styled.div`
  flex-direction: column;
`;

export default Stats;
