# Supabase 인증 및 API 문서

## Supabase 설정

### 환경 변수

```env
VITE_SUPABASE_URL=https://hcmgdztsgjvzcyxyayaj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...  # 공개 anon 키
```

> `.env` 파일은 `.gitignore`에 포함되어 Git에 커밋되지 않음

### 클라이언트 초기화

```javascript
// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 테이블 접두사

모든 Supabase 테이블은 `agent_` 접두사를 사용:

```javascript
export const TABLES = {
  profiles: 'agent_profiles',
  posts: 'agent_posts',
  comments: 'agent_comments',
};
```

---

## OAuth 인증

### Google OAuth

```javascript
const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
    },
  });
};
```

### Kakao OAuth

```javascript
const signInWithKakao = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: window.location.origin,
    },
  });
};
```

### 로그아웃

```javascript
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};
```

---

## 인증 상태 관리

### AuthContext 구조

```javascript
// src/contexts/AuthContext.jsx
const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 인증 상태 변경 리스너
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signInWithGoogle,
      signInWithKakao,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### 사용 예시

```jsx
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  if (loading) return <Loading />;

  return user ? (
    <div>
      <img src={user.user_metadata.avatar_url} />
      <span>{user.user_metadata.full_name}</span>
      <button onClick={signOut}>로그아웃</button>
    </div>
  ) : (
    <button onClick={signInWithGoogle}>Google 로그��</button>
  );
}
```

---

## Supabase 대시보드 설정 필요사항

### 1. Authentication > Providers

#### Google OAuth
1. Google Cloud Console에서 OAuth 2.0 클라이언트 ID 생성
2. Authorized redirect URI: `https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback`
3. Supabase Dashboard > Authentication > Providers > Google > Enable
4. Client ID와 Client Secret 입력

#### Kakao OAuth
1. Kakao Developers에서 앱 생성
2. 플랫폼 > Web > 사이트 도메인: `https://ai-agents.dreamitbiz.com`
3. Redirect URI: `https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback`
4. Supabase Dashboard > Authentication > Providers > Kakao > Enable
5. REST API Key와 Client Secret 입력

### 2. Authentication > URL Configuration
- Site URL: `https://ai-agents.dreamitbiz.com`
- Redirect URLs:
  - `https://ai-agents.dreamitbiz.com`
  - `https://ai-agents.dreamitbiz.com/**`
  - `http://localhost:5176` (개발용)

### 3. 데이터베이스 테이블 (선택)

현재는 인증만 사용하지만, 향후 커뮤니티 기능 확장 시:

```sql
-- 프로필 테이블
CREATE TABLE agent_profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 게시글 테이블
CREATE TABLE agent_posts (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 댓글 테이블
CREATE TABLE agent_comments (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES agent_posts,
  user_id UUID REFERENCES auth.users,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 보안 고려사항

- `VITE_SUPABASE_ANON_KEY`는 공개 키 (브라우저에 노출 OK)
- `.env` 파일은 `.gitignore`로 Git에서 제외
- Supabase RLS (Row Level Security) 정책으로 데이터 접근 제어
- OAuth redirect URL은 허용된 도메인만 설정
