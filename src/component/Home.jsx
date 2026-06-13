import { useEffect, useState } from "react";
import LoggedInHeader from "./browse/LoggedInHeader";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import AISearch from "./aiSearch/AISearch";
import { resetSearchedMovies } from "../utils/redux/moviesSlice";

const Home = () => {
  const [showAI, setShowAI] = useState(false);
  const dispatch = useDispatch();

  const handleAIWindow = () => {
    setShowAI(!showAI);
  };

  useEffect(() => {
    if (showAI) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
      // dispatch(resetSearchedMovies());
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [showAI]);

  return (
    <div className="relative h-dvh w-full">
      <LoggedInHeader AIWindow={handleAIWindow} />
      <Outlet />
      {showAI && <AISearch onClose={handleAIWindow} />}
    </div>
  );
};

export default Home;
