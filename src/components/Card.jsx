import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unlike.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="cardBottom">
        <div>
          <span>Price:</span>
          <b>12 999 czk.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/button-add.svg" alt="add" />
        </button>
      </div>
    </div>
  );
};

export default Card;
