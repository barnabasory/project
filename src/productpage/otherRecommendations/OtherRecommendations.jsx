import styles from "./OtherRecommendations.module.scss";
import { useRef, useState, useEffect } from "react";
import data from "./data";
import { arrowLeft, arrowRight } from "../../PAGES";

const OtherRecommendations = () => {
  const [currentClientWidth, setCurrentClientWidth] = useState();
  const productsRef = useRef();

  useEffect(() => {
    console.log(productsRef.current.offsetWidth);
  }, []);
  const scrollForWards = () => {
    productsRef.current.clientWidth = productsRef.current.clientWidth -= 200;
  };
  const scrollBackWards = () => {
    productsRef.current.clientWidth = productsRef.current.clientWidth += 200;
  };

  return (
    <div className={styles.wrapper}>
      <img
        src={arrowLeft}
        alt=""
        className={styles.left_arrow}
        onClick={scrollBackWards}
      />
      <img
        src={arrowRight}
        alt=""
        className={styles.right_arrow}
        onClick={scrollForWards}
      />

      <span className={styles.products_category_title}>
        Other Recommendations
      </span>
      <div className={styles.line_break}></div>
      <div className={styles.products} ref={productsRef}>
        {data.map((product) => {
          const { id, image, productName, price } = product;
          return (
            <div className={styles.product} key={id}>
              <img src={image} alt="" />
              <div className={styles.product_info}>
                <span className={`root-small ${styles.product_name}`}>
                  {productName}
                </span>
                <span>{price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherRecommendations;
