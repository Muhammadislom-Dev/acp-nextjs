import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";
import ProductOne from "@/assets/product1.png";
import ProductTwo from "@/assets/product2.png";
import ProductThree from "@/assets/product3.JPG";
import ProductFour from "@/assets/product4.JPG";
import { useTranslation } from "react-i18next";

const News = () => {
  const {t} = useTranslation()
  return (
    <section className="news-section flex justify-center py-4  ">
      <div className="container">
        <div>
          <h2 className=" font-semibold text-3xl text-center">{t("hello4")}</h2>
          <Fade bottom>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 mt-10">
              <div className="news-card w-full sm:w-auto">
                <Image
                  className="rounded-t-md"
                  src={ProductOne}
                  alt="alstar pro image"
                />
                <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-base">
                    ALSTAR 7 PRO
                  </h3>
                  <p className="text-sm py-2 mb-2">
                    Dostlar, bugun bizning birinchi va oz sohasida yagona
                    ALSTAR 7 PRO onlayn jurnalimiz nashr etildi!
                  </p>
                  <Link
                    href={"#"}
                    className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="news-card">
                <Image
                  className="rounded-t-md card-image"
                  src={ProductTwo}
                  alt="alstar pro image samarkand"
                />
                <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-base">
                    ALSTAR в Самарканде!
                  </h3>
                  <p className="text-sm py-2 mb-2">
                    Уведомляем вас об открытии нашего оффициального шоурума в
                    Самарканде, здесь вы можете ощутить качество и надежность
                    наших АКП Адрес: г.Самарканд ул.Рудаки д.227.
                  </p>
                  <Link
                    href={"#"}
                    className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="news-card">
                <Image
                  className="rounded-t-md card-image"
                  src={ProductThree}
                  alt="alstar pro image"
                />
                <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-base">
                    ALSTAR в шоурума.
                  </h3>
                  <p className="text-sm py-2 mb-2">
                    Уведомляем вас об открытии нашего оффициального шоурума в
                    Самарканде, здесь вы можете ощутить качество и надежность
                    наших АКП Адрес: г.Самарканд ул.Рудаки д.227.
                  </p>
                  <Link
                    href={"#"}
                    className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="news-card">
                <Image
                  className="rounded-t-md card-image"
                  src={ProductFour}
                  alt="alstar pro image"
                />
                <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-base">
                    Alubond Has Succesfully Passed CAN/ULC-S134…
                  </h3>
                  <p className="text-sm py-2 mb-2">
                    We proudly announce that we have passed CAN/ULC -S134
                    full-scale wall-assembly test designed to measure the limits
                    of…
                  </p>
                  <Link
                    href={"#"}
                    className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default News;
