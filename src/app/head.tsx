export default function Head() {
  return (
    <>
      <title>Paicearea</title>
      <meta
        name="description"
        content="프론트엔드 개발자 Paicearea의 개인 프로필입니다."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light dark" />
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#000000"
        media="(prefers-color-scheme: dark)"
      />

      <link rel="icon" href="/images/avatar.ico" />
      <link rel="apple-touch-icon" href="/images/avatar.png" sizes="180x180" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
      />
      <meta property="og:title" content="Paicearea" />
      <meta
        property="og:description"
        content="프론트엔드 개발자 Paicearea의 개인 프로필입니다."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://paicearea-intro.vercel.app/images/avatar.png"
      />
      <meta name="twitter:title" content="Paicearea" />
      <meta
        name="twitter:description"
        content="프론트엔드 개발자 Paicearea의 개인 프로필입니다."
      />
      <meta
        name="twitter:image"
        content="https://paicearea-intro.vercel.app/images/avatar.png"
      />
    </>
  );
}
