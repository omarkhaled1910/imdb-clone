import BlueFav from "@/assets/BlueFav";
import Fav from "@/assets/Fav";
import WatchListIcon from "@/assets/WatchListIcon";
import { TMovie } from "@/Hooks/useGetMovie";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Container } from "../common/common";

interface Props {
  even?: boolean;
  index: number;
  movie: TMovie;
}
const MovieItem: React.FC<Props> = ({ even, index, movie }) => {
  const MovieItemContainer = styled.tr`
    max-width: 100%;
    background-color: ${even ? "white" : "#f6f6f5"};
    height: 75px;
    padding-block: 10px;
    cursor: pointer;
  `;
  const router = useRouter();
  return (
    <>
      <MovieItemContainer
        onClick={() => router.push(`movie-detail/${movie?.id || "movie"}`)}
      >
        <MovieItemCell width="40px">
          <Image
            width={60}
            height={70}
            src={
              movie?.thumbnail ||
              "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg"
            }
            alt={""}
          />
        </MovieItemCell>

        <MovieItemCell paddingInline="15px" width="375px">
          {index}. {movie?.title || "MovieItem"}
        </MovieItemCell>
        <MovieItemCell textAlign="center" width="90px">
          <Container>
            <Fav />
            {movie?.rating || "9"}
          </Container>
        </MovieItemCell>

        <MovieItemCell textAlign="center" width="90px">
          <BlueFav />
        </MovieItemCell>

        <MovieItemCell width="50px">
          <WatchListIcon color={"lightGray"} />
        </MovieItemCell>
      </MovieItemContainer>
    </>
  );
};
const MovieItemCell = styled.td<{
  width: string;
  textAlign?: string;
  paddingInline?: string;
}>`
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  height: 100%;
  padding-inline: ${({ paddingInline }) => paddingInline};
`;
export default MovieItem;
