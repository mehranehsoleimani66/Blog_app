import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>comment</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="search..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">login to write comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <div className={styles.username}>William Henrii</div>
              <div className={styles.date}>30-09-2023</div>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit ameimi modi ex?</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <div className={styles.username}>William Henrii</div>
              <div className={styles.date}>30-09-2023</div>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit ameimi modi ex?</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <div className={styles.username}>William Henrii</div>
              <div className={styles.date}>30-09-2023</div>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit ameimi modi ex?</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.userContainer}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <div className={styles.username}>William Henrii</div>
              <div className={styles.date}>30-09-2023</div>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit ameimi modi ex?</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
