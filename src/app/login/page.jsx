import styles from "./login.module.css";

const LogIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.social}>log in with Git Hub</div>
        <div className={styles.social}>log in with Google</div>
        <div className={styles.social}>log in with LinkedIn</div>
      </div>
    </div>
  );
};

export default LogIn;
