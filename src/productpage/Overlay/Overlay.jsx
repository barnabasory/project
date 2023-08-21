import styles from "./Overlay.module.scss";
import { minus, plus } from "../../PAGES";
import data from "./data";
import { useState } from "react";
import { useProductPageOverlayContext } from "../../contexts/ProductPageOverlayContext";

const Overlay = () => {
  const [count, setCount] = useState(1);

  const { slideIn, setSlideIn } = useProductPageOverlayContext();

  const decreaseCount = (id) => {
    setCount((prevCount) => (prevCount.id === id ? prevCount - 1 : prevCount));
  };
  const increaseCount = (id) => {
    setCount((prevCount) => (prevCount.id === id ? prevCount + 1 : prevCount));
    console.log(id);
  };

  return (
    <>
      {slideIn && (
        <div className={styles.wrapper}>
          <div
            className={styles.overlay_wrapper}
            onClick={() => setSlideIn(false)}
          ></div>
          <div className={styles.cart}>
            <div className={styles.subtotal}>
              <span className={`tiny-text ${styles.subtotal_header}`}>
                Subtotal
              </span>
              <h5>₦6,400,000</h5>
              <button className={`root-small-bold ${styles.checkout}`}>
                Checkout
              </button>
            </div>
            <div className={styles.products}>
              {data.map((product) => (
                <div className={styles.product} key={product.id}>
                  <div className={styles.img_div}>
                    <img src={product.image} alt="" />
                  </div>
                  <div className={styles.price_and_update_qty_div}>
                    <div className={styles.price_and_update_qty}>
                      {" "}
                      <span className={`root-small-bold ${styles.price}`}>
                        {product.price}
                      </span>
                      <div className={styles.update_qty}>
                        <img
                          src={minus}
                          alt=""
                          onClick={() => decreaseCount(product.id)}
                        />
                        <span className={styles.qty}>{count}</span>
                        <img
                          src={plus}
                          alt=""
                          onClick={() => increaseCount(product.id)}
                        />
                      </div>
                    </div>
                    <span className={`tiny-text-bold ${styles.remove}`}>
                      Remove
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
