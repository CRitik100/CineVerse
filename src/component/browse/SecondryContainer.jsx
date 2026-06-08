import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="text-white p-11 bg-black">
      <div className="relative -mt-11 md:-mt-65 z-40 flex flex-col gap-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Popular"} movies={movies.popular} />
        <MovieList title={"Upcoming"} movies={movies.upcoming} />
      </div>
    </div>
  );
};

export default SecondryContainer;
