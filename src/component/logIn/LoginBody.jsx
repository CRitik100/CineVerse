import { useNavigate } from "react-router-dom";
import lang from "../../utils/langConstant";
import { useSelector } from "react-redux";

const LoginBody = () => {
  const navigate = useNavigate();
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div
      id="sign-in"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 md:gap-8 w-full md:w-1/2"
    >
      <span className="text-white text-2xl md:text-5xl font-bold text-center">
        {lang[defLang].heroTitle}
      </span>
      <span className="text-white text-sm md:text-lg text-center">
        {lang[defLang].heroSubtitle}
      </span>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer font-bold hover:bg-red-700"
        onClick={() => {
          navigate("/login");
        }}
      >
        {lang[defLang].signIn}
      </button>
    </div>
  );
};

export default LoginBody;
