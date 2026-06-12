import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const MovieTrailer = () => {
  const { id } = useParams();
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(id);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${trailer?.key}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
