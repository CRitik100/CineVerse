import { useSelector } from "react-redux";
import useSearchMovie from "../../hooks/useSearchMovie";
import MovieList from "../browse/MovieList";
import lang from "../../utils/langConstant";
import ShimmerSearch from "./ShimmerSearch";

const SearchedMovieContainer = () => {
  const movies = useSelector((store) => store.movies.searchedMovies);
  const moviesData = useSelector((store) => store.movies.searchedMoviesData);
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);
  console.log("Searched Movies: ", movies);
  useSearchMovie(movies);
  const preRecommendedMovies = [
    "The Imitation Game",
    "The Theory of Everything",
    "A Beautiful Mind",
    "Good Will Hunting",
    "Hidden Figures",
  ];

  return !moviesData || moviesData.length === 0 ? (
    <div className="text-white p-7 w-full overflow-hidden">
      <ShimmerSearch />
    </div>
  ) : (
    <div className="p-7 overflow-hidden">
      <MovieList title={lang[defLang].recommendedMovies} movies={moviesData} />
    </div>
  );
};

export default SearchedMovieContainer;
