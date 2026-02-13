export default function FlowerPeony({ size = 120 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 82 Q49 115 50 180" stroke="#6B8E4E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 100 Q36 92 28 86" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="26" cy="84" rx="9" ry="5" fill="#7DA65A" transform="rotate(-25 26 84)"/>
      <path d="M50 115 Q64 107 72 101" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="74" cy="99" rx="9" ry="5" fill="#7DA65A" transform="rotate(25 74 99)"/>
      <ellipse cx="50" cy="55" rx="26" ry="22" fill="#F8C0B8"/>
      <ellipse cx="40" cy="50" rx="18" ry="16" fill="#F0A8A0"/>
      <ellipse cx="60" cy="50" rx="18" ry="16" fill="#F0A8A0"/>
      <ellipse cx="50" cy="44" rx="16" ry="14" fill="#F8B8B0"/>
      <ellipse cx="45" cy="55" rx="14" ry="11" fill="#F0C0B8"/>
      <ellipse cx="55" cy="55" rx="14" ry="11" fill="#F0C0B8"/>
      <ellipse cx="50" cy="48" rx="12" ry="10" fill="#E8A098"/>
      <circle cx="50" cy="50" r="7" fill="#F0B0A8"/>
    </svg>
  );
}
