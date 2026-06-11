import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const MovieTrailer = () => {
  const { id } = useParams();
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(id);

  console.log(trailer);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
