import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import LoggedInHeader from "./LoggedInHeader";
import PrimaryContainer from "./PrimaryContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div className="relative">
      <LoggedInHeader />
      <PrimaryContainer />
      <SecondryContainer />
    </div>
  );
};

export default Browse;
