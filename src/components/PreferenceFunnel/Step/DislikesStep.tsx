"use client";
import Button from "@/components/common/Button";
import MultiSelect from "@/components/common/Select/MultiSelect";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { usePreferStore } from "@/store/preferStore";
import React, { useEffect } from "react";

const options = [
  { name: "한식", value: "korean" },
  { name: "중식", value: "chinese" },
  { name: "양식", value: "western" },
  { name: "일식", value: "japanese" },
  { name: "분식", value: "snack" },
  { name: "치킨", value: "chicken" },
  { name: "피자", value: "pizza" },
  { name: "햄버거", value: "burger" },
  { name: "아시안", value: "asian" },
  { name: "해산물 요리", value: "seafood" },
  { name: "면 요리", value: "noodle" },
  { name: "찌개/국/탕", value: "soup" },
  { name: "육류", value: "meat" },
  { name: "샌드위치/샐러드", value: "sandwich_salad" },
  { name: "볶음", value: "stir_fry" },
];

const DislikesStep = ({ onPrev, onNext }: StepProps) => {
  const { dislikes, setDislikes } = usePreferStore();

  const handleDislikesChange = (newDislikes: string[]) => {
    setDislikes(newDislikes);
  };

  return (
    <>
      <SectionContainer
        title={
          <>
            오늘 <span style={{ color: "red" }}>선호하지 않는</span> 음식
            카테고리를 선택해주세요
          </>
        }
        titleOption="out"
      >
        <MultiSelect
          initOptions={dislikes}
          options={options}
          onChange={handleDislikesChange}
          hideSubmitButton
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
          <Button onClick={onPrev}>홈으로</Button>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={onNext}>건너뛰기</Button>
            <Button onClick={onNext}>다음</Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default DislikesStep;
