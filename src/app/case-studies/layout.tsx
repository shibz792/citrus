import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Citrus Global',
  description: 'Real transformations delivered by Citrus Global across logistics, healthcare, FMCG, trade and professional associations, with the challenge, the approach, and the measured results.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
