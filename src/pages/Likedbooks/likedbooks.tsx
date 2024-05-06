import { useNavigate } from "react-router-dom";
import { ReactComponent as LikeIcon } from "../../assets/like.svg";

const LikedBooks = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/favoritebooks")}>
      <div>
        <LikeIcon />
      </div>
    </button>
  );
};

export default LikedBooks;
