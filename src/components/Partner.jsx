import React from "react";
import Image from "next/image";
import LogoOne from "@/assets/logo1.jpg";
import LogoTwo from "@/assets/logo2.png";
import LogoThree from "@/assets/logo3.png";
import LogoFour from "@/assets/logo4.png";
import LogoFive from "@/assets/logo5.png";
import LogoSix from "@/assets/logo6.png";
import LogoSeven from "@/assets/logo7.png";
import LogoEight from "@/assets/logo8.png";
import { Fade } from "react-reveal";

function Partner() {
  return (
    <div className="py-8">
      <div className="container">
        <h2 className="text-black text-center text-2xl font-medium">
          НАШИ КЛИЕНТЫ
        </h2>
        <p className="text-sm text-center w-3/4 leading-6 m-auto mt-4">
          Welded Mesh Grid- Yo`l setkalari va sim mix ishlab chiqarish bo`yicha
          O`zbekistonda eng birinchilardan va liderlaridan hisoblanadi, doimiy
          mijozlar 500 dan ziyod, bir oylik ishlab chiqarish 500/600 tonnadan
          ziyod.
        </p>
        <Fade bottom>
          <div className="grid grid-cols-4 gap-6 flex-col mt-4">
            <div className="h-128 p-6 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
              <Image
                className="partner-icon"
                src={LogoOne}
                alt="LogoIcon"
              />
            </div>
            <div className="h-128 p-6 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
              <Image
                className="partner-icon"
                src={LogoTwo}
                alt="LogoIcon"
              />
            </div>
            <div className="h-128 p-6 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
              <Image
                className="partner-icon"
                src={LogoThree}
                alt="LogoIcon"
              />
            </div>
            <div className="h-128 p-6 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
              <Image
                className="partner-icon"
                src={LogoFour}
                alt="LogoIcon"
              />
            </div>
            <div className="h-128 p-6 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
              <Image
                className="partner-icon"
                src={LogoFive}
                alt="LogoIcon"
              />
            </div>
            <div className="h-128 p-6 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
              <Image
                className="partner-icon"
                src={LogoSix}
                alt="LogoIcon"
              />
            </div>
            <div className="h-128 p-6 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
              <Image
                className="partner-icon"
                src={LogoSeven}
                alt="LogoIcon"
              />
            </div>
            <div className="h-128 p-6 overflow-hidden shadow-lg bg-white rounded-lg mx-15 flex items-center justify-center cursor-pointer">
              <Image
                className="partner-icon"
                src={LogoEight}
                alt="LogoIcon"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Partner;
