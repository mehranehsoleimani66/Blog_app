import React from "react";
import styles from "./Menu.module.css";
// import Link from "next/link";
// import Image from "next/image";
import MenuPost from "../menuPost/menuPost";
import Categories from "../category/Categories";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.subTitle}>What's hot</h1>
      <h1 className={styles.Title}>Most Popular</h1>
      <MenuPost widthImage={false} />

      <h1 className={styles.subTitle}>Discover by Topic</h1>
      <h1 className={styles.Title}>Caregories</h1>
      <div className={styles.categories}>
        <Categories />
      </div>

      <h1 className={styles.subTitle}>Chosen By Editor</h1>
      <h1 className={styles.Title}>Editor Picks</h1>
      <MenuPost widthImage={true} />
    </div>
  );
};

export default Menu;
