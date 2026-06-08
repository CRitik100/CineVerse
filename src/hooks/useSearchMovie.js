import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSearchedMoviesData } from "../utils/redux/moviesSlice";

const useSearchMovie = (movies) => {
  const dispatch = useDispatch();

  const fetchData = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await data.json();
    return json?.results[0];
  };

  useEffect(() => {
    const fetchAll = async () => {
      const promises = movies.map((movie) => fetchData(movie));
      const results = await Promise.all(promises);
      dispatch(addSearchedMoviesData(results));
    };
    fetchAll();
  }, [movies]);
};
export default useSearchMovie;
