import { useState } from "react";

const LoginForm = () => {
  const [signInStatus, setSignInStatus] = useState(true);
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white p-10 bg-black opacity-70 rounded-2xl flex flex-col justify-center items-center gap-3 transition-transform duration-500">
      <span className="text-xl font-semibold">
        Enter your info to {signInStatus ? "Sign in" : "Sign up"}
      </span>
      <form className="w-80 flex flex-col">
        <div
          className={`overflow-hidden transition-all duration-500 ${!signInStatus ? "max-h-20 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
        >
          <input
            id="userName"
            type="text"
            placeholder="Enter your Name"
            className="p-4 rounded bg-gray-900 focus:outline-none focus:ring-3 focus:ring-red-600 w-full text-white placeholder-white/80"
          />
        </div>
        <input
          id="userId"
          type="text"
          placeholder="Email or phone number "
          className="p-4 mb-4 rounded bg-gray-900 focus:outline-none focus:ring-3 focus:ring-red-600 w-full text-white placeholder-white/80"
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="p-4 mb-4 rounded bg-gray-900 focus:outline-none focus:ring-3 focus:ring-red-600 w-full text-white placeholder-white/80"
        />
        <button className="bg-red-700 text-white px-4 py-2 rounded cursor-pointer font-bold hover:bg-red-700">
          {signInStatus ? "Sign in" : "Sign up"}
        </button>
      </form>
      <div>
        <span>
          {signInStatus ? "New to Netflix? " : "Already have the account? "}
        </span>
        <span
          className="cursor-pointer text-red-600 font-bold"
          onClick={() => {
            setSignInStatus(!signInStatus);
          }}
        >
          {signInStatus ? "Sign up" : "Sign in"}
        </span>
        <span> now.</span>
      </div>
    </div>
  );
};
export default LoginForm;
50;
