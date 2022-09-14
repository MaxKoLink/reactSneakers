import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

// const arr = [
//   {
//     name: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 12999,
//     imageUrl: "/img/sneakers/1.jpg",
//   },
//   {
//     name: "Мужские Кроссовки Nike Air Max 270",
//     price: 16999,
//     imageUrl: "/img/sneakers/2.jpg",
//   },
//   {
//     name: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 8499,
//     imageUrl: "/img/sneakers/3.jpg",
//   },
//   {
//     name: "Кроссовки Puma X Aka Boku Future Rider",
//     price: 8999,
//     imageUrl: "/img/sneakers/4.jpg",
//   },
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpened, setIsCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  React.useEffect(() => {
    fetch("https://631f38ae22cefb1edc46451e.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onChangeSearcheInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper">
      {isCartOpened ? (
        <Drawer items={cartItems} onClose={() => setIsCartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setIsCartOpened(true)} />
      <div className="content">
        <div className="searchBlock">
          <h1>
            {searchValue
              ? `Поиск по запросу "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="searchInput">
            <img src="/img/searchIco.svg" alt="Search" />
            <input onChange={onChangeSearcheInput} placeholder="Search..." />
          </div>
        </div>
        <div className="sneakersWrapper">
          {items.map((value, index) => (
            <Card
              key={index}
              title={value.name}
              price={value.price}
              imageUrl={value.imageUrl}
              favoriteClick={() => console.log("Product was added to favorite")}
              plusClick={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
