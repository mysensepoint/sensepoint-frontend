# Sense Point - 일상의 감동을 이야기하는 공간

## 🎯 프로젝트 현황 (2025년 7월 12일 기준)

**✅ 헤드리스 CMS 시스템 완전 구축 완료**
- WordPress GraphQL API 연동 ✅
- Next.js + TypeScript 환경 구축 ✅  
- 프로덕션 환경 배포 ✅ (sensepoint.me)
- SSL 인증서 및 CORS 설정 ✅
- 실제 데이터 페칭 검증 완료 ✅

## 🏗️ 아키텍처

```
[Next.js Frontend] ↔ [WordPress Headless CMS]
     Vercel              Cloudways(sensepoint.me)
     (예정)                   (운영 중)
```

## 🔧 기술 스택

- **Backend**: WordPress 6.5+ (Headless CMS)
- **API**: WPGraphQL + Advanced Custom Fields Pro
- **Frontend**: Next.js 15.3.5 + TypeScript
- **Data Fetching**: Apollo Client
- **Hosting**: Cloudways (Backend) + Vercel (Frontend 예정)

## ⚡ 5분 퀵스타트

### 1. 환경 요구사항
```bash
node --version  # v18+ 필요
npm --version   # v9+ 필요
```

### 2. 설치 및 실행
```bash
git clone https://github.com/mysensepoint/sensepoint-frontend.git
cd sensepoint-frontend
npm install
cp .env.example .env.local
npm run dev
```

### 3. 동작 확인
- **테스트 페이지**: http://localhost:3001/test
- **기대 결과**: "WordPress Posts" 제목과 "Hello world!" 글 내용 표시

## 🌐 프로덕션 환경

### 실제 운영 중인 서비스
- **WordPress 관리자**: https://sensepoint.me/wp-admin
- **GraphQL API**: https://sensepoint.me/graphql
- **API 테스트**: https://sensepoint.me/graphql?query={posts{nodes{id,title}}}

### 브랜드 웹사이트
- **현재**: 헤드리스 CMS 백엔드만 운영
- **목표**: sensepoint.me에서 Next.js 프론트엔드 서비스

## 📁 프로젝트 구조

```
sensepoint-frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 홈페이지 (개발 예정)
│   │   └── test/
│   │       └── page.tsx      # GraphQL 테스트 페이지
│   └── lib/
│       └── apollo-client.ts  # GraphQL 클라이언트 설정
├── package.json
├── next.config.ts
└── README.md
```

## 🎯 개발 우선순위

### 🚨 Priority 1 - 즉시 필요 (1-2일)
1. **콘텐츠 타입 설계**: ACF Pro로 Sense Makers, Archive, Gift 필드 생성
2. **기본 라우팅**: 홈페이지 및 콘텐츠 상세 페이지 구현
3. **실제 콘텐츠**: WordPress에서 브랜드 콘텐츠 작성

### 🔥 Priority 2 - 중요 (3-5일)  
4. **디자인 시스템**: Tailwind CSS + 피그마 디자인 적용
5. **성능 최적화**: Next.js Image, ISR 설정
6. **다국어 지원**: Polylang + i18n 라우팅

### 💡 Priority 3 - 개선 (1주일)
7. **SEO 최적화**: 메타데이터, 사이트맵, 구조화된 데이터
8. **배포 자동화**: Vercel CI/CD 설정
9. **모니터링**: 에러 추적 및 성능 모니터링

## 🎨 브랜드 컨텍스트

### 핵심 철학
> "사람에게 감동을 주는 모든 행위는 예술이며, 그 감동의 순간들을 발견하고 나누며 함께 이야기한다."

### 4가지 콘텐츠 타입
- **Sense Makers**: 일상 속 예술가들의 이야기 (격주 발행)
- **Sense Archive**: Sense Makers에 대한 운영진 에세이
- **Sense Gift**: 1만원으로 찾은 일상의 보물 (매월 발행)
- **#OurSensePoint**: 커뮤니티 참여글 모음 (매월 발행)

### 브랜드 톤
- ✅ 여유롭고 차분한 소통 ("함께 해보실래요?")
- ❌ 강압적 표현 ("반드시", "꼭")
- ❌ 조급한 표현 ("빠르게", "즉시")

## 🛠️ 해결된 주요 이슈들

### GraphQL 설정
- **이슈**: API 권한 및 CORS 정책 문제
- **해결**: HTTP Headers 플러그인으로 Access-Control-Allow-Origin 설정

### TypeScript 환경
- **이슈**: .js와 .tsx 파일 혼재로 빌드 오류
- **해결**: 모든 파일을 .tsx/.ts로 통일

### 도메인 연결
- **이슈**: DNS 설정 및 SSL 인증서 설정
- **해결**: 호스팅케이알 → Cloudways A 레코드 연결

## 📞 개발 협업 요청 영역

### 🚨 긴급 도움 필요
- [ ] **성능 최적화**: Core Web Vitals 90점 달성
- [ ] **컴포넌트 설계**: 재사용 가능한 UI 시스템 구축
- [ ] **상태 관리**: Apollo Client 캐싱 전략 최적화

### 🔥 중요 도움 필요
- [ ] **SEO 전략**: Next.js 메타데이터 최적화
- [ ] **이미지 처리**: WordPress Media ↔ Next.js 최적화
- [ ] **배포 자동화**: Vercel CI/CD 파이프라인 구축

### 💡 개선 도움 필요
- [ ] **코드 리뷰**: 전체 아키텍처 및 코딩 패턴 점검
- [ ] **보안 강화**: JWT 인증, API 보안 설정
- [ ] **모니터링**: Sentry, Google Analytics 설정

## 🔗 중요 링크

- **프로덕션 API**: https://sensepoint.me/graphql
- **테스트 URL**: https://sensepoint.me/graphql?query={posts{nodes{id,title}}}
- **WordPress 관리**: https://sensepoint.me/wp-admin

## 📊 성공 지표

### 기술적 목표
- [ ] Core Web Vitals 90점 이상
- [ ] 모든 콘텐츠 타입 정상 렌더링
- [ ] 다국어 지원 완전 작동
- [ ] 모바일 반응형 완벽 구현

### 브랜드 목표
- [ ] 브랜드 톤 일관성 유지
- [ ] 사용자 경험의 "여유로움" 구현
- [ ] 감동적인 시각적 표현

---

**"기술로 구현하는 일상의 감동" - 함께 만들어가는 의미있는 프로젝트입니다 🚀**

### 🆘 즉시 연락처
이슈가 있거나 질문이 있으시면 GitHub Issues를 통해 언제든 연락주세요!