import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img className="removeBtn" src="/img/delete.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cart-item">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cart-text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 czk</b>
            </div>
            <img className="removeBtn" src="/img/delete.svg" alt="Remove" />
          </div>
          <div className="cart-item">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cart-text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 czk</b>
            </div>
            <img className="removeBtn" src="/img/delete.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="price">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="price">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
