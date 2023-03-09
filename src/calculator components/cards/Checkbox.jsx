import { checkmark } from "../../PAGES";
import styles from "./CCards.module.scss";

const Checkbox = ({ index, checked, onChange }) => {
  return (
    <div
      className={checked ? styles.checkbox : styles.checkbox_empty}
      onClick={() => onChange(index)}
    >
      <img src={checkmark} alt="checkmark" />
    </div>
  );
};

export default Checkbox;
