import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Industries | Citrus Global',
  description: 'Citrus Global serves logistics, distribution, professional services, retail and manufacturing businesses across Australia and New Zealand.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
