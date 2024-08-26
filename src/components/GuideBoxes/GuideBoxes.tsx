import React from "react";
import styles from "./GuideBoxes.module.scss";

const GuideBoxes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>1. 비선호 음식 선택</h3>
        <p>먼저 비선호하는 음식 종류를 선택하세요.</p>
      </div>
      <div className={styles.box}>
        <h3>2. 선호 음식 정보 입력</h3>
        <p>좋아하는 음식의 맛, 식감, 온도를 알려주세요.</p>
      </div>
      <div className={styles.box}>
        <h3>3. 오늘의 기분</h3>
        <p>원하시면 오늘의 기분도 한 줄로 표현해 주세요.</p>
      </div>

      <div className={styles.mobileBox}>
        1. 비선호 음식 선택 / 2. 선호 음식 정보 입력 / 3. 오늘의 기분
      </div>
    </div>
  );
};

export default GuideBoxes;
