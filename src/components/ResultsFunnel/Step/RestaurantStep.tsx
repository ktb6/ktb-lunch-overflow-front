import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import FlexBox from "@/components/FlexBox/FlexBox";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import React from "react";

const RestaurantStep = ({ onPrev, onNext }: StepProps) => {
  const handleClickCard = () => {
    onNext();
  };

  return (
    <>
      <SectionContainer title="추천 주변 음식점" titleOption="out">
        <FlexBox>
          <div onClick={handleClickCard}>
            <Card
              src={"/restaurants/1.jpg"}
              name="빽다방 판교유스페이스점"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="테이크아웃커피"
            />
          </div>
          <div onClick={handleClickCard}>
            <Card
              src={"/restaurants/2.png"}
              name="빽다방 판교유스페이스점"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="테이크아웃커피"
            />
          </div>
          <div onClick={handleClickCard}>
            <Card
              src={"/restaurants/3.png"}
              name="빽다방 판교유스페이스점"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="테이크아웃커피"
            />
          </div>
          <div onClick={handleClickCard}>
            <Card
              src={"/restaurants/4.png"}
              name="빽다방 판교유스페이스점"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="테이크아웃커피"
            />
          </div>
          <div onClick={handleClickCard}>
            <Card
              src={"/restaurants/5.jpg"}
              name="빽다방 판교유스페이스점"
              description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
              price=""
              tags={[]}
              category="테이크아웃커피"
            />
          </div>
        </FlexBox>
      </SectionContainer>

      <SectionContainer type="none">
        <FlexBox>
          <Button onClick={onPrev}>이전</Button>
        </FlexBox>
      </SectionContainer>
    </>
  );
};

export default RestaurantStep;
