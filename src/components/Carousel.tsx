"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface CarouselItem {
  id: number;
  image: string;
  category: string;
  author: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  currentIndex?: number;
  onSlideChange?: (index: number) => void;
  className?: string;
  adjustLastItemHeight?: boolean; // 추가
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  currentIndex: externalCurrentIndex,
  onSlideChange,
  className = "",
  adjustLastItemHeight = false, // 추가
}) => {
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 외부에서 전달받은 currentIndex와 내부 상태 동기화
  const currentIndex =
    externalCurrentIndex !== undefined
      ? externalCurrentIndex
      : internalCurrentIndex;

  // 슬라이드 변경 함수
  const goToSlide = useCallback(
    (index: number) => {
      const newIndex = Math.max(0, Math.min(index, items.length - 1));
      if (externalCurrentIndex === undefined) {
        setInternalCurrentIndex(newIndex);
      }
      onSlideChange?.(newIndex);
    },
    [items.length, onSlideChange, externalCurrentIndex]
  );

  // 다음/이전 슬라이드
  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX;
    const deltaX = newX - startX;
    setCurrentX(newX);
    setDragOffset(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // 드래그 거리에 따라 슬라이드 변경
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setDragOffset(0);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const newX = e.touches[0].clientX;
    const deltaX = newX - startX;
    setCurrentX(newX);
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // 드래그 거리에 따라 슬라이드 변경
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setDragOffset(0);
  };

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // 자동 슬라이드 (선택사항)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isDragging, nextSlide]);

  return (
    <div className={`carousel-container ${className}`}>
      <div
        ref={containerRef}
        className="carousel-wrapper"
        style={{
          transform: `translateX(${-currentIndex * 100 + dragOffset / 10}%)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={item.id}
            className="carousel-slide"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={
              adjustLastItemHeight && idx === items.length - 1
                ? { height: '80%' } // 마지막 슬라이드가 잘릴 경우 세로 비율 축소
                : {}
            }
          >
            <div className="slide-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="slide-content">
              <div className="slide-header">
                <span className="slide-category">{item.category}</span>
                <span className="slide-author">{item.author}</span>
              </div>
              <div className="slide-title-section">
                <h2 className="slide-title">{item.title}</h2>
                <p className="slide-description">{item.description}</p>
              </div>
              <div className="slide-footer">
                <button className="read-more-button">Read More</button>
                <div className="scroll-indicators">
                  <span className="scroll-arrow"></span>
                  <span className="scroll-arrow"></span>
                  <span className="scroll-arrow"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션 버튼 */}
      <button
        className="carousel-nav prev"
        onClick={prevSlide}
        aria-label="이전 슬라이드"
      >
        ‹
      </button>
      <button
        className="carousel-nav next"
        onClick={nextSlide}
        aria-label="다음 슬라이드"
      >
        ›
      </button>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #000;
        }

        .carousel-wrapper {
          display: flex;
          width: 100%;
          height: 100%;
          will-change: transform;
        }

        .carousel-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          position: relative;
          cursor: grab;
          user-select: none;
        }

        .carousel-slide:active {
          cursor: grabbing;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 40px 30px;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .slide-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .slide-category {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
        }

        .slide-author {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          text-align: right;
          line-height: 1.4;
        }

        .slide-title-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .slide-title {
          margin: 0 0 20px 0;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          white-space: pre-line;
        }

        .slide-description {
          margin: 0;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          max-width: 80%;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .slide-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .read-more-button {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.3s ease;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .read-more-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .scroll-indicators {
          display: flex;
          gap: 8px;
        }

        .scroll-arrow {
          width: 20px;
          height: 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.6);
          border-radius: 2px;
          position: relative;
          transition: all 0.3s ease;
        }

        .scroll-arrow::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-right: 1.5px solid rgba(255, 255, 255, 0.6);
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.6);
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .scroll-arrow:hover {
          border-color: rgba(255, 255, 255, 0.9);
        }

        .scroll-arrow:hover::before {
          border-color: rgba(255, 255, 255, 0.9);
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 24px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-nav:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-nav.prev {
          left: 20px;
        }

        .carousel-nav.next {
          right: 20px;
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .slide-content {
            padding: 30px 20px;
          }

          .slide-header {
            margin-bottom: 15px;
          }

          .slide-category {
            font-size: 12px;
          }

          .slide-author {
            font-size: 10px;
          }

          .slide-title {
            font-size: 24px;
            margin-bottom: 15px;
          }

          .slide-description {
            font-size: 14px;
            max-width: 90%;
          }

          .read-more-button {
            font-size: 14px;
            padding: 6px 12px;
          }

          .scroll-arrow {
            width: 16px;
            height: 10px;
          }

          .carousel-nav {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .carousel-nav.prev {
            left: 15px;
          }

          .carousel-nav.next {
            right: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
