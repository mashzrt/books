import Input from "../../ui-components/Input/Input";
import LikedBooks from "../../pages/Likedbooks/likedbooks";
import Personal from "../../ui-components/Personal/Personal";
import Basket from "../../pages/Basket/basket";
import Burger from "../Burger/Burger";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Bookstore</h2>
      <Input />
      <div className={styles.icons}>
        <LikedBooks />
        <Basket />
        <Personal />
      </div>
    </div>
  );
};
export default Header;
