import React from "react";
import DetailsLayout from "../Layout/DetailsLayout";
import Image from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import Image1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import Image2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import Image3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import markOneHeadPhone from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import markTwoHeadPhone from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import HeadPhone59 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import zx9SpeakerImage from "../assets/shared/desktop/image-zx9-speaker.jpg";

import Image99 from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import secondImage1 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import secondImage2 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import secondImage3 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

import Image59 from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import thirdImage1 from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import thirdImage2 from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import thirdImage3 from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

import { useParams } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import Gear from "../components/Gear";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

export const headPhoneData = [
  {
    id: 1,
    image: Image,
    isNewProduct: true,
    heading: "XX99 Mark II Headphones",
    abr: "XX99 Mark II",
    paragraph:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    features: {
      paragraph1:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      paragraph2:
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    },
    boxList: [
      {
        quantity: 1,
        title: "Headphone Unit",
      },
      {
        quantity: 2,
        title: "Replacement Earcups",
      },
      {
        quantity: 1,
        title: "User Manual",
      },
      {
        quantity: 1,
        title: "3.5mm 5m Audio Cable",
      },
      {
        quantity: 1,
        title: "Travel Bag",
      },
    ],
    images: [Image1, Image2, Image3],

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
        img: zx9SpeakerImage,
        title: "ZX9 SPEAKER",
        link: "/speaker/4",
      },
    ],
  },

  {
    id: 2,
    image: Image99,
    isNewProduct: false,
    heading: "XX99 Mark I Headphones",
    abr: "XX99 Mark I",
    paragraph:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    price: "1750",
    features: {
      paragraph1:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
      paragraph2:
        "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    },
    boxList: [
      {
        quantity: 1,
        title: "Headphone Unit",
      },
      {
        quantity: 2,
        title: "Replacement Earcups",
      },
      {
        quantity: 1,
        title: "User Manual",
      },
      {
        quantity: 1,
        title: "3.5mm 5m Audio Cable",
      },
    ],
    images: [secondImage1, secondImage2, secondImage3],

    similarProducts: [
      {
        img: markTwoHeadPhone,
        title: "XX99 MARK II",
        link: "/headphone/1",
      },
      {
        img: HeadPhone59,
        title: "XX59",
        link: "/headphone/3",
      },
      {
        img: zx9SpeakerImage,
        title: "ZX9 SPEAKER",
        link: "/speaker/4",
      },
    ],
  },
  {
    id: 3,
    image: Image59,
    isNewProduct: false,
    heading: "XX59 Headphones",
    abr: "XX59",
    paragraph:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: "899",
    features: {
      paragraph1:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      paragraph2:
        "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    },
    boxList: [
      {
        quantity: 1,
        title: "Headphone Unit",
      },
      {
        quantity: 2,
        title: "Replacement Earcups",
      },
      {
        quantity: 1,
        title: "User Manual",
      },
      {
        quantity: 1,
        title: "3.5mm 5m Audio Cable",
      },
    ],
    images: [thirdImage1, thirdImage2, thirdImage3],

    similarProducts: [
      {
        img: markTwoHeadPhone,
        title: "XX99 MARK II",
        link: "/headphone/1",
      },
      {
        img: markOneHeadPhone,
        title: "XX99 MARK I",
        link: "/headphone/2",
      },
      {
        img: zx9SpeakerImage,
        title: "ZX9 SPEAKER",
        link: "/speaker/4",
      },
    ],
  },
];

const HeadPhone = () => {
  const { id } = useParams();
  const singleHeadPhoneData = headPhoneData.find(
    (headPhone) => headPhone.id === +id
  );
  return (
    <div>
      <DetailsLayout data={singleHeadPhoneData} />
      <CategoryList />
      <Gear />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default HeadPhone;
