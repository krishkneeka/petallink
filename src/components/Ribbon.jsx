export default function Ribbon() {
  return (
    <svg
      viewBox="0 0 200 90"
      width="200"
      height="90"
      style={{
        position: "absolute",
        top: "68%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 150,
        pointerEvents: "none",
      }}
    >
      {/* Wide wrapping band */}
      <rect x="40" y="28" width="120" height="26" rx="8" fill="#E8D090" opacity="0.9"/>
      <rect x="40" y="28" width="120" height="26" rx="8" fill="none" stroke="#C8A860" strokeWidth="1.5"/>
      
      {/* Bow loops - large and visible */}
      <ellipse cx="70" cy="22" rx="30" ry="16" fill="#F0D880" opacity="0.85" transform="rotate(-12 70 22)"/>
      <ellipse cx="130" cy="22" rx="30" ry="16" fill="#F0D880" opacity="0.85" transform="rotate(12 130 22)"/>
      
      {/* Inner bow detail */}
      <ellipse cx="75" cy="24" rx="18" ry="10" fill="none" stroke="#D4B060" strokeWidth="0.8" opacity="0.5" transform="rotate(-12 75 24)"/>
      <ellipse cx="125" cy="24" rx="18" ry="10" fill="none" stroke="#D4B060" strokeWidth="0.8" opacity="0.5" transform="rotate(12 125 24)"/>
      
      {/* Bow center knot */}
      <ellipse cx="100" cy="32" rx="12" ry="10" fill="#D4B070"/>
      <ellipse cx="100" cy="32" rx="8" ry="6" fill="#C8A060"/>
      
      {/* Ribbon tails */}
      <path d="M82 54 Q68 68 52 82" stroke="#D4B870" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M118 54 Q132 68 148 82" stroke="#D4B870" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Tail tips */}
      <path d="M52 82 L46 74 M52 82 L59 76" stroke="#D4B870" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M148 82 L141 76 M148 82 L154 74" stroke="#D4B870" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}