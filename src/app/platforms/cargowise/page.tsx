'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Ship, Workflow, Link2, HeadphonesIcon, Database, ArrowRight, AlertTriangle, TrendingDown, Users, BarChart3, Settings, CheckCircle2, Shield, Wrench, Globe, HelpCircle, Boxes, ShoppingCart, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

const serviceLines = [
  { title: 'Supply Chain Transformation', icon: <Workflow className="w-5 h-5 text-citrus" />, desc: 'Systems and process audit, operating model design, strategy and implementation, data and integration alignment, process standardisation and governance, change and adoption management, and performance and KPI frameworks.' },
  { title: 'CargoWise Implementation & Optimisation', icon: <Settings className="w-5 h-5 text-indigo-400" />, desc: 'Systems and process audits, cross-module implementation, feature updates and compliance, BI and analytics, change management and learning, and an ongoing support structure.' },
  { title: 'Integration Solutions', icon: <Link2 className="w-5 h-5 text-pink-400" />, desc: 'Pre and post integration support, custom integrations, API, EDI and REST connectivity across ERP, WMS and partner portals, an integration visibility layer, and end-to-end lifecycle management.' },
  { title: 'Care: Managed Support', icon: <HeadphonesIcon className="w-5 h-5 text-citrus" />, desc: 'Ongoing support coverage, cross-module system stability, proactive monitoring and optimisation, KPI-driven support and reporting, a tiered governance framework, and continuous improvement.' },
  { title: 'Master Data & Automation', icon: <Database className="w-5 h-5 text-indigo-400" />, desc: 'Master-data governance, a canonical data model, cross-branch data harmonisation, cross-system validation, charge code and rate governance, and automated shipment and billing triggers.' },
];

export default function CargoWisePage() {
  return (
    <>
      {/* HERO */}
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
              <div className="h-9 flex items-center mb-6">
                <img src="/cargowise-logo.svg" alt="CargoWise" className="h-full w-auto object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                Anyone can go live on CargoWise.{' '}
                <span className="gradient-text">Far fewer get it optimised.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                Citrus helps ANZ freight forwarders, customs brokers and logistics operators implement, optimise, integrate and support CargoWise, so the platform you pay for actually runs your operation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Review your operation
                  <ArrowRight className="w-5 h-5" />
                </BookingButton>
                <Link href="#journey" className="btn-secondary text-base px-8 py-4">
                  See our approach
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="dark-card p-6 glow-pulse">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-citrus/20 flex items-center justify-center">
                      <Settings className="w-4 h-4 text-citrus" />
                    </div>
                    <span className="text-[13px] font-semibold text-white">System Optimisation Audit</span>
                  </div>
                  <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-citrus animate-pulse" /> Running
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Workflow efficiency', value: '42% → Target 85%' },
                    { label: 'Integration coverage', value: '3 of 8 connected' },
                    { label: 'Branch consistency', value: 'Low (flagged)' },
                  ].map((row, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.15 }} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/[0.08]">
                      <span className="text-[12px] text-slate-400">{row.label}</span>
                      <span className="text-[12px] font-semibold text-white">{row.value}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mt-3 p-3 rounded-lg bg-citrus/10 border border-citrus/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-citrus" />
                    <span className="text-[12px] text-citrus font-medium">12 optimisation opportunities found</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-dark relative">
        <div className="orb orb-coral w-[300px] h-[300px] top-[-100px] right-[-100px] opacity-30" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-[2rem] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-5">
                Live but not optimised
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-6">
                CargoWise is live, but the manual workarounds never left. Disconnected systems create data gaps. Every branch uses it differently, so the reports cannot be trusted. And the margin leaks out on the invoice, late or wrong.
              </p>
              <p className="text-[15px] text-slate-400 leading-[1.8]">
                You are paying for specialist logistics capability while productivity, visibility, billing accuracy and branch consistency stay below expectation.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <AlertTriangle className="w-4 h-4 text-citrus" />, text: 'Manual workarounds never got replaced after go-live' },
                  { icon: <TrendingDown className="w-4 h-4 text-slate-400" />, text: 'Billing inaccuracies leak margin every week' },
                  { icon: <Users className="w-4 h-4 text-slate-400" />, text: 'Branches use the system differently, reports conflict' },
                  { icon: <Link2 className="w-4 h-4 text-citrus" />, text: 'Integrations are brittle or missing entirely' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-white/[0.03]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[14px] text-slate-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICE LINES */}
      <section className="section-light relative">
        <div className="orb orb-citrus w-[300px] h-[300px] -top-32 -left-32 opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Five service lines, one team
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              Whether you need a new implementation, an optimisation of what you have, or ongoing managed support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceLines.map((line, i) => (
              <AnimatedSection key={line.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="glass-card p-7 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {line.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-citrus-dark bg-citrus/8 border border-citrus/15 px-2.5 py-1 rounded-full">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-3">{line.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">{line.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <ProcessFlow
        heading="From strategy to optimised"
        steps={[
          { title: 'Plan smart', icon: <BarChart3 className="w-4 h-4" />, desc: 'Audit the operation, align systems and goals, and set a transformation roadmap. You get a clear roadmap and the priority problem named.' },
          { title: 'Implement right', icon: <Wrench className="w-4 h-4" />, desc: 'Deploy or reconfigure CargoWise with the right structure and governance. You get a configured environment that matches how you operate.' },
          { title: 'Connect everything', icon: <Link2 className="w-4 h-4" />, desc: 'Integrate systems, data flows and partner touchpoints into one connected ecosystem. You get working integrations and a single source of truth.' },
          { title: 'Stay optimised', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Improve performance continuously with support, refinement and proactive care. You get measured utilisation gains and an ongoing improvement plan.' },
        ]}
      />

      {/* SEGMENTS */}
      <section className="section-muted">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              We work across every logistics segment
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              { name: 'Freight forwarders', icon: <Ship className="w-4 h-4" /> },
              { name: 'Warehouse operators', icon: <Boxes className="w-4 h-4" /> },
              { name: 'Customs brokers', icon: <Shield className="w-4 h-4" /> },
              { name: 'Transport providers', icon: <Globe className="w-4 h-4" /> },
              { name: 'E-commerce logistics', icon: <ShoppingCart className="w-4 h-4" /> },
              { name: 'Liner and agency', icon: <Ship className="w-4 h-4" /> },
              { name: 'Consolidators', icon: <Workflow className="w-4 h-4" /> },
            ].map((seg, i) => (
              <AnimatedSection key={seg.name} delay={i * 0.05}>
                <motion.span
                  whileHover={{ y: -2, borderColor: '#2dd4a8' }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sm font-medium text-slate-600 border border-slate-200 shadow-sm cursor-default transition-colors"
                >
                  <span className="text-slate-400">{seg.icon}</span>
                  {seg.name}
                </motion.span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em]">
              Common questions, direct answers
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Can you help if we already run CargoWise?', a: 'Yes. The first step is usually an audit of workflow, configuration, data, integration and adoption. We find the gaps between what you have and what the platform can actually deliver.' },
              { q: 'Do you provide ongoing support?', a: 'Yes, through the Care service: monitoring, stability, KPI reporting and continuous improvement. You can engage us for a project or for ongoing managed support.' },
              { q: 'What makes Citrus different from other CargoWise partners?', a: 'We combine supply chain consulting with technical implementation. Most partners do one or the other. We audit the process and the system together, because fixing configuration without fixing the process rarely works.' },
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div whileHover={{ y: -2 }} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className={`w-5 h-5 ${i % 3 === 0 ? 'text-citrus' : i % 3 === 1 ? 'text-indigo-400' : 'text-pink-400'}`} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-slate-900 mb-2">{faq.q}</h3>
                      <p className="text-[13px] text-slate-500 leading-[1.7]">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Find out whether it is the platform, the configuration, the data or the process."
        subtext="Start with an honest audit. We will tell you where the problem actually is."
        primaryCTA="Review Your Operation"
        primaryHref="/contact"
      />
    </>
  );
}
