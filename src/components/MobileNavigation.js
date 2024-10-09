"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/mobileNavigation.module.css";
import { Burger } from "./Burger";

export const MobileNavigation = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const openCloseNav = () => {
    setIsNavActive(!isNavActive);
    if (!isNavActive) {
      document.body.classList.toggle("_lock");
    }
    if (isNavActive) {
      document.body.classList.remove("_lock");
    }
  };

  const closeNav = () => {
    setIsNavActive(false);
    document.body.classList.remove("_lock");
  };

  return (
    <div className={styles.mobileNav}>
      <Burger onClick={openCloseNav} isNavActive={isNavActive} />
      <nav
        className={
          isNavActive ? styles.mobileNavBarActive : styles.mobileNavBar
        }
        onClick={closeNav}
      >
        <div className={styles.mobileNavLinks}>
          <Link href="/">Główna</Link>
          <Link href="/programs">Programy</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">O mnie</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </nav>
    </div>
  );
};
