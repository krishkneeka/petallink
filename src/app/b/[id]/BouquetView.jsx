"use client";

import { useState } from "react";
import BouquetCanvas from "@/components/BouquetCanvas";
import EnvelopeIcon from "@/components/EnvelopeIcon";
import LetterModal from "@/components/LetterModal";

export default function BouquetView({ bouquet }) {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <main
      className="min-h-dvh flex flex-col items-center justify-center px-3 py-6"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #FFF4E6 100%)" }}
    >
      <div className="animate-fade-in flex flex-col items-center">
        <BouquetCanvas
          flowers={bouquet.flowers}
          backgroundColor={bouquet.backgroundColor}
          interactive={false}
          showRibbon={true}
        />

        <div className="mt-5 text-center">
          <p className="text-sm mb-2" style={{ color: "#8B7355" }}>
            Tap to read your note
          </p>
          <EnvelopeIcon onClick={() => setShowLetter(true)} />
        </div>

        <p className="mt-6 text-xs" style={{ color: "rgba(107,78,61,0.3)" }}>
          Made with PetalLink
        </p>
      </div>

      {showLetter && (
        <LetterModal
          recipientName={bouquet.recipientName}
          fromName={bouquet.fromName}
          message={bouquet.message}
          onClose={() => setShowLetter(false)}
        />
      )}
    </main>
  );
}
