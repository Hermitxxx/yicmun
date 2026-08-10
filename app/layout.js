import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Youth International Council Model United Nations 2026 | YICMUN",
  description: "Youth International Council Model United Nations (YICMUN) - 25–27 September. DEBATE. DIPLOMACY. DIRECTION.",
  keywords: ["Model United Nations", "YICMUN", "Youth International Council", "Diplomacy", "Debate", "Bangladesh"],
  openGraph: {
    title: "Youth International Council Model United Nations 2026",
    description: "DEBATE. DIPLOMACY. DIRECTION. Join youth leaders for international diplomacy and debate.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050B1A] text-[#E8F4F8] font-sans selection:bg-[#00FF87]/30 selection:text-[#00FF87] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
