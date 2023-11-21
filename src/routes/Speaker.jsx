import React from "react";
import zx9SpeakerImage from "../assets/product-zx9-speaker/desktop/image-product.jpg";

import firstImage1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import firstImage2 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import firstImage3 from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

import zx7Image from "../assets/shared/desktop/image-zx7-speaker.jpg";
import HeadPhone59 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import markOneHeadPhone from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import DetailsLayout from "../Layout/DetailsLayout";
import { useParams } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import Gear from "../components/Gear";
import Footer from "../components/Footer";

import zx7SpeakerImage from "../assets/product-zx7-speaker/desktop/image-product.jpg";

import secondImage1 from "../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import secondImage2 from "../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import secondImage3 from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";

import zx9Image from "../assets/shared/desktop/image-zx9-speaker.jpg";
import GoToTop from "../components/GoToTop";

export const speakerData = [
  {
    id: 4,
    image: zx9SpeakerImage,
    isNewProduct: true,
    heading: "ZX9 SPEAKER",
    abr: "ZX9",
    paragraph:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: "4500",
    features: {
      paragraph1:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      paragraph2:
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    },
    boxList: [
      {
        quantity: 2,
        title: "Speaker Unit",
      },
      {
        quantity: 2,
        title: "Speaker Cloth Panel",
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
        title: "10m Optical Cable",
      },
    ],
    images: [firstImage1, firstImage2, firstImage3],

    similarProducts: [
      {
        img: zx7Image,
        title: "ZX7 SPEAKER",
        link: "/speaker/5",
      },
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
    ],
  },
  {
    id: 5,
    image: zx7SpeakerImage,
    isNewProduct: false,
    heading: "ZX7 SPEAKER",
    abr: "ZX7",
    paragraph:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: "3500",
    features: {
      paragraph1:
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage",
      paragraph2:
        "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    },
    boxList: [
      {
        quantity: 2,
        title: "Speaker Unit",
      },
      {
        quantity: 2,
        title: "Speaker Cloth Panel",
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
        title: "7.5m Optical Cable",
      },
    ],
    images: [secondImage1, secondImage2, secondImage3],

    similarProducts: [
      {
        img: zx9Image,
        title: "ZX9 SPEAKER",
        link: "/speaker/4",
      },
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
    ],
  },
];

const Speaker = () => {
  const { id } = useParams();
  console.log(id, "id");
  const singleSpeakerData = speakerData.find((speaker) => speaker.id === +id);
  console.log(singleSpeakerData, "singlespeakerdata");
  return (
    <div>
      <DetailsLayout data={singleSpeakerData} />
      <CategoryList />
      <Gear />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Speaker;
