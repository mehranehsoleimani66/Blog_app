import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className={styles.logoText}>LamaBlog</span>
        </div>

        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          corrupti, rerum quam voluptatum natus magnam accusamus, saepe autem
          maxime tempora voluptas? Explicabo sapiente facere aliquam corporis
          quia illo, magnam voluptatum!
        </p>
        <div className={styles.icons}>
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/facebook.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>links</span>
          <Link href="/">HomePage</Link>
          <Link href="/">Account</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tag </span>
          <Link href="/">style</Link>
          <Link href="/">fashion</Link>
          <Link href="/">coding</Link>
          <Link href="/">travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>social</span>

          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
