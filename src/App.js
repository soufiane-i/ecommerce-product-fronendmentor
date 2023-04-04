import "./App.css";
import Slider from "./components/slider";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav__left">
          <img src="/images/icon-menu.svg" className="menu" alt="icon menu" />
          <a href="/">sneakers</a>
        </div>
        <div className="nav__right">
          <img src="/images/icon-cart.svg" className="cart" alt="menu" />
          <img src="/images/image-avatar.png" className="avatar" alt="avatar" />
        </div>
      </nav>
      <main>
        <Slider />
        <article className="product">
          <p className="company">Sneaker Company</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className="description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="priceSection">
            <div className="priceSection__left">
              <p className="price">$125.00</p>
              <p className="sale">50%</p>
            </div>
            <div className="priceSection__right">
              <p className="oldPrice">$250.00</p>
            </div>
          </div>
          <div className="counterSection">
            <p className="counter">0</p>
            <button className="addOrRemove minus">
              <img src="/images/icon-minus.svg" alt="minus" />
            </button>
            <button className="addOrRemove plus ">
              <img src="/images/icon-plus.svg" alt="plus" />
            </button>
          </div>
          <button className="addButton">
            <img src="/images/icon-cart.svg" alt="cart" className="cart" />
            <p>Add to cart</p>
          </button>
        </article>
      </main>
    </div>
  );
}

export default App;
