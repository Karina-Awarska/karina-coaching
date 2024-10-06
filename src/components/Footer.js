import styles from "@/styles/components/footer.module.css";
import { Contacts } from "./Contacts";
import { LayoutComponent } from "./common/LayoutComponent";

export const Footer = () => {
  return (
    <LayoutComponent>
      <footer className={styles.footer}>
        <h2>Kontakt</h2>
        <Contacts />
      </footer>
    </LayoutComponent>
  );
};
