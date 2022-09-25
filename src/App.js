import React from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpened, setIsCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState();

  React.useEffect(() => {
    // fetch("https://631f38ae22cefb1edc46451e.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });
    axios
      .get("https://631f38ae22cefb1edc46451e.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://631f38ae22cefb1edc46451e.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://631f38ae22cefb1edc46451e.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
    axios.post("https://631f38ae22cefb1edc46451e.mockapi.io/cart", obj);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://631f38ae22cefb1edc46451e.mockapi.io/favorites/${obj.id}`,
          obj
        );
        // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://631f38ae22cefb1edc46451e.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Favorite is broken ");
    }
  };

  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    console.log(setCartItems);
    axios.delete(`https://631f38ae22cefb1edc46451e.mockapi.io/cart/${id}`);
  };

  // вытаскиваем из инпута значаение и сохраняем в SearchValue
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper">
      {isCartOpened ? (
        <Drawer
          items={cartItems}
          onClose={() => setIsCartOpened(false)}
          onRemove={(id) => onRemoveItem(id)}
        />
      ) : null}
      <Header onClickCart={() => setIsCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          exact
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
