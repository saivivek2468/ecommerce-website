import React from "react";
import Image from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import ImageGallery1 from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import ImageGallery2 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import ImageGallery3 from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

import markOneHeadPhone from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import HeadPhone59 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import zx9Image from "../assets/shared/desktop/image-zx9-speaker.jpg";
import { useParams } from "react-router-dom";
import DetailsLayout from "../Layout/DetailsLayout";
import CategoryList from "../components/CategoryList";
import Gear from "../components/Gear";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

export const earphoneData = [
  {
    id: 6,
    image: Image,
    isNewProduct: true,
    heading: "YX1 WIRELESS EARPHONES",
    abr: "YX1",
    paragraph:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: "599",
    features: {
      paragraph1:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
      paragraph2:
        "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    },
    boxList: [
      {
        quantity: 2,
        title: "Earphone Unit",
      },
      {
        quantity: 6,
        title: "Multi-size Earplugs",
      },
      {
        quantity: 1,
        title: "User Manual",
      },
      {
        quantity: 1,
        title: "USB-C Charging Cable",
      },
      {
        quantity: 1,
        title: "Travel Pouch",
      },
    ],
    images: [ImageGallery1, ImageGallery2, ImageGallery3],

    similarProducts: [
      {
        img: markOneHeadPhone,
        title: "XX99 MARK I",
        link: "/headphone/2",
      },
      {
        img: HeadPhone59,
        title: "XX59",
        link: "/headphone/3",
      },
      {
        img: zx9Image,
        title: "ZX9 SPEAKER",
        link: "/speaker/4",
      },
    ],
  },
];

const Earphone = () => {
  const { id } = useParams();
  const singleEarphoneData = earphoneData.find(
    (earphone) => earphone.id === +id
  );
  return (
    <div>
      <DetailsLayout data={singleEarphoneData} />
      <CategoryList />
      <Gear />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Earphone;
