import React from "react";
import { DarkLightButton } from "./DarkLightButton";

export const Header: React.FC = () => {
  return (
    <header className="flex h-[60px] items-center justify-between bg-gray-700 px-[20px] text-white">
      <h1>Mike Santos</h1>
      <nav>
        <ul className="flex flex-row">
          <li className="mr-[10px]">Home</li>
          <li className="mr-[10px]">Projetos</li>
          <li className="mr-[10px]">Sobre mim</li>
          <li className="mr-[10px]">contatos</li>
        </ul>
      </nav>
      <div className="ml-[20px]">
        <DarkLightButton></DarkLightButton>
      </div>
    </header>
  );
};
