import React from "react";
import styles from "./Home.module.scss";
import {
  TopSnippet,
  Navbar,
  BgImg,
  HomeCards,
  BestSeller,
  Stack,
  Contact,
  Calculate,
  Footer,
} from "../index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className={`cc ${styles.home_page}`}>
      <TopSnippet />
      <Navbar />
      <BgImg />
      <HomeCards />
      <BestSeller />
      <Stack />
      <Contact />
      <Calculate />
      <Footer />
    </div>
  );
};

export default Home;
