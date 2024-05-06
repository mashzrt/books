import { useNavigate } from "react-router-dom";
import { ReactComponent as BasketIcon } from "../../assets/basket.svg";

const Basket = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/basket")}>
      <div>
        <BasketIcon />
      </div>
    </button>
  );
};

export default Basket;
