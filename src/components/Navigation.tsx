"use client";

import React, { useState } from "react";
import Accordion from "./Accordion";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`navigation-container ${className}`}>
      {/* 네비게이션 바 */}
      <div className="navigation-bar">
        {/* 좌측 로고 영역 */}
        <div className="logo-container">
          <div className="logo-placeholder">(로고가 들어갈 자리)</div>
        </div>

        {/* 우측 메뉴 영역 */}
        <div className="menu-container">
          <button
            className="menu-button"
            onClick={isMenuOpen ? closeMenu : toggleMenu}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMenuOpen ? (
              <div className="close-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            ) : (
              <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* 드롭다운 메뉴 */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          <div className="menu-overlay" onClick={closeMenu}></div>
          <div className="menu-content">
            {/* 아코디언 메뉴 */}
            <div className="menu-accordions">
              <Accordion title="Main" defaultOpen={false}>
                <nav className="menu-items">
                  {/* Main 섹션은 현재 하위 항목이 없음 */}
                </nav>
              </Accordion>

              <Accordion title="Contents" defaultOpen={true}>
                <nav className="menu-items">
                  <a
                    href="/sense-makers"
                    className="menu-item"
                    onClick={closeMenu}
                  >
                    <span className="bullet"></span>
                    Sense Makers
                  </a>
                  <a
                    href="/sense-gift"
                    className="menu-item"
                    onClick={closeMenu}
                  >
                    <span className="bullet"></span>
                    Sense Gift
                  </a>
                  <a
                    href="/our-sense-point"
                    className="menu-item"
                    onClick={closeMenu}
                  >
                    <span className="bullet"></span>
                    #Our Sense Point
                  </a>
                  <a
                    href="/contents/sense-archive"
                    className="menu-item"
                    onClick={closeMenu}
                  >
                    <span className="bullet"></span>
                    Sense Archive
                  </a>
                </nav>
              </Accordion>

              <Accordion title="Brand" defaultOpen={true}>
                <nav className="menu-items">
                  <a
                    href="/brand-story"
                    className="menu-item"
                    onClick={closeMenu}
                  >
                    <span className="bullet"></span>
                    Brand Story
                  </a>
                  <a
                    href="/brand-core"
                    className="menu-item"
                    onClick={closeMenu}
                  >
                    <span className="bullet"></span>
                    Brand Core
                  </a>
                </nav>
              </Accordion>
            </div>

            {/* 하단 회사 정보 및 로고 */}
            <div className="menu-footer">
              <div className="company-info">
                <p className="phone">(82)010-0000-0000</p>
                <p className="instagram">@sense_point.official</p>
              </div>
              <div className="footer-logo">
                <div className="logo-circle">
                  <div className="logo-inner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .navigation-container {
          position: relative;
          width: 100%;
          z-index: 1000;
        }

        .navigation-bar {
          width: 100%;
          padding: 16px 30px;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f0f0f0;
          position: relative;
          z-index: 1002;
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .logo-placeholder {
          font-size: 16px;
          font-weight: 600;
          color: #878277;
          padding: 8px 12px;
          border: 2px dashed #878277;
          border-radius: 8px;
          background: #f8f8f8;
        }

        .menu-container {
          display: flex;
          align-items: center;
        }

        .menu-button {
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }

        .menu-button:hover {
          background-color: #f5f5f5;
        }

        .hamburger-icon {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger-icon span {
          width: 100%;
          height: 2px;
          background-color: #333;
          border-radius: 1px;
          transition: all 0.3s ease;
        }

        .menu-button:hover .hamburger-icon span {
          background-color: #878277;
        }

        .close-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
        }

        .close-icon svg {
          transition: all 0.2s ease;
        }

        .menu-button:hover .close-icon svg {
          color: #878277;
        }

        .dropdown-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1001;
        }

        .menu-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .menu-content {
          position: absolute;
          top: 72px;
          right: 0;
          width: 768px;
          max-width: 100vw;
          height: calc(100vh - 72px);
          background: white;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
          animation: slideInFromRight 0.3s ease-out;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .menu-accordions {
          flex: 1;
          padding: 0;
          overflow-y: auto;
        }

        .menu-items {
          padding: 0;
        }

        .menu-item {
          display: flex;
          align-items: center;
          padding: 12px 30px;
          color: #888;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          transition: all 0.2s ease;
          border-bottom: none;
        }

        .menu-item:hover {
          color: #666;
        }

        .bullet {
          width: 6px;
          height: 6px;
          background: #888;
          border-radius: 50%;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .menu-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          border-top: 1px solid #e0e0e0;
          background: white;
          flex-shrink: 0;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .company-info p {
          margin: 0;
          font-size: 14px;
          color: #888;
          font-weight: 400;
        }

        .phone {
          color: #666;
        }

        .instagram {
          color: #888;
        }

        .footer-logo {
          display: flex;
          align-items: center;
        }

        .logo-circle {
          width: 40px;
          height: 40px;
          border: 2px solid #888;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .logo-inner-circle {
          width: 20px;
          height: 20px;
          border: 1px solid #888;
          border-radius: 50%;
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .navigation-bar {
            padding: 16px 20px;
          }

          .logo-placeholder {
            font-size: 14px;
            padding: 6px 10px;
          }

          .menu-content {
            width: 100vw;
            right: 0;
            top: 64px;
            height: calc(100vh - 64px);
          }

          .menu-footer {
            padding: 16px 20px;
          }
        }

        /* 데스크탑 환경에서 메뉴가 모바일처럼 우측에서 슬라이드 */
        @media (min-width: 769px) {
          .menu-content {
            right: calc(50vw - 384px);
            animation: slideInFromRightDesktop 0.3s ease-out;
          }

          @keyframes slideInFromRightDesktop {
            from {
              transform: translateX(400px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        }

        
      `}</style>
    </div>
  );
};

export default Navigation;
