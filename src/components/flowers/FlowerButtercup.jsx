export default function FlowerButtercup({ size = 100 }) {
  const clusters = [[38, 42], [50, 35], [62, 42], [44, 55], [56, 55], [50, 48]];

  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 75 Q48 115 50 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 90 Q38 82 30 76" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="28" cy="74" rx="8" ry="5" fill="#7DA65A" transform="rotate(-20 28 74)"/>
      <path d="M50 100 Q62 92 70 86" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="72" cy="84" rx="8" ry="5" fill="#7DA65A" transform="rotate(20 72 84)"/>
      {clusters.map(([x, y], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx={x} cy={y - 5} rx="3" ry="6" fill="#FFD93D"
              transform={`rotate(${a} ${x} ${y})`}/>
          ))}
          <circle cx={x} cy={y} r="3" fill="#F0C420"/>
        </g>
      ))}
    </svg>
  );
}
