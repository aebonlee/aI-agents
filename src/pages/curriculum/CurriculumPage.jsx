import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const TABS = [
  { id: '8h', labelKo: '8시간 기본과정', labelEn: '8-Hour Basic' },
  { id: '4h', labelKo: '4시간 특강형', labelEn: '4-Hour Lecture' },
  { id: '16h', labelKo: '16시간 심화형', labelEn: '16-Hour Advanced' },
  { id: 'project', labelKo: '프로젝트형', labelEn: 'Project-Based' },
];

const SESSIONS_8H = [
  {
    num: 1,
    titleKo: 'AI Agent의 이해와 업무혁신',
    titleEn: 'Understanding AI Agent & Work Innovation',
    hours: '1H',
    typeKo: '강의',
    typeEn: 'Lecture',
    descKo: '생성형 AI와 AI Agent의 차이를 이해하고, 업무혁신 관점에서의 활용 가능성을 탐색합니다. 국내외 AI Agent 도입 사례를 통해 실무 적용의 구체적 방향을 제시합니다.',
    descEn: 'Understand the difference between generative AI and AI Agent, explore work innovation possibilities. Present practical directions through domestic and international AI Agent adoption cases.',
    icon: 'fa-brain',
  },
  {
    num: 2,
    titleKo: '고급 프롬프트 엔지니어링',
    titleEn: 'Advanced Prompt Engineering',
    hours: '1H',
    typeKo: '강의+실습',
    typeEn: 'Lecture + Practice',
    descKo: '역할 부여, 단계적 지시, 출력 형식 지정, 조건 설정 등 고급 프롬프트 기법을 학습하고 실습합니다.',
    descEn: 'Learn and practice advanced prompt techniques including role assignment, step-by-step instructions, output formatting, and conditional settings.',
    icon: 'fa-pencil-ruler',
  },
  {
    num: 3,
    titleKo: 'AI Agent 기반 리서치 방법론',
    titleEn: 'AI Agent-Based Research Methodology',
    hours: '1H',
    typeKo: '강의+실습',
    typeEn: 'Lecture + Practice',
    descKo: 'Perplexity, Genspark, Gemini 등을 활용한 체계적 리서치 방법론을 실습하고, 결과를 구조화하는 방법을 학습합니다.',
    descEn: 'Practice systematic research methodology using Perplexity, Genspark, Gemini, and learn how to structure results.',
    icon: 'fa-magnifying-glass-chart',
  },
  {
    num: 4,
    titleKo: '업무분해와 자동화 아이디어 발굴',
    titleEn: 'Task Decomposition & Automation Ideation',
    hours: '1H',
    typeKo: '워크숍',
    typeEn: 'Workshop',
    descKo: '자신의 업무를 AI 관점에서 분해하고, 자동화 가능한 영역을 식별하여 아이디어를 발굴합니다.',
    descEn: 'Decompose your own work from an AI perspective, identify automatable areas, and develop ideas.',
    icon: 'fa-sitemap',
  },
  {
    num: 5,
    titleKo: '나만의 AI Agent 설계',
    titleEn: 'Design Your Own AI Agent',
    hours: '1H',
    typeKo: '워크숍',
    typeEn: 'Workshop',
    descKo: 'Agent 설계 캔버스를 활용하여 나만의 AI Agent를 설계합니다. 역할, 입력, 출력, 도구, 워크플로우를 정의합니다.',
    descEn: 'Design your own AI Agent using the Agent design canvas. Define roles, inputs, outputs, tools, and workflows.',
    icon: 'fa-robot',
  },
  {
    num: 6,
    titleKo: 'AI Agent 구축 체험',
    titleEn: 'AI Agent Building Experience',
    hours: '1H',
    typeKo: '실습',
    typeEn: 'Practice',
    descKo: 'ChatGPT GPTs, Claude Projects 등을 활용하여 설계한 Agent를 실제로 구축하고 테스트합니다.',
    descEn: 'Build and test your designed Agent using ChatGPT GPTs, Claude Projects, and similar tools.',
    icon: 'fa-hammer',
  },
  {
    num: 7,
    titleKo: '아이디어를 실행안으로 구체화하기',
    titleEn: 'From Ideas to Action Plans',
    hours: '1H',
    typeKo: '워크숍',
    typeEn: 'Workshop',
    descKo: '발굴한 아이디어를 절차, 자원, 일정, 리스크까지 포함한 실행 가능한 프로젝트로 구체화합니다.',
    descEn: 'Concretize ideas into executable projects with procedures, resources, timelines, and risk assessments.',
    icon: 'fa-rocket',
  },
  {
    num: 8,
    titleKo: '결과 공유와 현업 적용 로드맵',
    titleEn: 'Results Sharing & Roadmap',
    hours: '1H',
    typeKo: '발표+피드백',
    typeEn: 'Presentation + Feedback',
    descKo: '팀별 결과물을 발표하고 상호 피드백을 교환합니다. 현업 복귀 후 적용할 수 있는 구체적 로드맵을 수립합니다.',
    descEn: 'Present team results and exchange feedback. Establish a concrete roadmap applicable upon returning to work.',
    icon: 'fa-presentation-screen',
  },
];

export default function CurriculumPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('8h');
  const ko = language === 'ko';

  const getTypeBadgeClass = (typeKo) => {
    if (typeKo === '강의') return 'lecture';
    if (typeKo.includes('실습') || typeKo.includes('강의+실습')) return 'practice';
    if (typeKo === '워크숍') return 'workshop';
    return 'presentation';
  };

  return (
    <div className="content-page">
      <SEOHead title={t('curriculum.title')} description={t('curriculum.subtitle')} path="/curriculum" />

      <div className="page-header">
        <div className="container">
          <h1>{t('curriculum.title')}</h1>
          <p className="page-desc">{t('curriculum.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        {/* Tab Navigation */}
        <div className="curriculum-tabs" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`curriculum-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {ko ? tab.labelKo : tab.labelEn}
            </button>
          ))}
        </div>

        {/* 8-Hour Basic Course */}
        {activeTab === '8h' && (
          <div className="curriculum-content">
            <div className="content-card">
              <h2>{ko ? '8시간 기본과정 커리큘럼' : '8-Hour Basic Course Curriculum'}</h2>
              <p>{ko
                ? '생성형 AI Agent 기반 업무혁신 워크숍의 기본 과정입니다. 이론 30%, 실습 70%로 구성되어 있습니다.'
                : 'The basic course for the AI Agent-Based Work Innovation Workshop. Composed of 30% theory and 70% practice.'}
              </p>

              <div className="info-box tip">
                <h4><i className="fa-solid fa-scale-balanced" aria-hidden="true" /> {ko ? '운영 원칙' : 'Operating Principle'}</h4>
                <p>{ko ? '이론 30% : 실습·워크숍 70% — 체험 중심 학습으로 현업 적용 가능성을 극대화합니다.' : 'Theory 30% : Practice/Workshop 70% — Maximizing real-world applicability through experience-centered learning.'}</p>
              </div>

              <div className="curriculum-sessions">
                {SESSIONS_8H.map((session) => (
                  <div key={session.num} className="curriculum-session-card">
                    <div className="curriculum-session-header">
                      <div className="curriculum-session-num">
                        {String(session.num).padStart(2, '0')}
                      </div>
                      <div className="curriculum-session-meta">
                        <span className="curriculum-session-hours">
                          <i className="fa-regular fa-clock" aria-hidden="true" /> {session.hours}
                        </span>
                        <span className={`curriculum-session-type ${getTypeBadgeClass(session.typeKo)}`}>
                          {ko ? session.typeKo : session.typeEn}
                        </span>
                      </div>
                    </div>
                    <h4 className="curriculum-session-title">
                      <i className={`fa-solid ${session.icon}`} aria-hidden="true" /> {ko ? session.titleKo : session.titleEn}
                    </h4>
                    <p className="curriculum-session-desc">
                      {ko ? session.descKo : session.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4-Hour Lecture */}
        {activeTab === '4h' && (
          <div className="curriculum-content">
            <div className="content-card">
              <h2>{ko ? '4시간 특강형' : '4-Hour Special Lecture'}</h2>
              <p>{ko
                ? '핵심 내용을 압축하여 전달하는 특강 형식의 과정입니다. AI Agent 이해, 프롬프트 설계, 업무 분해 아이디어 도출에 집중합니다.'
                : 'A condensed special lecture format focusing on AI Agent understanding, prompt design, and task decomposition ideation.'}
              </p>

              <div className="framework-grid">
                <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                  <h4>{ko ? '1교시: AI Agent 개론' : 'Session 1: AI Agent Introduction'}</h4>
                  <p>{ko ? '생성형 AI와 Agent 개념, 업무혁신 사례 (1시간, 강의)' : 'GenAI and Agent concepts, work innovation cases (1h, Lecture)'}</p>
                </div>
                <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                  <h4>{ko ? '2교시: 프롬프트 실습' : 'Session 2: Prompt Practice'}</h4>
                  <p>{ko ? '고급 프롬프트 기법과 리서치 실습 (1시간, 실습)' : 'Advanced prompt techniques and research practice (1h, Practice)'}</p>
                </div>
                <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                  <h4>{ko ? '3교시: 업무 분해' : 'Session 3: Task Decomposition'}</h4>
                  <p>{ko ? '자신의 업무 분해 및 자동화 아이디어 발굴 (1시간, 워크숍)' : 'Decompose your tasks and develop automation ideas (1h, Workshop)'}</p>
                </div>
                <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                  <h4>{ko ? '4교시: 공유 및 정리' : 'Session 4: Sharing & Summary'}</h4>
                  <p>{ko ? '아이디어 공유, 피드백, 적용 로드맵 정리 (1시간, 발표)' : 'Idea sharing, feedback, roadmap summary (1h, Presentation)'}</p>
                </div>
              </div>

              <div className="info-box">
                <h4>{ko ? '적합한 조직' : 'Suitable For'}</h4>
                <p>{ko
                  ? '임원/관리자 대상 인사이트 전달, 전사 교육의 사전 탐색, 단시간 집중 워크숍이 필요한 조직'
                  : 'Executive/manager insight delivery, pre-exploration for company-wide training, organizations needing short intensive workshops'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 16-Hour Advanced */}
        {activeTab === '16h' && (
          <div className="curriculum-content">
            <div className="content-card">
              <h2>{ko ? '16시간 심화형' : '16-Hour Advanced Course'}</h2>
              <p>{ko
                ? '8시간 기본과정을 확장한 심화 과정으로, 2일간 진행됩니다. Agent 설계와 구축을 더 깊이 있게 다루며, 실제 프로젝트 수준의 결과물을 도출합니다.'
                : 'An extended version of the 8-hour basic course, conducted over 2 days. Covers Agent design and building in greater depth, producing project-level deliverables.'}
              </p>

              <h3>{ko ? 'Day 1 (8시간): 기본과정 + 심화 리서치' : 'Day 1 (8h): Basic Course + Deep Research'}</h3>
              <ul>
                <li>{ko ? '8시간 기본과정 전체 내용' : 'Full 8-hour basic course content'}</li>
                <li>{ko ? '멀티소스 리서치 심화 실습' : 'Multi-source research deep practice'}</li>
                <li>{ko ? '리서치 결과 구조화 및 시각화' : 'Research result structuring and visualization'}</li>
              </ul>

              <h3>{ko ? 'Day 2 (8시간): Agent 설계 심화 + 프로젝트' : 'Day 2 (8h): Advanced Agent Design + Project'}</h3>
              <ul>
                <li>{ko ? 'Agent 워크플로우 상세 설계' : 'Detailed Agent workflow design'}</li>
                <li>{ko ? '다중 Agent 연계 설계' : 'Multi-Agent integration design'}</li>
                <li>{ko ? '실행 계획서 작성 및 발표 준비' : 'Action plan writing and presentation preparation'}</li>
                <li>{ko ? '팀 발표 및 전문가 피드백' : 'Team presentations and expert feedback'}</li>
              </ul>

              <div className="info-box tip">
                <h4>{ko ? '기대 산출물' : 'Expected Deliverables'}</h4>
                <p>{ko
                  ? '리서치 보고서, Agent 설계서, 실행 계획서, 발표자료 등 4종 이상의 실무 활용 가능 산출물'
                  : 'Research report, Agent design document, action plan, presentation materials — 4+ practical deliverables'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Project-Based */}
        {activeTab === 'project' && (
          <div className="curriculum-content">
            <div className="content-card">
              <h2>{ko ? '프로젝트형 확장과정' : 'Project-Based Extension'}</h2>
              <p>{ko
                ? '16시간 심화 과정 이후 4~8주간 진행되는 프로젝트형 확장 과정입니다. 실제 조직의 업무 과제를 선정하여 AI Agent 기반 솔루션을 설계하고 시범 운영합니다.'
                : 'A project-based extension conducted over 4-8 weeks after the 16-hour advanced course. Select actual organizational tasks and design AI Agent-based solutions for pilot operation.'}
              </p>

              <h3>{ko ? '과정 구성' : 'Structure'}</h3>
              <div className="framework-grid">
                <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                  <h4>{ko ? '1주차: 과제 선정' : 'Week 1: Task Selection'}</h4>
                  <p>{ko ? '조직 내 AI Agent 적용 과제 선정 및 범위 확정' : 'Select AI Agent application tasks and define scope'}</p>
                </div>
                <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                  <h4>{ko ? '2~3주차: 설계 및 구축' : 'Week 2-3: Design & Build'}</h4>
                  <p>{ko ? 'Agent 상세 설계 및 프로토타입 구축' : 'Detailed Agent design and prototype building'}</p>
                </div>
                <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                  <h4>{ko ? '4~6주차: 시범 운영' : 'Week 4-6: Pilot Operation'}</h4>
                  <p>{ko ? '현업에서 시범 운영 및 데이터 수집' : 'Pilot operation in the field and data collection'}</p>
                </div>
                <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                  <h4>{ko ? '7~8주차: 평가 및 확산' : 'Week 7-8: Evaluation & Expansion'}</h4>
                  <p>{ko ? '성과 평가, 개선안 도출, 조직 확산 계획 수립' : 'Performance evaluation, improvement proposals, expansion planning'}</p>
                </div>
              </div>

              <div className="info-box">
                <h4>{ko ? '멘토링 지원' : 'Mentoring Support'}</h4>
                <p>{ko
                  ? '프로젝트 기간 중 주 1회 온라인 멘토링 세션이 제공되며, 전문 멘토가 진행 상황을 점검하고 피드백을 제공합니다.'
                  : 'Weekly online mentoring sessions are provided during the project period, with expert mentors checking progress and providing feedback.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
