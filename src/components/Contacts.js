import {
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  Mail,
  PhoneIcon,
} from "@/assets/Icons";
import Link from "next/link";
import styles from "@/styles/components/contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.mailAndPhone}>
        <Link
          className={styles.mailLink}
          href="mailto:awarska.coaching@gmail.com"
        >
          <Mail width={30} height={30} />
          <span>awarska.coaching@gmail.com</span>
        </Link>
        <div className={styles.phone}>
          <PhoneIcon width={30} height={30} />
          <span>601 181 974</span>
        </div>
      </div>

      <div className={styles.mediaLinks}>
        {/* <Link
            className={styles.mediaLink}
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FacebookIcon width={30} height={30} />
          </Link> */}
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
  );
};
