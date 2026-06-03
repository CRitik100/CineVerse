import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcoming } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // Fetch upcoming movies data and store in redux
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    fetchData();
  });
};

export default useUpcomingMovies;
