import React from "react";
import styles from "./Card.module.scss";

const Card = ({
  id,
  imageUrl,
  title,
  price,
  plusClick,
  onFavorite,
  favorite,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorite);

  // Some clicks on Favorite and Plus button
  const onClickPlus = () => {
    // Some data for axios
    plusClick({ imageUrl, title, price });
    //we are checked if isAdded true then heart-like.svg else heart-unlike.svg
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? "/img/heart-like.svg" : "/img/heart-unlike.svg"}
          alt="Unliked"
          onClick={onClickFavorite}
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
