"use client";

import React from "react";
import Image from "next/image";

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
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "white",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 18,
        display: "inline-flex",
      }}
    >
      {/* 상단 영역 - 상태바와 헤더 컨테이너 */}
      <div
        style={{
          alignSelf: "stretch",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* 모바일 상태바 - 시간, 신호강도, 배터리 표시 */}
        <div
          style={{
            width: "100%",
            paddingBottom: 20,
            background: "white",
            overflow: "hidden",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          {/* 상태바 내용: 시간, 중앙 공간, 배터리/신호 아이콘들 */}
          <div
            style={{
              flex: "1 1 0",
              paddingLeft: 30,
              paddingRight: 30,
              justifyContent: "space-between",
              alignItems: "flex-end",
              display: "flex",
            }}
          >
            {/* 시간 표시 영역 */}
            <div
              data-dark-mode="False"
              data-type="Default"
              style={{
                width: 54,
                height: 21,
                position: "relative",
                borderRadius: 24,
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 20,
                  left: 0,
                  top: 1,
                  position: "absolute",
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.20)",
                  fontSize: 17,
                  fontFamily: "Pretendard",
                  fontWeight: "600",
                  lineHeight: 22,
                  wordWrap: "break-word",
                }}
              >
                9:41
              </div>
            </div>

            {/* 상태바 중앙 공간 (노치나 다이나믹 아일랜드 영역) */}
            <div style={{ width: 156, height: 33 }} />

            {/* 배터리 표시 영역 */}
            <div
              data-charge="100%"
              data-charging="False"
              data-dark-mode="False"
              style={{
                width: 27.4,
                height: 13,
                position: "relative",
              }}
            >
              {/* 배터리 외곽선 */}
              <div
                style={{
                  width: 25,
                  height: 13,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0.35,
                  borderRadius: 4,
                  border: "1px rgba(0, 0, 0, 0.20) solid",
                }}
              />

              {/* 배터리 양극 단자 */}
              <div
                style={{
                  width: 1.4,
                  height: 4.22,
                  left: 26,
                  top: 5,
                  position: "absolute",
                  opacity: 0.4,
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20), #424242",
                }}
              />

              {/* 배터리 충전량 표시 (100% 상태) */}
              <div
                style={{
                  width: 21,
                  height: 9,
                  left: 2,
                  top: 2,
                  position: "absolute",
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20), #424242",
                  borderRadius: 2,
                }}
              />
            </div>

            {/* 신호 강도 또는 WiFi 아이콘 */}
            <div
              style={{
                width: 18,
                height: 12,
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20), #424242",
              }}
            />
          </div>
        </div>

        {/* 네비게이션은 layout.tsx에서 처리됨 */}
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div
        data-속성-1="main"
        style={{
          alignSelf: "stretch",
          flex: "1 1 0",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 18,
          display: "flex",
        }}
      >
        {/* 페이지네이션 인디케이터 - 현재 페이지 위치 표시 */}
        <div
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 4,
            display: "inline-flex",
          }}
        >
          {/* 현재 활성 페이지 도트 */}
          <div
            style={{
              width: 6.39,
              height: 6,
              background: "#ADA797",
              borderRadius: 9999,
            }}
          />

          {/* 비활성 페이지 도트들 */}
          <div
            style={{
              width: 6.39,
              height: 6,
              background: "#E9E5DC",
              borderRadius: 9999,
            }}
          />
          <div
            style={{
              width: 6.39,
              height: 6,
              background: "#E9E5DC",
              borderRadius: 9999,
            }}
          />
          <div
            style={{
              width: 6.39,
              height: 6,
              background: "#E9E5DC",
              borderRadius: 9999,
            }}
          />
        </div>

        {/* 백그라운드 이미지 컨테이너 */}
        <div
          style={{
            width: 402,
            height: 714.64,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          {/* 메인 배경 이미지 - 180도 회전되어 있음, 하단에 그라데이션 오버레이 적용 */}
          <img
            style={{
              alignSelf: "stretch",
              flex: "1 1 0",
              transform: "rotate(180deg)",
              transformOrigin: "top left",
              background:
                "linear-gradient(180deg, rgba(76, 73, 70, 0) 0%, rgba(76, 73, 70, 0.85) 100%), rgba(233, 229, 220, 0.30)",
            }}
            src="https://placehold.co/402x715"
            alt="Magazine background"
          />
        </div>

        {/* 콘텐츠 오버레이 영역 - 이미지 위에 표시되는 텍스트와 UI 요소들 */}
        <div
          style={{
            width: 402,
            height: 715,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          {/* 상단 콘텐츠 영역 - 제목과 저자 정보 */}
          <div
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            {/* 제목과 저자 헤더 */}
            <div
              style={{
                alignSelf: "stretch",
                paddingTop: 40,
                paddingLeft: 30,
                paddingRight: 30,
                justifyContent: "space-between",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              {/* 매거진 제목 */}
              <div
                style={{
                  width: 246,
                  height: 24,
                  color: "#E9E5DC",
                  fontSize: 16,
                  fontFamily: "GyeonggiBatangOTF",
                  fontWeight: "700",
                  lineHeight: 22.4,
                  wordWrap: "break-word",
                }}
              >
                [Sense Makers] Vol.1
              </div>

              {/* 저자 정보 */}
              <div
                style={{
                  width: 96.48,
                  height: 15.25,
                  textAlign: "right",
                  color: "#E9E5DC",
                  fontSize: 10,
                  fontFamily: "GyeonggiBatangOTF",
                  fontWeight: "700",
                  lineHeight: 14,
                  wordWrap: "break-word",
                }}
              >
                Written by 유림(愉林)
              </div>
            </div>

            {/* 추가 콘텐츠 영역 (현재 비어있음) */}
            <div
              style={{
                alignSelf: "stretch",
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 10,
                paddingBottom: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}
            >
              {/* 빈 공간 - 향후 콘텐츠 추가 예정 영역 */}
              <div
                style={{
                  width: 220,
                  height: 138,
                  position: "relative",
                }}
              />
            </div>
          </div>

          {/* 하단 콘텐츠 영역 - 본문 텍스트와 읽기 버튼 */}
          <div
            style={{
              alignSelf: "stretch",
              height: 290,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 30,
              display: "flex",
            }}
          >
            {/* 본문 텍스트 영역 */}
            <div
              style={{
                alignSelf: "stretch",
                height: 115,
                paddingLeft: 30,
                paddingRight: 30,
                overflow: "hidden",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 4,
                display: "flex",
              }}
            >
              {/* 본문 텍스트 컨테이너 */}
              <div
                data-속성-1="1"
                style={{
                  width: 342,
                  height: 115,
                  position: "relative",
                }}
              >
                {/* 기사 본문 텍스트 - 현재 투명도 0으로 설정되어 숨겨진 상태 */}
                <div
                  style={{
                    width: 342,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0,
                    color: "#E9E5DC",
                    fontSize: 12,
                    fontFamily: "GyeonggiBatangOTF",
                    fontWeight: "700",
                    lineHeight: 22.8,
                    wordWrap: "break-word",
                  }}
                >
                  서울 길음동의 오래된 이발소,
                  <br />
                  30년째 가위를 잡고 있는 한 장인의 손끝에서는
                  <br />
                  단순한 기술을 넘어, 사람을 향한 진심이 전해집니다.
                  <br />
                  그는 말합니다. 이발은 단지 머리를 자르는 일이 아닌
                  <br />
                  누군가의 하루를 바꾸는 작은 감동을 만들어내는 일이라고요.
                </div>
              </div>
            </div>

            {/* 하단 액션 영역 - 읽기 버튼과 네비게이션 컨트롤 */}
            <div
              data-속성-1="기본"
              style={{
                width: 402,
                height: 145,
                paddingBottom: 80,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
              }}
            >
              {/* '더 읽기' 버튼 텍스트 - 현재 투명도 0으로 설정되어 숨겨진 상태 */}
              <div
                style={{
                  textAlign: "center",
                  color: "rgba(233, 229, 220, 0)",
                  fontSize: 14,
                  fontFamily: "GyeonggiBatangOTF",
                  fontWeight: "700",
                  lineHeight: 19.6,
                  wordWrap: "break-word",
                }}
              >
                Read More
              </div>

              {/* 스크롤 또는 네비게이션 인디케이터 영역 */}
              <div
                style={{
                  alignSelf: "stretch",
                  height: 32,
                  padding: 4,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "flex",
                }}
              >
                {/* 스크롤 인디케이터 또는 화살표 아이콘들 - 현재 투명도 0으로 설정 */}
                <div
                  style={{
                    width: 24,
                    height: 12,
                    outline: "1.50px rgba(233, 229, 220, 0) solid",
                    outlineOffset: "-0.75px",
                  }}
                />
                <div
                  style={{
                    width: 24,
                    height: 12,
                    outline: "1.50px rgba(233, 229, 220, 0) solid",
                    outlineOffset: "-0.75px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
