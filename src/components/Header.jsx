import React, { Children } from "react";
import styles from "./Header.module.css";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
import CartDetails from "./CartDetails";
import ConfirmDetails from "./ConfirmDetails";
import { FaSignInAlt } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

export const HeaderPart = ({
  isPadding,
  modalShown = false,
  toggleModal = () => {},
  pathname = "",
  getCartCount,
}) => (
  <header style={{ padding: isPadding ? "20px 30px 20px 30px" : "" }}>
    <h1 className={styles.text}>audiophile</h1>
    <ul className={styles.menuList}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/headphones">Headphones</Link>
      </li>
      <li>
        <Link to="/speakers">speakers</Link>
      </li>
      <li>
        <Link to="/earphones">earphones</Link>
      </li>
    </ul>
    <div className={styles.icon}>
      <Link to="/login">
        {" "}
        <button>
          <FaSignInAlt /> Sign In
        </button>
      </Link>
      <div className={styles.img}>
        {getCartCount >= 1 && (
          <div className={styles.circle}>{getCartCount}</div>
        )}
        <img
          src={cartIcon}
          alt="cart"
          onClick={() => {
            toggleModal(!modalShown);
          }}
        />
      </div>
    </div>
    <Modal
      shown={modalShown}
      close={() => {
        toggleModal(false);
      }}
      pathname={pathname}
    >
      {pathname === "/checkout" ? <ConfirmDetails /> : <CartDetails />}
    </Modal>
  </header>
);

const Header = ({ children }) => {
  console.log("header was called");
  const [modalShown, toggleModal] = React.useState(false);
  const { cartData, getCartCount } = useGlobalContext();

  return (
    <div className={styles.homepageContainer}>
      <HeaderPart
        modalShown={modalShown}
        toggleModal={toggleModal}
        pathname=""
        cartData={cartData}
        getCartCount={getCartCount}
      />
      {children}
    </div>
  );
};

export default Header;