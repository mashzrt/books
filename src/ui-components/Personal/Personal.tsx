import { useNavigate } from "react-router-dom";
import styles from "./Personal.module.scss";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";

const Personal = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/profile")} className={styles.personal}>
      <div className={styles.short}>
        <ProfileIcon />
      </div>
    </button>
  );
};

export default Personal;
