import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./posts.module.scss";
import Input from "../../ui-components/Input/Input";

interface Post {
  isbn13: string;
  price: string;
  title: string;
  image: string;
}

const Posts: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.books);
        setSearchedPosts(data.books);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (searchInput: string) => {
    if (searchInput.trim() === "") {
      setSearchedPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchedPosts(filteredPosts);
    }
    setCurrentPage(1);
  };

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
  for (let i = 1; i <= Math.ceil(searchedPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

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
