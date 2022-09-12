import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 16999,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  const [isCartOppened, setIsCartOppened] = React.useState(false);
  return (
    <div className="wrapper">
      {isCartOppened ? (
        <Drawer onClose={() => setIsCartOppened(false)} />
      ) : null}
      <Header onClickCart={() => setIsCartOppened(true)} />
      <div className="content">
        <div className="searchBlock">
          <h1>Все кроссовки</h1>
          <div className="searchInput">
            <img src="/img/searchIco.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="sneakersWrapper">
          {arr.map((value) => (
            <Card
              title={value.name}
              price={value.price}
              imageUrl={value.imageUrl}
              favoriteClick={() => console.log("Product was added to favorite")}
              plusClick={() => console.log("Product was added to the cart")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
