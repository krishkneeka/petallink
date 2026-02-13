export default function FlowerRose({ size = 120 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 85 Q48 110 50 180" stroke="#6B8E4E" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M50 100 Q35 92 28 85" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="25" cy="83" rx="8" ry="5" fill="#7DA65A" transform="rotate(-30 25 83)"/>
      <path d="M50 115 Q65 107 72 100" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="74" cy="98" rx="8" ry="5" fill="#7DA65A" transform="rotate(30 74 98)"/>
      <ellipse cx="50" cy="55" rx="22" ry="18" fill="#F4A0B0"/>
      <ellipse cx="38" cy="50" rx="16" ry="14" fill="#F0899E"/>
      <ellipse cx="62" cy="50" rx="16" ry="14" fill="#F0899E"/>
      <ellipse cx="50" cy="42" rx="14" ry="12" fill="#E8758E"/>
      <ellipse cx="44" cy="58" rx="12" ry="10" fill="#F4A0B0"/>
      <ellipse cx="56" cy="58" rx="12" ry="10" fill="#F4A0B0"/>
      <ellipse cx="50" cy="48" rx="10" ry="8" fill="#E06080"/>
      <circle cx="50" cy="50" r="6" fill="#D4506E"/>
      <ellipse cx="42" cy="72" rx="6" ry="10" fill="#6B8E4E" transform="rotate(-15 42 72)"/>
      <ellipse cx="58" cy="72" rx="6" ry="10" fill="#6B8E4E" transform="rotate(15 58 72)"/>
    </svg>
  );
}
