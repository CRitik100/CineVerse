import { useSelector } from "react-redux";
import { USER_PROFILE_LOGO_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import QuestionMarkIcon from "../../icons/QuestionMarkIcon";
import UserprofileIcon from "../../icons/UserProfileIcon";
import lang from "../../utils/langConstant";

const UserProfile = () => {
  const user = useSelector((store) => store.user.userInfo);
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };
  return (
    <div className="bg-black text-white p-4 rounded-2xl relative z-50 outline-1 hove:outline-gray-600">
      <ul className="flex flex-col gap-1">
        <li className="mb-3 mt-1 cursor-pointer">
          <div className="flex items-center gap-2">
            <img
              src={USER_PROFILE_LOGO_URL}
              alt="User profile logo"
              className="w-5 rounded "
            />
            {user?.displayName}
          </div>
        </li>
        <li className="mb-2 cursor-pointer hover:underline flex justify-start items-center gap-2">
          <UserprofileIcon />
          <span
            onClick={() => {
              navigate("/browse/account");
            }}
          >
            {lang[defLang].account}
          </span>
        </li>
        <li className="mb-2 cursor-pointer hover:underline flex justify-start items-center gap-2">
          <QuestionMarkIcon />
          <span>{lang[defLang].helpCenter}</span>
        </li>
        <hr className="border-t border-gray-600 my-2" />
        <li className="cursor-pointer hover:underline" onClick={handleLogout}>
          {lang[defLang].signOut}
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
