# 변경 이력 (Changelog)

## [1.0.0] - 2026-04-02

### 초기 릴리스 - AI Agent Work Lab 플랫폼 구축

#### 프로젝트 초기화
- Vite 8 + React 19 프로젝트 생성
- 의존성 설치: react-router-dom, supabase, react-markdown, remark-gfm, sharp, gh-pages
- Git 저장소 초기화 및 GitHub 원격 연결
- GitHub Pages 커스텀 도메인 설정 (ai-agent.dreamitbiz.com)

#### 코어 인프라 (9개 파일)
- `.env` - Supabase 환경 변수 (VITE_ 접두사)
- `src/lib/supabase.js` - Supabase 클라이언트 (`agent_` 테이블 접두사)
- `src/config/site.js` - 사이트 설정, 메뉴 9항목, 커리큘럼 4타입, 사례 5카테고리
- `src/contexts/ThemeContext.jsx` - 테마 (auto/light/dark + 5색상, 쿠키 저장)
- `src/contexts/LanguageContext.jsx` - 언어 (ko/en, dot-notation t() 함수)
- `src/contexts/AuthContext.jsx` - 인증 (Google + Kakao OAuth)
- `src/utils/translations.js` - 전체 Ko/En 번역 사전
- `vite.config.js` - 포트 5176, 함수형 manualChunks
- `public/CNAME` - ai-agent.dreamitbiz.com

#### 레이아웃 컴포넌트 (5개 파일)
- `src/components/layout/Navbar.jsx` - 글래스모피즘 네비바 (데스크톱+모바일)
- `src/components/layout/Footer.jsx` - 4열 그리드 푸터
- `src/components/HeroCarousel.jsx` - 5슬라이드 히어로 캐러셀 (6초 자동전환)
- `src/components/HeroBackground.jsx` - 4종 CSS 애니메이션 (particles/network/orbs/geometric)
- `src/components/SEOHead.jsx` - 동적 OG/Twitter 메타 태그

#### 페이지 컴포넌트 (11개 파일)
- `src/pages/Home.jsx` - 메인 랜딩 (6섹션)
- `src/pages/course/CoursePage.jsx` - 과정소개 (사이드바+6섹션)
- `src/pages/curriculum/CurriculumPage.jsx` - 커리큘럼 (4탭, 8세션)
- `src/pages/tools/ToolsPage.jsx` - 실습도구 (6종 AI 도구)
- `src/pages/materials/MaterialsPage.jsx` - 실습자료 (7종)
- `src/pages/prompts/PromptsPage.jsx` - 프롬프트 템플릿 (6카테고리)
- `src/pages/cases/CasesPage.jsx` - 산업·기관 사례 (5카테고리, 10사례)
- `src/pages/results/ResultsPage.jsx` - 결과물 예시 (5카테고리)
- `src/pages/faq/FaqPage.jsx` - FAQ (8항목 아코디언)
- `src/pages/auth/LoginPage.jsx` - 로그인 (Google + Kakao)
- `src/pages/NotFound.jsx` - 404 페이지

#### CSS 디자인 시스템 (13개 파일)
- `src/styles/index.css` - CSS 임포트 허브
- `src/styles/base.css` - CSS 변수, 리셋, 버튼, 폼, 유틸리티
- `src/styles/navbar.css` - 네비바 (컬러피커, 모바일 메뉴)
- `src/styles/hero.css` - 히어로 (캐러셀, 파티클, 스크롤 인디케이터)
- `src/styles/home.css` - 홈 섹션 (피쳐, 프로세스, 통계, CTA)
- `src/styles/footer.css` - 푸터 (다크 그라디언트, 뉴스레터)
- `src/styles/content-pages.css` - 콘텐츠 레이아웃 (사이드바, 정보박스)
- `src/styles/cases.css` - 사례 (필터, 카드, 디테일)
- `src/styles/login.css` - 로그인 (소셜 버튼, 프로필)
- `src/styles/community.css` - 커뮤니티 (게시글, 댓글, 리더보드)
- `src/styles/animations.css` - 애니메이션 (fade, slide, shimmer, reduced-motion)
- `src/styles/dark-mode.css` - 다크 모드 전체 오버라이드
- `src/styles/responsive.css` - 반응형 6개 브레이크포인트 + 인쇄

#### 라우팅 및 엔트리 (7개 파일)
- `src/layouts/PublicLayout.jsx` - 라우트 설정 (11개 lazy-loaded 라우트)
- `src/App.jsx` - 루트 (Context Providers + BrowserRouter)
- `src/main.jsx` - 엔트리 포인트
- `index.html` - HTML 엔트리 (OG 태그, 폰트, FA)
- `public/favicon.svg` - SVG 파비콘
- `scripts/generate-og-image.js` - OG 이미지 생성 (sharp SVG→PNG)
- `.gitignore` - Git 무시 파일

#### 빌드 및 배포
- Vite 8 (Rolldown) 프로덕션 빌드 성공 (~385ms)
- OG 이미지 생성 (1200x630 PNG)
- GitHub Pages 배포 (gh-pages 브랜치)
- 라이브: https://ai-agent.dreamitbiz.com

#### 기술적 해결 사항
- Vite 8 Rolldown에서 `manualChunks` 객체→함수 변환 필요 (빌드 에러 수정)
- Vite 프로젝트 초기화 시 비어있지 않은 디렉토리 이슈 (temp-init 활용)
- Git remote 기존 CNAME 커밋과의 통합 (`git reset origin/main`)

---

## [1.0.1] - 2026-04-04

### 개발 문서화

#### 추가
- `Dev_md/` 폴더 생성 (11개 문서)
  - README.md - 프로젝트 개요 및 문서 인덱스
  - ARCHITECTURE.md - 기술 아키텍처 및 스택
  - FILE_STRUCTURE.md - 전체 파일 구조
  - PAGES.md - 10개 페이지 상세 문서
  - COMPONENTS.md - 5개 컴포넌트 상세 문서
  - STYLING.md - CSS 디자인 시스템 (변수, 다크모드, 반응형, 애니메이션)
  - FEATURES.md - 9가지 기능 상세 (다국어, 테마, 인증, 캐러셀, 반응형, SEO 등)
  - API_AUTH.md - Supabase 인증 및 API 설정
  - SETUP_GUIDE.md - 설치 및 개발 환경 가이드
  - DEPLOYMENT.md - 빌드 및 배포 가이드
  - CHANGELOG.md - 변경 이력 (이 문서)
