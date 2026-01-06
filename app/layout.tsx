import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PremiumFooter from "@/components/layout/PremiumFooter";
import GoogleTagManager from "@/components/seo/GoogleTagManager";
import { companyDetails } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Henotic Diagnostics | Premium Medical Imaging Center",
  description: "State-of-the-art MRI, CT Scan, and Pathology services in Navi Mumbai.",
  metadataBase: new URL("https://henoticdiagnostics.com"),
  icons: {
    icon: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/15613f3a-henotic-diagnostics-site-icon-scaled-e1767700552904.webp",
    shortcut: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/15613f3a-henotic-diagnostics-site-icon-scaled-e1767700552904.webp",
    apple: "https://storage.googleapis.com/wp-media-henoticbucket/2026/01/15613f3a-henotic-diagnostics-site-icon-scaled-e1767700552904.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
        <GoogleTagManager />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <PremiumFooter />
      </body>
    </html>
  );
}
