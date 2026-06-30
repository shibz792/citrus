import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Providers from '@/components/ui/Providers';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Citrus Global | AI-First Consulting for ANZ Businesses',
  description: 'Find the operational gaps costing your business revenue, margin and control. AI to find the problem fast. Experienced consultants to fix it properly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <div className="gradient-mesh" />
        <div className="floating-orbs" />
        <div className="floating-orb-pink" />
        <div className="particles" />
        <div className="noise" />
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
