import Share from "@/assets/Share";
import useGetMovies from "@/Hooks/useGetMovies";
import { Title, Typography } from "@/pages/movie-detail/[MID]";
import Movies from "@/pages/movies";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { Container, FlexCol } from "../common/common";
import MovieItem from "../MovieItem/MovieItem";
import SelectInput from "../SelectInput/SelectInput";

const opts = [
  { label: "Ranking", value: "Ranking" },
  { label: "Latest", value: "ar" },
];

const tableHeaders = ["", "Rank & Title", "Imdb Rating", "Your Rating", ""];
const MoviesList = () => {
  const { Movies, updateCount, currentCount } = useGetMovies();
  return (
    <MovieListContainer>
      <Typography>IMDB Charts</Typography>
      <TopPartContainer>
        <div>
          <Title marginBlock="0px">IMDB Top 250 Movies</Title>
          <Typography marginBlock="5px">
            IMDB Top 250 Movies as rated by regular imdb users
          </Typography>
        </div>
        <FlexCol>
          <Share color="rgb(114, 114, 114)" />
          <Typography marginBlock="10px">SHare</Typography>
        </FlexCol>
      </TopPartContainer>
      <Container justifyContent="space-between">
        <Typography>Showing {currentCount} Movies</Typography>
        <Container width="180px" gap="10px">
          <Typography> Sortby: </Typography>
          <SelectInput
            options={opts}
            onChange={function (e: React.FormEvent<Element>): void {
              throw new Error("Function not implemented.");
            }}
            borderStyle="1px solid black"
            borderRadius="10px"
            height="25px"
          />
        </Container>
      </Container>
      <MoviesTableContainer>
        <MoviesTableHeaders>
          <MoviesTableRow>
            {tableHeaders.map((header, i) => (
              <MoviesTableHeader key={i}>{header}</MoviesTableHeader>
            ))}
          </MoviesTableRow>
        </MoviesTableHeaders>
        <MoviesTableBody>
          {Movies?.map((movie, i) => (
            <MovieItem
              movie={movie}
              index={i + 1}
              key={movie?.id || i}
              even={i % 2 ? true : false}
            />
          ))}
        </MoviesTableBody>
      </MoviesTableContainer>
      <Container justifyContent="center">
        <MoreButton onClick={updateCount}>Load More...</MoreButton>
      </Container>
    </MovieListContainer>
  );
};
const MoreButton = styled.button`
  padding: 10px;
  border: none;
  margin-top: 15px;
  cursor: pointer;
`;
const MovieListContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  h2,
  p {
    color: black !important;
  }
`;
const MoviesTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const MoviesTableHeader = styled.th`
  text-align: start;
  padding-inline: 2px;
`;
const MoviesTableHeaders = styled.thead`
  width: 100%;
`;
const MoviesTableBody = styled.tbody`
  width: 100%;
  margin-top: 50px;
`;

const MoviesTableRow = styled.tr`
  width: 100%;
`;
const TopPartContainer = styled.div`
  /* max-width: 1000px; */
  margin: auto;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
  margin-bottom: 10px;
`;

export default MoviesList;
