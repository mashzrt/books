import styles from "./Input.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWithIcon}>
        <input
          placeholder="Search"
          className={styles.input}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <SearchIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default Input;
