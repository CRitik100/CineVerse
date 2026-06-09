import { useSelector } from "react-redux";
import lang from "../../utils/langConstant";

const Security = () => {
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div>
      <div className="text-2xl font-bold">{lang[defLang].security}</div>
      <div className="text-lg font-light">{lang[defLang].accountDetails}</div>
    </div>
  );
};

export default Security;
