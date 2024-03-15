import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";
import ProductOne from "@/assets/news1.jpg";
import ProductTwo from "@/assets/product2.png";
import ProductThree from "@/assets/product3.JPG";
import ProductFour from "@/assets/news2.jpg";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <section className="news-section flex justify-center py-4  ">
      <div className="container">
        <div>
          <h2 className=" font-semibold text-3xl text-center">{t("hello4")}</h2>
          <Fade bottom>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-10">
              <div className="news-card w-full sm:w-auto">
                <Image
                  className="rounded-t-md"
                  src={ProductOne}
                  alt="alstar pro image"
                />
                <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-base mb-8">
                    MARKET CONDITIONS, VALUE OVER VOLUME AND SUSTAINABILITY
                  </h3>
                  <Link
                    href={"#"}
                    className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200"
                  >
                    {t("hello9")}
                  </Link>
                </div>
              </div>
              <div className="news-card">
                <Image
                  className=" card-image"
                  src={ProductTwo}
                  alt="alstar pro image samarkand"
                />
                <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-base mb-16">
                    ПРОЕКТ В TASHKET CITY
                  </h3>
                  <Link
                    href={"#"}
                    className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200"
                  >
                    {t("hello9")}
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
                  <h3 className="text-black font-semibold text-base mb-16">
                    ПРОЕКТ С GOLD STEP
                  </h3>
                  <Link
                    href={"#"}
                    className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200"
                  >
                    {t("hello9")}
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
