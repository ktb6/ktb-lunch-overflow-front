import React from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  width: string | number;
  height: string | number;
}

const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    ></div>
  );
};

export default Skeleton;
