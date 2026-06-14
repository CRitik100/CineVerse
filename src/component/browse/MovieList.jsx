import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies, isFavList } = props;
  if (!movies?.length) return null;

  return (
    <div id="movieList" className="relative hover:z-10">
      <h1 id="title" className={`text-xl mb-3 font-semibold ${isFavList ? "md:pl-32" : ""}`}>
        {title}
      </h1>
      <div
        className={`flex gap-3 overflow-x-scroll no-scrollbar md:py-32 md:-my-32 ${isFavList ? " md:flex-wrap md:px-32" : ""}`}
      >
        {movies.map((movieData) => (
          <MovieCard key={movieData?.id} movie={movieData} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
