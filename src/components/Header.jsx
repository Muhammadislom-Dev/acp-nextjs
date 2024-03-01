import React from "react";
import AcpBgImage from "@/assets/bg1.jpg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="relative">
      <div className="header"></div>
      <Image src={AcpBgImage} alt="AcpBgImage" className=" header-img" />
      <div className="container">
        <h2 className="text-white absolute top-[400px] text-2xl header-title">
          WELDED MESH GRID-TO`G`RIDAN TO`G`RI ISHLAB CHIQARUVCHIDAN.
        </h2>
        <h1 className="text-white absolute top-[320px] header-title text-5xl">
          Yo`l setkalari va sim maxsulotlari.
        </h1>
        <Link
          className="text-black absolute top-[500px] rounded-3xl header-title bg-white px-12 py-3 text-base font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
          href="tel:+99899554466">
          Bog`lanish
        </Link>
      </div>
    </div>
  );
}

export default Header;
