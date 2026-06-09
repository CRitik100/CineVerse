import { Link } from "react-router-dom";
import { LOGIN_BACKGROUND_URL } from "../../utils/constant";
import CineVerseLogo from "./CineVerseLogo";

const LoginHeader = () => {
  return (
    <div>
      <div
        id="login-logo"
        className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-15 w-60 bg-linear-to-b from-black"
      >
        <Link to={"/"}>
          <CineVerseLogo />
        </Link>
      </div>
      <div id="login-background">
        <img
          className="brightness-35 absolute -z-10 w-full h-full object-cover"
          src={LOGIN_BACKGROUND_URL}
          alt="CineVerse Background"
        />
      </div>
    </div>
  );
};

export default LoginHeader;
