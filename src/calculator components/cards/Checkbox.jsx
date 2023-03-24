import { checkmark } from "../../PAGES";
import styles from "./CCards.module.scss";

const Checkbox = ({ id, checked, onChange }) => {
  return (
    <div
      className={checked ? styles.checkbox : styles.checkbox_empty}
      onClick={() => onChange(id)}
    >
      <img src={checkmark} alt="checkmark" />
    </div>
  );
};

export default Checkbox;
