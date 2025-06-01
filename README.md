# 🌐 Paicearea Intro Page

안녕하세요! 👋
이 프로젝트는 프론트엔드 개발자 **Paicearea**의 포트폴리오 및 자기소개 페이지입니다.
Next.js 14의 App Router 구조를 기반으로 하여, 다양한 기술 스택과 깔끔한 UI를 통해 저를 소개하고 있어요.

## ✨ 주요 기능

- **Hero Section**: 간단한 자기소개
- **About Section**: MDX로 작성된 자기소개 내용
- **Skills Section**: 사용 기술 스택을 시각적으로 소개 (MDX 지원)
- **Projects Section**: 실제 프로젝트 목록과 GitHub 링크
- **Blog Section**: Tistory RSS 피드를 활용한 최신 블로그 글 목록 표시
- **Dark Mode Toggle** 🌙: 사용자의 시스템 설정 또는 수동 전환 지원
- **Navbar Scroll Spy**: 현재 스크롤 위치에 따라 네비게이션 하이라이팅

## 🎨 디자인 시스템 - 테마 컬러

| 이름         | HEX 코드  | 용도 예시                            |
| ------------ | --------- | ------------------------------------ |
| Cream        | `#FFFDF6` | 배경 기본 색상                       |
| Soft Beige   | `#FAF6E9` | 카드, 섹션 배경                      |
| Lime Yellow  | `#DDEB9D` | 강조 박스, 버튼 테두리, 섹션 제목 등 |
| Matcha Green | `#A0C878` | 텍스트 강조, 링크, 섹션 제목 등      |
| Dark Base    | `#1A1A1A` | 다크 모드 배경 기본 색상             |

## 🛠 사용 기술

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (애니메이션)
- **MDX** (각 콘텐츠)
- **Tistory RSS 파싱** (블로그 섹션)

## 🌙 다크 모드 지원

사용자 시스템 설정에 따라 자동 전환되며, 우측 하단의 토글 버튼으로 수동 전환도 가능합니다.

```tsx
<html lang="en" className="dark"> // 또는 자바스크립트로 class 토글
```

## 📦 설치 및 실행

```bash
git clone https://github.com/paicearea/paicearea-intro-page.git
cd paicearea-intro-page
git clone https://github.com/paicearea/paicearea-intro-page.git
pnpm install
pnpm dev

```

## 🧠 하고 싶은 말

이 프로젝트는 단순한 소개 페이지라기보다, Next.js를 공부하고 다양한 기능을 경험해보기 위한 학습용 프로젝트입니다.
다크 모드, MDX 콘텐츠 렌더링, RSS 파싱 등 실무에서 자주 접할 수 있는 기능들을 직접 구현해보며
프론트엔드 개발자로서의 실력을 키워나가기 위한 작은 실험장이기도 해요.

함께 보고, 이야기하고 싶은 분은 언제든 연락 주세요! 😊

---

**Made with ❤️ by Paicearea**
