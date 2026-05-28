import { Link } from "react-router-dom";
import { NETFLIX_LOGO_URL, LOGIN_BACKGROUND_URL } from "../utils/constant";

const LoginHeader = () => {
  return (
    <div>
      <div
        id="login-logo"
        className="absolute left-15 w-60 bg-linear-to-b from-black"
      >
        <Link to={"/"}>
          <img src={NETFLIX_LOGO_URL} alt="Netflix logo" />
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
