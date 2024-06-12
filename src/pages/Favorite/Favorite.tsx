import { useNavigate } from "react-router-dom";
import { ICard } from "../../types/types";
import { ReactComponent as BackIcon } from "../../assets/goback.svg";
import styles from "./favorite.module.scss";

const Favorite = () => {
  const navigate = useNavigate();
  // const { favoritePosts } = useSelector(
  //   (state) => state as { favorites: { favoritePosts: ICard[] } }
  // ).favorites;

  const favoritePosts = JSON.parse(localStorage.getItem("book"));
  console.log(favoritePosts);

  const favoritePostWrap = favoritePosts.map(
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
    <div className={styles.FavoritesPosts}>
      <BackIcon onClick={() => navigate(-1)}> </BackIcon>
      <h1>Favorites</h1>
      <div className={styles.favorites}>{favoritePostWrap}</div>
    </div>
  );
};
export default Favorite;
