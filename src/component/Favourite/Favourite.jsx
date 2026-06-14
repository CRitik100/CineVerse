import { useDispatch, useSelector } from "react-redux";
import MovieList from "../browse/MovieList";
import lang from "../../utils/langConstant";

const Favourite = () => {
  const favouriteMovies = useSelector((store) => store.movies.favouriteMovies);
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return favouriteMovies.length === 0 ? (
    <div className="bg-linear-to-b from-[#1a1a2e] to-[#0f0f0f] text-white w-dvw h-dvh flex items-center justify-center p-11 text-2xl">
      Add your favourite movies on Browse Page!
    </div>
  ) : (
    <div className="bg-linear-to-b from-[#1a1a2e] to-[#0f0f0f] text-white w-90dvw h-dvh flex items-center justify-center p-11">
      <MovieList
        title={lang[defLang].favouriteMovies}
        movies={favouriteMovies}
        isFavList={true}
      />
    </div>
  );
};

export default Favourite;
