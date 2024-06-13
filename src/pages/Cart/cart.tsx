import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICard } from "../../types/types";
import { ReactComponent as BackIcon } from "../../assets/goback.svg";
import styles from "./cart.module.scss";

const Cart = () => {
  const navigate = useNavigate();
  const [cartPosts, setCartPosts] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );
  console.log(cartPosts);

  const totalItems = cartPosts.length;
  const totalCost = cartPosts
    .reduce((totalAll, { price = 0 }) => {
      const numericPrice = Number(price.replace(/[^0-9.-]+/g, ""));
      return totalAll + numericPrice;
    }, 0)
    .toFixed(2);

  const handleClearCart = () => {
    const booksInCart = JSON.parse(localStorage.getItem("books")) || [];

    booksInCart.forEach((book) => {
      localStorage.removeItem(`basket_${book.isbn13}`);
    });
    localStorage.removeItem("books");
    setCartPosts([]);
  };

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
      <div className={styles.clearCart}>
        <h1>Your cart</h1>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div className={styles.basket}>{basketPostWrap}</div>
      <div className={styles.summary}>
        <p>Number of books in the basket: {totalItems}</p>
        <p>Total cost: {totalCost}$</p>
      </div>
    </div>
  );
};

export default Cart;
