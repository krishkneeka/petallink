import "./globals.css";

export const metadata = {
  title: "PetalLink — Send a Bouquet 💐",
  description: "Create and send a beautiful illustrated digital bouquet with a hidden personalized note.",
  openGraph: {
    title: "PetalLink — Send a Bouquet 💐",
    description: "Someone sent you a beautiful bouquet!",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-hand">{children}</body>
    </html>
  );
}
