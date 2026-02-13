export default function FlowerTulip({ size = 100 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 75 Q49 115 50 180" stroke="#6B8E4E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 95 Q38 88 32 82" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="30" cy="80" rx="8" ry="5" fill="#7DA65A" transform="rotate(-20 30 80)"/>
      <path d="M50 110 Q62 103 68 97" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="70" cy="95" rx="8" ry="5" fill="#7DA65A" transform="rotate(20 70 95)"/>
      <path d="M50 30 Q30 45 35 72 Q42 78 50 75 Q58 78 65 72 Q70 45 50 30Z" fill="#E85040"/>
      <path d="M50 30 Q38 48 40 68 Q45 72 50 70Z" fill="#D04030" opacity="0.7"/>
      <path d="M50 30 Q62 48 60 68 Q55 72 50 70Z" fill="#F06050" opacity="0.6"/>
    </svg>
  );
}
