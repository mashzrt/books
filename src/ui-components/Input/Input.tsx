import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  handleSearch: (searchInput: string) => void;
}

const Input: React.FC<InputProps> = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSearch(input);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWithIcon}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search"
            className={styles.input}
            value={input}
            onChange={handleChange}
          />
          <button type="submit" className={styles.icon}>
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
