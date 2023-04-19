import React, { useEffect, useState } from "react";
import styles from "./Browse.module.scss";
import data from "../../home components/bestseller/data";
import BrowseLoader from "./BrowseLoader";

const Browse = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <BrowseLoader />
      ) : (
        <section className={`fw ${styles.wrapper}`}>
          <div className={`sw ${styles.content}`}>
            {" "}
            <h5 className={styles.title}>See Your Offers</h5>
            <span className={styles.texta}>
              Based on your energy usage, these are the products we recommend{" "}
            </span>
            <span className={`tiny-text ${styles.textb}`}>
              Note: Please consult an expert if you aren’t sure about your
              results.
            </span>
          </div>
          <div className={`sw ${styles.images}`}>
            {data.slice(0, 4).map((card, index) => (
              <div className={styles.card} key={index}>
                <img
                  src={card.image}
                  alt="bestselling"
                  className={styles.image}
                />
                <div className={styles["text-div"]}>
                  <p className={styles.desc}>{card.desc}</p>
                  <p className={`root-text-bold ${styles["root-text-bold"]}`}>
                    {card.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className={`sw ${styles.button}`}>Browse all products</button>
        </section>
      )}
    </>
  );
};

export default Browse;
