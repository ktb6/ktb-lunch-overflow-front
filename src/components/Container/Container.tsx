import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]}>{children}</div>
    </div>
  );
};

export default Container;
