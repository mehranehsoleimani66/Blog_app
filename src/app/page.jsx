import Link from "next/link";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/menu/Menu";
import Featured from "@/featured/Featured";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />

      <div className={styles.container}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
