import React from "react";
import AcpIcon from "@/assets/acp.png";
import Image from "next/image";
import Link from "next/link";
import Language from "./Language";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="p-4 bg-black">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image className="w-[100px]" src={AcpIcon} alt="Acp" />
        </Link>
        <div className="flex gap-3 lg:gap-4 items-center hiddenMenu">
          <Language />
          <Link className="text-white text-xs lg:text-sm font-medium" href="#">
            {t("hello1")}
          </Link>
          <Link className="text-white text-xs lg:text-sm font-medium" href="#product">
            {t("hello3")}
          </Link>
          <Link className="text-white text-xs lg:text-sm font-medium" href="/company">
            {t("hello2")}
          </Link>
          <Link className="text-white text-xs lg:text-sm font-medium" href="#">
            {t("hello5")}
          </Link>
          <Link className="text-white text-xs lg:text-sm font-medium" href="#contact">
            {t("hello6")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
