import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div>
      <h1>ACCOUNT</h1>
      <h2>PROFILE</h2>
      <div className={styles.nameEmail}>
        <div>
          <h3>Name</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Email</h3>
          <input type="email" />
        </div>
      </div>

      <h2>PASSWORD</h2>
      <div className={styles.password}>
        <div>
          <h3>Password</h3>
          <input type="password" />
        </div>
        <div>
          <h3>New password</h3>
          <input type="password" />
        </div>
        <div>
          <h3>Confirm new password</h3>
          <input type="password" />
        </div>
      </div>
    </div>
  );
};
export default Profile;
