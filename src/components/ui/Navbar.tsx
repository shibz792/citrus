'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import BookingButton from './BookingButton';

const platforms = [
  { name: 'ConexusOne AI', href: '/platforms/conexusone-ai', tag: 'Flagship' },
  { name: 'Zoho', href: '/platforms/zoho' },
  { name: 'ConexusOne ERP', href: '/platforms/conexusone-erp' },
  { name: 'CargoWise', href: '/platforms/cargowise' },
  { name: 'Business Central', href: '/platforms/business-central' },
  { name: 'Raechal AI', href: '/platforms/raechal-ai' },
];

const services = [
  { name: 'AI-First Assessment', href: '/services/ai-first-business-assessment' },
  { name: 'Discovery & Design', href: '/services/discovery-solution-design' },
  { name: 'Implementation', href: '/services/systems-implementation' },
  { name: 'Optimisation & Advisory', href: '/services/optimisation-advisory' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1100px] transition-all duration-500 rounded-2xl ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-200/60'
            : 'bg-white/40 backdrop-blur-xl border border-white/50'
        }`}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center">
              <Image src="/citrus-logo.png" alt="Citrus Global" width={180} height={50} className="h-11 w-auto" priority />
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('platforms')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3.5 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-0.5">
                  Platforms
                  <ChevronDown className="w-3 h-3 opacity-40" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'platforms' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-slate-100 p-1.5 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-citrus/40 to-transparent" />
                      {platforms.map((item, i) => (
                        <motion.div key={item.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03, duration: 0.2 }}>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] text-slate-600 hover:bg-gradient-to-r hover:from-citrus/5 hover:to-transparent hover:text-slate-900 transition-all"
                          >
                            <span>{item.name}</span>
                            {item.tag && <span className="text-[9px] uppercase tracking-widest text-citrus font-semibold">{item.tag}</span>}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3.5 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-0.5">
                  Services
                  <ChevronDown className="w-3 h-3 opacity-40" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-slate-100 p-1.5"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
                      {services.map((item, i) => (
                        <motion.div key={item.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03, duration: 0.2 }}>
                          <Link href={item.href} className="block px-3 py-2 rounded-lg text-[13px] text-slate-600 hover:bg-gradient-to-r hover:from-pink-400/5 hover:to-transparent hover:text-slate-900 transition-all">
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/solutions" className="px-3.5 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all">Solutions</Link>
              <Link href="/industries" className="px-3.5 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all">Industries</Link>
              <Link href="/case-studies" className="px-3.5 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all">Case Studies</Link>
              <Link href="/about" className="px-3.5 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all">About</Link>
              <Link href="/contact" className="px-3.5 py-1.5 text-[13px] font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all">Contact</Link>
            </div>

            <BookingButton className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-white text-[13px] font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-citrus/10 cursor-pointer" style={{ background: 'linear-gradient(135deg, #0f172a, #1a2744)', border: '1px solid rgba(45,212,168,0.15)' }}>
              Get started
              <ArrowRight className="w-3.5 h-3.5" />
            </BookingButton>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-all">
              {mobileOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-white lg:hidden">
            <div className="pt-24 px-6 pb-8 overflow-y-auto h-full">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-medium mb-3">Platforms</p>
              {platforms.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-base text-slate-800 hover:text-citrus-dark transition-all">{item.name}</Link>
              ))}
              <div className="h-px bg-slate-100 my-4" />
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-medium mb-3">Services</p>
              {services.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-base text-slate-800 hover:text-citrus-dark transition-all">{item.name}</Link>
              ))}
              <div className="h-px bg-slate-100 my-4" />
              <Link href="/solutions" onClick={() => setMobileOpen(false)} className="block py-2.5 text-base text-slate-800 hover:text-citrus-dark transition-all">Solutions</Link>
              <Link href="/industries" onClick={() => setMobileOpen(false)} className="block py-2.5 text-base text-slate-800 hover:text-citrus-dark transition-all">Industries</Link>
              <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="block py-2.5 text-base text-slate-800 hover:text-citrus-dark transition-all">Case Studies</Link>
              <div className="h-px bg-slate-100 my-4" />
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2.5 text-base text-slate-800">About</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2.5 text-base text-slate-800">Contact</Link>
              <div className="mt-8">
                <BookingButton className="btn-primary w-full justify-center py-3 text-sm">Get started <ArrowRight className="w-3.5 h-3.5" /></BookingButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
