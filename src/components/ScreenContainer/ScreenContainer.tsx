import styles from "./ScreenContainer.module.scss";

interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default ScreenContainer;
