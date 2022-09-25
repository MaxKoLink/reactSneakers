import React from "react";
import Card from "../components/Card/Card";
function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="searchBlock">
        {/*если в searchValue что есть то выводим*/}
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="searchInput">
          <img src="/img/searchIco.svg" alt="Search" />
          <input onChange={onChangeSearchInput} placeholder="Search..." />
        </div>
      </div>
      <div className="sneakersWrapper">
        {/*поиск через фильтр. Перед рендерем каточек проверить наличие совпадений*/}
        {items
          .filter((item) => item.name.toLowerCase().includes(searchValue))
          .map((value, index) => (
            <Card
              key={index}
              title={value.name}
              id={value.id}
              price={value.price}
              imageUrl={value.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              plusClick={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
