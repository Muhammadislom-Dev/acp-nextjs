import React from "react";
import GalleryOne from "@/assets/gallery1.png";
import GalleryTwo from "@/assets/gallery2.png";
import GalleryThree from "@/assets/product1.png";
import GalleryFour from "@/assets/gallery4.png";
import GalleryFive from "@/assets/gallery5.png";
import GallerySix from "@/assets/product5.png";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Share from "yet-another-react-lightbox/plugins/share";

function Gallery() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="py-8">
      <div className="container">
        <h2 className=" font-semibold text-3xl text-center">{t("hello12")}</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        <Image
          src={GalleryOne}
          className="gallery-image"
        />
        <Image
          src={GalleryTwo}
          className="gallery-image"
        />
        <Image
          src={GalleryThree}
          className="gallery-image"
        />
        <Image src={GalleryFour} className="gallery-image" />
        <Image src={GalleryFive} className="gallery-image" />
        <Image src={GallerySix} className="gallery-image" />
      </div>
      {/* <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Fullscreen, Share]}
        slides={[
          {
            src: "../assets/gallery1.png",
          },
        ]}
      /> */}
    </div>
  );
}

export default Gallery;
