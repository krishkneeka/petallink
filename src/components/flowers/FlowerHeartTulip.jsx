export default function FlowerHeartTulip({ size = 100 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M42 80 Q41 120 42 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M58 80 Q59 120 58 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <ellipse cx="32" cy="100" rx="7" ry="4" fill="#7DA65A" transform="rotate(-25 32 100)"/>
      <ellipse cx="68" cy="100" rx="7" ry="4" fill="#7DA65A" transform="rotate(25 68 100)"/>
      <path d="M40 128 Q48 120 50 128 Q52 120 60 128" stroke="#E8C860" strokeWidth="2.5" fill="#F0D870" opacity="0.8"/>
      <path d="M42 55 Q42 35 32 35 Q22 35 22 48 Q22 60 42 75Z" fill="#F8A0B0"/>
      <path d="M42 55 Q42 35 52 35 Q62 35 62 48 Q62 60 42 75Z" fill="#F090A0"/>
      <circle cx="38" cy="52" r="4" fill="#FFE060" opacity="0.9"/>
      <path d="M58 50 Q58 30 48 30 Q38 30 38 43 Q38 55 58 70Z" fill="#E85050"/>
      <path d="M58 50 Q58 30 68 30 Q78 30 78 43 Q78 55 58 70Z" fill="#D04040"/>
      <circle cx="54" cy="47" r="4" fill="#FFE060" opacity="0.9"/>
    </svg>
  );
}
