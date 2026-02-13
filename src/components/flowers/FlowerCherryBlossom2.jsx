export default function FlowerCherryBlossom2({ size = 100 }) {
  const blossoms = [[28, 62], [42, 50], [58, 46], [72, 58], [35, 72], [65, 68], [50, 56], [50, 68]];

  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 85 Q52 120 50 180" stroke="#6B8E4E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 92 Q42 84 36 78" stroke="#6B8E4E" strokeWidth="2"/>
      <path d="M50 88 Q58 80 64 74" stroke="#6B8E4E" strokeWidth="2"/>
      <path d="M36 78 Q32 72 28 66" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M64 74 Q68 68 72 62" stroke="#6B8E4E" strokeWidth="1.5"/>
      <path d="M50 85 Q50 75 50 65" stroke="#6B8E4E" strokeWidth="1.5"/>
      {blossoms.map(([x, y], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx={x} cy={y - 4} rx="4" ry="6.5" fill="#F8B8C8" opacity="0.85"
              transform={`rotate(${a} ${x} ${y})`}/>
          ))}
          <circle cx={x} cy={y} r="2.5" fill="#D88898"/>
        </g>
      ))}
    </svg>
  );
}
