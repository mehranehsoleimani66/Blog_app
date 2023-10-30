"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  console.log(data);
  console.log(status);
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
        <div
          className={styles.social}
          onClick={async () => await signIn("google")}
        >
          Sign in with Google
        </div>
        <div
          className={styles.social}
          onClick={async () => await signIn("github")}
        >
          Sign in with Github
        </div>
        <div className={styles.social}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
