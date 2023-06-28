import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorData = createContext({});
const VendorContext = ({ children }) => {
  const navigate = useNavigate();
  const initialStoreProfileState = {
    store_name: "",
    store_logo: "",
    num_of_employees: "",
    state: "",
    address_line_1: "",
    address_line_2: "",
    zip_code: "",
    cac_reg_number: "",
    cac_certificate: "",
  };

  const [storeProfile, setStoreProfile] = useState(initialStoreProfileState);

  const handleStoreProfileSubmit = (e) => {
    e.preventDefault();
    if (storeProfile.store_name.trim().toLowerCase().length < 5) {
      alert("nooo");
    } else {
      navigate("/vendor-seller-profile");
    }
  };
  const handleStoreProfileChange = (e) => {
    setStoreProfile((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: [e.target.value],
    }));
  };

  return (
    <VendorData.Provider
      value={{
        storeProfile,
        setStoreProfile,
        handleStoreProfileChange,
        handleStoreProfileSubmit,
      }}
    >
      {children}
    </VendorData.Provider>
  );
};

export const useStoreProfileContext = () => {
  return useContext(VendorData);
};

export default VendorContext;
