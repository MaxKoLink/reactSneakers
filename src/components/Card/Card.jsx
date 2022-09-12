import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unlike.svg"
          alt="Unliked"
          onClick={props.favoriteClick}
        />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <p>{props.title}</p>
      <div className={styles.cardBottom}>
        <div>
          <span>Price:</span>
          <b>{props.price} czk.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "./img/button-ok.svg" : "./img/button-add.svg"}
          alt="add"
        />
      </div>
    </div>
  );
};

export default Card;
