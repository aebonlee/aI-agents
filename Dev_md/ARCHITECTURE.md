# 기술 아키텍처

## 기술 스택

### 프론트엔드
| 기술 | 버전 | 용도 |
|------|------|------|
| React | 19.2.4 | UI 프레임워크 |
| React DOM | 19.2.4 | DOM 렌더링 |
| React Router DOM | 7.1.0 | 클라이언트 사이드 라우팅 |
| React Markdown | 9.0.1 | Markdown 렌더링 |
| Remark GFM | 4.0.0 | GitHub Flavored Markdown 지원 |
| Vite | 8.0.1 | 빌드 도구 |

### 백엔드 서비스
| 기술 | 버전 | 용도 |
|------|------|------|
| Supabase JS | 2.49.0 | 인증 (Google + Kakao OAuth) |

### 개발 도구
| 기술 | 버전 | 용도 |
|------|------|------|
| ESLint | 9.39.4 | 코드 품질 |
| @vitejs/plugin-react | 6.0.1 | React Fast Refresh |
| gh-pages | 6.3.0 | GitHub Pages 배포 |
| sharp | 0.33.0 | OG 이미지 생성 |

### 외부 리소스 (CDN)
| 리소스 | 버전 | 용도 |
|--------|------|------|
| Font Awesome | 6.5.1 | 아이콘 시스템 |
| Noto Sans KR | - | 한국어 타이포그래피 (wght 300-800) |
| Google Fonts | - | 웹 폰트 호스팅 |

## 아키텍처 다이어그램

```
┌─────────────────────────────────────────────────────┐
│                    index.html                        │
│              (OG Tags, Fonts, FA)                     │
├─────────────────────────────────────────────────────┤
│                     main.jsx                         │
│                  (Entry Point)                        │
├─────────────────────────────────────────────────────┤
│                      App.jsx                         │
│    ┌──────────────────────────────────────────┐      │
│    │           Context Providers               │      │
│    │  ThemeProvider > LanguageProvider >        │      │
│    │  AuthProvider > BrowserRouter             │      │
│    └──────────────────────────────────────────┘      │
├─────────────────────────────────────────────────────┤
│                  PublicLayout.jsx                     │
│    ┌────────┐  ┌──────────────────┐  ┌────────┐    │
│    │ Navbar │  │   Routes (Lazy)   │  │ Footer │    │
│    └────────┘  │ / → Home          │  └────────┘    │
│                │ /course → Course   │                │
│                │ /curriculum        │                │
│                │ /tools → Tools     │                │
│                │ /materials         │                │
│                │ /prompts           │                │
│                │ /cases → Cases     │                │
│                │ /results           │                │
│                │ /faq → FAQ         │                │
│                │ /login → Login     │                │
│                │ * → NotFound       │                │
│                └──────────────────┘                  │
└─────────────────────────────────────────────────────┘
```

## 상태 관리

Context API를 활용한 3개의 전역 상태:

### ThemeContext
- **모드**: auto / light / dark (auto는 시간 기반 자동 전환)
- **컬러 테마**: blue(기본), red, green, purple, orange
- **저장**: 쿠키 기반 (7일 유효)
- **적용**: `html[data-theme]`, `html[data-color]` 속성

### LanguageContext
- **언어**: ko (한국어, 기본) / en (영어)
- **번역 함수**: `t('key.path')` dot-notation 접근
- **저장**: 쿠키 기반

### AuthContext
- **인증 방식**: Google OAuth, Kakao OAuth
- **Provider**: Supabase Auth
- **상태**: user, loading
- **테이블 접두사**: `agent_`

## 코드 스플리팅 전략

```javascript
// vite.config.js - manualChunks (함수형)
manualChunks(id) {
  if (id.includes('react-dom') || id.includes('react/') || id.includes('react-router')) {
    return 'vendor';      // ~230KB
  }
  if (id.includes('react-markdown') || id.includes('remark-gfm')) {
    return 'markdown';    // 별도 청크
  }
}
```

모든 페이지 컴포넌트는 `React.lazy()`를 통해 route-based 코드 스플리팅 적용.

## SEO 전략

- **서버 측**: `index.html`에 기본 OG/Twitter 메타 태그
- **클라이언트 측**: `SEOHead` 컴포넌트가 각 페이지별 동적 메타 태그 갱신
- **OG 이미지**: sharp로 SVG→PNG 변환 생성 (1200x630)
- **Canonical URL**: 각 페이지별 canonical 링크
- **다국어**: `og:locale` 한국어/영어 전환
