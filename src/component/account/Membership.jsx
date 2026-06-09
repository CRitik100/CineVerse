import { useSelector } from "react-redux";
import lang from "../../utils/langConstant";

const Membership = () => {
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div>
      <div className="text-2xl font-bold">{lang[defLang].membership}</div>
      <div className="text-lg font-light">{lang[defLang].planDetails}</div>
    </div>
  );
};

export default Membership;
