import styles from "./ProductView.module.scss";
import { useState } from "react";
import { share_icon } from "../../PAGES/productPage";
import { useProductPageOverlayContext } from "../../contexts/ProductPageOverlayContext";
import { Link } from "react-router-dom";
import data from "./data";

const ProductView = () => {
  const [currentImage, setCurrentImage] = useState(data[0].image);
  const { slideIn, setSlideIn } = useProductPageOverlayContext();

  const setOverlay = () => {
    setSlideIn(true);
  };
  return (
    <section className={` ${styles.wrapper}`}>
      {/* product view */}
      <div className={styles.product_view}>
        {/* productImage */}
        <div className={styles.hero_image_div}>
          <div className={styles.all_images}>
            <img src={currentImage} alt="hero" className={styles.hero_image} />
            <div className={styles.other_images}>
              {data.map((imgg) => (
                <img
                  src={imgg.image}
                  alt=""
                  onClick={() => setCurrentImage(imgg.image)}
                />
              ))}
            </div>
          </div>
          <div className={styles.footer_snippet}>
            <span className={`tiny-text ${styles.item_unavailable}`}>
              Mark item as unavailable
            </span>
            <span className={`tiny-text ${styles.report_abuse}`}>
              Report abuse
            </span>
          </div>
        </div>
        {/* description */}
        <div className={styles.description}>
          {/* title */}
          <h6 className={styles.title}>
            Super Quiet 3800-Watt 2.6KVA Pure Sine Wave Solar Kit
          </h6>
          {/* meta-data */}
          <div className={styles.meta_data}>
            <div className={styles.brand}>
              <span className={` tiny-text ${styles.brand_title}`}>Brand</span>
              <span className={` root-small ${styles.brand_text}`}>
                Nasa Energy Limited
              </span>
            </div>
            <div className={styles.location}>
              <span className={`tiny-text ${styles.location_title}`}>
                Location
              </span>
              <span className={`root-small ${styles.location_text}`}>
                Ogun, Ijebu Ode
              </span>
            </div>
            <div className={styles.date}>
              <span className={` tiny-text ${styles.date_title}`}>Date</span>
              <span className={` root-small ${styles.date_text}`}>
                Posted 07/01
              </span>
            </div>
          </div>
          <hr />
          {/* price */}
          <div className={styles.price}>
            <h5>₦3,400,000</h5>
            <div className={styles.shipping_cost_div}>
              <span className={`tiny-text ${styles.approx}`}>
                + Aprox shipping cost from ₦3500 to Lagos
              </span>
              <span className={`tiny-text ${styles.approx}`}>
                + Installation cost Included
              </span>
            </div>
          </div>
          <div className={styles.calls_to_action}>
            <button className={styles.share}>
              <img src={share_icon} alt="share_icon" />
              Share
            </button>
            <button className={styles.checkout_button} onClick={setOverlay}>
              Proceed to Checkout
            </button>
          </div>
          <hr />
          <div className={`tiny-text ${styles.info_div}`}>
            Please note that you cannot buy more than one complete solution at a
            time, you can buy as may as you want, just one at a time.
            <Link className={styles.learn_more}>Learn more</Link>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default ProductView;
