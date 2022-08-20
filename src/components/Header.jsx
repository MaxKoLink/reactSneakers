import React from "react";

const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" alt="" />
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучший кросовок</p>
        </div>
      </div>

      <ul className="headerRight">
        <li>
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span>1205 czk</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;