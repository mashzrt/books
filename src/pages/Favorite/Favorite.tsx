import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICard } from "../../types/types";
import { ReactComponent as BackIcon } from "../../assets/goback.svg";

const Favorite = () => {
  const navigate = useNavigate();
  const { favoritePosts } = useSelector(
    (state) => state as { favorites: { favoritePosts: ICard[] } }
  ).favorites;
  const favoritePostWrap = favoritePosts.map(({ authors, image, desc }) => {
    return (
      <div>
        <BackIcon onClick={() => navigate(-1)}> </BackIcon>

        <h1>{authors}</h1>
        <img src={image} />
        <p>{desc}</p>
      </div>
    );
  });

  return <div>{favoritePostWrap}</div>;
};
export default Favorite;
