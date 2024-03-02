import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductOne from "@/assets/product1.png";

const AboutUs = () => {
  return (
    <section className="about-section py-8">
      <div className="container">
        <h2 className="text-center text-black font-semibold text-2xl">
          BIZ HAQIMIZDA
        </h2>
        <h4 className="text-center pt-2 pb-6">
          ALYUMIN KOMPOZIT PANELLARDAGI ENG ISHONCHLI NOM
        </h4>
        <div className="flex gap-5 flex-wrap-reverse lg:flex-nowrap">
          <div>
            <div className="flex flex-col pb-4">
              <p className="text-stone-500 mb-4 w-[550px]">
                ALSTAR - 'GOLDEN HAPPINESS' MChJga tegishli PE, FR-B1, FR-A2
                turdagi alyumin kompozit panellar (ACP) brendi. 2013 yildan beri
                kompaniya yiliga 2 million m2 ishlab chiqarish quvvatiga ega
                Markaziy Osiyodagi eng yirik ACP brendiga aylandi. Kompaniya
                tarkibiga “ALSTAR, DIBOND, UZBOND, ALSTAR7” kabi avtomat
                uzatmalar qutisi (ACP) mahsulotlari kiradi.
              </p>
            </div>
            <Link
              href={"#"}
              className="text-white border-black px-4 py-3 border-2 rounded-3xl bg-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              Batafsil ma'lumot
            </Link>
          </div>
          <div className="w-full">
            <Image
              className="company-image"
              src={ProductOne}
              alt="alstar_company"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
