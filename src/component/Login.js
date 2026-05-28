import LoginHeader from "./LoginHeader";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative h-screen">
      <LoginHeader />
      <Outlet />
    </div>
  );
};

export default Login;
