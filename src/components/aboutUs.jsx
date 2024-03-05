import React from "react";
import { useRouter } from "next/router";
import ProductFour from "@/assets/product1.png";
import Image from "next/image";
import { Fade } from "react-reveal";

const AboutUs = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/company");
  };
  return (
    <section className="about-section py-8 ">
      <div className="container">
        <h2 className="text-center font-semibold text-2xl">BIZ HAQIMIZDA</h2>
        <h4 className="text-center pt-2 pb-6">
          ALYUMIN KOMPOZIT PANELLARDAGI ENG ISHONCHLI NOM
        </h4>
        <div className="flex gap-10 flex-wrap-reverse lg:flex-nowrap">
          <Fade left>
            <div>
              <div className="flex flex-col gap-3 pb-4">
                <p className="text-stone-500 text-sm w-full max-w-[800px] sm:w-auto leading-6">
                  ALSTAR - GOLDEN HAPPINESS MChJga tegishli PE, FR-B1, FR-A2
                  turdagi alyumin kompozit panellar (ACP) brendi. 2013 yildan
                  beri kompaniya yiliga 2 million m2 ishlab chiqarish quvvatiga
                  ega Markaziy Osiyodagi eng yirik ACP brendiga aylandi.
                  Kompaniya tarkibiga ALSTAR, DIBOND, UZBOND, ALSTAR7 kabi
                  avtomat uzatmalar qutisi (ACP) mahsulotlari kiradi.
                </p>
              </div>
              <button
                onClick={handleClick}
                className="rounded-3xl header-title bg-black text-white border-black border-2 px-8 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                Batafsil malumot
              </button>
            </div>
          </Fade>
          <Fade right>
            <div className="w-full">
              <Image
                className="company-image"
                src={ProductFour}
                alt="alstar_company"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
