import styles from "@/styles/home.module.css";
import Image from "next/image";
import Karina from "@/assets/Karina.jpg";
import { Certificates } from "@/components/Certificates";
import {
  EyeIcon,
  QueryStatus,
  LockOpen,
  PsychologyAlt,
  SelfImprovement,
  StairsIcon,
} from "@/assets/Icons";

export default function Home() {
  return (
    <div className={styles.home}>
      {/** welcomeSection */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeSectionContent}>
          <div className={styles.welcomeSectionText}>
            <h3>
              Zmiana zaczyna się <span>od Ciebie</span>
            </h3>
            <p>
              Jestem tu aby wspierać Cię w życiowych i zawodowych
              transformacjach
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
          pragniesz
        </h2>
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

                <p className={styles.programUlTitle}>W trakcie programu</p>
                <ul className={styles.programUl}>
                  <li>
                    <div className={styles.iconWrapper}>
                      <EyeIcon width={40} height={40} />
                    </div>
                    Zyskasz nowe spojrzenie na swoją karierę, analizując
                    dotychczasowe doświadczenia z szerszej perspektywy.
                  </li>
                  <li>
                    <div className={styles.iconWrapper}>
                      <QueryStatus width={40} height={40} />
                    </div>
                    Odkryjesz swoje mocne strony i talenty, które pomogą Ci
                    świadomie zaplanować przyszłość zawodową.
                  </li>
                  <li>
                    <div className={styles.iconWrapper}>
                      <LockOpen width={40} height={40} />
                    </div>
                    Pozbędziesz się ograniczających przekonań, które blokują
                    Twój rozwój, i skupisz się na tym, na co masz realny wpływ.
                  </li>
                  <li>
                    <div className={styles.iconWrapper}>
                      <PsychologyAlt width={40} height={40} />
                    </div>
                    Znajdziesz odpowiedzi na pytania, co tak naprawdę chcesz
                    robić, i zyskasz wewnętrzną pewność co do swoich wyborów.
                  </li>
                  <li>
                    <div className={styles.iconWrapper}>
                      <SelfImprovement width={40} height={40} />
                    </div>
                    Wzmocnisz poczucie sprawczości, dzięki czemu z odwagą
                    podejmiesz działania i zmiany w swojej karierze.
                  </li>
                  <li>
                    <div className={styles.iconWrapper}>
                      <StairsIcon width={40} height={40} />
                    </div>
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
              Gdy czujesz, że <span>utknęłaś w miejscu,</span> nie masz pomysłu
              co dalej i od czego zacząć.
            </li>
            <li>
              Przyjrzymy się <span>ograniczającym przekonaniom,</span> co Cię
              powstrzymuje przed życiem jakiego pragniesz.
            </li>
            <li>
              Odkryjesz <span>swoje talenty i mocne strony,</span> które mogą
              być kluczem do realizacji Twoich marzeń i planów.
            </li>
            <li>
              Stwórzmy <span>jasną wizję przyszłości:</span> jeśli brakuje Ci
              klarownej wizji tego, co chcesz robić.
            </li>
            <li>
              Wspólnie i skutecznie przejdziemy przez{" "}
              <span>proces transformacji, </span>
              które ułatwią Ci ten proces.
            </li>
            <li>
              <span>Zyskasz większą motywację i odpowiedzialność: </span>{" "}
              regularne sesje coachingowe będą motorem do działania i pomogą Ci
              zachować odpowiedzialność za realizację swoich planów.
            </li>
          </ul>
        </div>
      </section>

      {/** aboutMeSection */}
      <section className={styles.aboutMeSection}>
        <h3>O mnie</h3>
        <div className={styles.aboutMeSectionText}>
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
          <Image
            src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726823832/DSC_2633a-2_khhkyj.jpg"
            alt="Karina Awarska photo"
            className={styles.photoURL}
            priority
            width={300}
            height={300}
          />
        </div>
      </section>
      <Certificates />
    </div>
  );
}
