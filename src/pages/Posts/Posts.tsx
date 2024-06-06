import { useEffect, useState } from "react";
import styles from "./posts.module.scss";
import { useNavigate } from "react-router";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((responce) => responce.json())
      .then((data) => setPosts(data.books));
  }, []);

  const postToRender = posts
    .reverse()
    .map(({ isbn13, price, title, image }) => (
      <div className={styles.post} key={isbn13}>
        <div className={styles.images}>
          {" "}
          <img className={styles.img} src={image} />
        </div>
        <h3 className={styles.title}>{title}</h3>

        <h4> {price}</h4>
        <button
          onClick={() => navigate(`posts/${isbn13}`)}
          className={styles.personal}
        >
          <h3>see</h3>
        </button>
      </div>
    ));
  return (
    <div>
      <h1>New Releases Books</h1>
      <div className={styles.posts}>{postToRender}</div>;
    </div>
  );
};
export default Posts;
