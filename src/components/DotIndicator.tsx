"use client";

import React from "react";

interface DotIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
  className?: string;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({
  totalSlides,
  currentSlide,
  onDotClick,
  className = "",
}) => {
  return (
    <div className={`dot-indicator ${className}`}>
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          className={`dot ${index === currentSlide ? "active" : ""}`}
          onClick={() => onDotClick(index)}
          aria-label={`슬라이드 ${index + 1}로 이동`}
          aria-current={index === currentSlide ? "true" : "false"}
        />
      ))}

      <style jsx>{`
        .dot-indicator {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 20px;
          background: white;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: #e0e0e0;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: #c0c0c0;
          transform: scale(1.2);
        }

        .dot.active {
          background: #878277;
          transform: scale(1.3);
        }

        .dot:focus {
          outline: 2px solid #007bff;
          outline-offset: 2px;
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .dot-indicator {
            padding: 15px;
            gap: 6px;
          }

          .dot {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default DotIndicator;
