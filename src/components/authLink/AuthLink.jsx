import Link from "next/link";
import styles from "./authLink.module.css";

const AuthLink = () => {
  const status = "notauthentication";
  return (
    <>
      {status === "notauthenticatin" ? (
        <Link href="/login">LogIn</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link} href="/logout">
            LogOut
          </span>
        </>
      )}
    </>
  );
};

export default AuthLink;
