import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import LoggedInHeader from "./LoggedInHeader";
import PrimaryContainer from "./PrimaryContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Footer from "./Footer";
import GPTSearch from "./GPTSearch";
import { useEffect, useState } from "react";
import { resetSearchedMovies } from "../utils/moviesSlice";

const Browse = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);
  const [showGPT, setShowGPT] = useState(false);
  const dispatch = useDispatch();

  const handleGPTWindow = () => {
    setShowGPT(!showGPT);
  };

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  useEffect(() => {
    if (showGPT) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      dispatch(resetSearchedMovies());
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showGPT]);

  return (
    <div className="relative">
      <LoggedInHeader gptWindow={handleGPTWindow} />
      <PrimaryContainer />
      <SecondryContainer />
      <Footer />
      {showGPT && <GPTSearch />}
    </div>
  );
};

export default Browse;
