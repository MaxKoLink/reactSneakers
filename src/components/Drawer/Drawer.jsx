import React from "react";
import styles from "./Drawer.module.scss";

const Drawer = (props) => {
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            className={styles.removeBtn}
            src="/img/delete.svg"
            alt="Remove"
            onClick={props.onClose}
          />
        </h2>
        <div className={styles.items}>
          <div className={styles.cartItem}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className={styles.cartText}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 czk</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/delete.svg"
              alt="Remove"
            />
          </div>
          {/*<div className={styles.cartItem}>*/}
          {/*  <img*/}
          {/*    width={70}*/}
          {/*    height={70}*/}
          {/*    src="/img/sneakers/1.jpg"*/}
          {/*    alt="Sneakers"*/}
          {/*  />*/}
          {/*  <div className="cart-text">*/}
          {/*    <p>Мужские Кроссовки Nike Air Max 270</p>*/}
          {/*    <b>12 999 czk</b>*/}
          {/*  </div>*/}
          {/*  <img className="removeBtn" src="/img/delete.svg" alt="Remove" />*/}
          {/*</div>*/}
        </div>
        <div className={styles.cartTotalBlock}>
          <ul>
            <li className={styles.price}>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className={styles.price}>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className={styles.greenButton}>
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
