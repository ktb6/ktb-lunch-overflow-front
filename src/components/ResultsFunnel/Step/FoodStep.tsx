import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import FlexBox from "@/components/FlexBox/FlexBox";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import React from "react";

const FoodStep = ({ onPrev, onNext }: StepProps) => {
  const handleClickCard = () => {
    onNext();
  };
  return (
    <>
      <SectionContainer title="AI 추천 음식 종류" titleOption="out">
        <FlexBox>
          <div onClick={handleClickCard}>
            <Card
              src={"/foods/1.jpg"}
              name="햄버거"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="패스트푸드"
            />
          </div>
          <div onClick={handleClickCard}>
            <Card
              src={"/foods/2.jpg"}
              name="스테이크"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="육류"
            />
          </div>
          <div onClick={handleClickCard}>
            <Card
              src={"/foods/3.jpg"}
              name="삼겹살"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="육류"
            />
          </div>
          <div onClick={handleClickCard}>
            <Card
              src={"/foods/4.jpg"}
              name="치킨"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="패스트푸드"
            />
          </div>
          <div onClick={handleClickCard}>
            <Card
              src={"/foods/5.jpg"}
              name="낙곱새"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="해산물"
            />
          </div>
        </FlexBox>
      </SectionContainer>

      <SectionContainer type="none">
        <FlexBox>
          <Button onClick={onPrev}>다시하기</Button>
        </FlexBox>
      </SectionContainer>
    </>
  );
};

export default FoodStep;
