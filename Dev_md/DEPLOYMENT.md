# 빌드 및 배포 가이드

## 배포 환경

| 항목 | 내용 |
|------|------|
| **호스팅** | GitHub Pages |
| **도메인** | https://ai-agent.dreamitbiz.com |
| **저장소** | https://github.com/aebonlee/aI-agent |
| **배포 브랜치** | `gh-pages` (자동 생성) |
| **소스 브랜치** | `main` |
| **CNAME** | `public/CNAME` → `ai-agent.dreamitbiz.com` |

---

## 빌드

### 프로덕션 빌드

```bash
npm run build
```

#### 빌드 출력
```
dist/
├── index.html                 2.47 KB (gzip 0.96 KB)
├── CNAME                      커스텀 도메인
├── favicon.svg                파비콘
├── icons.svg                  아이콘
├── og-image.png               OG 이미지
└── assets/
    ├── index-*.css            83.16 KB (gzip 13.93 KB)
    ├── vendor-*.js           230.41 KB (gzip 73.58 KB)
    ├── index-*.js            210.01 KB (gzip 56.77 KB)
    ├── rolldown-runtime-*.js   0.55 KB (gzip 0.35 KB)
    ├── [각 페이지].js          1~14 KB (lazy-loaded)
    └── SEOHead-*.js            1.64 KB
```

#### 총 빌드 크기
- **CSS**: 83 KB (gzip 14 KB)
- **JS (vendor)**: 230 KB (gzip 74 KB)
- **JS (app)**: 210 KB (gzip 57 KB)
- **총 전송 크기**: ~145 KB (gzip)
- **빌드 시간**: ~385ms

### 빌드 미리보기

```bash
npm run preview
```

로컬에서 빌드 결과를 확인 (Vite 프리뷰 서버)

---

## 배포 프로세스

### 1단계: OG 이미지 생성 (최초 또는 변경 시)

```bash
npm run generate:og
```

### 2단계: 빌드 + 배포 (한 번에)

```bash
npm run deploy
```

> `predeploy` 스크립트가 자동으로 `vite build` 실행 후 `gh-pages -d dist` 실행

### 또는 수동 단계별 배포

```bash
# 1. 빌드
npm run build

# 2. GitHub Pages 배포
npx gh-pages -d dist
```

---

## Git 워크플로우

### 커밋 → 푸시 → 배포

```bash
# 1. 변경사항 확인
git status

# 2. 파일 스테이징
git add .

# 3. 커밋
git commit -m "feat: 변경 내용 설명"

# 4. 푸시 (소스 코드)
git push origin main

# 5. 빌드 & 배포 (GitHub Pages)
npm run deploy
```

---

## GitHub Pages 설정

### 저장소 Settings > Pages

| 설정 | 값 |
|------|-----|
| Source | Deploy from a branch |
| Branch | `gh-pages` / `/ (root)` |
| Custom domain | `ai-agent.dreamitbiz.com` |
| Enforce HTTPS | ✅ |

### DNS 설정 (도메인 호스팅)

| 타입 | 호스트 | 값 |
|------|--------|-----|
| CNAME | ai-agent | aebonlee.github.io |

---

## SPA 라우팅 대응

GitHub Pages는 기본적으로 SPA 라우팅을 지원하지 않음.
현재 `BrowserRouter` 사용 시 직접 URL 접근이 404를 반환할 수 있음.

### 해결 방법 (필요 시)

**방법 1**: `404.html` 추가
```html
<!-- public/404.html -->
<!DOCTYPE html>
<html>
<head>
  <script>
    // SPA redirect: /path → /?p=/path
    var path = window.location.pathname;
    window.location.replace('/' + '?p=' + path);
  </script>
</head>
</html>
```

**방법 2**: `HashRouter`로 전환
```jsx
import { HashRouter } from 'react-router-dom';
// BrowserRouter 대신 HashRouter 사용
```

**방법 3** (현재 방식): `BrowserRouter` 유지
- 대부분의 사용자가 홈에서 내비게이션으로 접근
- GitHub Pages 기본 404 처리에 의존

---

## 환경 변수 관리

### 개발 환경
```env
# .env (로컬)
VITE_SUPABASE_URL=https://hcmgdztsgjvzcyxyayaj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

### 프로덕션 환경
- Vite 빌드 시 `VITE_` 접두사 환경 변수가 번들에 인라인됨
- 빌드 전에 `.env` 파일이 올바르게 설정되어 있어야 함
- GitHub Actions 사용 시 Repository Secrets에 설정

---

## 트러블슈팅

### 빌드 에러: manualChunks is not a function
- **원인**: Vite 8 (Rolldown)에서 manualChunks는 함수여야 함
- **해결**: 객체 대신 함수형으로 변경 (현재 적용됨)

### 배포 후 404 에러
- **원인**: GitHub Pages SPA 라우팅 미지원
- **해결**: 위 SPA 라우팅 대응 방법 참고

### OG 이미지 미표시
- **확인**: `public/og-image.png` 존재 여부
- **재생성**: `npm run generate:og`
- **캐시**: 소셜 미디어 플랫폼의 캐시 갱신 필요

### Supabase 인증 실패
- **확인**: `.env` 파일의 URL과 키 확인
- **확인**: Supabase Dashboard에서 OAuth Provider 활성화 여부
- **확인**: Redirect URL 설정 (사이트 URL + localhost)
