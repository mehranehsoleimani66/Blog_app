import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}>culture</span>
        </div>
        <Link href="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aspernatur ab asperiores saepe. Quis modi veritatis, libero suscipit
          quae iusto aperiam quisquam? Molestiae quis cumque velit repellendus
          modi necessitatibus rerum.
        </Link>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          veniam dolores aliquam unde nihil enim id magnam, corrupti nobis,
          accusantium quia vel! Libero velit dolore nulla deleniti et harum
          laboriosam.{" "}
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
