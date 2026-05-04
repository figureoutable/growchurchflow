export function WebIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="40"
        y="48"
        width="320"
        height="220"
        rx="16"
        fill="#FFFFFF"
        stroke="#6200EE"
        strokeWidth="2"
        strokeOpacity="0.55"
      />
      <rect x="64" y="72" width="120" height="10" rx="4" fill="#FF4500" opacity="0.85" />
      <rect x="64" y="96" width="200" height="8" rx="3" fill="#EDE7FF" />
      <rect x="64" y="112" width="180" height="8" rx="3" fill="#FFE0D5" />
      <rect x="64" y="128" width="160" height="8" rx="3" fill="#BFFF00" opacity="0.35" />
      <rect x="64" y="160" width="140" height="72" rx="10" fill="#EDE7FF" />
      <rect x="220" y="160" width="116" height="34" rx="8" fill="#6200EE" opacity="0.35" />
      <rect x="220" y="206" width="116" height="26" rx="8" fill="#FF4500" opacity="0.4" />
      <circle cx="330" cy="88" r="28" fill="#BFFF00" opacity="0.65" />
      <path
        d="M318 88 L328 98 L348 74"
        stroke="#6200EE"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}

export function SocialIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="120"
        y="40"
        width="160"
        height="240"
        rx="20"
        fill="#FFFFFF"
        stroke="#FF4500"
        strokeWidth="2"
        strokeOpacity="0.55"
      />
      <rect x="140" y="60" width="100" height="140" rx="12" fill="#0A0612" />
      <polygon
        points="200,88 220,118 180,118"
        fill="#BFFF00"
        opacity="0.9"
      />
      <rect x="152" y="214" width="96" height="10" rx="3" fill="#6200EE" opacity="0.75" />
      <rect x="152" y="232" width="72" height="8" rx="3" fill="#EDE7FF" />
      <circle cx="200" cy="260" r="18" fill="#FF4500" opacity="0.9" />
      <rect
        x="48"
        y="120"
        width="56"
        height="80"
        rx="10"
        fill="#6200EE"
        opacity="0.55"
        transform="rotate(-8 76 160)"
      />
      <rect
        x="296"
        y="100"
        width="56"
        height="80"
        rx="10"
        fill="#BFFF00"
        opacity="0.5"
        transform="rotate(10 324 140)"
      />
    </svg>
  );
}
