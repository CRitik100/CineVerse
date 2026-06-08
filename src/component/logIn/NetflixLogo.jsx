import { useEffect, useRef } from "react";
import { NETFLIX_LOGO_URL } from "../../utils/constant";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/redux/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../utils/firebase";

const NetflixLogo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (location.pathname === "/" || location.pathname === "/login") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return <img src={NETFLIX_LOGO_URL} alt="Netflix logo" />;
};

export default NetflixLogo;
