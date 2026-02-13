export default function FlowerDaisy({ size = 100 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 70 Q49 110 50 180" stroke="#6B8E4E" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M50 95 Q38 88 30 82" stroke="#6B8E4E" strokeWidth="2" fill="none"/>
      <ellipse cx="28" cy="80" rx="7" ry="4.5" fill="#7DA65A" transform="rotate(-25 28 80)"/>
      <path d="M50 110 Q62 103 68 97" stroke="#6B8E4E" strokeWidth="2" fill="none"/>
      <ellipse cx="70" cy="95" rx="7" ry="4.5" fill="#7DA65A" transform="rotate(25 70 95)"/>
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <ellipse key={angle} cx="50" cy="32" rx="6" ry="16" fill="white" stroke="#f0f0e8" strokeWidth="0.5"
          transform={`rotate(${angle} 50 48)`}/>
      ))}
      <circle cx="50" cy="48" r="9" fill="#FFD93D"/>
      <circle cx="50" cy="48" r="6" fill="#F0C420"/>
    </svg>
  );
}
