import LoginHeader from "./LoginHeader";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative h-dvh w-full ">
      <LoginHeader />
      <Outlet />
    </div>
  );
};

export default Login;
