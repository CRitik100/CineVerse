import { useSelector } from "react-redux";
import useSearchMovie from "../../hooks/useSearchMovie";
import MovieList from "../browse/MovieList";
import lang from "../../utils/langConstant";

const SearchedMovieContainer = () => {
  const movies = useSelector((store) => store.movies.searchedMovies);
  const moviesData = useSelector((store) => store.movies.searchedMoviesData);
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);
  console.log("Searched Movies: ", movies);
  useSearchMovie(movies);

  return (
    <div className="p-7 overflow-hidden">
      <MovieList title={lang[defLang].recommendedMovies} movies={moviesData} />
    </div>
  );
};

export default SearchedMovieContainer;
