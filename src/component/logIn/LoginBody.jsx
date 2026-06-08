import { useNavigate } from "react-router-dom";

const LoginBody = () => {
  const navigate = useNavigate();
  return (
    <div
      id="sign-in"
      className="absolute left-1/2 top-[40%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 md:gap-8"
    >
      <span className="text-white text-2xl md:text-5xl font-bold text-center">
        Unlimited movies, shows, and more...
      </span>
      <span className="text-white text-sm md:text-lg text-center">
        Ready to watch? Sign in to continue.
      </span>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer font-bold hover:bg-red-700"
        onClick={() => {
          navigate("/login");
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginBody;
