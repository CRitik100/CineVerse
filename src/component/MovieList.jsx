import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  if (!movies?.length) return null;

  return (
    <div id="movieList" className="relative hover:z-10">
      <h1 id="title" className="text-xl mb-3 font-semibold">
        {title}
      </h1>
      <div className="flex gap-3 overflow-x-scroll no-scrollbar py-32 -my-32">
        {movies.map((movieData) => (
          <MovieCard key={movieData?.id} movie={movieData} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
