import { SpeedInsights } from "@vercel/speed-insights/next";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import SecondFooter from "@/components/layout/SecondFooter";
import PremiumFooter from "@/components/layout/PremiumFooter";
import GoogleTagManager from "@/components/seo/GoogleTagManager";

export const metadata: Metadata = {
  title: "Henotic Diagnostics | Premium Medical Imaging Center",
  description: "State-of-the-art MRI, CT Scan, and Pathology services in Navi Mumbai.",
  metadataBase: new URL("https://henoticdiagnostics.com"),
  icons: {
    icon: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/a91acb36-henotic-diagnostics-site-icon-no-background-scaled-e1767700552904.webp",
    shortcut: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/a91acb36-henotic-diagnostics-site-icon-no-background-scaled-e1767700552904.webp",
    apple: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/a91acb36-henotic-diagnostics-site-icon-no-background-scaled-e1767700552904.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
            <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2224247495448831" crossOrigin="anonymous"></script>
      </head>
<body className="flex flex-col min-h-screen font-sans antialiased selection:bg-purple-200 selection:text-purple-900 relative">
        
        {/* FIXED BACKGROUND LAYER - Solves Mobile Wobble */}
        <div 
          className="fixed inset-0 -z-50"
          style={{
            backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
          }}
        ></div>

        <GoogleTagManager />
        <Header />
        
        <main className="flex-1 pt-24 text-slate-900 w-full relative z-0">
          {children}
        </main>
        
        {/* Footers */}
        <div className="relative z-10">
          <SecondFooter />
          <PremiumFooter />
        </div>
        <LocalBusinessSchema />
        <SpeedInsights />
      </body>
    </html>
  );
}