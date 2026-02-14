"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import BouquetCanvas from "@/components/BouquetCanvas";
import EnvelopeIcon from "@/components/EnvelopeIcon";
import LetterModal from "@/components/LetterModal";

export default function BouquetPage() {
  const params = useParams();
  const rawId = params?.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const [bouquet, setBouquet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/bouquets/${encodeURIComponent(id)}`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        console.log("Loaded bouquet:", data);
        setBouquet(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load bouquet:", err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-dvh flex items-center justify-center font-hand"
        style={{ background: "#FFF4E6", color: "#8B7355" }}>
        <p className="text-lg">Loading your bouquet...</p>
      </main>
    );
  }

  if (error || !bouquet) {
    return (
      <main className="min-h-dvh flex flex-col items-center justify-center gap-4 font-hand"
        style={{ background: "#FFF4E6", color: "#8B7355" }}>
        <p className="text-xl">Bouquet not found 🥀</p>
        <a href="/" className="rounded-2xl px-5 py-2 font-hand text-sm no-underline"
          style={{ border: "1px solid #D4B870", color: "#8B7355" }}>Go Home</a>
      </main>
    );
  }

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-3 py-6"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #FFF4E6 100%)" }}>
      <div className="animate-fade-in flex flex-col items-center">
        <BouquetCanvas
          flowers={bouquet.flowers}
          backgroundColor={bouquet.backgroundColor}
          interactive={false}
          showRibbon={true}
        />

        <div className="mt-5 text-center">
          <p className="text-sm mb-2" style={{ color: "#8B7355" }}>Tap to read your note</p>
          <EnvelopeIcon onClick={() => setShowLetter(true)} />
        </div>

        <p className="mt-6 text-xs" style={{ color: "rgba(107,78,61,0.3)" }}>Made with PetalLink</p>
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