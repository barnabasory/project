import React from "react";
import {
  Navbar,
  BgImgLoader,
  HomeCards,
  BestSellerLoader,
  CompleteLoader,
  SolarLoader,
  InverterLoader,
  BatteryLoader,
  AccessoryLoader,
  EquipmentLoader,
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
      <HomeCards /> <BestSellerLoader />
      <CompleteLoader />
      <SolarLoader />
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
