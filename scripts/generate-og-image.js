import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1B3A6B"/>
          <stop offset="50%" style="stop-color:#0F2444"/>
          <stop offset="100%" style="stop-color:#1E3A5F"/>
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#93B5FD"/>
          <stop offset="100%" style="stop-color:#3D6DB5"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)"/>

      <!-- Decorative circles -->
      <circle cx="1100" cy="100" r="200" fill="rgba(255,255,255,0.03)"/>
      <circle cx="150" cy="500" r="150" fill="rgba(255,255,255,0.02)"/>
      <circle cx="900" cy="450" r="120" fill="rgba(255,255,255,0.02)"/>

      <!-- Top accent line -->
      <rect x="80" y="80" width="120" height="4" rx="2" fill="url(#accent)"/>

      <!-- Badge -->
      <rect x="80" y="110" width="380" height="36" rx="18" fill="rgba(255,255,255,0.1)"/>
      <text x="270" y="134" font-family="Arial,sans-serif" font-size="16" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-weight="500">실무형 AI Agent 교육의 모든 것을 한 곳에서</text>

      <!-- Main title -->
      <text x="80" y="220" font-family="Arial,sans-serif" font-size="64" fill="white" font-weight="800">AI Agent</text>
      <text x="80" y="300" font-family="Arial,sans-serif" font-size="64" fill="url(#accent)" font-weight="800">Work Lab</text>

      <!-- Subtitle -->
      <text x="80" y="370" font-family="Arial,sans-serif" font-size="24" fill="rgba(255,255,255,0.85)" font-weight="400">실무형 AI Agent 업무혁신 플랫폼</text>

      <!-- Description -->
      <text x="80" y="430" font-family="Arial,sans-serif" font-size="18" fill="rgba(255,255,255,0.6)">생성형 AI를 넘어, 실무에 적용하는 AI Agent 학습 플랫폼</text>
      <text x="80" y="460" font-family="Arial,sans-serif" font-size="18" fill="rgba(255,255,255,0.6)">공공기관 · 발전사 · 기업 · 대학 맞춤형 교육</text>

      <!-- Bottom bar -->
      <rect x="0" y="590" width="${width}" height="40" fill="rgba(0,0,0,0.3)"/>
      <text x="80" y="616" font-family="Arial,sans-serif" font-size="16" fill="rgba(255,255,255,0.6)">ai-agents.dreamitbiz.com</text>
      <text x="1120" y="616" font-family="Arial,sans-serif" font-size="16" fill="rgba(255,255,255,0.4)" text-anchor="end">DreamIT Biz</text>

      <!-- Feature chips -->
      <rect x="80" y="510" width="100" height="32" rx="16" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="130" y="531" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.7)" text-anchor="middle">프롬프트</text>

      <rect x="200" y="510" width="100" height="32" rx="16" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="250" y="531" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.7)" text-anchor="middle">리서치</text>

      <rect x="320" y="510" width="100" height="32" rx="16" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="370" y="531" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.7)" text-anchor="middle">자동화</text>

      <rect x="440" y="510" width="120" height="32" rx="16" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="500" y="531" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.7)" text-anchor="middle">Agent 설계</text>
    </svg>
  `;

  const outputPath = join(__dirname, '..', 'public', 'og-image.png');

  await sharp(Buffer.from(svg))
    .resize(width, height)
    .png({ quality: 90 })
    .toFile(outputPath);

  console.log('OG image generated at:', outputPath);
}

generateOGImage().catch(console.error);
