import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import HomeIcon from "../icons/HomeIcon";
import CreditCardIcon from "../icons/CreditCardIcon";
import SecurityIcon from "../icons/SecurityIcon";
import SettingIcon from "../icons/SettingIcon";
import { useState } from "react";
import OverView from "./OverView";
import Membership from "./Membership";
import Security from "./Security";
import Settings from "./Settings";

const AccountBody = () => {
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState("overview");

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
            <span>Back to Netflix.</span>
          </div>
          <ul className="text-gray-500 font-semibold flex flex-col gap-7">
            <li
              className="flex gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded"
              onClick={() => setActiveOption("overview")}
            >
              <HomeIcon />
              <span>Overview</span>
            </li>
            <li
              className="flex gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded"
              onClick={() => setActiveOption("membership")}
            >
              <CreditCardIcon />
              <span>Membership</span>
            </li>
            <li
              className="flex gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded"
              onClick={() => setActiveOption("security")}
            >
              <SecurityIcon />
              <span>Security</span>
            </li>
            <li
              className="flex gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded"
              onClick={() => setActiveOption("settings")}
            >
              <SettingIcon />
              <span>Settings</span>
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
