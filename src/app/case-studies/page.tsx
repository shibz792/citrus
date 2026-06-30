'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, RefreshCw, Package, HeartPulse, Globe, Users, ArrowRight, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import { caseStudies } from '@/data/case-studies';

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  'global-automotive-logistics': Truck,
  'bpo-robotic-process-automation': RefreshCw,
  'frucor-suntory-lean-agile': Package,
  'healthalliance-transformation': HeartPulse,
  'pacific-trade-invest': Globe,
  'cmi-transformation': Users,
};

const colorSets = [
  { bg: 'bg-citrus/8', border: 'border-citrus/15', text: 'text-citrus-dark', chipBg: 'bg-citrus/10', chipBorder: 'border-citrus/20' },
  { bg: 'bg-indigo-400/8', border: 'border-indigo-400/15', text: 'text-indigo-500', chipBg: 'bg-indigo-400/10', chipBorder: 'border-indigo-400/20' },
  { bg: 'bg-pink-400/8', border: 'border-pink-400/15', text: 'text-pink-500', chipBg: 'bg-pink-400/10', chipBorder: 'border-pink-400/20' },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="aurora-bg" />
        <div className="aurora-third" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6 max-w-3xl mx-auto">
              Real transformations,{' '}
              <span className="gradient-text">real results.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Logistics, healthcare, FMCG, trade and professional associations. The challenge each client faced, what we changed, and what it delivered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingButton className="btn-primary text-base px-8 py-4">
                Discuss your challenge
                <ArrowRight className="w-5 h-5" />
              </BookingButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-light relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => {
              const c = colorSets[i % 3];
              const Icon = icons[cs.slug] ?? Users;
              return (
                <AnimatedSection key={cs.slug} delay={i * 0.08}>
                  <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                    <motion.div whileHover={{ y: -4 }} className="glass-card p-7 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${c.bg} border ${c.border}`}>
                            <Icon className={`w-5 h-5 ${c.text}`} />
                          </div>
                          <div>
                            <span className={`text-[10px] uppercase tracking-[0.15em] font-bold ${c.text}`}>{cs.industry}</span>
                            <h3 className="text-[16px] font-bold text-slate-900 tracking-tight">{cs.client}</h3>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-citrus transition-colors flex-shrink-0" />
                      </div>

                      <p className="text-[13.5px] text-slate-500 leading-[1.7] mb-5 flex-1">{cs.summary}</p>

                      {cs.heroStats.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                          {cs.heroStats.slice(0, 3).map((m) => (
                            <div key={m.label} className={`rounded-lg p-2.5 text-center ${c.chipBg} border ${c.chipBorder}`}>
                              <div className={`text-[14px] font-bold ${c.text} leading-tight`}>{m.value}</div>
                              <div className="text-[9.5px] text-slate-500 leading-tight mt-0.5">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <span className={`inline-flex items-center gap-1 text-[13px] font-semibold ${c.text} mt-5 pt-4 border-t border-slate-100`}>
                        Read full case study <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Your operation could be the next case study."
        subtext="Book a 30-minute call and we will tell you what we find."
        primaryCTA="Discuss your challenge"
        primaryHref="/contact"
        secondaryCTA="Email inquiry@citrus.global"
        secondaryHref="mailto:inquiry@citrus.global"
      />
    </>
  );
}
