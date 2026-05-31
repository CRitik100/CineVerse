import { useState } from "react";
import { USER_PROFILE_LOGO_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import NetflixLogo from "./NetflixLogo";
import UserProfile from "./UserProfile";
const Browse = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-start p-4 ml-4">
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

export default Browse;
