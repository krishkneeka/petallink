"use client";

export default function EnvelopeIcon({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-none cursor-pointer p-2 flex items-center justify-center transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 80 60" width="64" height="48" fill="none">
        <rect x="4" y="8" width="72" height="44" rx="6" fill="#FFF8F0" stroke="#D4B870" strokeWidth="2"/>
        <path d="M4 14 L40 38 L76 14" stroke="#D4B870" strokeWidth="2" fill="none"/>
        <path d="M4 52 L28 32" stroke="#D4B870" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <path d="M76 52 L52 32" stroke="#D4B870" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <path d="M40 24 Q40 18 35 18 Q30 18 30 24 Q30 30 40 36 Q50 30 50 24 Q50 18 45 18 Q40 18 40 24Z" fill="#E88090" opacity="0.8"/>
      </svg>
    </button>
  );
}
