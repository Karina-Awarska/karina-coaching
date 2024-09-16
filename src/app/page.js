import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>Header</header>
      <main className={styles.main}>
        <p>Main</p>
      </main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}
