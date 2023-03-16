import { FlexCol } from "@/Components/common/common";
import MoviesList from "@/Components/MoviesList/MoviesList";
import { MoviesProvider } from "@/Hooks/useGetMovies";
import React from "react";
import styled from "styled-components";
import { Link, Typography } from "../movie-detail/[MID]";

const chartsLinks = [
  "Box Office",
  "Most Popular Movies",
  "top 250 movies",
  "Top Rated",
  "Most Popular Tv shows",
  "top 250 shows",
  "Most Popular Indian Movies",
];
const genreLinks = [
  "Action",
  "Adventure",
  "Drama",
  "Crime",
  "Comedy",
  "Romance",
  "Action",
  "Adventure",
  "Drama",
  "Crime",
  "Comedy",
  "Romance",
  "Action",
  "Adventure",
  "Drama",
  "Crime",
  "Comedy",
  "Romance",
  "Action",
  "Adventure",
  "Drama",
  "Crime",
  "Comedy",
  "Romance",
];

const Movies = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <MoviesProvider>
          <MoviesList />
        </MoviesProvider>
        <RightSideContainer>
          <LinksContainer borderBottom paddingBottom={"5px"}>
            <Typography marginBlock="25px">You have seen</Typography>
            <Typography marginBlock="10px">0/250 (0%)</Typography>
            <Typography fontSize="12px" marginBlock="0px">
              Hide Titles i have seen
            </Typography>
          </LinksContainer>
          <LinksContainer borderBottom paddingBottom={"30px"}>
            <Typography marginBlock="15px">Imdb Charts</Typography>
            {chartsLinks.map((link, i) => (
              <Link key={i}>{link}</Link>
            ))}
          </LinksContainer>
          <LinksContainer>
            <Typography marginBlock="25px">
              Top Rated Movies By Genre
            </Typography>
            {genreLinks.map((link, i) => (
              <Link key={i}>{link}</Link>
            ))}
          </LinksContainer>
        </RightSideContainer>
      </ContentContainer>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  max-width: 100vw;
  background-color: rgb(240, 240, 240);
  min-height: 100vh;
  padding-inline: 50px;

  @media only screen and (min-width: 1200px) {
    padding-inline: 150px;
  }
`;
const ContentContainer = styled.div`
  max-width: 1100px;
  display: flex;
  margin: auto;
`;
const LinksContainer = styled.div<{
  borderBottom?: boolean;
  paddingBottom?: string;
}>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: ${({ borderBottom }) => borderBottom && "1px solid lightGray"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  a,
  p {
    display: block;
  }
`;
const RightSideContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  background-color: rgba(203, 191, 191, 0.1);
  width: 22%;
  padding-inline: 15px;
  border-left: 4px solid lightgray;
  p {
    color: black;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
export default Movies;
