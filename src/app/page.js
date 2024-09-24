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
              Ważne jest dla mnie holistyczne podejście do człowieka i jego
              zasobów. <span>Dbanie o dobrostan.</span>
            </h3>
            <p>
              Będę Cię inspirować do realizacji ambitnych celów. Zbudujemy razem
              nową mapę mentalną aby z odwagą i lekkością zmienić swoje życie na
              bardziej wartościowe.
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
          Nowe początki zawsze pojawiają się w momencie, gdy decydujemy się na
          zmianę i przestajemy trzymać się tego, co nas blokuje - Wayne Dyer
        </h2>
        <h2>
          Nie możemy stać się tym, kim chcemy być, pozostając tym, kim jesteśmy…
        </h2>
      </section>

      {/** programsSection */}
      <section className={styles.programsSection}>
        <div className={styles.programsSectionContent}>
          <h3>Program transformacji zawodowej</h3>
          <div className={styles.programs}>
            <div className={styles.program}>
              <div className={styles.programContent}>
                <p>
                  Jeśli czujesz, że utknęłaś w pracy, która nie daje Ci
                  satysfakcji, albo nie wiesz, co chcesz robić w życiu – ten
                  program jest właśnie dla Ciebie. Zyskaj klarowność i pewność w
                  działaniu, budując ścieżkę zawodową w zgodzie z Twoimi
                  wartościami i talentami.
                </p>

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
                  Program transformacji zawodowej to proces na odnalezienie
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
              świadomie wyznaczysz <span>cele</span> i drogę do nich
            </li>
            <li>
              odkryjesz na nowo swój <span>potencjał</span>
            </li>
            <li>
              <span>wsparcie</span> w procesie zmian
            </li>
            <li>
              wzmocnione poczucie <span>wartości i sprawczości</span>
            </li>
            <li>
              większy <span>dobrostan </span> i poczucie{" "}
              <span>życia z sensem</span>
            </li>
          </ul>
        </div>
      </section>

      {/** aboutMeSection */}
      <section className={styles.aboutMeSection}>
        <h3>O mnie</h3>
        <div className={styles.aboutMeSectionContext}>
          <div className={styles.aboutMeSectionText}>
            <p>
              Nazywam się Karina Awarska i wspieram osoby w odkrywaniu
              wewnętrznego potencjału i odwagi do tworzenia życia jakiego
              pragniesz. W swoim życiu zawodowym przeżywałam i sukcesy i
              porażki, doświadczyłam wypalenia zawodowego ale też utknięcia i
              niewiadomej co chce robić w życiu.
            </p>
            <p>Moja ścieżka świadomego rozwoju zaczęła się w 2019 roku.</p>
            <p>Ukończyłam:</p>
            <ul>
              <li>
                <span>Neurolingwistyczne Programowanie</span>, gdzie nauczyłam
                się wpływu języka na nasze życie, wyłaniania wzorców i
                osobistych strategii, wzmocniłam swój mental;
              </li>
              <li>
                <span>Coaching w Grupie Set</span>, dał mi dobry fundament pracy
                coachingowej, aktywnego słuchania, trafnego zadawania pytań i
                pracy głębokiej z klientem w akceptacji i zaufaniu;
              </li>
              <li>
                Studia podyplomowe z{" "}
                <span>
                  Psychologii pozytywnej w Szkole Wyższej Psychologii Społecznej
                  SWPS
                </span>
                , pogłębiły moją wiedzę psychologiczną, poznałam badania naukowe
                na temat dobrostanu i interwencji pozytywnych
              </li>
              <li>
                <span>
                  Coaching kariery Career Step Revolution w Talent Development
                  Institute
                </span>
                , pogłębił moją pracę coachingową, dał mi skuteczną strukturę w
                pracy z klientem przy zmianie i/lub przewartościowaniu ścieżki
                zawodowej;
              </li>
              <li>
                Warsztaty z <span>Ewą Foley</span>, moją mentorką, otworzyły
                mnie na duchowość i holistyczne doświadczanie życia.
              </li>
            </ul>
            <p>
              A to wszystko po to abyś mógł świadomie tworzyć życie, o jakim
              marzysz – zarówno w sferze osobistej, jak i zawodowej.
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
        </div>
      </section>
      <Certificates />
    </div>
  );
}
