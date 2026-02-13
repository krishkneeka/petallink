export default function FlowerPinkDaisy({ size = 100 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 72 Q48 115 50 180" stroke="#6B8E4E" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M50 100 Q37 93 30 87" stroke="#6B8E4E" strokeWidth="2" fill="none"/>
      <ellipse cx="28" cy="85" rx="7" ry="4.5" fill="#7DA65A" transform="rotate(-20 28 85)"/>
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle) => (
        <ellipse key={angle} cx="50" cy="30" rx="6.5" ry="16" fill="#F8A0B8" stroke="#F090A8" strokeWidth="0.5"
          transform={`rotate(${angle} 50 48)`}/>
      ))}
      <circle cx="50" cy="48" r="8" fill="#FFD93D"/>
      <circle cx="50" cy="48" r="5" fill="#F0C420"/>
    </svg>
  );
}
