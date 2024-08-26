import Button from "@/components/common/Button";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { usePreferStore } from "@/store/preferStore";
import React from "react";

const MoodStep = ({ onPrev, onNext }: StepProps) => {
  const { mood, setMood, resetState } = usePreferStore();

  const handleMoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMood(e.target.value);
  };

  const handleNext = () => {
    const isConfirmed = window.confirm("음식 추천을 시작할까요?");
    if (isConfirmed) {
      onNext();
      resetState();
    }
  };

  return (
    <div>
      <SectionContainer title={<>오늘의 기분을 입력해주세요</>} type="none">
        <input
          type="text"
          value={mood}
          onChange={handleMoodChange}
          placeholder="오늘의 기분을 입력해주세요"
          style={{
            width: "100%",
            padding: "12px 16px",
            marginBottom: "20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
            transition: "border-color 0.3s ease",
            boxSizing: "border-box",
            marginTop: "2vmin",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#fae100")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
        />
      </SectionContainer>

      <SectionContainer type="none">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button onClick={onPrev}>이전으로</Button>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={onNext}>건너뛰기</Button>
            <Button onClick={handleNext}>제출하기</Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MoodStep;
