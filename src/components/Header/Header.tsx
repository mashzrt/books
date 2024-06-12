import Personal from "../../ui-components/Personal/Personal";
import styles from "./Header.module.scss";
import { ReactComponent as LikeIcon } from "../../assets/like.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BasketIcon } from "../../assets/basket.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <h2>Bookstore</h2>

      <div className={styles.icons}>
        <button onClick={() => navigate("/favorite")}>
          <div>
            <LikeIcon />
          </div>
        </button>
        <button onClick={() => navigate("/basket")}>
          <div>
            <BasketIcon />
          </div>
        </button>
        <Personal />
      </div>
    </div>
  );
};
export default Header;
