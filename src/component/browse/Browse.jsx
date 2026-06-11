import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRated from "../../hooks/useTopRated";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import Footer from "./Footer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div className="relative flex flex-col">
      <PrimaryContainer />
      <SecondryContainer />
      <Footer />
    </div>
  );
};

export default Browse;
