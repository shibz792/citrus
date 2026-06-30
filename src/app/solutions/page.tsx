'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Ship, Layers, Eye, ArrowRight, Zap, BarChart3, Building2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import SolutionFinderVisual from '@/components/hero-visuals/SolutionFinderVisual';

const platformHrefs: Record<string, string> = {
  'ConexusOne AI': '/platforms/conexusone-ai',
  'CargoWise': '/platforms/cargowise',
  'Zoho': '/platforms/zoho',
  'ConexusOne ERP': '/platforms/conexusone-erp',
  'Business Central': '/platforms/business-central',
  'Raechal AI': '/platforms/raechal-ai',
};

const solutions = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Operational AI and Automation',
    desc: 'ConexusOne AI for repetitive freight and customs work. Specialised agents read your emails and documents, create records in your ERP or TMS, and complete real tasks end to end. Start with one workflow.',
    platforms: ['ConexusOne AI'],
    href: '/platforms/conexusone-ai',
    cta: 'See ConexusOne AI',
  },
  {
    icon: <Ship className="w-6 h-6" />,
    title: 'Freight and Logistics Performance',
    desc: 'CargoWise implementation, optimisation, integration and managed support for ANZ logistics operators. Whether you are going live or getting more from what you already have.',
    platforms: ['CargoWise'],
    href: '/platforms/cargowise',
    cta: 'See CargoWise',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'ERP and Connected Business Systems',
    desc: 'Zoho, ConexusOne ERP or Business Central, chosen on size, complexity and where you are today. Finance, inventory, sales and operations connected into one system.',
    platforms: ['Zoho', 'ConexusOne ERP', 'Business Central'],
    href: '/services/ai-first-business-assessment',
    cta: 'Find your fit',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Growth and AI Visibility',
    desc: 'See what ChatGPT, Gemini and Perplexity say about your business, and fix it. Raechal AI audits your website for traditional search and AI search, scores where you stand, and shows the precise fixes.',
    platforms: ['Raechal AI'],
    href: '/platforms/raechal-ai',
    cta: 'See Raechal AI',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="aurora-bg" />
        <div className="aurora-third" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                Start from the outcome{' '}
                <span className="gradient-text">you need.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                Four solution areas, each backed by specific platforms and a delivery team that has done it before. Pick the outcome. We will recommend the right platform and the right scope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Discuss your challenge
                  <ArrowRight className="w-5 h-5" />
                </BookingButton>
                <Link href="/services/ai-first-business-assessment" className="btn-secondary text-base px-8 py-4">
                  Start with an assessment
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <SolutionFinderVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-light relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Four ways to start, one delivery model
            </h2>
            <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
              Each solution area is backed by specific platforms and a delivery team that has done it before. Assessment, Discovery, Implementation, Advisory.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solutions.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="glass-card p-7 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${i % 3 === 0 ? 'bg-citrus/8 border border-citrus/15 text-citrus-dark' : i % 3 === 1 ? 'bg-indigo-400/8 border border-indigo-400/15 text-indigo-400' : 'bg-pink-400/8 border border-pink-400/15 text-pink-400'}`}>
                      {s.icon}
                    </div>
                    <h3 className="text-[17px] font-bold text-slate-900 tracking-tight">{s.title}</h3>
                  </div>
                  <p className="text-[14px] text-slate-500 leading-[1.7] mb-5 flex-1">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {s.platforms.map((p) => (
                        <Link
                          key={p}
                          href={platformHrefs[p] || s.href}
                          className="text-[11px] font-medium text-citrus-dark bg-citrus/8 px-2.5 py-1 rounded-full hover:bg-citrus/15 transition-colors"
                        >
                          {p}
                        </Link>
                      ))}
                    </div>
                    <Link href={s.href} className="inline-flex items-center gap-1 text-[13px] font-semibold text-citrus-dark hover:text-citrus transition-colors">
                      {s.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark relative">
        <div className="orb orb-citrus w-[400px] h-[400px] -top-48 -right-48 opacity-20" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-white tracking-[-0.02em] mb-3">
              Not sure where to start?
            </h2>
            <p className="text-[15px] text-slate-400 max-w-xl mx-auto">
              The AI-First Business Assessment finds the gaps first. AI does the heavy analysis. A consultant makes the call. You get a clear picture and a firm recommendation on what to do next.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <Zap className="w-5 h-5 text-citrus" />, title: 'AI finds the gaps', desc: 'AI scans wide and fast, surfacing what manual review would miss.' },
              { icon: <Building2 className="w-5 h-5 text-indigo-400" />, title: 'Consultant makes the call', desc: 'A person always owns the recommendation. Every time.' },
              { icon: <BarChart3 className="w-5 h-5 text-pink-400" />, title: 'You get a clear next step', desc: 'Stop, fix one thing, or go deeper. Three honest outcomes.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4, borderColor: 'rgba(45,212,168,0.4)' }} className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] transition-colors h-full">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-[1.6]">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Start from the outcome, not the catalogue."
        subtext="30-minute call. No software pitch. No obligation."
        primaryCTA="Discuss your challenge"
        primaryHref="/contact"
        secondaryCTA="Email inquiry@citrus.global"
        secondaryHref="mailto:inquiry@citrus.global"
      />
    </>
  );
}
