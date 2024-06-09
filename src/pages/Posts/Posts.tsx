import { useEffect, useState } from "react";
import styles from "./posts.module.scss";
import { useNavigate } from "react-router";
import paginationSlice from "../../store/paginationSlice";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      .then((data) => setPosts(data.books));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (currentPage) => setCurrentPage(currentPage);

  const postToRender = currentPosts
    .reverse()
    .map(({ isbn13, price, title, image }) => (
      <div className={styles.post} key={isbn13}>
        <div className={styles.images}>
          <img className={styles.img} src={image} alt={title} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <h4>{price}</h4>
        <button
          onClick={() => navigate(`/posts/${isbn13}`)}
          className={styles.personal}
        >
          <h3>show more</h3>
        </button>
      </div>
    ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.Posts}>
      <h1>New Releases Books</h1>
      <div className={styles.posts}>{postToRender}</div>
      <div className={styles.pagination}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={styles.pageItem}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Posts;
