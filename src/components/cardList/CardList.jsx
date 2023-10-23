import React from "react";
import styles from "./CardList.module.css";
import Pagination from "@/components/pagination/Pagination";
const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default CardList;
