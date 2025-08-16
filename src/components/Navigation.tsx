'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Accordion from './Accordion';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <nav className={`w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40 ${className}`}>
        <div className="flex justify-between items-center px-6 py-4">
          {/* 좌측 로고 */}
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              {/* 로고 그래픽 */}
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-6 h-3 left-0 top-3 absolute bg-stone-500" />
                <div className="w-4 h-2 left-1 top-3 absolute bg-stone-500" />
                <div className="w-2 h-1 left-2 top-3 absolute bg-stone-500" />
                <div className="w-6 h-3 left-0 top-0 absolute bg-stone-500" />
                <div className="w-4 h-2 left-1.5 top-1 absolute bg-stone-500" />
                <div className="w-2 h-1 left-3 top-2 absolute bg-stone-500" />
              </div>
            </div>
          </div>

          {/* 우측 메뉴 아이콘 */}
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-md transition-colors"
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMenuOpen ? (
              /* X 아이콘 */
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 w-6 h-0.5 bg-black rotate-45 top-3" />
                <div className="absolute inset-0 w-6 h-0.5 bg-black -rotate-45 top-3" />
              </div>
            ) : (
              /* 햄버거 메뉴 아이콘 */
              <div className="w-6 h-5 flex flex-col justify-between">
                <div className="w-full h-0.5 bg-black" />
                <div className="w-full h-0.5 bg-black" />
                <div className="w-full h-0.5 bg-black" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* 사이드 메뉴 오버레이 */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeMenu}
        />
      )}

      {/* 사이드 메뉴 */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[100vw] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* 메뉴 헤더 - 네비게이션 바와 동일한 높이 유지 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          {/* 좌측 로고 */}
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-6 h-3 left-0 top-3 absolute bg-stone-500" />
                <div className="w-4 h-2 left-1 top-3 absolute bg-stone-500" />
                <div className="w-2 h-1 left-2 top-3 absolute bg-stone-500" />
                <div className="w-6 h-3 left-0 top-0 absolute bg-stone-500" />
                <div className="w-4 h-2 left-1.5 top-1 absolute bg-stone-500" />
                <div className="w-2 h-1 left-3 top-2 absolute bg-stone-500" />
              </div>
            </div>
          </div>

          {/* 우측 X 아이콘 */}
          <button
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-md transition-colors"
            aria-label="메뉴 닫기"
          >
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 w-6 h-0.5 bg-black rotate-45 top-3" />
              <div className="absolute inset-0 w-6 h-0.5 bg-black -rotate-45 top-3" />
            </div>
          </button>
        </div>

        {/* 메뉴 콘텐츠 */}
        <div className="flex flex-col" style={{ height: 'calc(100vh - 73px)' }}>
          {/* 메뉴 아이템들 */}
          <div className="flex-1 px-6 py-8">
            <Accordion title="메뉴" defaultOpen={true}>
              <div className="space-y-4">
                <Link href="/" className="block text-lg text-gray-900 hover:text-stone-600 transition-colors" onClick={closeMenu}>
                  홈
                </Link>
                <Link href="/about" className="block text-lg text-gray-900 hover:text-stone-600 transition-colors" onClick={closeMenu}>
                  소개
                </Link>
                <Link href="/magazine" className="block text-lg text-gray-900 hover:text-stone-600 transition-colors" onClick={closeMenu}>
                  매거진
                </Link>
                <Link href="/contact" className="block text-lg text-gray-900 hover:text-stone-600 transition-colors" onClick={closeMenu}>
                  연락처
                </Link>
              </div>
            </Accordion>
          </div>

          {/* 메뉴 하단 */}
          <div className="border-t border-gray-100 px-6 py-6">
            <div className="flex justify-between items-end">
              {/* 회사 정보 */}
              <div className="text-sm text-gray-600">
                <div className="font-medium">tel) 010-0000-0000</div>
              </div>

              {/* 로고 */}
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 relative overflow-hidden opacity-60">
                  <div className="w-6 h-3 left-0 top-3 absolute bg-stone-500" />
                  <div className="w-4 h-2 left-1 top-3 absolute bg-stone-500" />
                  <div className="w-2 h-1 left-2 top-3 absolute bg-stone-500" />
                  <div className="w-6 h-3 left-0 top-0 absolute bg-stone-500" />
                  <div className="w-4 h-2 left-1.5 top-1 absolute bg-stone-500" />
                  <div className="w-2 h-1 left-3 top-2 absolute bg-stone-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}