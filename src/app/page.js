import styles from "@/styles/home.module.css";
import Image from "next/image";
import Karina from "@/assets/Karina.jpg";

export default function Home() {
  return (
    <div className={styles.home}>
      {/** welcomeSection */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeSectionContent}>
          <div className={styles.welcomeSectionText}>
            <h3>Zmiana zaczyna się od Ciebie.</h3>
            <p>
              Jestem tu aby wspierać Cię w życiowych i zawodowych
              transformacjach.
            </p>
          </div>
          <Image
            src={Karina}
            alt="Karina Awarska photo"
            className={styles.photo}
            placeholder="blur"
          />
        </div>
      </section>
      {/** quoteSection */}
      <section className={styles.quoteSection}>
        <h2>
          Masz w sobie wszystko, czego potrzebujesz, aby stworzyć życie którego
          pragniesz.
        </h2>
      </section>

      {/** workWithCoachSection */}
      <section className={styles.workWithCoachSection}>
        <Image
          src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726823831/WR1_4051b_1_-2_soonv0.jpg"
          alt="Karina Awarska photo"
          className={styles.photoURL}
          priority
          width={300}
          height={300}
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

      {/** programsSection */}
      <section className={styles.programsSection}>
        <div className={styles.programsSectionContent}>
          <h3>Programy</h3>
          <div className={styles.programs}>
            <div className={styles.program}>
              <h4>Program transformacji zawodowej CSR by Ela Krokosz</h4>
              <div className={styles.programContent}>
                <p>
                  Jeśli czujesz, że utknęłaś w pracy, która nie daje Ci
                  satysfakcji, albo nie wiesz, co chcesz robić w życiu – ten
                  program jest właśnie dla Ciebie. Zyskaj klarowność i pewność w
                  działaniu, budując ścieżkę zawodową w zgodzie z Twoimi
                  wartościami i talentami.
                </p>

                <ul className={styles.ul}>
                  <p>W trakcie programu:</p>
                  <li>
                    Zyskasz nowe spojrzenie na swoją karierę, analizując
                    dotychczasowe doświadczenia z szerszej perspektywy.
                  </li>
                  <li>
                    Odkryjesz swoje mocne strony i talenty, które pomogą Ci
                    świadomie zaplanować przyszłość zawodową.
                  </li>
                  <li>
                    Pozbędziesz się ograniczających przekonań, które blokują
                    Twój rozwój, i skupisz się na tym, na co masz realny wpływ.
                  </li>
                  <li>
                    Znajdziesz odpowiedzi na pytania, co tak naprawdę chcesz
                    robić, i zyskasz wewnętrzną pewność co do swoich wyborów.
                  </li>
                  <li>
                    Wzmocnisz poczucie sprawczości, dzięki czemu z odwagą
                    podejmiesz działania i zmiany w swojej karierze.
                  </li>
                  <li>
                    Świadomie zbudujesz swoją nową ścieżkę zawodową, krok po
                    kroku, w pełni kontrolując proces zmian.
                  </li>
                </ul>

                <p>
                  Program transformacji zawodowej CSR to proces na odnalezienie
                  poczucia sensu w pracy i stworzenie kariery, która daje Ci
                  radość i spełnienie. Zainwestuj w siebie, by poczuć moc,
                  pewność i sprawczość w każdym działaniu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** aboutMeSection */}
      <section className={styles.aboutMeSection}>
        <div className={styles.aboutMeSectionText}>
          <h3>O mnie</h3>
          <p>
            Nazywam się Karina Awarska i wspieram kobiety w odkrywaniu ich
            wewnętrznej mocy oraz w świadomym kształtowaniu swojego życia.
            Ukończyłam psychologię pozytywną na SWPS, a także szkolenia z
            coachingu i coachingu kariery pod okiem Eli Krokosz. Dodatkowo
            zdobyłam certyfikację w Neurolingwistycznym Programowaniu, gdzie
            uczyłam się wpływu języka na nasze życie i wyłaniania naszych
            osobistych strategii. Pozwala mi głębiej wspierać Cię w rozwoju
            osobistym. Będziesz mogła świadomie tworzyć życie, o jakim marzysz –
            zarówno w sferze osobistej, jak i zawodowej.
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726823832/DSC_2633a-2_khhkyj.jpg"
          alt="Karina Awarska photo"
          className={styles.photoURL}
          priority
          width={300}
          height={300}
        />
      </section>

      {/** certificatesSection */}
      <section className={styles.certificatesSection}>
        <div className={styles.certificateURLWrapper}>
          <Image
            src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726829945/CamScanner_20-09-2024_12.35_1_eopado.jpg"
            alt="Karina Awarska photo"
            className={styles.certificateURL}
            priority
            width={300}
            height={300}
          />
        </div>
        <div className={styles.certificateURLWrapper}>
          <Image
            src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726829945/CamScanner_20-09-2024_12.37_1_o6xmjr.jpg"
            alt="Karina Awarska photo"
            className={styles.certificateURL}
            priority
            width={300}
            height={300}
          />
        </div>
        <div className={styles.certificateURLWrapper}>
          <Image
            src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726829945/CamScanner_20-09-2024_12.33_1_rtn6lr.jpg"
            alt="Karina Awarska photo"
            className={styles.certificateURL}
            priority
            width={300}
            height={300}
          />
        </div>
        <div className={styles.certificateURLWrapper}>
          <Image
            src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726829945/CamScanner_20-09-2024_12.39_1_hdkptu.jpg"
            alt="Karina Awarska photo"
            className={styles.certificateURL}
            priority
            width={300}
            height={300}
          />
        </div>
      </section>
    </div>
  );
}
