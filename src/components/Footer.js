import styles from "@/styles/components/footer.module.css";
import { Contacts } from "./Contacts";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Kontakt</h2>
      <Contacts />
    </footer>
  );
};
