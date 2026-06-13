import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../../utils/langConstant";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div className="text-white p-11 bg-black ">
      <div className="relative -mt-[5vw] md:-mt-[15vw] z-40 flex flex-col gap-10">
        <MovieList title={lang[defLang].nowPlaying} movies={movies.nowPlaying} />
        <MovieList title={lang[defLang].topRated} movies={movies.topRated} />
        <MovieList title={lang[defLang].popular} movies={movies.popular} />
        <MovieList title={lang[defLang].upcoming} movies={movies.upcoming} />
      </div>
    </div>
  );
};

export default SecondryContainer;
