import { useSelector } from "react-redux";
import lang from "../../utils/langConstant";

const OverView = () => {
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div>
      <div className="text-2xl font-bold">{lang[defLang].account}</div>
      <div className="text-lg font-light">{lang[defLang].membershipDetails}</div>
    </div>
  );
};

export default OverView;
