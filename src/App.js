function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt=""/>
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучший кросовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt=""/>
            <span>1205 czk</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt=""/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakersWrapper">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div>
                <span>Price:</span>
                <b>12 999 czk.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/button-add.svg" alt="add"/></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt=""/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div>
                <span>Price:</span>
                <b>12 999 czk.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/button-add.svg" alt="add"/></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt=""/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div>
                <span>Price:</span>
                <b>12 999 czk.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/button-add.svg" alt="add"/></button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt=""/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
              <div>
                <span>Price:</span>
                <b>12 999 czk.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/button-add.svg" alt="add"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
