import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addPrimaryTrailer } from "../utils/redux/moviesSlice";

const usePrimaryTrailer = (movieId) => {
  // Fetch trailer for the movie and store in redux store.
  const dispatch = useDispatch();

  const fetchVideoData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    const trailers = json?.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json?.results[0];
    dispatch(addPrimaryTrailer(trailer));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);
};

export default usePrimaryTrailer;
