import React, { useEffect, useState } from "react";
import styles from "./Browse.module.scss";
import data from "../../home components/bestseller/data";

const Browse = () => {
  return (
    <>
      <section className={`fw ${styles.wrapper}`}>
        <div className={`sw ${styles.content}`}>
          <h5
            className={`skeleton-loading ${styles.title}`}
            style={{ color: "transparent" }}
          >
            See Your Offers
          </h5>
          <span
            className={`skeleton-loading ${styles.texta}`}
            style={{ color: "transparent" }}
          >
            Based on your energy usage, these are the products we recommend{" "}
          </span>
          <span
            className={`tiny-text skeleton-loading ${styles.textb}`}
            style={{ color: "transparent" }}
          >
            Note: Please consult an expert if you aren’t sure about your
            results.
          </span>
        </div>
        <div className={`sw ${styles.images}`}>
          {data.slice(0, 4).map((card, index) => (
            <div className={`skeleton-loading ${styles.card}`} key={index}>
              <img
                src={card.image}
                alt="bestselling"
                className={styles.image}
                style={{ visibility: "hidden" }}
              />
              <div
                className={styles["text-div"]}
                style={{ visibility: "hidden" }}
              >
                <p className={styles.desc}>{card.desc}</p>
                <p className={`root-text-bold ${styles["root-text-bold"]}`}>
                  {card.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`sw skeleton-loading ${styles.button}`}
          style={{ color: "transparent", cursor: "auto" }}
        >
          Browse all products
        </button>
      </section>
    </>
  );
};

export default Browse;
