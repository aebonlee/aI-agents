# 설치 및 개발 환경 가이드

## 요구사항

| 항목 | 최소 버전 |
|------|-----------|
| Node.js | 18.x 이상 (권장 22.x) |
| npm | 9.x 이상 |
| Git | 2.x 이상 |
| 브라우저 | Chrome/Edge 최신 |

---

## 1. 프로젝트 클론

```bash
git clone https://github.com/aebonlee/aI-agent.git
cd aI-agent
```

## 2. 의존성 설치

```bash
npm install
```

### 주요 의존성

| 패키지 | 버전 | 용도 |
|--------|------|------|
| react | ^19.2.4 | UI 프레임워크 |
| react-dom | ^19.2.4 | DOM 렌더링 |
| react-router-dom | ^7.1.0 | 라우팅 |
| react-markdown | ^9.0.1 | Markdown 렌더링 |
| remark-gfm | ^4.0.0 | GFM 지원 |
| @supabase/supabase-js | ^2.49.0 | 인증 |

### 개발 의존성

| 패키지 | 버전 | 용도 |
|--------|------|------|
| vite | ^8.0.1 | 빌드 도구 |
| @vitejs/plugin-react | ^6.0.1 | React HMR |
| eslint | ^9.39.4 | 린팅 |
| gh-pages | ^6.3.0 | 배포 |
| sharp | ^0.33.0 | OG 이미지 생성 |

## 3. 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```env
VITE_SUPABASE_URL=https://hcmgdztsgjvzcyxyayaj.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

> **중요**: `.env` 파일은 Git에 커밋하지 않습니다 (`.gitignore`에 포함)

## 4. 개발 서버 실행

```bash
npm run dev
```

- 기본 포트: **5176** (`http://localhost:5176`)
- Hot Module Replacement (HMR) 활성
- React Fast Refresh 지원

## 5. OG 이미지 생성

```bash
npm run generate:og
```

`public/og-image.png` (1200x630px) 생성

---

## 개발 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 시작 (포트 5176) |
| `npm run build` | 프로덕션 빌드 (dist/) |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run generate:og` | OG 이미지 생성 |
| `npm run deploy` | GitHub Pages 배포 |

---

## 프로젝트 구성 파일

### vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5176 },
  base: '/',
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-dom') || id.includes('react/') || id.includes('react-router')) {
            return 'vendor';
          }
          if (id.includes('react-markdown') || id.includes('remark-gfm')) {
            return 'markdown';
          }
        },
      },
    },
  },
});
```

### package.json 스크립트

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "generate:og": "node scripts/generate-og-image.js",
    "predeploy": "vite build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

## 코드 구조 규칙

### 파일 명명
- 페이지 컴포넌트: `PascalCase` (예: `CoursePage.jsx`)
- 유틸리티: `camelCase` (예: `translations.js`)
- CSS: `kebab-case` (예: `content-pages.css`)
- 설정: `camelCase` (예: `site.js`)

### 컴포넌트 패턴
- 모든 페이지는 `default export` 사용
- `useLanguage()` 훅으로 다국어 처리
- `SEOHead` 컴포넌트로 SEO 메타 태그 설정
- CSS 클래스 기반 스타일링 (CSS Modules 미사용)

### 번역 추가 방법
1. `src/utils/translations.js` 열기
2. `ko` 객체와 `en` 객체에 동일한 키 경로로 번역 추가
3. 컴포넌트에서 `t('key.path')` 로 사용

### 새 페이지 추가 방법
1. `src/pages/` 하위에 컴포넌트 파일 생성
2. `src/layouts/PublicLayout.jsx`에 lazy import 추가
3. `<Route>` 추가
4. 필요시 `src/config/site.js`의 `MENU_ITEMS`에 추가
5. `src/utils/translations.js`에 번역 추가
