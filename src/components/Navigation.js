import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <Link href="/">Główna</Link>
      <Link href="/programs">Programy</Link>
      <Link href="/about">O mnie</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Kontakt</Link>
    </nav>
  );
};
