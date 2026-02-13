export default function FlowerSunflower({ size = 120 }) {
  return (
    <svg viewBox="0 0 100 160" width={size} height={size * 2} fill="none">
      <path d="M50 80 Q49 115 50 180" stroke="#6B8E4E" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M50 100 Q36 92 28 86" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="26" cy="84" rx="9" ry="5" fill="#7DA65A" transform="rotate(-25 26 84)"/>
      <path d="M50 115 Q64 107 72 101" stroke="#6B8E4E" strokeWidth="2.5" fill="none"/>
      <ellipse cx="74" cy="99" rx="9" ry="5" fill="#7DA65A" transform="rotate(25 74 99)"/>
      {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((angle) => (
        <ellipse key={angle} cx="50" cy="28" rx="6" ry="16" fill="#FFD93D" stroke="#F0C830" strokeWidth="0.5"
          transform={`rotate(${angle} 50 50)`}/>
      ))}
      <circle cx="50" cy="50" r="14" fill="#8B6914"/>
      <circle cx="50" cy="50" r="10" fill="#6B4E10"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <circle key={a} cx={50 + 6 * Math.cos(a * Math.PI / 180)} cy={50 + 6 * Math.sin(a * Math.PI / 180)} r="1.5" fill="#8B6914"/>
      ))}
    </svg>
  );
}
