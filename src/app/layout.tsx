import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FRANCENE | Creative Portfolio & Studio',
  description: 'Creative portfolio of Francene — professional makeup artistry, nail services, and graphic design based in the Philippines.',
  openGraph: {
    title: 'FRANCENE | Creative Portfolio & Studio',
    description: 'Professional makeup artistry, nail services, and graphic design based in the Philippines.',
    type: 'website',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-[#faf9f6] text-[#1a1c1a] antialiased selection:bg-[#f3dfd1] selection:text-[#706257]">
        {children}
      </body>
    </html>
  );
}

