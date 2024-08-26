import React from "react";
import styles from "./MainContainer.module.scss";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <main className={styles.container}>{children}</main>;
};

export default MainContainer;
