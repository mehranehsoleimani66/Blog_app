import Image from "next/image";
import styles from "./navbar.module.css";
import React from "react";
import Link from "next/link";
import AuthLink from "../authLink/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>lamablog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">homepage</Link>
        <Link href="/">contact</Link>
        <Link href="/">about</Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
