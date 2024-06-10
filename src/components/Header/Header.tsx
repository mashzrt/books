import Input from "../../ui-components/Input/Input";
import LikedBooks from "../../pages/Likedbooks/likedbooks";
import Personal from "../../ui-components/Personal/Personal";
import handleSearch from "../../pages/Posts/Posts";
import Basket from "../../pages/Basket/basket";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Bookstore</h2>

      <div className={styles.icons}>
        <LikedBooks />
        <Basket />
        <Personal />
      </div>
    </div>
  );
};
export default Header;
