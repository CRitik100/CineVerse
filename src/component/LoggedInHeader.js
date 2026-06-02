import { useState } from "react";
import NetflixLogo from "./NetflixLogo";
import { USER_PROFILE_LOGO_URL } from "../utils/constant";
import UserProfile from "./UserProfile";

const LoggedInHeader = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex justify-between items-start py-4 pr-4 pl-8 absolute w-full z-10 box-border">
      <div id="loggedin-logo" className=" w-35 ">
        <NetflixLogo />
      </div>
      <div
        id="user-profile"
        className=" flex flex-col justify-center items-end gap-1 cursor-pointer mr-3"
        onMouseEnter={() => setShowProfile(true)}
        onMouseLeave={() => setShowProfile(false)}
      >
        <img
          src={USER_PROFILE_LOGO_URL}
          alt="User profile logo"
          className="w-8\9 rounded mt-3"
        />
        <div>{showProfile && <UserProfile />}</div>
      </div>
    </div>
  );
};

export default LoggedInHeader;
