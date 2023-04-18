import React from "react";
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

const HomeLoader = () => {
  return (
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
  );
};

export default HomeLoader;
