export default function FlowerLavender({ size = 100 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M40 75 Q39 115 40 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 70 Q49 110 50 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M60 75 Q61 115 60 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <ellipse cx="32" cy="100" rx="8" ry="4" fill="#7DA65A" transform="rotate(-30 32 100)"/>
      <ellipse cx="68" cy="100" rx="8" ry="4" fill="#7DA65A" transform="rotate(30 68 100)"/>
      <path d="M38 130 Q45 124 50 130 Q55 124 62 130" stroke="#E8C860" strokeWidth="2" fill="#F0D870" opacity="0.8"/>
      {[0, 8, 16, 24, 32].map((y) => (
        <g key={`l${y}`}>
          <ellipse cx={38 + (y % 2)} cy={40 + y} rx="5" ry="3.5" fill="#B098D0"/>
          <ellipse cx={42 + (y % 2)} cy={42 + y} rx="4" ry="3" fill="#9880C0"/>
        </g>
      ))}
      {[0, 8, 16, 24, 32, 40].map((y) => (
        <g key={`c${y}`}>
          <ellipse cx={48} cy={30 + y} rx="5" ry="3.5" fill="#B098D0"/>
          <ellipse cx={52} cy={32 + y} rx="4" ry="3" fill="#9880C0"/>
        </g>
      ))}
      {[0, 8, 16, 24, 32].map((y) => (
        <g key={`r${y}`}>
          <ellipse cx={58 + (y % 2)} cy={40 + y} rx="5" ry="3.5" fill="#B098D0"/>
          <ellipse cx={62 + (y % 2)} cy={42 + y} rx="4" ry="3" fill="#9880C0"/>
        </g>
      ))}
    </svg>
  );
}
