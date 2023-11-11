import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Mehii is here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/images.jfif" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            What is the best way to motivate yourself?
          </h1>
          <p className={styles.postDesc}>
            If you’re feeling the summer doldrums right now, you’re not alone.
            And yet, deadlines don’t stop just because it’s summer. The more
            senior a leader you are, the more you have to motivate yourself. As
            an executive coach, I’ve worked with many clients on how to ignite
            their motivation over the years. Try these strategies if you need to
            give yourself a jolt.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
