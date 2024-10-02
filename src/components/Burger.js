import styles from "@/styles/components/burger.module.css";

export const Burger = ({ onClick, isNavActive }) => {
  return (
    <div
      onClick={onClick}
      className={isNavActive ? styles.menuIconActive : styles.menuIcon}
    >
      <span></span>
    </div>
  );
};
