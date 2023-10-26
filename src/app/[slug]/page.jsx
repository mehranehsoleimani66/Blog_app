import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, similique totam?
          </h1>

          <div className={styles.userContainer}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" className={styles.avatar} fill />
            </div>
            <div className={styles.user}>
              <span className={styles.username}>Joun Dou</span>
              <span className={styles.date}>01.12.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.posts}>
          <div className={styles.desc}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              provident deleniti maiores velit modi debitis magni labore facere
              accusamus officiis veniam non quo repellendus alias atque eaque,
              esse eveniet quaerat.
            </p>
            <h2> Lorem, ipsum dolor sit amet consectetur adipisicing elit</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              provident deleniti maiores velit modi debitis magni labore facere
              accusamus officiis veniam non quo repellendus alias atque eaque,
              esse eveniet quaerat.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              provident deleniti maiores velit modi debitis magni labore facere
              accusamus officiis veniam non quo repellendus alias atque eaque,
              esse eveniet quaerat.
            </p>
          </div>
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
