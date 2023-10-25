import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./categories.module.css";
const Categories = () => {
  return (
    <div className={styles.categories}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        style
      </Link>
      <Link
        href="/blog?cat=food"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        food
      </Link>
      <Link
        href="/blog?cat=fasion"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        fashion
      </Link>
      <Link
        href="/blog?cat=travel"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        travel
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        travel
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.categoryItem} ${styles.cooding}`}
      >
        cooding
      </Link>
    </div>
  );
};

export default Categories;
