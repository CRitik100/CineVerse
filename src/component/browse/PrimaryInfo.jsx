import { useSelector } from "react-redux";
import lang from "../../utils/langConstant";
import PlayIcon from "../../icons/PlayIcon";
import InfoIcon from "../../icons/InfoIcon";

const PrimaryInfo = (props) => {
  const { title, overview } = props;
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div className="w-full aspect-video p-11 text-white bg-linear-to-r from-black absolute top-0 flex items-end md:items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-lg md:text-4xl font-bold md:w-1/2">{title}</h1>
        <p className="text-lg w-1/2 hidden md:block">{overview}</p>
        <div className="flex gap-4 font-medium">
          <button className="bg-white rounded p-2 md:px-7 md:py-3 flex gap-2 hover:bg-gray-300 text-black">
            <PlayIcon />
            {lang[defLang].play}
          </button>
          <button className="bg-gray-700 rounded p-2 md:px-7 md:py-3 flex gap-2 opacity-50 hover:opacity-75">
            <InfoIcon />
            {lang[defLang].moreInfo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryInfo;
