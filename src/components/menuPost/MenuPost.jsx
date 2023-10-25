import React from "react";
import styles from "./menuPost.module.css";
import Link from "next/link";
import Image from "next/image";
const MenuPost = ({ widthImage }) => {
  return (
    <div className={styles.items}>
      {/* <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectet, reprehenderit magni
          </h3>
          <div>
            <span className={styles.userName}>John Deo</span>
            <span className={styles.date}>-10.02.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.cooding}`}>
            cooding
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectet, reprehenderit magni
          </h3>
          <div>
            <span className={styles.userName}>John Deo</span>
            <span className={styles.date}>-10.02.2023</span>
          </div>
        </div>
      </Link> */}
      {/* <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fasion}`}>fasion</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectet, reprehenderit magni
          </h3>
          <div>
            <span className={styles.userName}>John Deo</span>
            <span className={styles.date}>-10.02.2023</span>
          </div>
        </div>
      </Link> */}

      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectet, reprehenderit magni
          </h3>
          <div>
            <span className={styles.userName}>John Deo</span>
            <span className={styles.date}>-10.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.style}`}>style</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectet, reprehenderit magni
          </h3>
          <div>
            <span className={styles.userName}>John Deo</span>
            <span className={styles.date}>-10.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectet, reprehenderit magni
          </h3>
          <div>
            <span className={styles.userName}>John Deo</span>
            <span className={styles.date}>-10.02.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fasion}`}>fasion</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectet, reprehenderit magni
          </h3>
          <div>
            <span className={styles.userName}>John Deo</span>
            <span className={styles.date}>-10.02.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
