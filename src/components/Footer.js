import styles from "@/styles/components/footer.module.css";
import {
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  Mail,
} from "@/assets/Icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Kontakt</h2>
      <div className={styles.contacts}>
        <div>
          <Link
            className={styles.mediaLink}
            href="mailto:awarska.coaching@gmail.com"
          >
            <Mail width={30} height={30} />
            <span>awarska.coaching@gmail.com</span>
          </Link>
        </div>
        <div className={styles.mediaLinks}>
          <Link
            className={styles.mediaLink}
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FacebookIcon width={30} height={30} />
          </Link>
          <Link
            className={styles.mediaLink}
            href="https://www.linkedin.com/in/karina-awarska-a653a3150/"
            target="_blank"
          >
            <LinkedInIcon width={30} height={30} />
          </Link>
          <Link
            className={styles.mediaLink}
            href="https://www.instagram.com/karinaawarska_coach/"
            target="_blank"
          >
            <InstagramIcon width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
