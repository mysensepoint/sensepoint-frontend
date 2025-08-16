'use client';

import React from 'react';

/**
 * 메인 페이지 컴포넌트 - Sense Makers 매거진 앱
 * 
 * 모바일 앱 UI를 모방한 레이아웃으로, 다음과 같은 구조를 가짐:
 * - 상단 상태바 (시간, 배터리 등)
 * - 헤더 네비게이션
 * - 메인 콘텐츠 영역 (페이지네이션 인디케이터, 이미지, 텍스트)
 */
function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start items-center gap-4 overflow-hidden">
      {/* 모바일 상태바 - 시간, 신호강도, 배터리 표시 */}
      <div className="w-full pt-4 pb-2 bg-white inline-flex justify-start items-start gap-2.5 overflow-hidden">
        {/* 상태바 내용: 시간, 중앙 공간, 배터리/신호 아이콘들 */}
        <div className="flex-1 px-7 flex justify-between items-end">
          {/* 시간 표시 영역 */}
          <div 
            data-dark-mode="False" 
            data-type="Default" 
            className="w-14 h-5 relative rounded-3xl"
          >
            <div className="w-14 h-5 left-0 top-[1px] absolute text-center text-black/20 text-base font-semibold font-['Pretendard'] leading-snug">
              9:41
            </div>
          </div>

          {/* 상태바 중앙 공간 (노치나 다이나믹 아일랜드 영역) */}
          <div className="w-40 h-8" />

          {/* 배터리 표시 영역 */}
          <div 
            data-charge="100%" 
            data-charging="False" 
            data-dark-mode="False" 
            className="w-7 h-3 relative"
          >
            {/* 배터리 외곽선 */}
            <div className="w-6 h-3 left-0 top-0 absolute opacity-30 rounded border border-black/20" />
            
            {/* 배터리 양극 단자 */}
            <div className="w-[1.40px] h-1 left-[26px] top-[5px] absolute opacity-40 bg-black/20" />
            
            {/* 배터리 충전량 표시 (100% 상태) */}
            <div className="w-5 h-2 left-[2px] top-[2px] absolute bg-black/20 rounded-sm" />
          </div>

          {/* 신호 강도 또는 WiFi 아이콘 */}
          <div className="w-4 h-3 bg-black/20" />
        </div>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div 
        data-속성-1="main" 
        className="self-stretch flex-1 flex flex-col justify-start items-center gap-4"
      >
        {/* 페이지네이션 인디케이터 - 현재 페이지 위치 표시 */}
        <div className="inline-flex justify-center items-start gap-1">
          {/* 현재 활성 페이지 도트 */}
          <div className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
          
          {/* 비활성 페이지 도트들 */}
          <div className="w-1.5 h-1.5 bg-stone-200 rounded-full" />
          <div className="w-1.5 h-1.5 bg-stone-200 rounded-full" />
          <div className="w-1.5 h-1.5 bg-stone-200 rounded-full" />
        </div>

        {/* 백그라운드 이미지 컨테이너 */}
        <div className="w-full flex-1 flex flex-col justify-start items-center relative">
          {/* 메인 배경 이미지 - 180도 회전되어 있음, 하단에 그라데이션 오버레이 적용 */}
          <div className="self-stretch flex-1 rotate-180 bg-gradient-to-b from-stone-300 via-stone-400 to-stone-700/85 bg-stone-300">
            {/* 임시 배경 이미지 대신 그라데이션과 패턴 사용 */}
            <div className="w-full h-full bg-gradient-to-br from-amber-100/20 via-stone-200/40 to-stone-600/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,245,220,0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(222,184,135,0.2),transparent_50%)]" />
            </div>
          </div>
        </div>

        {/* 콘텐츠 오버레이 영역 - 이미지 위에 표시되는 텍스트와 UI 요소들 */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-between items-start mt-16 px-4">
          {/* 상단 콘텐츠 영역 - 제목과 저자 정보 */}
          <div className="self-stretch flex flex-col justify-start items-start">
            {/* 제목과 저자 헤더 */}
            <div className="self-stretch px-7 pt-10 flex justify-between items-center">
              {/* 매거진 제목 */}
              <div className="text-stone-200 text-base font-bold font-gyeonggi leading-snug">
                [Sense Makers] Vol.1
              </div>

              {/* 저자 정보 */}
              <div className="text-right text-stone-200 text-[10px] font-bold font-gyeonggi leading-3">
                Written by 유림(愉林)
              </div>
            </div>

            {/* 추가 콘텐츠 영역 (현재 비어있음) */}
            <div className="self-stretch px-7 py-2.5 flex flex-col justify-center items-start gap-2.5">
              {/* 빈 공간 - 향후 콘텐츠 추가 예정 영역 */}
              <div className="w-56 h-36 relative" />
            </div>
          </div>

          {/* 하단 콘텐츠 영역 - 본문 텍스트와 읽기 버튼 */}
          <div className="self-stretch h-72 flex flex-col justify-start items-center gap-7">
            {/* 본문 텍스트 영역 */}
            <div className="self-stretch h-28 px-7 overflow-hidden">
              {/* 본문 텍스트 컨테이너 */}
              <div className="w-full relative">
                {/* 기사 본문 텍스트 */}
                <div className="text-stone-200 text-xs font-bold font-gyeonggi leading-snug">
                  서울 길음동의 오래된 이발소,<br/>
                  30년째 가위를 잡고 있는 한 장인의 손끝에서는<br/>
                  단순한 기술을 넘어, 사람을 향한 진심이 전해집니다.<br/>
                  그는 말합니다. 이발은 단지 머리를 자르는 일이 아닌<br/>
                  누군가의 하루를 바꾸는 작은 감동을 만들어내는 일이라고요.
                </div>
              </div>
            </div>

            {/* 하단 액션 영역 - 읽기 버튼과 네비게이션 컨트롤 */}
            <div className="w-full h-36 pb-20 flex flex-col justify-start items-center">
              {/* '더 읽기' 버튼 텍스트 */}
              <div className="text-center text-stone-200 text-sm font-bold font-gyeonggi leading-tight sense-hover-primary cursor-pointer">
                Read More
              </div>

              {/* 스크롤 또는 네비게이션 인디케이터 영역 */}
              <div className="self-stretch h-8 p-1 flex flex-col justify-center items-center gap-2.5">
                {/* 스크롤 인디케이터 또는 화살표 아이콘들 */}
                <div className="w-6 h-3 border border-stone-200 rounded-sm" />
                <div className="w-6 h-3 border border-stone-200 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;