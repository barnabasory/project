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
} from "../index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  TopSnippetLoader,
  NavBarLoader,
  BgImgLoader,
  HomeCardsLoader,
  BestSellerLoader,
  CompleteLoader,
  InverterLoader,
  BatteryLoader,
  AccessoryLoader,
  EquipmentLoader,
  ContactLoader,
  CalculateLoader,
  FooterLoader,
} from "../index";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <TopSnippetLoader /> <NavBarLoader /> <BgImgLoader />
          <HomeCardsLoader /> <BestSellerLoader />
          <CompleteLoader />
          <InverterLoader />
          <BatteryLoader />
          <AccessoryLoader />
          <EquipmentLoader />
          <ContactLoader />
          <CalculateLoader />
          <FooterLoader />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Home;
