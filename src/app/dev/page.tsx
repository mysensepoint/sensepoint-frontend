"use client";

import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import DotIndicator from "../../components/DotIndicator";

// 샘플 카로셀 데이터
const carouselItems = [
  {
    id: 1,
    image: "https://placehold.co/800x600/878277/ffffff?text=Sense+Makers+Vol.1",
    category: "[Sense Makers] Vol.1",
    author: "Written by 유림(愉林)",
    title: "일상을\n특별하게\n만드는 발견",
    description:
      "서울 길음동의 오래된 이발소, 30년째 가위를 잡고 있는 한 장인의 손끝에서는 단순한 기술을 넘어, 사람을 향한 진심이 전해집니다.",
  },
  {
    id: 2,
    image: "https://placehold.co/800x600/ADA797/ffffff?text=Sense+Gift",
    category: "[Sense Gift] Collection.01",
    author: "Written by 유림(愉林)",
    title: "일상을\n특별하게\n만드는 발견",
    description:
      "만원으로 찾아낸 작은 보물 이야기. 평범한 하루를 조금 더 따뜻하게, 조금 더 의미있게 만들어주는 소소하지만 확실한 행복들을 함께 나누고 싶습니다.",
  },
  {
    id: 3,
    image: "https://placehold.co/800x600/E9E5DC/333333?text=Our+Sense+Point",
    category: "[Our Sense Point]",
    author: "Written by 유림(愉林)",
    title: "우리만의\n독특한 관점과\n감각",
    description:
      "세상을 바라보는 새로운 시각을 제시합니다. 평범한 것들 속에서 특별함을 발견하는 우리만의 감각적 접근법을 소개합니다.",
  },
  {
    id: 4,
    image: "https://placehold.co/800x600/F5F5F5/333333?text=Sense+Archive",
    category: "[Sense Archive]",
    author: "Written by 유림(愉林)",
    title: "지나간 순간들의\n아름다움을 담아두는\n감각의 보관소",
    description:
      "추억과 영감의 저장소. 소중한 순간들을 감각적으로 기록하고 보관하여, 언제든 다시 꺼내볼 수 있는 특별한 공간입니다.",
  },
];

/**
 * 메인 페이지 컴포넌트 - Sense Makers 매거진 앱
 *
 * 모바일 앱 UI를 모방한 레이아웃으로, 다음과 같은 구조를 가짐:
 * - 상단 점 인디케이터 (카로셀 네비게이션)
 * - 메인 카로셀 영역 (전체 화면)
 */
function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="main-page">
      {/* 상단 점 인디케이터 */}
      <div className="indicator-section">
        <DotIndicator
          totalSlides={carouselItems.length}
          currentSlide={currentSlide}
          onDotClick={handleDotClick}
        />
      </div>

      {/* 메인 카로셀 */}
      <div className="carousel-section">
        <Carousel
          items={carouselItems}
          currentIndex={currentSlide}
          onSlideChange={handleSlideChange}
          // 아래 props 추가: 잘리는 경우 마지막 요소 비율 조정
          adjustLastItemHeight={true}
        />
      </div>

      <style jsx>{`
        .main-page {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: white;
          overflow: hidden; /* 모바일 화면에 맞게 스크롤 숨김 */
          position: relative;
        }

        .indicator-section {
          flex-shrink: 0;
          z-index: 10;
          position: relative;
          height: 56px; /* 네비게이션 바 높이 고려 */
        }

        .carousel-section {
          flex: 1;
          position: relative;
          overflow-y: auto;
          max-height: calc(100vh - 56px); /* 상단 indicator 제외한 높이 */
          display: flex;
          flex-direction: column;
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .main-page {
            height: 100vh;
            max-height: 100vh;
          }
          .carousel-section {
            max-height: calc(100vh - 56px);
          }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
