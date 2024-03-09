import React from "react";
import ProductOne from "@/assets/sim1.jpg";
import ProductTwo from "@/assets/sim2.jpg";
import ProductThree from "@/assets/sim3.jpg";
import ProductFour from "@/assets/sim4.png";
import ProductFive from "@/assets/sim5.jpg";
import ProductSix from "@/assets/sim6.jpg";
import ProductSeven from "@/assets/sim7.jpg";
import Image from "next/image";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function Product() {
  const { t } = useTranslation();
  return (
    <>
      <div id="product" className="py-8">
        <div className="container">
          <h2 className="text-3xl font-medium py-6">{t("hello3")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Fade bottom>
              <div>
                <Image
                  className="object-cover product-image"
                  src={ProductOne}
                  alt="ProductOne"
                />
                <h4 className="text-base font-medium my-4">
                  Оцинкованная проволока
                </h4>
              </div>
              <div>
                <Image
                  className="object-cover product-image"
                  src={ProductTwo}
                  alt="ProductOne"
                />
                <h4 className="text-base font-medium my-4">
                  Сетка сварная в рулонах
                </h4>
              </div>
              <div>
                <Image
                  className="object-cover product-image"
                  src={ProductThree}
                  alt="ProductOne"
                />
                <h4 className="text-base font-medium my-4">
                  Стальная проволока
                </h4>
              </div>
            </Fade>
            <Fade bottom>
              <div>
                <Image
                  className="object-cover product-image"
                  src={ProductFour}
                  alt="ProductOne"
                />
                <h4 className="text-base font-medium my-4">
                  Проволока вязальная
                </h4>
              </div>
              <div>
                <Image
                  className="object-cover product-image"
                  src={ProductSix}
                  alt="ProductOne"
                />
                <h4 className="text-base font-medium my-4">
                  Сетка рабица неоцинкованная{" "}
                </h4>
              </div>
              <div>
                <Image
                  className="object-cover product-image"
                  src={ProductSeven}
                  alt="ProductOne"
                />
                <h4 className="text-base font-medium my-4">
                  Оцинкованная сетка-рабица{" "}
                </h4>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
