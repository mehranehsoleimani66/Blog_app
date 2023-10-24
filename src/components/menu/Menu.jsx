import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.subTitle}>Chosen By Editor</h1>
      <h1 className={styles.Title}>Editor Picks</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
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
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fasion}`}>
              fasion
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
      </div>

      <h1 className={styles.subTitle}>Chosen By Editor</h1>
      <h1 className={styles.Title}>Editor Picks</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fasion}`}>
              fasion
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
      </div>
    </div>
  );
};

export default Menu;
