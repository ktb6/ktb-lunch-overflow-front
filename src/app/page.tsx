import Button from "@/components/common/Button";
import FlexBox from "@/components/FlexBox/FlexBox";
import GuideBoxes from "@/components/GuideBoxes/GuideBoxes";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer/MainContainer";
import ScreenIntro from "@/components/ScreenIntro/ScreenIntro";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ImageSlider from "@/components/Slider/ImageSlider";
import Link from "next/link";

const objects: { src: string; alt: string }[] = [];

for (let num = 1; num <= 12; num++) {
  objects.push({
    src: `/foods/${num}.jpg`,
    alt: `food${num}`,
  });
}

export default function Home() {
  return (
    <>
      <SectionContainer>
        <ScreenIntro
          title="AI 음식 추천 서비스, Lunch Overflow에 오신 걸 환영해요!"
          description={`지금부터 몇 가지 간단한 선택만 하시면, 오늘의 기분과 취향에 딱 맞는 메뉴와 음식점을 추천해 드릴게요! \n 특히, 현재 위치를 기준으로 걸어서 15분 이내 또는 1km 안에 있는 오프라인 음식점만 추천해드리니, 편리하게 가까운 맛집을 찾아보세요!`}
        />
      </SectionContainer>

      <SectionContainer type="none">
        <GuideBoxes />
      </SectionContainer>

      <SectionContainer type="none" title="AI 추천 음식 종류 선택">
        <ImageSlider images={objects} />
      </SectionContainer>

      <SectionContainer type="none" title="음식점 선택">
        <ImageSlider images={objects} slideOption="reverse" />
      </SectionContainer>

      <SectionContainer type="none">
        <FlexBox>
          <Link href={"/preferences"}>
            <Button>시작하기</Button>
          </Link>
        </FlexBox>
      </SectionContainer>
    </>
  );
}
