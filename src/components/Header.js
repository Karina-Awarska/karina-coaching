import styles from "@/styles/components/header.module.css";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import { LayoutComponent } from "./common/LayoutComponent";

export const Header = () => {
  return (
    <LayoutComponent>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <h2>Karina Awarska</h2>
          <p className={styles.subTitle}>Coach kariery i świadomego życia</p>
        </div>
        <Navigation />
        <MobileNavigation />
      </header>
    </LayoutComponent>
  );
};
