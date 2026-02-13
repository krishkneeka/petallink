import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="min-h-dvh flex flex-col items-center justify-center text-center relative overflow-hidden px-5"
      style={{
        background: "linear-gradient(160deg, #FFF4E6 0%, #F8C8DC 40%, #DCC6F2 70%, #CFE9F7 100%)",
      }}
    >
      <div className="animate-fade-in">
        <div className="text-5xl mb-2 animate-float">🌷</div>

        <h1
          className="font-display font-bold tracking-tight mb-2"
          style={{ fontSize: 56, color: "#6B4E3D", letterSpacing: -1 }}
        >
          PetalLink
        </h1>

        <p className="text-xl mb-9" style={{ color: "#8B7355" }}>
          Send a bouquet 💐
        </p>

        <Link
          href="/create"
          className="inline-block rounded-full px-11 py-3.5 text-xl font-display font-semibold no-underline transition-all hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #F8C8DC, #DCC6F2)",
            border: "2px solid rgba(255,255,255,0.6)",
            color: "#5A3D4A",
            boxShadow: "0 4px 16px rgba(200,160,180,0.4)",
          }}
        >
          Create
        </Link>
      </div>

      <p
        className="absolute bottom-4 text-xs"
        style={{ color: "rgba(107,78,61,0.4)" }}
      >
        Made with PetalLink
      </p>
    </main>
  );
}
