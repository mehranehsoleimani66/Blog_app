import React from "react";
import styles from "./Pagination.module.css";
const Pagination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>previous</div>
      <div className={styles.button}>next</div>
    </div>
  );
};

export default Pagination;
