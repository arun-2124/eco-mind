import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECO//MIND — The Sustainable Intelligence Challenge",
  description:
    "A multiplayer educational story simulation exploring Physical AI, Edge AI, Responsible Robotics, and the UN Sustainable Development Goals.",
  keywords: [
    "Sustainable AI",
    "Physical AI",
    "Edge AI",
    "Robotics",
    "Sustainable Development Goals",
    "Educational Simulation",
    "Nova City",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-full flex flex-col bg-[#070B16] text-[#F4F7FC] selection:bg-[#35D5FF]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
