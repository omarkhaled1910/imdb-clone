/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TMovie } from "./useGetMovie";

type MoviesContextType = {
  Movies: TMovie[];
  updateCount: () => void;
  currentCount: number;
};

const MoviesContext = createContext<MoviesContextType | null>(null);

export const MoviesProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null => {
  const [count, setCount] = useState(25);
  const [movies, setMovies] = useState<TMovie[]>([]);
  const value = useMemo(
    () => ({
      Movies: movies,
      updateCount: () => setCount((old) => old + 5),
      currentCount: count,
    }),
    [count, movies]
  );
  useEffect(() => {
    if (movies.length === count) return;
    fetch(
      `https://imdb-top-${count}-movies1.p.rapidapi.com/?limit=${count}`,
      options(count)
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies(response);
      })
      .catch((err) => console.error(err));
  }, [count]);

  return (
    <MoviesContext.Provider value={value}> {children}</MoviesContext.Provider>
  );
};
const useGetMovies = () => {
  const context = useContext(MoviesContext);
  if (!context)
    throw Error("useGetMovies should be used within <MoviesProvider />");
  return context;
};

const options = (count: number) => ({
  method: "GET",
  params: { limit: count.toString() },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
  },
});

export default useGetMovies;
