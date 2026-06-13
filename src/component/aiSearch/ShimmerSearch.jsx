import { useSelector } from "react-redux";
import lang from "../../utils/langConstant";

const ShimmerSearch = () => {
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div className="md:flex justify-center">
      <div className="flex flex-col ">
        <div className="text-xl mb-3 font-semibold">
          {lang[defLang].pleaseWait}
        </div>
        <div className="flex gap-3 overflow-x-scroll no-scrollbar">
          <div className="w-40 h-60 bg-gray-700 animate-pulse rounded-2xl shrink-0"></div>
          <div className="w-40 h-60 bg-gray-700 animate-pulse rounded-2xl shrink-0"></div>
          <div className="w-40 h-60 bg-gray-700 animate-pulse rounded-2xl shrink-0"></div>
          <div className="w-40 h-60 bg-gray-700 animate-pulse rounded-2xl shrink-0"></div>
          <div className="w-40 h-60 bg-gray-700 animate-pulse rounded-2xl shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerSearch;
