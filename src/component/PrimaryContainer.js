import { useSelector } from "react-redux";
import PrimaryInfo from "./PrimaryInfo";
import PrimaryVideo from "./PrimaryVideo";

const PrimaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlaying);
  if (!movies) return;
  const mainMovie = movies[0];
  const { id, title, overview } = mainMovie;

  return (
    <div className="relative w-full aspect-video">
      <PrimaryInfo title={title} overview={overview} />
      <PrimaryVideo movieId={id} />
    </div>
  );
};

export default PrimaryContainer;
