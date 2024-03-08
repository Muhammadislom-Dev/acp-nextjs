import React from "react";
import AcpBgImage from "@/assets/bg1.jpg";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="header"></div>
      <Image src={AcpBgImage} alt="AcpBgImage" className=" header-img" />
      <div className="container">
        <h2 className="text-white absolute top-[330px] md:top-[400px] text-base md:text-2xl header-title">
          {t("header1")}
        </h2>
        <h1 className="text-white absolute top-[200px] md:top-[320px] header-title text-3xl md:text-5xl">
          {t("header2")}
        </h1>
        <Link
          className="text-black absolute top-[400px] md:top-[500px] rounded-3xl header-title bg-white px-12 py-3 text-base font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
          href="tel:+99899554466"
        >
          {t("aloqa")}
        </Link>
      </div>
    </div>
  );
}

export default Header;
