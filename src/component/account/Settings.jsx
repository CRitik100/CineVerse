import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_OPTIONS } from "../../utils/constant";
import { updateDefaultLanguage } from "../../utils/redux/appConfigSlice";
import lang from "../../utils/langConstant";

const Settings = () => {
  const dispatch = useDispatch();
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div>
      <div className="text-2xl font-bold">{lang[defLang].settings}</div>
      <div className="text-lg text-gray-600 flex flex-col justify-center items-start">
        <div className="flex flex-col gap-2 my-3 w-full">
          <div>{lang[defLang].chooseLanguage}</div>
          <select
            id="language"
            className="p-2 rounded w-full outline-none focus:ring-2 focus:ring-black bg-gray-200"
            value={defLang}
            onChange={(e) => {
              dispatch(updateDefaultLanguage(e.target.value));
            }}
          >
            {LANGUAGE_OPTIONS.map((lan) => (
              <option key={lan.code} value={lan.code}>
                {lan.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
