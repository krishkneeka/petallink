export default function FlowerBluebell({ size = 100 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 80 Q48 120 50 180" stroke="#5A7A44" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M50 85 Q45 75 40 68" stroke="#5A7A44" strokeWidth="2.5" fill="none"/>
      <ellipse cx="38" cy="66" rx="7" ry="4" fill="#7DA65A" transform="rotate(-20 38 66)"/>
      <path d="M50 80 Q42 55 35 40 Q30 30 35 25" stroke="#5A7A44" strokeWidth="3" fill="none"/>
      <path d="M42 60 Q48 48 55 38 Q60 30 58 22" stroke="#5A7A44" strokeWidth="2.5" fill="none"/>
      <path d="M28 28 Q35 20 35 28 Q35 36 28 40 Q22 36 22 28 Q22 20 28 28Z" fill="#90B8D8" stroke="#80A8C8" strokeWidth="0.5"/>
      <path d="M28 40 L25 44 M28 40 L31 44" stroke="#80A8C8" strokeWidth="1"/>
      <path d="M52 24 Q58 16 58 24 Q58 32 52 36 Q46 32 46 24 Q46 16 52 24Z" fill="#A0C8E0" stroke="#90B8D0" strokeWidth="0.5"/>
      <path d="M52 36 L49 40 M52 36 L55 40" stroke="#90B8D0" strokeWidth="1"/>
      <path d="M38 45 Q44 37 44 45 Q44 53 38 57 Q32 53 32 45 Q32 37 38 45Z" fill="#90B8D8" stroke="#80A8C8" strokeWidth="0.5"/>
      <path d="M38 57 L35 61 M38 57 L41 61" stroke="#80A8C8" strokeWidth="1"/>
    </svg>
  );
}
