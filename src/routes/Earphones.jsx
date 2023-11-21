import React from "react";
import styles from "./Headphones.module.css";
import Header from "../components/Header";
import EarphonesImage from "../assets/product-yx1-earphones/desktop/image-product.jpg";
import Layout from "../Layout/Layout";
import CategoryList from "../components/CategoryList";
import Gear from "../components/Gear";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

const Earphones = () => {
  return (
    <div>
      <Header>
        <h3 className={styles.heading}>EARPHONES</h3>
      </Header>
      <div style={{ marginTop: "50px" }}>
        <Layout
          img={EarphonesImage}
          order={0}
          isNewProduct={true}
          heading={"YX1 WIRELESS EARPHONES"}
          paragraph={
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          }
          link={"/earphone/6"}
        />
      </div>
      <CategoryList />
      <Gear />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Earphones;
