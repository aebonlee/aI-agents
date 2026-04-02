import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const TOOLS = [
  {
    id: 'chatgpt',
    nameKo: 'ChatGPT (GPT-4o)',
    nameEn: 'ChatGPT (GPT-4o)',
    categoryKo: '대화형 AI Agent',
    categoryEn: 'Conversational AI Agent',
    descKo: '자연어 대화 기반의 범용 AI 도구. 문서 작성, 코드 생성, 데이터 분석, 아이디어 구체화 등 다양한 업무에 활용 가능합니다. GPTs 기능을 통해 맞춤형 Agent 구축이 가능합니다.',
    descEn: 'General-purpose AI tool based on natural language conversation. Applicable to document writing, code generation, data analysis, and idea development. Custom Agent building available through GPTs.',
    useCaseKo: '프롬프트 실습, Agent 설계 및 구축, 문서 초안 작성',
    useCaseEn: 'Prompt practice, Agent design & building, document drafting',
    icon: 'fa-comments',
    color: '#10A37F',
  },
  {
    id: 'claude',
    nameKo: 'Claude (Sonnet/Opus)',
    nameEn: 'Claude (Sonnet/Opus)',
    categoryKo: '문서 분석 및 구조화',
    categoryEn: 'Document Analysis & Structuring',
    descKo: '긴 문서 분석, 구조적 글쓰기, 논리적 검토에 강점을 가진 AI. Claude Projects를 통해 전용 Agent 환경을 구성할 수 있습니다.',
    descEn: 'AI with strengths in long document analysis, structural writing, and logical review. Claude Projects enables dedicated Agent environment setup.',
    useCaseKo: '보고서 구조화, 문서 검토, 논리적 분석',
    useCaseEn: 'Report structuring, document review, logical analysis',
    icon: 'fa-file-lines',
    color: '#D97706',
  },
  {
    id: 'gemini',
    nameKo: 'Gemini',
    nameEn: 'Gemini',
    categoryKo: '검색 기반 리서치',
    categoryEn: 'Search-Based Research',
    descKo: 'Google 검색 엔진과 연동된 AI 리서치 도구. 최신 정보 검색, 멀티모달(텍스트+이미지) 분석, Google Workspace 연동에 강점이 있습니다.',
    descEn: 'AI research tool integrated with Google Search. Strong in latest information retrieval, multimodal (text+image) analysis, and Google Workspace integration.',
    useCaseKo: '최신 동향 리서치, 데이터 수집, Workspace 연동 활용',
    useCaseEn: 'Latest trend research, data collection, Workspace integration',
    icon: 'fa-diamond',
    color: '#4285F4',
  },
  {
    id: 'genspark',
    nameKo: 'Genspark',
    nameEn: 'Genspark',
    categoryKo: 'AI 기반 통합 검색',
    categoryEn: 'AI-Powered Integrated Search',
    descKo: '여러 검색 엔진과 AI를 통합한 리서치 플랫폼. 복잡한 주제에 대한 종합적인 리서치와 요약이 가능하며, 구조화된 결과물을 제공합니다.',
    descEn: 'Research platform integrating multiple search engines and AI. Enables comprehensive research and summarization on complex topics with structured outputs.',
    useCaseKo: '종합 리서치, 산업 분석, 경쟁 조사',
    useCaseEn: 'Comprehensive research, industry analysis, competitive research',
    icon: 'fa-magnifying-glass-chart',
    color: '#7C3AED',
  },
  {
    id: 'perplexity',
    nameKo: 'Perplexity',
    nameEn: 'Perplexity',
    categoryKo: '리서치 특화 AI',
    categoryEn: 'Research-Specialized AI',
    descKo: '출처 기반 리서치에 특화된 AI 검색 도구. 검색 결과에 출처를 명시하여 신뢰성 있는 리서치가 가능하며, 팔로업 질문으로 심층 탐색이 가능합니다.',
    descEn: 'AI search tool specialized in source-based research. Provides credible research with cited sources and enables deep exploration through follow-up questions.',
    useCaseKo: '출처 기반 리서치, 팩트 체크, 심층 조사',
    useCaseEn: 'Source-based research, fact-checking, deep investigation',
    icon: 'fa-searchengin',
    color: '#1B9AAA',
  },
  {
    id: 'napkin',
    nameKo: 'Napkin AI',
    nameEn: 'Napkin AI',
    categoryKo: '시각화 도구',
    categoryEn: 'Visualization Tool',
    descKo: '텍스트 기반의 아이디어를 시각적 다이어그램, 플로우차트, 인포그래픽으로 변환하는 AI 도구. 발표자료 및 보고서의 시각화에 활용합니다.',
    descEn: 'AI tool that transforms text-based ideas into visual diagrams, flowcharts, and infographics. Used for visualizing presentations and reports.',
    useCaseKo: '워크플로우 시각화, 발표자료 제작, 프로세스 다이어그램',
    useCaseEn: 'Workflow visualization, presentation creation, process diagrams',
    icon: 'fa-chart-diagram',
    color: '#EC4899',
  },
];

export default function ToolsPage() {
  const { language, t } = useLanguage();
  const ko = language === 'ko';

  return (
    <div className="content-page">
      <SEOHead title={t('tools.title')} description={t('tools.subtitle')} path="/tools" />

      <div className="page-header">
        <div className="container">
          <h1>{t('tools.title')}</h1>
          <p className="page-desc">{t('tools.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="tools-grid">
          {TOOLS.map((tool) => (
            <div key={tool.id} className="tool-card">
              <div className="tool-card-header" style={{ borderTopColor: tool.color }}>
                <div className="tool-icon" style={{ background: `${tool.color}15`, color: tool.color }}>
                  <i className={`fa-solid ${tool.icon}`} aria-hidden="true" />
                </div>
                <div className="tool-name-group">
                  <h3>{ko ? tool.nameKo : tool.nameEn}</h3>
                  <span className="tool-category">{ko ? tool.categoryKo : tool.categoryEn}</span>
                </div>
              </div>
              <p className="tool-desc">{ko ? tool.descKo : tool.descEn}</p>
              <div className="tool-usecase">
                <i className="fa-solid fa-check-circle" aria-hidden="true" />
                <span>{ko ? tool.useCaseKo : tool.useCaseEn}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="content-card" style={{ marginTop: '32px' }}>
          <h2>{ko ? '실습 환경 안내' : 'Practice Environment Guide'}</h2>
          <p>{ko
            ? '교육 참가자는 아래 환경을 사전에 준비해 주시기 바랍니다.'
            : 'Please prepare the following environment before the training.'}
          </p>
          <div className="framework-grid">
            <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
              <h4><i className="fa-solid fa-laptop" aria-hidden="true" /> {ko ? '노트북' : 'Laptop'}</h4>
              <p>{ko ? '인터넷 접속 가능한 노트북 (Windows/Mac 무관)' : 'Internet-connected laptop (Windows/Mac)'}</p>
            </div>
            <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
              <h4><i className="fa-solid fa-user-plus" aria-hidden="true" /> {ko ? '계정 준비' : 'Account Setup'}</h4>
              <p>{ko ? 'ChatGPT, Claude 무료 계정 (사전 가입 권장)' : 'ChatGPT, Claude free accounts (pre-registration recommended)'}</p>
            </div>
            <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
              <h4><i className="fa-solid fa-wifi" aria-hidden="true" /> {ko ? '네트워크' : 'Network'}</h4>
              <p>{ko ? '안정적인 인터넷 접속 환경 (Wi-Fi 제공)' : 'Stable internet connection (Wi-Fi provided)'}</p>
            </div>
            <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
              <h4><i className="fa-solid fa-browser" aria-hidden="true" /> {ko ? '브라우저' : 'Browser'}</h4>
              <p>{ko ? 'Chrome 또는 Edge 최신 버전 권장' : 'Latest Chrome or Edge recommended'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
