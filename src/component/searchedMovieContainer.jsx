import { useSelector } from "react-redux";
import useSearchMovie from "../hooks/useSearchMovie";
import MovieList from "./MovieList";

const SearchedMovieContainer = () => {
  const movies = useSelector((store) => store.movies.searchedMovies);
  const moviesData = useSelector((store) => store.movies.searchedMoviesData);
  
  useSearchMovie(movies);

  console.log("Searched Movies: ", movies);

  return (
    <div className="p-2 overflow-hidden">
      <MovieList title={"Recommended Movies"} movies={moviesData} />
    </div>
  );
};

export default SearchedMovieContainer;
