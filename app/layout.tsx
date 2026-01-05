import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PremiumFooter from "@/components/layout/PremiumFooter";
import GoogleTagManager from "@/components/seo/GoogleTagManager";
import { companyDetails } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Henotic Diagnostics | Premium Medical Imaging Center",
  description: "State-of-the-art MRI, CT Scan, and Pathology services in Navi Mumbai. NABL Accredited.",
  metadataBase: new URL("https://henoticdiagnostics.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": companyDetails.name,
              "image": "https://henoticdiagnostics.com/images/henotic-diagnostics-logo.webp",
              "telephone": companyDetails.phone[0],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No 47, D Mart Rd, Sector 15",
                "addressLocality": "Kharghar, Navi Mumbai",
                "postalCode": "410210",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-medical-100 selection:text-medical-900">
        <GoogleTagManager />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <PremiumFooter />
      </body>
    </html>
  );
}
