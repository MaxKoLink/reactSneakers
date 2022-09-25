import React from "react";
import Card from "../components/Card/Card";

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="searchBlock">
        {/*если в searchValue что есть то выводим*/}
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakersWrapper">
        {items &&
          items.map((value, index) => (
            <Card
              key={index}
              // title={value.name}
              // price={value.price}
              // imageUrl={value.imageUrl}
              // id={value.id}
              favorite={true}
              onFavorite={onAddToFavorite}
              {...value}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
