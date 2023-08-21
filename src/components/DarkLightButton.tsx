import React from "react";
import "./DarkLightButton.css";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export const DarkLightButton: React.FC = () => {
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox absolute opacity-0"
        id="toggle-theme"
      />
      <label
        className="label relative flex h-[22px] w-[50px] cursor-pointer items-center justify-between rounded-[50px] bg-gray-500 p-[5px]"
        htmlFor="toggle-theme"
      >
        <i>
          <SunIcon height="18" width="18" color="white" />
        </i>
        <i>
          <MoonIcon height="18" width="18" color="white" />
        </i>
        <div className="ball absolute inset-x-[2px] h-[22px] w-[22px] rounded-[50%] bg-gray-200"></div>
      </label>
    </div>
  );
};
