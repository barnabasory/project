import styles from "./SelectRole.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const SelectRole = () => {
  const [vendor, setVendor] = useState(false);
  const [oem, setOEM] = useState(false);

  const handleCard1 = () => {
    setOEM(false);
    setVendor(!vendor);
  };

  const handleCard2 = () => {
    setVendor(false);
    setOEM(!oem);
  };
  return (
    <section className={`sw ${styles.wrapper}`}>
      <div className={styles.heading}>
        <h5 className={styles.title}>Select your Role</h5>
        <span className={`root-text ${styles.desc}`}>
          Login in to your Imperium Account
        </span>
      </div>
      <div className={styles.cards}>
        <div
          className={vendor ? styles.card_clicked : styles.card}
          onClick={handleCard1}
        >
          I am a vendor
        </div>
        <div
          className={oem ? styles.card_clicked : styles.card}
          onClick={handleCard2}
        >
          I am an OEM
        </div>
      </div>
      <Link to={vendor ? "/vendor-store-profile" : "/oem-store-profile"}>
        <button className={styles.button}>Continue</button>
      </Link>
    </section>
  );
};

export default SelectRole;
