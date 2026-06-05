import { useSelector } from "react-redux";
import PrimaryInfo from "./PrimaryInfo";
import PrimaryVideo from "./PrimaryVideo";
import React from "react";

const PrimaryContainer = React.memo(() => {
  const movies = useSelector((store) => store.movies.nowPlaying);
  if (!movies) return;
  const i = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[i];
  const { id, title, overview } = mainMovie;

  return (
    <div className="relative w-full aspect-video">
      <PrimaryInfo title={title} overview={overview} />
      <PrimaryVideo movieId={id} />
    </div>
  );
});

export default PrimaryContainer;
