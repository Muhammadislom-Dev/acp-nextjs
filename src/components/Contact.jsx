import React, { useState } from "react";
import ContactImage from "@/assets/contact.png";
import Image from "next/image";
import Button from "./Button";
import { useTranslation } from "react-i18next";

function Contact() {
  const {t} = useTranslation()
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }

  const handleClear = () => {
    setNameValue(null);
    setNumberValue(null);
    setTextValue(null);
  };
  return (
    <div id="contact" className="py-4 relative">
      <div className="container">
        <div className="contact p-4 lg:p-8 rounded-2vw mb-10vw p-3vw relative">
          <div className="flex gap-8 justify-between flex-wrap-reverse lg:flex-nowrap">
            <div className="flex w-full  lg:px-12 gap-4 flex-col">
              <h2 className="text-white text-4xl mb-4">{t("hello6")}</h2>
              <label className="form-label" htmlFor="">
                <p className="text-white">{t("hello18")}</p>
                <input
                  className="outline-none py-2 px-6 rounded-lg form-input mt-2 w-full"
                  type="text"
                  placeholder={t("hello18")}
                  value={nameValue}
                  onChange={(e) => changeName(e.target.value)}
                />
              </label>
              <label className="form-label" htmlFor="">
                <p className="text-white">{t("hello19")}</p>
                <input
                  type="tel"
                  value={numberValue}
                  onChange={(e) => changeNumber(e.target.value)}
                  className="outline-none py-2 px-6 rounded-lg form-input mt-2 w-full"
                  placeholder={t("hello19")}
                />
              </label>
              <label className="form-label" htmlFor="">
                <p className="text-white">{t("hello20")}</p>
                <textarea
                  value={textValue}
                  onChange={(e) => changeText(e.target.value)}
                  className="outline-none py-2 px-6 rounded-lg form-input mt-2 w-full"
                  placeholder={t("hello20")}
                />
              </label>
              <Button
                textValue={textValue}
                nameValue={nameValue}
                numberValue={numberValue}
                handleClear={handleClear}
              />
            </div>
            <Image
              className="contact-image"
              src={ContactImage}
              alt="ContactImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
