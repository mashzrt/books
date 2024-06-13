import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./posts.module.scss";
import Input from "../../ui-components/Input/Input";
import { fetchBooks } from "../../api/api";
import { filterPosts } from "./search";
import { ICard } from "../../types/types";
import { paginate, generatePageNumbers } from "./pagination";

const Posts: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<ICard[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<ICard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    fetchBooks().then((data) => {
      setPosts(data);
      setSearchedPosts(data);
    });
  }, []);

  const handleSearch = (searchInput: string) => {
    const filteredPosts = filterPosts(posts, searchInput);
    setSearchedPosts(filteredPosts);
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginationHandler = paginate(currentPage, postsPerPage, setCurrentPage);

  const pageNumbers = generatePageNumbers(searchedPosts, postsPerPage);

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

  return (
    <div className={styles.Posts}>
      <div className={styles.search}>
        <h1>New Releases Books</h1>
        <Input handleSearch={handleSearch} />
      </div>

      <div className={styles.posts}>{postToRender}</div>
      <div className={styles.pagination}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginationHandler(number)}
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
