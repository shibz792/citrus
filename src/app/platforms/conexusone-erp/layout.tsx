import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ConexusOne ERP | Citrus Global',
  description: 'ConexusOne ERP implementation for ANZ distributors, makers and service businesses with Australian and New Zealand localisation built in.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
