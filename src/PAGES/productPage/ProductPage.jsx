import styled, { css } from "styled-components";
import { Navbar, TopSnippet } from "..";
import {
  Checkout,
  ProductView,
  AboutSeller,
  WhatToExpect,
  BecomeAVendor,
  ProductDescription,
  ProductLocation,
  ProductContent,
  Faqs,
  OtherRecommendations,
  History,
  Overlay,
} from "../productPage";
import styles from "./ProductPage.module.scss";
import { arrow_right_vector } from "../productPage";

const ProductPage = () => {
  const MobileResponsive = styled.section`
    @media (max-width: 900px) {
      background: red;
    }
  `;
  return (
    <div>
      <TopSnippet />
      <Navbar />
      <div className={`sw ${styles.product_page}`}>
        {/* links */}
        <div className={styles.top_links}>
          Home
          <img src={arrow_right_vector} alt="right_arrow" />
          Complete Kits
          <img src={arrow_right_vector} alt="right_arrow" />
          Super Quiet 3800-Watt 2.6KVA Pure Sine Wave Solar Kit
        </div>
        {/* <MobileResponsive>
          <section className={styles.mobile_grid}>
            <div className={styles.product_view}>
              <ProductView />
            </div>
            <div className={styles.product_desc}>
              <ProductDescription />
            </div>
            <div className={styles.product_location}>
              <ProductLocation />
            </div>
            <div className={styles.product_content}>
              <ProductContent />
            </div>
            <div className={styles.faqs}>
              <Faqs />
            </div>
            <div className={styles.product_checkout}>
              <Checkout />
            </div>
            <div className={styles.product_about_seller}>
              <AboutSeller />
            </div>
            <div className={styles.product_what_to_expect}>
              <WhatToExpect />
            </div>
            <div className={styles.become_vendor}>
              <BecomeAVendor />
            </div>
          </section>
        </MobileResponsive> */}
        <div className={styles.grids}>
          <div className={styles.product_view}>
            <ProductView />
            <ProductDescription />
            <ProductLocation />
            <ProductContent />
            <Faqs />
            <OtherRecommendations />
            <History />
          </div>
          <div className={styles.checkout}>
            <Checkout />
            <AboutSeller />
            <WhatToExpect />
            <BecomeAVendor />
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
        <Overlay />
      </div>
    </div>
  );
};

export default ProductPage;
