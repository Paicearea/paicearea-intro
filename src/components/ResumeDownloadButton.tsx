"use client";

export default function ResumeDownloadButton() {
  return (
    <a
      href="/frontend-developer_배채은.pdf"
      download
      className="text-sm dark:text-white hover:underline cursor-alias whitespace-nowrap"
    >
      이력서 다운로드
    </a>
  );
}
