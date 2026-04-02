export const SITE_CONFIG = {
  name: 'AI Agent Work Lab',
  nameKo: '실무형 AI Agent 업무혁신 플랫폼',
  description: '생성형 AI를 넘어, 실무에 적용하는 AI Agent 학습 플랫폼. 리서치, 문서화, 자동화, 아이디어 구체화를 위한 실무형 AI Agent 교육',
  url: 'https://ai-agent.dreamitbiz.com',
  base: '/',
  author: 'DreamIT Biz',
  email: 'contact@dreamitbiz.com',
  github: 'https://github.com/aebonlee/aI-agent',
};

export const MENU_ITEMS = [
  { id: 'home', path: '/', nameKo: '홈', nameEn: 'Home', icon: 'fa-house' },
  { id: 'course', path: '/course', nameKo: '과정소개', nameEn: 'Course', icon: 'fa-book-open' },
  { id: 'curriculum', path: '/curriculum', nameKo: '커리큘럼', nameEn: 'Curriculum', icon: 'fa-list-check' },
  { id: 'tools', path: '/tools', nameKo: '실습도구', nameEn: 'Tools', icon: 'fa-screwdriver-wrench' },
  { id: 'materials', path: '/materials', nameKo: '실습자료', nameEn: 'Materials', icon: 'fa-file-lines' },
  { id: 'prompts', path: '/prompts', nameKo: '프롬프트 템플릿', nameEn: 'Prompts', icon: 'fa-terminal' },
  { id: 'cases', path: '/cases', nameKo: '산업·기관 사례', nameEn: 'Cases', icon: 'fa-building' },
  { id: 'results', path: '/results', nameKo: '결과물 예시', nameEn: 'Results', icon: 'fa-clipboard-check' },
  { id: 'faq', path: '/faq', nameKo: 'FAQ', nameEn: 'FAQ', icon: 'fa-circle-question' },
];

export const CURRICULUM_TYPES = [
  { id: 'basic-8h', nameKo: '8시간 기본과정', nameEn: '8-Hour Basic', icon: 'fa-clock', hours: 8 },
  { id: 'special-4h', nameKo: '4시간 특강형', nameEn: '4-Hour Special', icon: 'fa-bolt', hours: 4 },
  { id: 'advanced-16h', nameKo: '16시간 심화형', nameEn: '16-Hour Advanced', icon: 'fa-graduation-cap', hours: 16 },
  { id: 'project', nameKo: '프로젝트형 확장과정', nameEn: 'Project Extension', icon: 'fa-diagram-project', hours: 0 },
];

export const CASE_CATEGORIES = [
  { id: 'power-company', nameKo: '발전 공기업 사례', nameEn: 'Power Company Cases', icon: 'fa-industry' },
  { id: 'public-org', nameKo: '공공기관 혁신 사례', nameEn: 'Public Org Cases', icon: 'fa-landmark' },
  { id: 'automation', nameKo: '조직 내 보고·협업 자동화 사례', nameEn: 'Automation Cases', icon: 'fa-robot' },
  { id: 'research', nameKo: '리서치 및 자료정리 사례', nameEn: 'Research Cases', icon: 'fa-magnifying-glass-chart' },
  { id: 'ideation', nameKo: '아이디어 구체화 사례', nameEn: 'Ideation Cases', icon: 'fa-lightbulb' },
];
