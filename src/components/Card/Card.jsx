import React from "react";
import styles from "./Card.module.scss";

const Card = ({ favoriteClick, imageUrl, title, price, plusClick }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    plusClick({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unlike.svg"
          alt="Unliked"
          onClick={favoriteClick}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <p>{title}</p>
      <div className={styles.cardBottom}>
        <div>
          <span>Price:</span>
          <b>{price} czk.</b>
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
