export default function FlowerBabyBreath({ size = 100 }) {
  const dots = [[28, 60], [35, 50], [42, 42], [50, 38], [58, 42], [65, 50], [72, 60],
    [32, 68], [45, 55], [55, 55], [68, 68], [38, 58], [62, 58], [50, 48]];

  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 80 Q49 120 50 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 90 Q40 82 35 75" stroke="#6B8E4E" strokeWidth="2"/>
      <path d="M50 95 Q60 87 65 80" stroke="#6B8E4E" strokeWidth="2"/>
      <path d="M50 85 Q45 75 38 68" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M50 85 Q55 75 62 68" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M35 75 Q30 68 28 62" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M65 80 Q70 73 72 67" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M38 68 Q35 60 32 55" stroke="#6B8E4E" strokeWidth="1"/>
      <path d="M62 68 Q65 60 68 55" stroke="#6B8E4E" strokeWidth="1"/>
      {dots.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="white" opacity="0.9"/>
          <circle cx={x} cy={y} r="1.5" fill="#E8E8D0"/>
        </g>
      ))}
    </svg>
  );
}
