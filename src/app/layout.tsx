import "./globals.css";
import { Funnel_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

// If loading a variable font, you don't need to specify the font weight
const funnel = Funnel_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={funnel.className}>
      <body className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_25%,#63e_100%)]">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
