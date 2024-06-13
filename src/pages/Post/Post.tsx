import { ReactComponent as BackIcon } from "../../assets/goback.svg";
import styles from "./post.module.scss";
import Tabs from "../../components/Tabs/tabs";
import { addFavoritePost } from "../../store/favoritesSlice";
import { addBasketPost } from "../../store/basketSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post: React.FC = () => {
  const { isbn13 } = useParams();
  const [post, setPost] = useState({
    title: "",
    image: "",
    price: "",
    year: "",
    publisher: "",
    authors: "",
    desc: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [similarBooks, setSimilarBooks] = useState<any[]>([]);
  const [isFavoriteClicked, setIsFavoriteClicked] = useState(
    localStorage.getItem(`favorite_${isbn13}`) === "true"
  );
  const [isBasketClicked, setIsBasketClicked] = useState(
    localStorage.getItem(`basket_${isbn13}`) === "true"
  );
  const fetchRandomBooks = async () => {
    try {
      const response = await fetch("https://api.itbook.store/1.0/search/react");
      const data = await response.json();
      const randomBooks = data.books
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setSimilarBooks(randomBooks);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [isbn13]);

  const { title, image, price, year, publisher, authors, desc } = post;

  const handleAddToFavorite = () => {
    dispatch(addFavoritePost({ post }));
    setIsFavoriteClicked(true);
    localStorage.setItem(`favorite_${isbn13}`, "true");
  };
  const handleAddToBasket = () => {
    dispatch(addBasketPost({ post }));
    setIsBasketClicked(true);
    localStorage.setItem(`basket_${isbn13}`, "true");
  };
  useEffect(() => {
    setIsBasketClicked(localStorage.getItem(`basket_${isbn13}`) === "true");
  }, [isbn13]);
  return (
    <div className={styles.post}>
      <div className={styles.BackIcon}>
        <BackIcon onClick={() => navigate(-1)}> </BackIcon>
      </div>
      <h1>{title}</h1>
      <div className={styles.aboutBook}>
        <img src={image} alt={title} />

        <div className={styles.info}>
          <div className={styles.price}>
            <p>{price}</p>
          </div>
          <span>Authors </span>
          <span>Publisher </span>
          <span>Language </span>
          <span>Format</span>{" "}
          <button
            className={styles.cart}
            onClick={handleAddToBasket}
            disabled={isBasketClicked}
          >
            {isBasketClicked ? "ADDED TO CART" : "ADD TO CART"}
          </button>
        </div>
        <div className={styles.inf}>
          <p>{authors}</p>
          <p>
            {publisher}, {year}
          </p>
          <p>English</p>
          <p>Paper book / ebook (PDF)</p>
          <button
            className={styles.favorite}
            onClick={handleAddToFavorite}
            disabled={isFavoriteClicked}
          >
            {isFavoriteClicked ? "ADDED TO FAVORITES" : "ADD TO FAVORITES"}
          </button>
        </div>
      </div>
      <Tabs desc={desc} authors={authors} />
      <h2>SIMILAR BOOKS</h2>
      <div className={styles.similarBooks}>
        {similarBooks.map((book) => (
          <div key={book.isbn13} className={styles.similarBook}>
            <img src={book.image} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.subtitle}</p>
              <p>{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
