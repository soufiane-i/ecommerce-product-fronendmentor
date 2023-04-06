import { useState } from "react";
import "./App.css";
import Slider from "./components/slider";
import data from "./data/data.json";

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);

  const [cart, setCart] = useState([]);

  const handleToggle = () => {
    setActive(!isActive);
  };

  function addCart() {
    setCart(data[0]);
  }

  return (
    <div className="App">
      <nav>
        <div className="nav__left">
          <img src="/images/icon-menu.svg" className="menu" alt="icon menu" />
          <a href="/">sneakers</a>
        </div>
        <div className="nav__right">
          <img
            src="/images/icon-cart.svg"
            className="cart"
            alt="cart"
            onClick={handleToggle}
          />
          <img src="/images/image-avatar.png" className="avatar" alt="avatar" />
        </div>
      </nav>
      <main>
        <div className={`cartModal ${isActive ? "" : "hidden"}`}>
          <div className="cartModal__title">
            <p>Cart</p>
          </div>
          <div className="cartModal__products">
            <div className="productAdd">
              <img
                src={"/images/image-product-1-thumbnail.jpg"}
                className="thumbnail"
              />
              <div className="productAdd__description">
                <p>{data[0].title}</p>
                <div className="prices">
                  <p>
                    ${data[0].price} x {count}
                  </p>
                  <p>${data[0].price * count}</p>
                </div>
              </div>
              <img src="/images/icon-delete.svg" className="delete" />
            </div>
          </div>
        </div>
        <Slider images={data[0].images} />
        <article className="product">
          <p className="company">{data[0].company}</p>
          <h1>{data[0].title}</h1>
          <p className="description">{data[0].description}</p>
          <div className="priceSection">
            <div className="priceSection__left">
              <p className="price">${data[0].price * (data[0].sale / 100)}</p>
              <p className="sale">{data[0].sale}%</p>
            </div>
            <div className="priceSection__right">
              <p className="oldPrice">${data[0].price}</p>
            </div>
          </div>
          <div className="counterSection">
            <p className="counter">{count}</p>
            <button
              className="addOrRemove minus"
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
            >
              <img src="/images/icon-minus.svg" alt="minus" />
            </button>
            <button
              className="addOrRemove plus"
              onClick={() => setCount(count + 1)}
            >
              <img src="/images/icon-plus.svg" alt="plus" />
            </button>
          </div>
          <button className="addButton" onClick={addCart}>
            <img src={"/images/icon-cart.svg"} alt="cart" className="cart" />
            <p>Add to cart</p>
          </button>
        </article>
      </main>
    </div>
  );
}

export default App;
