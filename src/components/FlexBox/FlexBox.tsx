import React from "react";
import styles from "./FlexBox.module.scss";

interface FlexBoxProps {
  children: React.ReactNode;
}

const FlexBox = ({ children }: FlexBoxProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default FlexBox;
