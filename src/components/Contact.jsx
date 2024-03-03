import React from "react";
import ContactImage from "@/assets/contact.png";
import Image from "next/image";

function Contact() {
  return (
    <div className="py-4 relative">
      <div className="container">
        <div className="contact p-8 rounded-2vw mb-10vw p-3vw relative">
          <div className="flex gap-8 justify-between">
            <div className="flex px-12 gap-4 flex-col">
              <h2 className="text-white text-4xl mb-4">СВЯЗАТЬСЯ С НАМИ</h2>
              <label className="form-label" htmlFor="">
                <p className="text-white">Ismingiz</p>
                <input
                  className="outline-none py-2 px-6 rounded-lg form-input mt-2 w-full"
                  type="text"
                  placeholder="Ismingiz"
                />
              </label>
              <label className="form-label" htmlFor="">
                <p className="text-white">Telefon raqamingiz</p>
                <input
                  type="tel"
                  className="outline-none py-2 px-6 rounded-lg form-input mt-2 w-full"
                  placeholder="Telefon raqamingiz"
                />
              </label>
              <label className="form-label" htmlFor="">
                <p className="text-white">Xabaringiz</p>
                <textarea
                  className="outline-none py-2 px-6 rounded-lg form-input mt-2 w-full"
                  placeholder="Xabaringiz"
                />
              </label>
              <button className="w-full text-black bg-white rounded-lg h-[50px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                Yuborish
              </button>
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
