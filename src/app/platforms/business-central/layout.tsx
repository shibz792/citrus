import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Dynamics 365 Business Central | Citrus Global',
  description: 'Business Central implementation for Microsoft-oriented ANZ businesses needing structured finance and operational control.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
