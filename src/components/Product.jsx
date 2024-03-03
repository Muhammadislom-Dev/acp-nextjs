import React from "react";
import ProductOne from "@/assets/product1.png";
import ProductTwo from "@/assets/product2.png";
import ProductThree from "@/assets/product3.JPG";
import ProductFour from "@/assets/product4.JPG";
import ProductFive from "@/assets/product5.png";
import Image from "next/image";
// import VideoMp4 from "@/assets/video.mp4";
import { Fade } from "react-reveal";

function Product() {
  return (
    <>
      <div className="py-8">
        <div className="container">
          <h2 className="text-3xl font-medium py-6">ПРОДУКЦИИ</h2>
          <div className="flex flex-wrap gap-8">
            <Fade bottom>
              <div className="max-w-sm">
                <Image
                  className="object-cover product-image"
                  src={ProductTwo}
                  alt="ProductOne"
                />
                <h4 className="text-xl font-medium my-4">СВАРНАЯ СЕТКА</h4>
              </div>
              <div className="max-w-sm">
                <Image
                  className="object-cover product-image"
                  src={ProductFive}
                  alt="ProductOne"
                />
                <h4 className="text-xl font-medium my-4">ДОРОЖНАЯ СЕТКА</h4>
              </div>
              <div className="max-w-sm">
                <Image
                  className="object-cover product-image"
                  src={ProductFour}
                  alt="ProductOne"
                />
                <h4 className="text-xl font-medium my-4">Еврозабор 3-D</h4>
              </div>
            </Fade>
            <Fade bottom>
              <div className="max-w-sm">
                <Image
                  className="object-cover product-image"
                  src={ProductOne}
                  alt="ProductOne"
                />
                <h4 className="text-xl font-medium my-4">Еврозабор 3-D</h4>
              </div>
              <div className="max-w-sm">
                <Image
                  className="object-cover product-image"
                  src={ProductThree}
                  alt="ProductOne"
                />
                <h4 className="text-xl font-medium my-4">Сетка рябица </h4>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      {/* <video className="product-video" autoplay controls>
        <source src={"/src/assets/video.mp4"} type="video/mp4" />
      </video> */}
    </>
  );
}

export default Product;
