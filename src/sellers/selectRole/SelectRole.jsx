import styles from "./SelectRole.module.scss";
import { useState } from "react";

const SelectRole = () => {
  const [clickedCard1, setClickedCard1] = useState(false);
  const [clickedCard2, setClickedCard2] = useState(false);

  const handleCard1 = () => {
    setClickedCard2(false);
    setClickedCard1(!clickedCard1);
  };

  const handleCard2 = () => {
    setClickedCard1(false);
    setClickedCard2(!clickedCard2);
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
          className={clickedCard1 ? styles.card_clicked : styles.card}
          onClick={handleCard1}
        >
          I am a vendor
        </div>
        <div
          className={clickedCard2 ? styles.card_clicked : styles.card}
          onClick={handleCard2}
        >
          I am an OEM
        </div>
      </div>
      <button className={styles.button}>Continue</button>
    </section>
  );
};

export default SelectRole;
