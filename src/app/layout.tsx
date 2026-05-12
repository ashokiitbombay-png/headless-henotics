import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Henotic Diagnostics',
  description: 'Committed to delivering accurate, accessible, and patient-focused diagnostic healthcare services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
