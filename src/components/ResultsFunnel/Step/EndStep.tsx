"use client";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import NaverMapComponent from "@/components/NaverMapComponent";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Link from "next/link";

const EndStep = () => {
  const location1 = { lat: 37.394225, lng: 127.110341 };
  const location2 = { lat: 37.394603, lng: 127.110743 };

  return (
    <>
      <SectionContainer title={"위치 및 거리"} titleOption="out">
        <NaverMapComponent location1={location1} location2={location2} />
      </SectionContainer>

      <SectionContainer title="음식점" titleOption="out">
        <Card
          src={
            "https://play-lh.googleusercontent.com/De7Ob8jqZNCZiSjNl4Gx35DN2OD8Vz9Gucl0YQByra3XjFhxmTfVNgXxvZ7B_WZqd8Y"
          }
          name="빽다방 판교유스페이스점"
          description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
          price=""
          tags={[]}
          category="테이크아웃커피"
        />
      </SectionContainer>

      <SectionContainer title="음식" titleOption="out">
        <Card
          src={
            "https://play-lh.googleusercontent.com/De7Ob8jqZNCZiSjNl4Gx35DN2OD8Vz9Gucl0YQByra3XjFhxmTfVNgXxvZ7B_WZqd8Y"
          }
          name="빽다방 판교유스페이스점"
          description="균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요. 커피 이야기 보러가기 · PAIK'S BRAND STORY"
          price=""
          tags={[]}
          category="테이크아웃커피"
        />
      </SectionContainer>

      <SectionContainer type="none">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Button>이전</Button>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button>결정</Button>
            <Link href={"/"}>
              <Button>다시하기</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default EndStep;
