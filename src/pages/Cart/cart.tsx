import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICard } from "../../types/types";
import { ReactComponent as BackIcon } from "../../assets/goback.svg";
import styles from "./cart.module.scss";

const Cart = () => {
  const navigate = useNavigate();
  // const { basketPosts } = useSelector(
  //   (state) => state as { basket: { basketPosts: ICard[] } }
  // ).basket;
  const cartPosts = JSON.parse(localStorage.getItem("book"));
  console.log(cartPosts);

  const totalItems = cartPosts.length;
  const totalCost = cartPosts
    .reduce((totalAll, { price = 0 }) => {
      const numericPrice = Number(price.replace(/[^0-9.-]+/g, ""));
      return totalAll + numericPrice;
    }, 0)
    .toFixed(2);
  console.log(` общая стоимость ${totalCost}`);

  const basketPostWrap = cartPosts.map(
    ({ authors, image, title, year, price }: ICard) => {
      return (
        <div className={styles.book}>
          <img className={styles.img} src={image} />
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.year}>
              by {authors}, {year}
            </p>
            <h4 className={styles.price}>{price}</h4>
          </div>
        </div>
      );
    }
  );

  return (
    <div className={styles.basketPosts}>
      <BackIcon onClick={() => navigate(-1)}> </BackIcon>
      <h1>Your cart</h1>
      <div className={styles.basket}>{basketPostWrap}</div>
      <div className={styles.summary}>
        {<p>Number of books in the basket: {totalItems}</p>}
        <p>Total cost: {totalCost}$</p>
      </div>
    </div>
  );
};
export default Cart;
