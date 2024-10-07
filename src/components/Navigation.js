import Link from "next/link";
import styles from "@/styles/components/navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Główna</Link>
      <Link href="/programs">Programy</Link>
      <Link href="/about">O mnie</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Kontakt</Link>
    </nav>
  );
};
