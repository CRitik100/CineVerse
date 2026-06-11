import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-[300px] font-bold text-[#aea493]">404</div>
      <div className="text-[24px] font-semibold text-[#cf4520]">
        A wise man once asked…
      </div>
      <div className="text-[27px] font-medium text-[#28231e] mt-4">
        If you’ve come to a page that can not be found Does it actually exist?
      </div>
      <div>
        <button
          className="mt-10 px-6 py-3 bg-[#cf4520] text-white rounded-lg hover:bg-[#28231e] transition-colors duration-300"
          onClick={() => navigate("/browse")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Error;
