import { useEffect, useRef, useState } from "react";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "../../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../utils/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/langConstant";

const LoginForm = () => {
  const [signInStatus, setSignInStatus] = useState(true);
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  const name = useRef(null);
  const emailId = useRef(null);
  const password = useRef(null);

  const validationForm = () => {
    const nameStatus = nameValidation(name.current.value);
    const emailStatus = emailValidation(emailId.current.value);
    const passwordStatus = passwordValidation(password.current.value);
    nameStatus != null ? setErrorName(nameStatus) : setErrorName(null);
    emailStatus != null ? setErrorEmail(emailStatus) : setErrorEmail(null);
    passwordStatus != null
      ? setErrorPassword(passwordStatus)
      : setErrorPassword(null);

    if (!signInStatus) {
      // For Sign up.
      if (nameStatus == null && emailStatus == null && passwordStatus == null) {
        createUserWithEmailAndPassword(
          auth,
          emailId.current.value,
          password.current.value,
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            updateProfile(user, {
              displayName: name.current.value,
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName } = user;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName }),
                );
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorPassword(errorCode + ": " + errorMessage);
            // ..
          });
      }
    } else {
      // For Sign in.
      if (emailStatus == null && passwordStatus == null) {
        signInWithEmailAndPassword(
          auth,
          emailId.current.value,
          password.current.value,
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorPassword(errorCode + ": " + errorMessage);
          });
      }
    }
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white p-10 bg-black opacity-70 rounded-2xl flex flex-col justify-center items-center gap-3 transition-transform duration-500 w-[90%] md:w-[30%]">
      <span className="text-xl font-semibold">
        {lang[defLang].enterInfoTo}{" "}
        {signInStatus ? lang[defLang].signIn : lang[defLang].signUp}
      </span>
      <form className="w-[95%] flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <div
          className={`overflow-hidden transition-all duration-500 mb-4 p-1 ${!signInStatus ? "max-h-20 opacity-100 " : "max-h-0 opacity-0"}`}
        >
          <input
            id="userName"
            type="text"
            ref={name}
            placeholder={lang[defLang].enterYourName}
            className="p-4 rounded bg-gray-900 focus:outline-none focus:ring-3 focus:ring-red-600 w-full text-white placeholder-white/80"
          />
          <span
            className={`overflow-hidden transition-all duration-500 text-red-600 ${errorName != null ? "max-h-20" : "max-h-0"}`}
          >
            {errorName}
          </span>
        </div>
        <input
          id="userId"
          type="text"
          ref={emailId}
          placeholder={lang[defLang].emailOrPhone}
          className="p-4 rounded bg-gray-900 focus:outline-none focus:ring-3 focus:ring-red-600 w-full text-white placeholder-white/80"
        />
        <span
          className={`overflow-hidden transition-all duration-500 mb-4 text-red-600 ${errorEmail != null ? "max-h-20" : "max-h-0"}`}
        >
          {errorEmail}
        </span>
        <input
          id="password"
          type="password"
          ref={password}
          placeholder={lang[defLang].password}
          className="p-4 rounded bg-gray-900 focus:outline-none focus:ring-3 focus:ring-red-600 w-full text-white placeholder-white/80"
        />
        <span
          className={`overflow-hidden transition-all duration-500 mb-4 text-red-600 ${errorPassword != null ? "max-h-20" : "max-h-0"}`}
        >
          {errorPassword}
        </span>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded cursor-pointer font-bold hover:bg-red-700"
          onClick={() => {
            validationForm();
          }}
        >
          {signInStatus ? lang[defLang].signIn : lang[defLang].signUp}
        </button>
      </form>
      <div>
        <span>
          {signInStatus
            ? lang[defLang].newToAiFlix
            : lang[defLang].alreadyHaveAccount}
        </span>
        <span
          className="cursor-pointer text-red-600 font-bold"
          onClick={() => {
            setSignInStatus(!signInStatus);
          }}
        >
          {signInStatus ? lang[defLang].signUp : lang[defLang].signIn}
        </span>
        <span> {lang[defLang].now} </span>
      </div>
    </div>
  );
};
export default LoginForm;
