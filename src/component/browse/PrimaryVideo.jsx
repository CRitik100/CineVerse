import { useSelector } from "react-redux";
import usePrimaryTrailer from "../../hooks/usePrimaryTrailer";

const PrimaryVideo = (props) => {
  const trailer = useSelector((store) => store.movies?.primaryTrailer);
  const { movieId } = props;

  usePrimaryTrailer(movieId);

  return (
    <div className="w-full absolute top-0 left-0 -z-10">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube-nocookie.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${trailer?.key}`}
        title="YouTube video player"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default PrimaryVideo;
