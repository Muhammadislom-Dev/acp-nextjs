import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Fade } from "react-reveal";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import ProductOne from "@/assets/sim11.jpg";
import ProductTwo from "@/assets/sim2.jpg";
import ProductThree from "@/assets/sim3.jpg";
import ProductFour from "@/assets/sim4.png";
import ProductSix from "@/assets/sim6.jpg";
import ProductSeven from "@/assets/sim7.jpg";

const AboutUs = () => {
  const { t } = useTranslation();

  const productData = [
    {
      id: 1,
      title: " Оцинкованная проволока",
      text: t("text"),
      image: ProductOne,
    },
    {
      id: 2,
      title: "Сетка сварная в рулонах",
      text: t("text1"),
      image: ProductTwo,
    },
    {
      id: 3,
      title: "Стальная проволока",
      text: t("text2"),
      image: ProductThree,
    },
    {
      id: 4,
      title: "Проволока вязальная",
      text: t("text3"),
      image: ProductFour,
    },
    {
      id: 5,
      title: "Сетка рабица неоцинкованная",
      text: t("text4"),
      image: ProductSix,
    },
    {
      id: 6,
      title: "Оцинкованная сетка-рабица",
      text: t("text5"),
      image: ProductSeven,
    },
  ];
  const router = useRouter()?.query;
  const data = productData.find((evt) => evt?.id === Number(router?.id));

  return (
    <section className="about-section">
      <div className="container">
        <div className="flex gap-12 w-full justify-between items-center lg:flex-nowrap">
          <Fade left>
            <div>
              <div className="flex flex-col gap-3 pb-4">
                <h2 className="font-semibold text-2xl">{data?.title}</h2>
                <p className="text-stone-500 text-sm w-full max-w-[800px] sm:w-auto leading-6">
                  {data?.text}
                </p>
              </div>
              <Link
                href="tel:+99899554466"
                className="rounded-3xl header-title bg-black text-white border-black border-2 px-8 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                {t("aloqa")}
              </Link>
            </div>
          </Fade>
          <Fade right>
            <div className="w-[55%]">
              <Image src={data?.image} className="product-about-image" alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
