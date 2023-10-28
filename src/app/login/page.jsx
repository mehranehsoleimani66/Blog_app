"use client";
import { useSession, signIn } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.social} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.social}>log in with Git Hub</div>
        <div className={styles.social}>log in with LinkedIn</div>
      </div>
    </div>
  );
};

export default LogIn;
