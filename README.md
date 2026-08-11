# Paicearea Intro Page

프론트엔드 개발자 배채은의 포트폴리오와 자기소개를 담은 Next.js 기반 개인 사이트입니다.
프로젝트, 기술 스택, 블로그 글, 자기소개를 한 화면에서 빠르게 확인할 수 있도록 구성했습니다.

## 주요 기능

- 프로필과 자기소개 MDX 콘텐츠 표시
- 프로젝트 카드형 포트폴리오 섹션
- 기술 스택 그룹화
- Tistory RSS 기반 최신 블로그 글 표시
- 클래스 기반 다크 모드
- 서버 컴포넌트 기반 정적 콘텐츠 렌더링

## 기술 스택

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- next-mdx-remote
- rss-parser

## 프로젝트 구조

```txt
src/
  app/              # App Router 페이지, 레이아웃, API route
  components/       # 섹션, 공통 레이아웃, UI 컴포넌트
  content/          # 프로필, 프로젝트, 스킬, 소셜, MDX 콘텐츠
  lib/              # RSS, MDX 서버 유틸
  types/            # 콘텐츠 타입 정의
public/
  images/           # 공개 이미지 자산
```

정적 데이터는 `src/content`에서 타입과 함께 관리합니다. `public`에는 브라우저가 직접 요청해야 하는 이미지와 파비콘만 둡니다.

## 실행

```bash
pnpm install
pnpm dev
```

## 검증

```bash
pnpm build
node node_modules/typescript/bin/tsc --noEmit --incremental false --pretty false
```

## 성능 메모

- 프로필 이미지는 `profile.webp`로 최적화했습니다.
- 첫 화면 이미지는 `next/image`와 `preload`를 사용합니다.
- JSON 런타임 fetch를 제거하고 서버에서 콘텐츠를 직접 렌더링합니다.
- RSS는 서버 유틸로 통합하고 1시간 단위 재검증을 사용합니다.
