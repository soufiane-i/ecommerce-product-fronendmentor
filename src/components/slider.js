import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  const arrowStyles = {
    position: "absolute",
    zIndex: 1,
    top: "calc(50% - 15px)",
    width: 35,
    height: 35,
    cursor: "pointer",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      infiniteLoop={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15 }}
          >
            <img
              src="/images/icon-previous.svg"
              alt="next"
              className="previous"
            />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15 }}
          >
            <img src="/images/icon-next.svg" alt="next" className="next" />
          </button>
        )
      }
    >
      <div>
        <img
          src="/images/image-product-1.jpg"
          alt="product"
          className="products main"
        />
      </div>
      <div>
        <img
          src="/images/image-product-2.jpg"
          alt="product"
          className="products"
        />
      </div>
      <div>
        <img
          src="/images/image-product-3.jpg"
          alt="product"
          className="products"
        />
      </div>
      <div>
        <img
          src="/images/image-product-4.jpg"
          alt="product"
          className="products"
        />
      </div>
    </Carousel>
  );
}

export default Slider;
