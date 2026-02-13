"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import BouquetCanvas from "@/components/BouquetCanvas";
import EnvelopeIcon from "@/components/EnvelopeIcon";
import LetterModal from "@/components/LetterModal";
import FLOWER_COMPONENTS from "@/components/flowers";
import { FLOWER_TYPES, BACKGROUNDS } from "@/lib/constants";

/*
  BOUQUET: All stems converge to a single center point (the ribbon).
  Outer flowers rotate diagonally inward so their stems aim at that point.
  The rotation is what makes the stems come together — not just x positioning.
  
  Think of it like holding flowers in your hand:
  - Your hand (ribbon) is at the center bottom
  - Each flower radiates outward FROM that point
  - Left flowers lean left, right flowers lean right
  - Center flowers point straight up
*/
function arrangeBouquet(flowers, canvasWidth = 320, canvasHeight = 568) {
  const count = flowers.length;
  if (count === 0) return flowers;

  const centerX = canvasWidth / 2;
  
  // The convergence point — where all stems meet (center of ribbon)
  // Ribbon is at 72%, so convergence point is there
  const convergenceX = centerX;
  const convergenceY = canvasHeight * 0.72; // ~409px

  // Each flower SVG at size ~200 is 200w x 320h
  // The stem BASE is at the very bottom of the SVG
  // We want each flower's stem base to land near the convergence point
  // Then rotate each flower outward from that point

  // Fan angle: how much the outer flowers tilt
  const maxAngle = count <= 3 ? 14 : count <= 6 ? 22 : 28;

  return flowers.map((flower, i) => {
    // Normalized position: -1 (leftmost) to +1 (rightmost)
    const t = count === 1 ? 0 : (i / (count - 1)) * 2 - 1;

    // Rotation: outer flowers tilt more, center flowers straight
    const rotation = t * maxAngle;

    // Position: place each flower so its BOTTOM CENTER lands at convergence point
    // Then the rotation will fan the heads outward
    // The flower SVG is ~200w x 400h (size * 2 with longer stems)
    const flowerW = 200;
    const flowerH = 400;

    // Before rotation, place flower so bottom-center = convergence point
    const x = convergenceX - flowerW / 2;
    const y = convergenceY - flowerH + 50; // +50 so stems show below ribbon

    return { ...flower, x, y, rotation };
  });
}

export default function CreatePage() {
  const [flowers, setFlowers] = useState([]);
  const [arrangedFlowers, setArrangedFlowers] = useState(null);
  const [bgColor, setBgColor] = useState("#F8C8DC");
  const [recipientName, setRecipientName] = useState("");
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");
  const [generatedSlug, setGeneratedSlug] = useState(null);
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showLetter, setShowLetter] = useState(false);

  const isGenerated = arrangedFlowers !== null;

  const addFlower = (flowerId) => {
    if (flowers.length >= 10 || isGenerated) return;
    setFlowers((prev) => [
      ...prev,
      { type: flowerId, x: 160 - 50 + (Math.random() * 60 - 30), y: 260 + (Math.random() * 80 - 40), rotation: 0 },
    ]);
  };

  const moveFlower = useCallback((index, x, y) => {
    setFlowers((prev) => prev.map((f, i) => (i === index ? { ...f, x, y } : f)));
  }, []);

  const removeLastFlower = () => {
    if (isGenerated) return;
    setFlowers((prev) => prev.slice(0, -1));
  };

  const generate = async () => {
    if (flowers.length === 0 || saving) return;
    setSaving(true);
    setErrorMsg(null);

    const bouquetFlowers = arrangeBouquet(flowers);
    setArrangedFlowers(bouquetFlowers);

    try {
      const res = await fetch("/api/bouquets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipientName, fromName, message,
          backgroundColor: bgColor,
          flowers: bouquetFlowers,
        }),
      });
      const data = await res.json();
      if (data.slug) {
        setGeneratedSlug(data.slug);
      } else {
        console.error("API response:", data);
        setErrorMsg(data.details || data.error || "Something went wrong.");
        setArrangedFlowers(null);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to connect. Check your internet and try again.");
      setArrangedFlowers(null);
    } finally {
      setSaving(false);
    }
  };

  const resetBouquet = () => {
    setArrangedFlowers(null);
    setGeneratedSlug(null);
    setFlowers([]);
    setErrorMsg(null);
  };

  const copyLink = () => {
    const url = `${window.location.origin}/b/${generatedSlug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const displayFlowers = isGenerated ? arrangedFlowers : flowers;
  const fullUrl = generatedSlug ? `${window.location.origin}/b/${generatedSlug}` : "";

  return (
    <main className="min-h-dvh flex flex-col items-center px-3 pt-4 pb-8"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #FFF4E6 100%)" }}>

      <Link href="/" className="flex items-center gap-2 mb-4 no-underline">
        <span className="text-2xl">🌷</span>
        <h1 className="font-display text-3xl font-bold" style={{ color: "#6B4E3D" }}>PetalLink</h1>
      </Link>

      <BouquetCanvas
        flowers={displayFlowers}
        backgroundColor={bgColor}
        interactive={!isGenerated}
        onMoveFlower={moveFlower}
        showRibbon={isGenerated}
      />

      {isGenerated && generatedSlug && (
        <>
          <div className="mt-4 flex flex-col items-center text-center">
            <p className="text-sm mb-2" style={{ color: "#8B7355" }}>Tap to preview your note</p>
            <EnvelopeIcon onClick={() => setShowLetter(true)} />
          </div>

          <div className="text-center animate-fade-in rounded-2xl p-5 w-full max-w-[340px] mt-4"
            style={{ background: "rgba(255,255,255,0.7)" }}>
            <p className="text-lg mb-3" style={{ color: "#6B4E3D" }}>Your bouquet is ready! 🌸</p>
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 mb-3"
              style={{ background: "#FFFDF8", border: "1px solid #E0D0C0" }}>
              <span className="text-xs flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ color: "#8B7355" }}>{fullUrl}</span>
              <button onClick={copyLink}
                className="rounded-lg px-3.5 py-1 font-hand text-xs cursor-pointer whitespace-nowrap border-none"
                style={{ background: "#F8C8DC", color: "#5A3D4A" }}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="flex gap-3 justify-center">
              <Link href={`/b/${generatedSlug}`}
                className="text-sm no-underline hover:underline" style={{ color: "#8B7355" }}>
                Preview as recipient →
              </Link>
              <button onClick={resetBouquet}
                className="text-sm bg-transparent border-none cursor-pointer hover:underline"
                style={{ color: "#8B7355" }}>Make another</button>
            </div>
          </div>
        </>
      )}

      {!isGenerated && (
        <>
          <div className="flex items-center gap-3 mt-3 mb-2 text-sm" style={{ color: "#8B7355" }}>
            <span>{flowers.length}/10 flowers</span>
            {flowers.length > 0 && (
              <button onClick={removeLastFlower}
                className="bg-transparent rounded-xl px-3 py-1 font-hand text-xs cursor-pointer"
                style={{ border: "1px solid #D4B870", color: "#8B7355" }}>Undo</button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center max-w-[340px] p-3 mb-4 rounded-xl"
            style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(220,200,180,0.4)" }}>
            {FLOWER_TYPES.map((f) => {
              const Comp = FLOWER_COMPONENTS[f.id];
              return (
                <button key={f.id} onClick={() => addFlower(f.id)} disabled={flowers.length >= 10} title={f.name}
                  className="flex items-center justify-center rounded-lg overflow-hidden transition-all"
                  style={{ width: 52, height: 62, background: "rgba(255,252,245,0.8)", border: "1.5px solid #E8D8C8",
                    cursor: flowers.length >= 10 ? "not-allowed" : "pointer",
                    opacity: flowers.length >= 10 ? 0.4 : 1, padding: 2 }}>
                  <Comp size={36} />
                </button>
              );
            })}
          </div>

          <div className="flex gap-2.5 mb-5">
            {BACKGROUNDS.map((bg) => (
              <button key={bg.hex} onClick={() => setBgColor(bg.hex)} title={bg.name}
                className="rounded-full cursor-pointer transition-all"
                style={{ width: 32, height: 32, background: bg.hex,
                  border: bgColor === bg.hex ? "3px solid #6B4E3D" : "2px solid rgba(200,180,160,0.5)" }} />
            ))}
          </div>

          <div className="w-full max-w-[320px] flex flex-col gap-2.5 mb-5">
            <input className="w-full px-3.5 py-2.5 rounded-lg font-hand text-base outline-none"
              style={{ border: "1.5px solid #E0D0C0", background: "#FFFDF8", color: "#5A4A3A" }}
              placeholder="Recipient's name" value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)} />
            <input className="w-full px-3.5 py-2.5 rounded-lg font-hand text-base outline-none"
              style={{ border: "1.5px solid #E0D0C0", background: "#FFFDF8", color: "#5A4A3A" }}
              placeholder="Your name" value={fromName}
              onChange={(e) => setFromName(e.target.value)} />
            <textarea className="w-full px-3.5 py-2.5 rounded-lg font-hand text-base outline-none resize-none leading-relaxed"
              style={{ border: "1.5px solid #E0D0C0", background: "#FFFDF8", color: "#5A4A3A", minHeight: 80 }}
              placeholder="Write your message..." value={message}
              onChange={(e) => setMessage(e.target.value)} />
          </div>

          {errorMsg && <p className="text-sm mb-3 text-center px-4" style={{ color: "#C05050" }}>{errorMsg}</p>}

          <button onClick={generate} disabled={flowers.length === 0 || saving}
            className="rounded-full px-9 py-3 text-lg font-display font-semibold cursor-pointer transition-all hover:-translate-y-0.5"
            style={{ background: flowers.length === 0 ? "#ccc" : "linear-gradient(135deg, #F8C8DC, #DCC6F2)",
              border: "2px solid rgba(255,255,255,0.6)", color: "#5A3D4A",
              boxShadow: "0 4px 16px rgba(200,160,180,0.3)",
              cursor: flowers.length === 0 ? "not-allowed" : "pointer" }}>
            {saving ? "Arranging..." : "Generate Bouquet ✨"}
          </button>
        </>
      )}

      {showLetter && (
        <LetterModal recipientName={recipientName} fromName={fromName}
          message={message} onClose={() => setShowLetter(false)} />
      )}

      <p className="mt-6 text-xs" style={{ color: "rgba(107,78,61,0.3)" }}>Made with PetalLink</p>
    </main>
  );
}