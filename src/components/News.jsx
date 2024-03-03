import Link from "next/link";
import React from "react";
const News = () => {
  return (
    <section className="news-section flex justify-center py-4 px-12">
      <div className="container">
        <div>
          <h2 className=" font-semibold text-3xl text-center">NEWS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 mt-10">
            <div className="news-card">
              <img
                className="rounded-t-md"
                src="http://alstar.uz/assets/alstarpro-7683e32e.jpg"
                alt="alstar pro image"
              />
              <div className="px-4 py-3">
                <h3 className="text-black font-semibold text-base">
                  ALSTAR 7 PRO
                </h3>
                <p className="text-sm py-2 mb-2">
                  Do'stlar, bugun bizning birinchi va o'z sohasida yagona ALSTAR
                  7 PRO onlayn jurnalimiz nashr etildi!
                </p>
                <Link
                  href={"#"}
                  className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="news-card">
              <img
                className="rounded-t-md card-image"
                src="http://alstar.uz/assets/shourum-37a273f4.jpg"
                alt="alstar pro image samarkand"
              />
              <div className="px-4 py-3">
                <h3 className="text-black font-semibold text-base">
                  ALSTAR в Самарканде!
                </h3>
                <p className="text-sm py-2 mb-2">
                  Уведомляем вас об открытии нашего оффициального шоурума в
                  Самарканде, здесь вы можете ощутить качество и надежность
                  наших АКП Адрес: г.Самарканд ул.Рудаки д.227.
                </p>
                <Link
                  href={"#"}
                  className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="news-card">
              <img
                className="rounded-t-md card-image"
                src="http://alstar.uz/assets/news3-6d0226da.jpg"
                alt="alstar pro image"
              />
              <div className="px-4 py-3">
                <h3 className="text-black font-semibold text-base">
                  ALSTAR в шоурума.
                </h3>
                <p className="text-sm py-2 mb-2">
                  Уведомляем вас об открытии нашего оффициального шоурума в
                  Самарканде, здесь вы можете ощутить качество и надежность
                  наших АКП Адрес: г.Самарканд ул.Рудаки д.227.
                </p>
                <Link
                  href={"#"}
                  className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="news-card">
              <img
                className="rounded-t-md card-image"
                src="https://alubond.com/wp-content/uploads/2022/11/inter.png"
                alt="alstar pro image"
              />
              <div className="px-4 py-3">
                <h3 className="text-black font-semibold text-base">
                  Alubond Has Succesfully Passed CAN/ULC-S134…
                </h3>
                <p className="text-sm py-2 mb-2">
                  We proudly announce that we have passed CAN/ULC -S134
                  full-scale wall-assembly test designed to measure the limits
                  of…
                </p>
                <Link
                  href={"#"}
                  className="text-sm bg-learnMoreBtn px-3 py-2 rounded-md text-aboutTitle hover:bg-learnMoreBtnHover duration-200">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
