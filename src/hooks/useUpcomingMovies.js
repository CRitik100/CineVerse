import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcoming } from "../utils/redux/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // Fetch upcoming movies data and store in redux
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcoming);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    !upcomingMovies && fetchData();
  }, []);
};

export default useUpcomingMovies;
