export default function FlowerCherryBlossom({ size = 100 }) {
  const blossoms = [[30, 60], [45, 48], [55, 52], [68, 62], [38, 70], [58, 72], [50, 58], [25, 72], [75, 68]];

  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 85 Q49 120 50 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 90 Q40 82 33 76" stroke="#6B8E4E" strokeWidth="2"/>
      <path d="M50 95 Q60 87 67 81" stroke="#6B8E4E" strokeWidth="2"/>
      <path d="M33 76 Q28 70 25 64" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M33 76 Q30 82 27 78" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M67 81 Q72 75 75 69" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M67 81 Q70 87 73 83" stroke="#6B8E4E" strokeWidth="1.5"/>
      {blossoms.map(([x, y], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx={x} cy={y - 4} rx="3.5" ry="6" fill="#F8B0C0" opacity="0.85"
              transform={`rotate(${a} ${x} ${y})`}/>
          ))}
          <circle cx={x} cy={y} r="2.5" fill="#E08090"/>
        </g>
      ))}
    </svg>
  );
}
