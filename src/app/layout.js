import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/styles/layout.module.css";

export const metadata = {
  title: "Kraina Awarska Coaching",
  description: "Coaching and professional development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl-PL">
      <body>
        <div className={styles.layout}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
