import Button from "@/components/common/Button";
import MultiSelect from "@/components/common/Select/MultiSelect";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { usePreferStore } from "@/store/preferStore";
import React from "react";

const options = [
  { name: "매콤한 맛", value: "spicy" },
  { name: "짭짤한 맛", value: "salty" },
  { name: "달콤한 맛", value: "sweet" },
  { name: "새콤한 맛, 신 맛", value: "sour" },
  { name: "감칠맛", value: "umami" },
  { name: "기름진 맛", value: "greasy" },
  { name: "느끼한 맛", value: "rich" },
  { name: "부드러운 식감", value: "soft_texture" },
  { name: "쫄깃한 식감", value: "chewy_texture" },
  { name: "바삭한 식감", value: "crispy_texture" },
  { name: "시원한 온도", value: "cool_temperature" },
  { name: "뜨근한 온도", value: "hot_temperature" },
];

const LikesStep = ({ onPrev, onNext }: StepProps) => {
  const { likes, setLikes } = usePreferStore();

  const handleLikesChange = (newLikes: string[]) => {
    setLikes(newLikes);
  };

  return (
    <>
      <SectionContainer
        title={
          <>
            오늘 <span style={{ color: "green" }}>땡기는</span> 음식
            맛/식감/온도를 선택해주세요
          </>
        }
        titleOption="out"
      >
        <MultiSelect
          initOptions={likes}
          options={options}
          onChange={handleLikesChange}
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
          <Button onClick={onPrev}>이전으로</Button>

          <div style={{ display: "flex", gap: "10px" }}>
            <Button onClick={onNext}>건너뛰기</Button>
            <Button onClick={onNext}>다음</Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default LikesStep;
