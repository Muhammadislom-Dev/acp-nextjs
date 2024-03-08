import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import UzbekImage from "@/assets/uzbek.png";
import RussianImage from "@/assets/russian.png";
import EnglishImage from "@/assets/english.png";
import TurkImage from '@/assets/turk.png'
import Image from "next/image";

function Language() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const initialLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("language") || UzbekImage
      : "ru";
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  const onChangeLanguage = (value) => {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
    toggleMenu();
  };

  const languageImage =
    selectedLanguage === "uz"
      ? UzbekImage
      : selectedLanguage === "ru"
      ? RussianImage
      : EnglishImage;

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="inline-flex justify-center w-full rounded-md px-4 text-sm font-medium text-gray-700"
          id="options-menu"
          onClick={toggleMenu}>
          <Image className="h-6 w-6" src={languageImage} alt="Language" />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="origin-top-right language absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          <div className="py-1 language" role="none">
            <div
              onClick={() => onChangeLanguage("uz")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              <Image className="h-6 w-6" src={UzbekImage} alt="Uzbek" />
            </div>
            <div
              onClick={() => onChangeLanguage("ru")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              <Image className="h-6 w-6" src={RussianImage} alt="Russian" />
            </div>
            <div
              onClick={() => onChangeLanguage("en")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              <Image className="h-6 w-6" src={EnglishImage} alt="English" />
            </div>
            <div
              onClick={() => onChangeLanguage("tk")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              <Image className="h-6 w-6" src={TurkImage} alt="TurkImage" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Language;
