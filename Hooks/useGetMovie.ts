import React, { useEffect, useState } from "react";

export type TMovie = {
  id: string;
  description: string;
  director: string[];
  genre: string[];
  image: string[][];
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  writers: string[];
  year: number;
};
const useGetMovie = (id: string) => {
  const [Movie, setMovie] = useState<TMovie | null>(null);
  useEffect(() => {
    if (!id) return;
    fetch(`https://imdb-top-100-movies1.p.rapidapi.com/?id=${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      })
      .catch((err) => console.error(err));
  }, [id]);
  return Movie;
};
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
  },
};

export default useGetMovie;
