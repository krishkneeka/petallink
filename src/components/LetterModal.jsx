"use client";

export default function LetterModal({ recipientName, fromName, message, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)", zIndex: 200 }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-xl w-full max-w-[340px] relative"
        style={{
          background: "#FFFDF8",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 27px, #F0E8D8 28px)",
          padding: "36px 32px 28px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(200,180,140,0.3)",
          transform: "rotate(-1deg)",
          animation: "fadeIn 0.3s ease",
          zIndex: 201,
        }}
      >
        <div className="absolute top-2 right-3 text-xl opacity-30">🌸</div>

        <p className="font-hand text-lg mb-2" style={{ color: "#8B7355" }}>
          To: {recipientName || "You"}
        </p>

        <p className="font-hand text-xl leading-relaxed mb-4 whitespace-pre-wrap"
          style={{ color: "#5A4A3A", minHeight: 80 }}>
          {message || "💐"}
        </p>

        <p className="font-hand text-lg text-right" style={{ color: "#8B7355" }}>
          From: {fromName || "Someone special"}
        </p>

        <button onClick={onClose}
          className="block mx-auto mt-5 bg-transparent rounded-full px-5 py-1.5 font-hand text-sm cursor-pointer transition-colors hover:bg-cream"
          style={{ border: "1px solid #D4B870", color: "#8B7355" }}>
          Close
        </button>
      </div>
    </div>
  );
}