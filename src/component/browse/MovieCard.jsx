import { useState } from "react";
import { POSTER_BASE_URL } from "../../utils/constant";
import PlayIcon from "../../icons/PlayIcon";
import PlusIcon from "../../icons/PlusIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouriteMovie,
  removeFavouriteMovie,
} from "../../utils/redux/moviesSlice";
import TickSignIcon from "../../icons/TickSignIcon";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const { movie } = props;
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();
  const favMovies = useSelector((store) => store?.movies?.favouriteMovies);

  const favMovieIds = favMovies.map((movie) => movie?.id);

  const isFavMovie = () => favMovieIds.includes(movie?.id);

  const handleFavouriteMovies = () => {
    console.log(movie);
    isFavMovie()
      ? dispatch(removeFavouriteMovie(movie))
      : dispatch(addFavouriteMovie(movie));
  };

  return (
    <div className="shrink-0">
      <div
        id="poster"
        className="hover:scale-175 hover:z-100 hover:delay-700 origin-left transition-transform duration-300 relative rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={`${POSTER_BASE_URL}${movie?.poster_path}`}
          className="w-40 rounded-lg "
        ></img>
        <div
          className={`${isHovered ? "block" : "hidden"} absolute inset-0 z-110 flex items-end`}
        >
          <div className="bg-linear-to-b from-[#1a1a2e] to-[#0f0f0f] p-2 w-full flex justify-around">
            <button
              className="rounded-full bg-white text-black p-1.5 cursor-pointer"
              onClick={() => navigate(`/browse/movieTrailer/${movie.id}`)}
            >
              <PlayIcon />
            </button>
            <button
              className={`rounded-full text-white outline outline-white-700 p-1.5 ml-2 cursor-pointer ${isFavMovie() ? "hover:outline-red-700" : "hover:outline-green-700"}`}
              onClick={handleFavouriteMovies}
            >
              {isFavMovie() ? <TickSignIcon /> : <PlusIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
