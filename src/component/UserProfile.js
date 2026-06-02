import { useSelector } from "react-redux";
import { USER_PROFILE_LOGO_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const UserProfile = () => {
  const user = useSelector((store) => store.user.userInfo);
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
    <div className="bg-black text-white p-4 rounded">
      <ul>
        <li className="mb-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <img
              src={USER_PROFILE_LOGO_URL}
              alt="User profile logo"
              className="w-5 rounded "
            />
            {user?.displayName}
          </div>
        </li>
        <li className="mb-2 cursor-pointer hover:underline">Account</li>
        <li className="mb-2 cursor-pointer hover:underline">Help Center</li>
        <hr className="border-t border-gray-600 my-2" />
        <li className="cursor-pointer hover:underline" onClick={handleLogout}>
          Sign out of Netflix
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
