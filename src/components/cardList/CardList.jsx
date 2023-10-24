import React from "react";
import styles from "./CardList.module.css";
import Pagination from "@/components/pagination/Pagination";

import Card from "../card/Card";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Resent Post</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
