import React from "react";
import Header from "../components/Header";
import styles from "./Headphones.module.css";
import Layout from "../Layout/Layout";
import markTwoHeadphones from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import markOneHeadphones from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59Headphones from "../assets/shared/desktop/image-xx59-headphones.jpg";
import CategoryList from "../components/CategoryList";
import Gear from "../components/Gear";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

const HeadPhones = () => {
  return (
    <div>
      <Header>
        <h3 className={styles.heading}>HEADPHONES</h3>
      </Header>
      <div style={{ marginTop: "50px" }}>
        <Layout
          img={markTwoHeadphones}
          order={0}
          isNewProduct={true}
          heading={"XX99 Mark IIHeadphones"}
          paragraph={
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          }
          link={"/headphone/1"}
        />
      </div>

      <Layout
        img={markOneHeadphones}
        order={1}
        heading={"XX99 Mark IHeadphones"}
        paragraph={
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        }
        link={"/headphone/2"}
      />

      <Layout
        img={xx59Headphones}
        order={0}
        heading={"XX59 Headphones"}
        paragraph={
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        }
        link={"/headphone/3"}
      />
      <CategoryList />
      <Gear />
      <Footer />
      <GoToTop />
    </div> 
  );
};

export default HeadPhones;
