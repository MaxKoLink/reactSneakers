import React from "react";
import styles from "./Drawer.module.scss";

const Drawer = ({ onClose, items = [], onRemove }) => {
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            className={styles.removeBtn}
            src="/img/delete.svg"
            alt="Remove"
            onClick={onClose}
          />
        </h2>
        {items.length > 0 ? (
          <div>
            <div className={styles.items}>
              {items.map((obj) => (
                <div className={styles.cartItem}>
                  <img
                    width={70}
                    height={70}
                    src={obj.imageUrl}
                    alt="Sneakers"
                  />
                  <div className={styles.cartText}>
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    className={styles.removeBtn}
                    src="/img/delete.svg"
                    alt="Remove"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
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
        ) : (
          <div className={styles.emptyBox}>
            <img className={styles.img} src="/img/emptyBox.png" alt="Box" />
            <h2>Cart is empty</h2>
            <p>Add at least one pair of sneakers</p>
            <button className={styles.greenButton}>
              <img onClick={onClose} src="/img/arrowBox.svg" alt="arrow" />
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
