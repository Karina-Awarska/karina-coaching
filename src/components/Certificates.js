"use client";

import Image from "next/image";
import styles from "@/styles/components/certificates.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Certificates = () => {
  return (
    <section className={styles.certificatesSection}>
      <h3>Certyfikaty</h3>
      <div className={styles.certificatesSwiper}>
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          modules={[Pagination, Navigation, Autoplay]}
          loop
          pagination={{
            clickable: true,
          }}
          spaceBetween={10}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <Image
                src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726829945/CamScanner_20-09-2024_12.35_1_eopado.jpg"
                alt="Karina Awarska photo"
                className={styles.certificateURLies}
                priority
                width={500}
                height={500}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <Image
                src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726940161/CamScanner_20-09-2024_12.39_1_hdkptu.jpg"
                alt="Karina Awarska photo"
                className={styles.certificateURL}
                priority
                width={500}
                height={500}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <Image
                src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726940193/CamScanner_20-09-2024_12.37_1_o6xmjr.jpg"
                alt="Karina Awarska photo"
                className={styles.certificateURL}
                priority
                width={500}
                height={500}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <Image
                src="https://res.cloudinary.com/ddwrrgfyz/image/upload/v1726940237/CamScanner_20-09-2024_12.33_1_rtn6lr.jpg"
                alt="Karina Awarska photo"
                className={styles.certificateURL}
                priority
                width={500}
                height={500}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
