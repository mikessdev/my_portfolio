import React, { useEffect, useRef, useState } from "react";
import brazil from "../assets/brazil.png";
import usa from "../assets/united-states.png";
import { ArrowIcon } from "./icons/ArrowIcon";

export const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      console.log("tes");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="flex h-[33px] w-[75px] cursor-pointer items-center justify-evenly rounded-[50px] bg-gray-500"
        onClick={toggleDropdown}
      >
        <img src={brazil} width="28" height="28"></img>
        <ArrowIcon height="10px" width="10px" color="white" />
      </button>
      {isOpen && (
        <div className="absolute top-[46px] z-10 flex h-[33px] w-[75px] cursor-pointer items-center justify-evenly rounded-ee-[20px] rounded-es-[20px] bg-gray-500">
          <img className="block" src={usa} width="28" height="28"></img>
        </div>
      )}
    </div>
  );
};
