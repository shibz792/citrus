import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(170deg, #050810, #0a1018 50%, #050810)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[5%] w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(45,212,168,0.18) 0%, transparent 50%)' }} />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 50%)' }} />
        <div className="absolute top-[25%] right-[0%] w-[350px] h-[350px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.10) 0%, transparent 50%)' }} />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/citrus-logo-white.png" alt="Citrus Global" width={180} height={50} className="h-11 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              An AI-first consulting, implementation, and advisory firm helping businesses improve efficiency, reduce cost, and deliver measurable operational outcomes.
            </p>
            <a href="mailto:inquiry@citrus.global" className="text-citrus hover:text-citrus-light transition-colors text-sm font-medium">
              inquiry@citrus.global
            </a>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.facebook.com/profile.php?id=61584722709342" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-citrus/30 hover:bg-citrus/10 transition-all" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.05 1.592.149v3.285a9 9 0 0 0-.916-.032c-1.3 0-1.803.494-1.803 1.776v2.38h3.465l-.732 3.667h-2.733v8.164C19.396 23.038 24 18.024 24 12.044 24 5.431 18.627 0 12 0S0 5.431 0 12.044c0 5.494 4.043 10.049 9.101 11.647Z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/citrus-global-tech/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-citrus/30 hover:bg-citrus/10 transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-citrus/30 hover:bg-citrus/10 transition-all" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-4">Platforms</h4>
            <ul className="space-y-3">
              {[
                { name: 'ConexusOne AI', href: '/platforms/conexusone-ai' },
                { name: 'Zoho', href: '/platforms/zoho' },
                { name: 'ConexusOne ERP', href: '/platforms/conexusone-erp' },
                { name: 'CargoWise', href: '/platforms/cargowise' },
                { name: 'Business Central', href: '/platforms/business-central' },
                { name: 'Raechal AI', href: '/platforms/raechal-ai' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'AI-First Assessment', href: '/services/ai-first-business-assessment' },
                { name: 'Discovery & Design', href: '/services/discovery-solution-design' },
                { name: 'Implementation', href: '/services/systems-implementation' },
                { name: 'Optimisation & Advisory', href: '/services/optimisation-advisory' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions" className="text-sm text-slate-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/industries" className="text-sm text-slate-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Citrus Global. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Australia &middot; New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
