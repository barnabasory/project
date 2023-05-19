import { useState, useEffect } from "react";
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
  LoginSlide,
} from "../index";
import HomeLoader from "./HomeLoader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
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
        <LoginSlide />
      </div>
    </>
  );
};

export default Home;
