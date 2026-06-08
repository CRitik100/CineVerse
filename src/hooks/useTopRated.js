import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTopRated } from "../utils/redux/moviesSlice";

const useTopRated = () => {
  // Fetch Top Rated movies and store in Redux

  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store.movies.topRated);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRatedMovie && fetchData();
  }, []);
};

export default useTopRated;
