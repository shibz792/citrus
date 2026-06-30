import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Solutions | Citrus Global',
  description: 'Four solution areas backed by specific platforms: revenue recovery, process automation, logistics optimisation, and operational visibility.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
