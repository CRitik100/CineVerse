import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRated from "../../hooks/useTopRated";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import ShimmerBrowse from "./ShimmerBrowse";

const Browse = () => {
  const mainData = useSelector((store) => store.movies.nowPlaying);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return mainData === null ? (
    <ShimmerBrowse />
  ) : (
    <div className="relative flex flex-col">
      <PrimaryContainer />
      <SecondryContainer />
      <Footer />
    </div>
  );
};

export default Browse;
