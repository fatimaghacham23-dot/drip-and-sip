import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drip & Sip | Neighborhood coffee spot in Beirut",
  description: "Drip & Sip: A warm local coffee spot on the border of Monot and Bechara El Khoury, known for neighborhood energy and very extended daily hours.",
  keywords: [
  "Drip and Sip Beirut",
  "Drip & Sip Monot",
  "coffee Bechara El Khoury",
  "late night coffee Beirut"
],
  openGraph: {
    title: "Drip & Sip | Neighborhood coffee spot in Beirut",
    description: "Drip & Sip: A warm local coffee spot on the border of Monot and Bechara El Khoury, known for neighborhood energy and very extended daily hours.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" as="image" href="/sequence/frame_001.webp" />
        <link rel="preload" as="image" href="/sequence/frame_002.webp" />
        <link rel="preload" as="image" href="/sequence/frame_003.webp" />
        <link rel="preload" as="image" href="/sequence/frame_004.webp" />
        <link rel="preload" as="image" href="/sequence/frame_005.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
