import React from "react";
import Header from "../components/Header";
import styles from "./Headphones.module.css";
import zx9Speakers from "../assets/shared/desktop/image-zx9-speaker.jpg";
import zx7Speakers from "../assets/shared/desktop/image-zx7-speaker.jpg";
import Layout from "../Layout/Layout";
import CategoryList from "../components/CategoryList";
import Gear from "../components/Gear";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

const Speakers = () => {
  return (
    <div>
      <Header>
        <h3 className={styles.heading}>SPEAKERS</h3>
      </Header>
      <div style={{ marginTop: "50px" }}>
        <Layout
          img={zx9Speakers}
          order={0}
          isNewProduct={true}
          heading={"ZX9 SPEAKER"}
          paragraph={
            "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          }
          link={"/speaker/4"}
        />
        <Layout
          img={zx7Speakers}
          order={1}
          heading={"ZX7 SPEAKER"}
          paragraph={
            "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          }
          link={"/speaker/5"}
        />
        <CategoryList />
        <Gear />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
};

export default Speakers;
