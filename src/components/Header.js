import styles from "@/styles/components/header.module.css";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <h2>Karina Awarska</h2>
        <p className={styles.subTitle}>Coach kariery i świadomego życia</p>
      </div>
      <Navigation />
    </header>
  );
};
