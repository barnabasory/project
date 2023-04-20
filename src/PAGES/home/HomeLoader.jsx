import React from "react";
import {
  Navbar,
  BgImgLoader,
  HomeCards,
  ContactLoader,
  CalculateLoader,
  FooterLoader,
  TopSnippet,
} from "../index";

const HomeLoader = () => {
  return (
    <div>
      <TopSnippet />
      <Navbar /> <BgImgLoader />
      <HomeCards />
      <ContactLoader />
      <CalculateLoader />
      <FooterLoader />
    </div>
  );
};

export default HomeLoader;
