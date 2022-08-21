import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const onClickButton = () => {
    alert(props.title);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unlike.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <p>{props.title}</p>
      <div className={styles.cardBottom}>
        <div>
          <span>Price:</span>
          <b>{props.price} czk.</b>
        </div>
        <button className={styles.button} onClick={() => onClickButton()}>
          <img width={11} height={11} src="./img/button-add.svg" alt="add" />
        </button>
      </div>
    </div>
  );
};

export default Card;
