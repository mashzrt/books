import styles from "./Input.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWithIcon}>
        <input placeholder="Search" className={styles.input} />
        <SearchIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default Input;
