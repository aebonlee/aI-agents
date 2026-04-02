import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'overview', titleKo: '과정 개요', titleEn: 'Course Overview' },
  { id: 'objectives', titleKo: '교육 목적', titleEn: 'Objectives' },
  { id: 'targets', titleKo: '주요 대상', titleEn: 'Target Audience' },
  { id: 'outcomes', titleKo: '기대효과', titleEn: 'Expected Outcomes' },
  { id: 'why', titleKo: '왜 이 과정인가', titleEn: 'Why This Course?' },
  { id: 'problems', titleKo: '어떤 문제를 해결하는가', titleEn: 'What Problems Does It Solve?' },
];

export default function CoursePage() {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const ko = language === 'ko';

  return (
    <div className="content-page">
      <SEOHead title={t('course.title')} description={t('course.subtitle')} path="/course" />

      <div className="page-header">
        <div className="container">
          <h1>{t('course.title')}</h1>
          <p className="page-desc">{t('course.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="content-page-layout">
          <aside className="content-sidebar">
            <h3>{ko ? '목차' : 'Contents'}</h3>
            <ul className="sidebar-nav">
              {SECTIONS.map(s => (
                <li key={s.id} className="sidebar-nav-item">
                  <button
                    className={`sidebar-nav-btn ${activeSection === s.id ? 'active' : ''}`}
                    onClick={() => setActiveSection(s.id)}
                  >
                    {ko ? s.titleKo : s.titleEn}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="content-main">
            {activeSection === 'overview' && (
              <div className="content-card">
                <h2>{ko ? '과정 개요' : 'Course Overview'}</h2>
                <p>{ko
                  ? '본 과정은 「생성형 AI Agent 기반 업무혁신 워크숍」으로, 8시간 집중 실습형 과정입니다. 단순한 AI 도구 소개가 아니라, 참가자 스스로가 자신의 업무를 AI Agent 관점에서 재구성하고 실행 가능한 프로젝트로 설계하는 것을 목표로 합니다.'
                  : 'This is an "AI Agent-Based Work Innovation Workshop" — an intensive 8-hour hands-on course. Rather than a simple AI tool introduction, participants restructure their own work from an AI Agent perspective and design executable projects.'}
                </p>

                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4><i className="fa-solid fa-clock" aria-hidden="true" /> {ko ? '교육 시간' : 'Duration'}</h4>
                    <p>{ko ? '8시간 (기본과정) / 4시간, 16시간, 프로젝트형 확장 가능' : '8 hours (basic) / expandable to 4h, 16h, project-based'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                    <h4><i className="fa-solid fa-chalkboard-user" aria-hidden="true" /> {ko ? '교육 방식' : 'Format'}</h4>
                    <p>{ko ? '이론 30% + 실습/워크숍 70%' : 'Theory 30% + Practice/Workshop 70%'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                    <h4><i className="fa-solid fa-users" aria-hidden="true" /> {ko ? '적정 인원' : 'Group Size'}</h4>
                    <p>{ko ? '15~30명 (팀 기반 워크숍 운영)' : '15-30 participants (team-based workshops)'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                    <h4><i className="fa-solid fa-laptop" aria-hidden="true" /> {ko ? '준비물' : 'Requirements'}</h4>
                    <p>{ko ? '노트북, ChatGPT/Claude 계정 (무료 가능)' : 'Laptop, ChatGPT/Claude account (free tier OK)'}</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'objectives' && (
              <div className="content-card">
                <h2>{ko ? '교육 목적' : 'Objectives'}</h2>
                <p>{ko ? '본 과정은 다음 5가지 핵심 목표를 달성하기 위해 설계되었습니다.' : 'This course is designed to achieve the following 5 core objectives.'}</p>
                <ol>
                  <li>
                    <strong>{ko ? 'AI Agent 개념 이해' : 'Understand AI Agent Concepts'}</strong>
                    <p>{ko ? '생성형 AI와 AI Agent의 차이를 이해하고, 업무혁신 관점에서의 가능성을 파악합니다.' : 'Understand the difference between generative AI and AI Agent, and identify possibilities from a work innovation perspective.'}</p>
                  </li>
                  <li>
                    <strong>{ko ? '고급 프롬프트 역량 강화' : 'Enhance Advanced Prompt Skills'}</strong>
                    <p>{ko ? '역할 부여, 단계적 지시, 조건 설정 등 고급 프롬프트 엔지니어링 기법을 습득합니다.' : 'Master advanced prompt engineering techniques including role assignment, step-by-step instructions, and conditional settings.'}</p>
                  </li>
                  <li>
                    <strong>{ko ? '업무 분해 및 자동화 설계' : 'Task Decomposition & Automation Design'}</strong>
                    <p>{ko ? '자신의 업무를 AI 관점에서 분해하고, 자동화 가능한 영역을 식별합니다.' : 'Decompose your work from an AI perspective and identify areas suitable for automation.'}</p>
                  </li>
                  <li>
                    <strong>{ko ? 'AI Agent 설계 체험' : 'AI Agent Design Experience'}</strong>
                    <p>{ko ? 'Agent 설계 캔버스를 활용하여 나만의 AI Agent를 설계하고 구축을 체험합니다.' : 'Use the Agent design canvas to design your own AI Agent and experience building it.'}</p>
                  </li>
                  <li>
                    <strong>{ko ? '실행안 구체화' : 'Action Plan Development'}</strong>
                    <p>{ko ? '아이디어를 절차, 자원, 리스크까지 포함한 실행 가능한 프로젝트로 구체화합니다.' : 'Concretize ideas into executable projects including procedures, resources, and risk assessments.'}</p>
                  </li>
                </ol>
              </div>
            )}

            {activeSection === 'targets' && (
              <div className="content-card">
                <h2>{ko ? '주요 대상' : 'Target Audience'}</h2>
                <p>{ko ? '이 과정은 다음과 같은 분들을 위해 설계되었습니다.' : 'This course is designed for the following audiences.'}</p>

                <div className="framework-grid">
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-building-columns" aria-hidden="true" /> {ko ? '공공기관 혁신 담당자' : 'Public Institution Innovation Managers'}</h4>
                    <p>{ko ? '디지털 전환 및 업무 자동화 추진을 담당하는 공공기관 실무자' : 'Public sector practitioners responsible for digital transformation and work automation'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-bolt" aria-hidden="true" /> {ko ? '발전사 및 에너지 기업 실무자' : 'Power & Energy Practitioners'}</h4>
                    <p>{ko ? '한국중부발전, 남부발전 등 발전 공기업의 현업 담당자' : 'Field practitioners at power companies like KOMIPO, KOSPO, etc.'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-microchip" aria-hidden="true" /> {ko ? 'AX 추진 담당자' : 'AX (AI Transformation) Leaders'}</h4>
                    <p>{ko ? 'AI 전환(AX)을 기획하고 추진하는 기업/기관 담당자' : 'Corporate/institutional managers planning and driving AI transformation'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-user-tie" aria-hidden="true" /> {ko ? '관리자 및 중간실무자' : 'Managers & Mid-Level Practitioners'}</h4>
                    <p>{ko ? '팀 운영 및 업무 효율화에 AI를 접목하고자 하는 관리자' : 'Managers looking to integrate AI into team operations and work efficiency'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-users" aria-hidden="true" /> {ko ? '비개발 직군' : 'Non-Developer Roles'}</h4>
                    <p>{ko ? '코딩 없이 AI를 업무에 연결하고 싶은 일반 실무자' : 'General practitioners who want to connect AI to work without coding'}</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'outcomes' && (
              <div className="content-card">
                <h2>{ko ? '기대효과' : 'Expected Outcomes'}</h2>

                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>{ko ? 'AI Agent 활용 역량 확보' : 'AI Agent Competency'}</h4>
                    <p>{ko ? '단순 질의응답을 넘어 리서치, 문서화, 검토, 자동화에 AI를 활용하는 역량을 확보합니다.' : 'Gain competency to use AI beyond simple Q&A for research, documentation, review, and automation.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                    <h4>{ko ? '업무 자동화 아이디어 도출' : 'Automation Idea Generation'}</h4>
                    <p>{ko ? '자신의 업무에서 AI Agent로 자동화할 수 있는 구체적인 영역을 발굴합니다.' : 'Identify specific areas in your work that can be automated with AI Agents.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                    <h4>{ko ? '실행 가능한 프로젝트 설계' : 'Executable Project Design'}</h4>
                    <p>{ko ? '아이디어를 절차, 자원, 일정이 포함된 실행 가능한 프로젝트로 구체화합니다.' : 'Concretize ideas into executable projects with procedures, resources, and timelines.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                    <h4>{ko ? '조직 내 AI 확산 기반 마련' : 'Foundation for Organizational AI Adoption'}</h4>
                    <p>{ko ? '교육 결과물을 활용하여 조직 내 AI Agent 도입 및 확산의 토대를 마련합니다.' : 'Use training outcomes to lay the groundwork for AI Agent adoption and expansion within the organization.'}</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'why' && (
              <div className="content-card">
                <h2>{ko ? '왜 이 과정인가' : 'Why This Course?'}</h2>
                <p>{ko
                  ? '현재 대부분의 AI 교육은 "도구 사용법"에 초점을 맞추고 있습니다. ChatGPT에 질문하는 법, 이미지를 생성하는 법을 알려주지만, 정작 "내 업무에 어떻게 적용할 것인가"에 대한 답을 주지 못합니다.'
                  : 'Most current AI training focuses on "how to use tools." They teach how to ask ChatGPT questions or generate images, but fail to answer "how to apply this to my actual work."'}
                </p>
                <p>{ko
                  ? '이 과정은 다릅니다. AI를 업무 관점에서 바라보고, 자신의 업무를 AI Agent 시각으로 재구성하며, 실제로 실행 가능한 프로젝트를 설계하는 것까지 나아갑니다.'
                  : 'This course is different. It views AI from a work perspective, restructures your tasks through an AI Agent lens, and goes all the way to designing actually executable projects.'}
                </p>

                <div className="info-box tip">
                  <h4>{ko ? '핵심 차별점' : 'Key Differentiators'}</h4>
                  <p>{ko ? '- 도구 체험이 아닌 업무 혁신 관점의 교육' : '- Education from a work innovation perspective, not just tool experience'}</p>
                  <p>{ko ? '- 이론이 아닌 "내 업무"를 소재로 한 실습' : '- Practice using "my actual work" as material, not theory'}</p>
                  <p>{ko ? '- 아이디어 발산이 아닌 실행안 구체화까지' : '- Goes beyond ideation to concrete action plan development'}</p>
                  <p>{ko ? '- 공통형 구조로 어떤 조직에서든 재사용 가능' : '- Universal structure reusable in any organization'}</p>
                </div>
              </div>
            )}

            {activeSection === 'problems' && (
              <div className="content-card">
                <h2>{ko ? '어떤 문제를 해결하는가' : 'What Problems Does It Solve?'}</h2>

                <h3>{ko ? '1. AI를 알지만 업무에 못 쓰는 문제' : '1. Knowing AI But Not Using It at Work'}</h3>
                <p>{ko
                  ? 'ChatGPT로 간단한 질문은 할 수 있지만, 실제 업무 보고서, 리서치, 기획에 체계적으로 활용하지 못하는 상황을 해결합니다.'
                  : 'Solves the problem of being able to ask simple questions to ChatGPT but not systematically utilizing it for actual work reports, research, and planning.'}
                </p>

                <h3>{ko ? '2. AI 교육 후 현업 적용이 안 되는 문제' : '2. No Real-World Application After AI Training'}</h3>
                <p>{ko
                  ? '"교육은 좋았는데 돌아가면 어떻게 써야 할지 모르겠다"는 피드백을 해결합니다. 교육 과정 자체가 자신의 업무를 소재로 진행됩니다.'
                  : 'Solves the feedback of "the training was great but I don\'t know how to use it when I go back." The course itself uses your own work as material.'}
                </p>

                <h3>{ko ? '3. 조직별 맞춤이 어려운 문제' : '3. Difficulty in Organization-Specific Customization'}</h3>
                <p>{ko
                  ? '공통형 플랫폼 구조로, 기관별 사례만 교체하면 즉시 활용할 수 있어 맞춤형 교육이 용이합니다.'
                  : 'The universal platform structure allows instant customization by simply swapping organization-specific case studies.'}
                </p>

                <h3>{ko ? '4. 아이디어는 많지만 실행이 안 되는 문제' : '4. Lots of Ideas But No Execution'}</h3>
                <p>{ko
                  ? '아이디어 단계에서 멈추지 않고, 절차, 자원, 리스크까지 포함한 실행 계획서로 구체화하는 과정을 포함합니다.'
                  : 'Includes the process of not stopping at the idea stage but concretizing into action plans with procedures, resources, and risk assessments.'}
                </p>

                <div className="info-box warning">
                  <h4>{ko ? '참고' : 'Note'}</h4>
                  <p>{ko
                    ? '이 과정은 코딩이나 개발 기술을 필요로 하지 않습니다. 비개발 직군도 충분히 참여할 수 있는 실무 중심 교육입니다.'
                    : 'This course does not require coding or development skills. It is a practice-centered education accessible to non-developer roles.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
