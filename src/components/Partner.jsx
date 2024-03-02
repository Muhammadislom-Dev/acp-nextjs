import React from "react";
import LogoIcon from "@/assets/logo.jpg";
import Image from "next/image";

function Partner() {
  return (
    <div className="py-8">
      <div className="container">
        <h2 className="text-black text-center text-2xl font-medium">
          НАШИ КЛИЕНТЫ
        </h2>
        <div className="grid grid-cols-4 gap-6 flex-col mt-4">
          <div className="h-158 p-8 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
            <Image className="partner-icon" src={LogoIcon} alt="LogoIcon" />
          </div>
          <div className="h-158 p-8 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
            <Image className="partner-icon" src={LogoIcon} alt="LogoIcon" />
          </div>
          <div className="h-158 p-8 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
            <Image className="partner-icon" src={LogoIcon} alt="LogoIcon" />
          </div>
          <div className="h-158 p-8 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
            <Image className="partner-icon" src={LogoIcon} alt="LogoIcon" />
          </div>
          <div className="h-158 p-8 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
            <Image className="partner-icon" src={LogoIcon} alt="LogoIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
