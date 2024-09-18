import styles from "@/styles/home.module.css";
import Image from "next/image";
import Karina from "@/assets/Karina.jpg";

export default function Home() {
  return (
    <div className={styles.home}>
      {/** welcomeSection */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeSectionText}>
          <h3>Zmiana zaczyna się od Ciebie.</h3>
          <p>
            Jestem tu aby wspierać Cię w życiowych i zawodowych transformacjach.
          </p>
        </div>
        <Image
          src={Karina}
          alt="Karina Awarska photo"
          className={styles.photo}
          placeholder="blur"
        />
      </section>
      {/** quoteSection */}
      <section className={styles.quoteSection}>
        <h2>
          Masz w sobie wszystko, czego potrzebujesz, aby stworzyć życie którego
          pragniesz.
        </h2>
      </section>

      {/** quoteSection */}
      <section className={styles.workWithCoachSection}>
        <Image
          src={Karina}
          alt="Karina Awarska photo"
          className={styles.photo}
          placeholder="blur"
        />
        <div className={styles.workWithCoachText}>
          <p>Dlaczego warto pracować z coachem?</p>
          <ul>
            <li>
              Gdy czujesz, że utknęłaś w miejscu, nie masz pomysłu co dalej i od
              czego zacząć.
            </li>
            <li>
              Przyjrzymy się ograniczającym przekonaniom, co Cię powstrzymuje
              przed życiem jakiego pragniesz.
            </li>
            <li>
              Odkryjesz swoje talenty i mocne strony, które mogą być kluczem do
              realizacji Twoich marzeń i planów.
            </li>
            <li>
              Stwórzmy jasną wizję przyszłości: Jeśli brakuje Ci klarownej wizji
              tego, co chcesz robić.
            </li>
            <li>
              Wspólnie i skutecznie przejdziemy przez proces transformacji,
              które ułatwią Ci ten proces.
            </li>
            <li>
              Zyskasz większą motywację i odpowiedzialność: Regularne sesje
              coachingowe będą motorem do działania i pomogą Ci zachować
              odpowiedzialność za realizację swoich planów.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
