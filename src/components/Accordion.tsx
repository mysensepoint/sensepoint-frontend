"use client";

import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = true,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-container ${className}`}>
      {/* 아코디언 헤더 */}
      <div className="accordion-header" onClick={toggleAccordion}>
        {/* 제목 */}
        <h3 className="accordion-title">{title}</h3>

        {/* 화살표 아이콘 */}
        <div className={`accordion-arrow ${isOpen ? "open" : ""}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
      </div>

      {/* 아코디언 내용 */}
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-body">{children}</div>
      </div>

      <style jsx>{`
        .accordion-container {
          border-bottom: 2px solid #e0e0e0;
          background: white;
          overflow: hidden;
        }

        .accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 30px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
          position: relative;
        }

        .accordion-header:hover {
          background: #fafafa;
        }

        .accordion-title {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #666;
          font-family: "Georgia", "Times New Roman", serif;
        }

        .accordion-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #666;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .accordion-arrow.open {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .accordion-content.open {
          max-height: 1000px;
        }

        .accordion-body {
          padding: 0;
          color: #555;
          line-height: 1.6;
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .accordion-header {
            padding: 16px 20px;
          }

          .accordion-title {
            font-size: 16px;
          }
        }

        /* 접근성 개선 */
        .accordion-header:focus {
          outline: 2px solid #007bff;
          outline-offset: -2px;
        }
      `}</style>
    </div>
  );
};

export default Accordion;
