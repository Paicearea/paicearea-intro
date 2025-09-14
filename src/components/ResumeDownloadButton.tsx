"use client";

export default function ResumeDownloadButton() {
  return (
    <a
      href="/공통_Notion.pdf"
      download
      className="text-sm dark:text-white hover:underline cursor-alias whitespace-nowrap"
    >
      포트폴리오 다운로드
    </a>
  );
}
