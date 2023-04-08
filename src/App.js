import { useEffect, useRef, useState } from "react";
import "./App.css";
import Slider from "./components/slider";
import data from "./data/data.json";

function App() {
  const [count, setCount] = useState(0);
  const [countChart, setCountChart] = useState(0);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  let menuRef = useRef();

  const [cart, setCart] = useState([]);

  function addCart() {
    if (count !== 0) {
      setCart(data[0]);
      setCountChart(countChart + count);
    }
  }
  function deleteCharts() {
    setCart([]);
    setCountChart(0);
  }

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        if (menuRef.current.classList.contains("navMenu2")) {
          setOpenMenu(false);
        } else setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="App">
      <nav className="topNav">
        <div className="nav__left">
          <img
            src="/images/icon-menu.svg"
            className="menu"
            alt="icon menu"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
          <a href="/">sneakers</a>
          <div className="navDesktop">
            <a href="">Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="nav__right">
          <button>
            <img
              src="/images/icon-cart.svg"
              className="cart"
              alt="cart"
              onClick={() => {
                setOpen(!open);
              }}
            />
            {countChart === 0 ? null : (
              <p className="countchartNav">{countChart}</p>
            )}
          </button>

          <img src="/images/image-avatar.png" className="avatar" alt="avatar" />
        </div>
        <div className={`menu2 ${openMenu ? "" : "hidden"}`}>
          <nav className="navMenu2" ref={menuRef}>
            <div>
              <img
                src="/images/icon-close.svg"
                alt="close"
                className="close"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            </div>
            <div>
              <a>Collections</a>
              <a>Men</a>
              <a>Women</a>
              <a>About</a>
              <a>Contact</a>
            </div>
          </nav>
        </div>
      </nav>
      <main>
        <div className={`cartModal ${open ? "" : "hidden"}`} ref={menuRef}>
          <div className="cartModal__title">
            <p>Cart</p>
          </div>
          {cart.length === 0 ? (
            <div className="emptyChart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="cartModal__products">
              <div className="productAdd">
                <img
                  src={"/images/image-product-1-thumbnail.jpg"}
                  className="thumbnail"
                  alt="thumbnail"
                />
                <div className="productAdd__description">
                  <p>{cart.title}</p>
                  <div className="prices">
                    <p>
                      ${cart.price} x {countChart}
                    </p>
                    <p>${cart.price * countChart}</p>
                  </div>
                </div>
                <div className="delete">
                  <button onClick={deleteCharts}>
                    <img src="/images/icon-delete.svg" alt="delete" />
                  </button>
                </div>
              </div>
              <button className="checkout" onClick={addCart}>
                Checkout
              </button>
            </div>
          )}
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
