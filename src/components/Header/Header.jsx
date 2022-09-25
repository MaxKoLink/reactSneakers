import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <Link to={"/"}>
        <div className={styles.headerLeft}>
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className={styles.headerInfo}>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучший кросовок</p>
          </div>
        </div>
      </Link>

      <ul className={styles.headerRight}>
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span className={styles.price}>1205 czk</span>
        </li>
        <li>
          {/*Routing*/}
          <Link to={"/favorites"}>
            <img
              width={18}
              height={18}
              src="/img/heart-menu.svg"
              alt="favorite menu"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
