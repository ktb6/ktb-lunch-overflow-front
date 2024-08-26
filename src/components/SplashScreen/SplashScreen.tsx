"use client"; // 클라이언트 컴포넌트 선언
import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.scss";

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen = ({ children }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 2500);
    const animationTimer = setTimeout(() => setStartAnimation(true), 750);
    return () => {
      clearTimeout(splashTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  if (showSplash) {
    return (
      <div className={styles.splashScreen}>
        <div className={styles.circle}>
          <div className={styles.textWrapper}>
            <span className={styles.lunch}>Lunch</span>
            <span
              className={`${styles.overflow} ${
                startAnimation ? styles.animate : ""
              }`}
            >
              Overflow
            </span>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SplashScreen;
