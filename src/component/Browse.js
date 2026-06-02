import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import LoggedInHeader from "./LoggedInHeader";
import PrimaryContainer from "./PrimaryContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

  useNowPlayingMovies();
  console.log(nowPlaying);

  return (
    <div className="relative">
      <LoggedInHeader />
      <PrimaryContainer />
      <SecondryContainer />
    </div>
  );
};

export default Browse;
