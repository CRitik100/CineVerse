import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import HomeIcon from "../../icons/HomeIcon";
import CreditCardIcon from "../../icons/CreditCardIcon";
import SecurityIcon from "../../icons/SecurityIcon";
import SettingIcon from "../../icons/SettingIcon";
import { useState } from "react";
import OverView from "./OverView";
import Membership from "./Membership";
import Security from "./Security";
import Settings from "./Settings";
import lang from "../../utils/langConstant";
import { useSelector } from "react-redux";

const AccountBody = () => {
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState("overview");
  const defLang = useSelector((store) => store.appConfig.defaultLanguage);

  return (
    <div className="pt-20">
      <div className="flex flex-column gap-10 p-11 justify-center items-start bg-white w-[60%] h-160 mx-auto rounded-lg">
        <div className="w-1/3 ">
          <div
            className="mb-11 flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded p-2"
            onClick={() => {
              navigate("/browse");
            }}
          >
            <ArrowLeftIcon />
            <span>{lang[defLang].accountBackButton}</span>
          </div>
          <ul className="text-gray-500 font-semibold flex flex-col gap-7">
            <li
              className={`flex gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded ${activeOption === "overview" ? "bg-gray-200" : ""}`}
              onClick={() => setActiveOption("overview")}
            >
              <HomeIcon />
              <span>{lang[defLang].overView}</span>
            </li>
            <li
              className={`flex gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded ${activeOption === "membership" ? "bg-gray-200" : ""}`}
              onClick={() => setActiveOption("membership")}
            >
              <CreditCardIcon />
              <span>{lang[defLang].membership}</span>
            </li>
            <li
              className={`flex gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded ${activeOption === "security" ? "bg-gray-200" : ""}`}
              onClick={() => setActiveOption("security")}
            >
              <SecurityIcon />
              <span>{lang[defLang].security}</span>
            </li>
            <li
              className={`flex gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded ${activeOption === "settings" ? "bg-gray-200" : ""}`}
              onClick={() => setActiveOption("settings")}
            >
              <SettingIcon />
              <span>{lang[defLang].settings}</span>
            </li>
          </ul>
        </div>
        <div className="w-2/3">
          {activeOption === "overview" && <OverView />}
          {activeOption === "membership" && <Membership />}
          {activeOption === "security" && <Security />}
          {activeOption === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default AccountBody;
