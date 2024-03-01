import React from "react";
import AcpIcon from "@/assets/acp.png";
import Image from "next/image";
import Link from "next/link";
import Language from "./Language";

function Navbar() {
  return (
    <div className="p-4 bg-black">
      <div className="container flex items-center justify-between">
        <Image className="w-[100px]" src={AcpIcon} alt="Acp" />
        <div className="flex gap-4">
          <Language />
          <Link className="text-white text-sm font-medium" href="#">
            ГЛАВНАЯ
          </Link>
          <Link className="text-white text-sm font-medium" href="#">
            ПРОДУКЦИИ
          </Link>
          <Link className="text-white text-sm font-medium" href="#">
            О КОМПАНИИ
          </Link>
          <Link className="text-white text-sm font-medium" href="#">
            УСЛУГИ
          </Link>
          <Link className="text-white text-sm font-medium" href="#">
            СВЯЗАТЬСЯ С НАМИ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
