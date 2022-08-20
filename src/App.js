import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="searchBlock">
          <h1>Все кроссовки</h1>
          <div className="searchInput">
            <img src="/img/searchIco.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="sneakersWrapper">
          <Card />
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div>
                <span>Price:</span>
                <b>12 999 czk.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/button-add.svg"
                  alt="add"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div>
                <span>Price:</span>
                <b>12 999 czk.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/button-add.svg"
                  alt="add"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div>
                <span>Price:</span>
                <b>12 999 czk.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/button-add.svg"
                  alt="add"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
