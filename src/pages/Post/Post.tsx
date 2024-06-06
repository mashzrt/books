import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/goback.svg";
import styles from "./post.module.scss";
import Tabs from "../../components/Tabs/tabs";
import Posts from "../Posts/Posts";

const Post = () => {
  const { isbn13 } = useParams();
  const [post, setPost] = useState({
    title: "",
    image: "",
    price: "",
    subtitle: "",
    year: "",
    publisher: "",
    authors: "",
    desc: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((responce) => responce.json())
      .then((data) => setPost(data));
    console.log({ isbn13 });
  }, [isbn13]);
  const { title, image, price, subtitle, year, publisher, authors, desc } =
    post;

  return (
    <div className={styles.post}>
      <div className={styles.BackIcon}>
        <BackIcon onClick={() => navigate(-1)}> </BackIcon>
      </div>
      <h1>{title}</h1>
      <div className={styles.aboutBook}>
        <img src={image} />
        <div className={styles.info}>
          <div className={styles.price}>
            <p>{price}</p>
          </div>
          <span>Authors </span>
          <span>Publisher </span>
          <span>Language </span>
          <span>Format</span>{" "}
          <button className={styles.cart}>ADD TO CART</button>
        </div>
        <div className={styles.inf}>
          <p>{authors}</p>
          <p>
            {publisher}, {year}г.
          </p>
          <p>English</p>
          <p>Paper book / ebook (PDF)</p>
        </div>
      </div>
      <Tabs desc={desc} authors={authors} />
    </div>
  );
};
export default Post;
