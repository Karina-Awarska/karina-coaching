import styles from "@/styles/components/common/layoutComponent.module.css";

export const LayoutComponent = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
