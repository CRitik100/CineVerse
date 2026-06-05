import { Link } from "react-router-dom";
import { LOGIN_BACKGROUND_URL, NETFLIX_LOGO_URL } from "../utils/constant";
import NetflixLogo from "./NetflixLogo";

const LoginHeader = () => {
  return (
    <div>
      <div
        id="login-logo"
        className="absolute left-15 w-60 bg-gradient-to-b from-black"
      >
        <Link to={"/"}>
          <NetflixLogo />
        </Link>
      </div>
      <div id="login-background">
        <img
          className="brightness-35 absolute -z-10 w-full h-full object-cover"
          src={LOGIN_BACKGROUND_URL}
          alt="Netflix Background"
        />
      </div>
    </div>
  );
};

export default LoginHeader;
