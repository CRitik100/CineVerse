import { useSelector } from "react-redux";
import useSearchMovie from "../../hooks/useSearchMovie";
import MovieList from "../browse/MovieList";

const SearchedMovieContainer = () => {
  const movies = useSelector((store) => store.movies.searchedMovies);
  const moviesData = useSelector((store) => store.movies.searchedMoviesData);
  console.log("Searched Movies: ", movies);
  useSearchMovie(movies);

  return (
    <div className="p-7 overflow-hidden">
      <MovieList title={"Recommended Movies"} movies={moviesData} />
    </div>
  );
};

export default SearchedMovieContainer;
