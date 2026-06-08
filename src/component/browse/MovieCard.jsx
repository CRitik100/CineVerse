import { POSTER_BASE_URL } from "../../utils/constant";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="shrink-0">
      <div id="poster" className="">
        <img
          src={`${POSTER_BASE_URL}${movie.poster_path}`}
          className="w-40 rounded-lg hover:scale-200 hover:z-100 hover:delay-700 origin-left transition-transform duration-300"
        ></img>
      </div>
    </div>
  );
};

export default MovieCard;
