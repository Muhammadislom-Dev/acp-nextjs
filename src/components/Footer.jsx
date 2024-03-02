import React from "react";
import Logo from "@/assets/acp.png";
import InstargramSvg from "@/icons/InstargramSvg";
import TelegramSvg from "@/icons/TelegramSvg";
import YouTubeSvg from "@/icons/YouTubeSvg";
import FacebookSvg from "@/icons/FacebookSvg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer-section px-10 py-8">
      <div className="container">
        <div className="footer__internal-div rounded-lg flex justify-between py-7 px-10">
          <ul className="text-white flex flex-col gap-4">
            <li>KOMPANYAMIZ HAQIDA</li>
            <li>
              <Image src={Logo} className="footer-logo" alt="Logo image" />
            </li>
            <li className="flex mt-8 gap-4 items-center">
              <Link href={"#"}>
                <InstargramSvg />
              </Link>
              <Link href={"#"}>
                <TelegramSvg />
              </Link>
            </li>
          </ul>
          <ul className="text-white flex flex-col gap-4">
            <li>Tezkor havolalar</li>
            <li>
              <Link href={"#"}>BIZ HAQIMIZDA</Link>
            </li>
            <li>
              <Link href={"#"}>YANGILIKLAR</Link>
            </li>
            <li>
              <Link href={"#"}>LOYIHALAR</Link>
            </li>
            <li>
              <Link href={"#"}>ALOQA</Link>
            </li>
          </ul>
          <ul className="text-white flex flex-col gap-4">
            <li>ALOQA</li>
            <li>«GOLDEN HAPPINESS»</li>
            <li>
              <Link href={"#"}>info@alstar.uz</Link>
            </li>
            <li>
              <Link href="tel:+998770074777">+998 77 007 47 77</Link>
            </li>
            <li>
              <Link href="tel:+998990000031">+998 99 000 00 31</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
