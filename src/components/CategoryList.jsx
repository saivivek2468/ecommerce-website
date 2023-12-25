import React from "react";
import { categories } from "./Category";
import styles from "./Category.module.css";
import iconRight from "../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <div className={styles.products} key={category.id}>
          <div className={styles.image}>
            <img src={category.image} />
          </div>
          <p className={styles.heading}>{category.heading}</p>
          <Link to={`${category.path}`}>
            <div className={styles.navigate}>
              <span>Shop</span>
              <img src={iconRight} />
            </div>
          </Link>
        </div> 
      ))}
    </div>
  );
};

export default CategoryList;
