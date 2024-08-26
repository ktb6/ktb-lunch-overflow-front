import styles from "./SectionContainer.module.scss";

interface SectionContainerProps {
  children: React.ReactNode;
  type?: "default" | "none";
  title?: React.ReactNode;
  titleOption?: "in" | "out";
}

const SectionContainer = ({
  children,
  type = "default",
  title,
  titleOption = "in",
}: SectionContainerProps) => {
  const containerClass = `${styles.container} ${
    type === "none" ? styles.none : styles.default
  }`;

  return (
    <div className={styles.outContainer}>
      {title && titleOption == "out" && (
        <h2 className={styles.title}>{title}</h2>
      )}
      <section className={containerClass}>
        {title && titleOption == "in" && (
          <h2 className={styles.title}>{title}</h2>
        )}
        {children}
      </section>
    </div>
  );
};

export default SectionContainer;
