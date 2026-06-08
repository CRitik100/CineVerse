import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import LoggedInHeader from "./LoggedInHeader";
import PrimaryContainer from "./PrimaryContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRated from "../../hooks/useTopRated";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import Footer from "./Footer";
import AISearch from "../aiSearch/AISearch";
import { useEffect, useState } from "react";
import { resetSearchedMovies } from "../../utils/redux/moviesSlice";

const Browse = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);
  const [showAI, setShowAI] = useState(false);
  const dispatch = useDispatch();

  const handleAIWindow = () => {
    setShowAI(!showAI);
  };

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  useEffect(() => {
    if (showAI) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      dispatch(resetSearchedMovies());
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAI]);

  return (
    <div className="relative">
      <LoggedInHeader AIWindow={handleAIWindow} />
      <PrimaryContainer />
      <SecondryContainer />
      <Footer />
      {showAI && <AISearch />}
    </div>
  );
};

export default Browse;
