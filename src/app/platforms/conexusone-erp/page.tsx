'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, Calculator, Package, ShoppingCart, Clock, Wrench, ArrowRight, Users, Globe, CheckCircle2, AlertTriangle, Target, HelpCircle, Shield, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

export default function ConexusOneERPPage() {
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
                <Image src="/ConexusOneERP.png" alt="ConexusOne ERP" width={160} height={36} className="h-full w-auto object-contain" priority />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                One connected system for distributors, makers and{' '}
                <span className="gradient-text">service businesses.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                Citrus implements ConexusOne ERP for ANZ businesses that have outgrown disconnected apps, with Australian and New Zealand localisation, e-invoicing and tax compliance built in.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Assess your ERP fit
                  <ArrowRight className="w-5 h-5" />
                </BookingButton>
                <Link href="#apps" className="btn-secondary text-base px-8 py-4">
                  Explore apps
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
                      <Layers className="w-4 h-4 text-citrus" />
                    </div>
                    <span className="text-[13px] font-semibold text-white">ERP Readiness Assessment</span>
                  </div>
                  <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-citrus animate-pulse" /> Active
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Module coverage', value: '5 of 8 needed' },
                    { label: 'ANZ localisation', value: 'Ready' },
                    { label: 'Data migration', value: '3 sources mapped' },
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
                    <span className="text-[12px] text-citrus font-medium">Staged rollout plan ready</span>
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
                Separate apps that never agree
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-6">
                Sales, purchasing, inventory and finance run in separate apps that never agree. You need several connected functions but want to stage it. And historic processes are treated as mandatory, with customisation considered before standard capability is understood.
              </p>
              <p className="text-[15px] text-slate-400 leading-[1.8]">
                The result: data re-entry, conflicting reports, slow month-end closes, and a team spending more time reconciling than operating.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <AlertTriangle className="w-4 h-4 text-citrus" />, text: 'Finance and stock disagree on every report' },
                  { icon: <Clock className="w-4 h-4 text-slate-400" />, text: 'Month-end takes a week instead of a day' },
                  { icon: <Users className="w-4 h-4 text-slate-400" />, text: 'Staff re-key the same order three times' },
                  { icon: <Globe className="w-4 h-4 text-citrus" />, text: 'ANZ tax rules bolt on as afterthoughts' },
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

      {/* APP SET */}
      <section id="apps" className="section-light relative">
        <div className="orb orb-citrus w-[300px] h-[300px] -top-32 -right-32 opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              The ANZ-ready app set
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              Every module comes with Australian and New Zealand localisation out of the box.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: 'Accounting & Invoicing', icon: <Calculator className="w-5 h-5 text-citrus" />, desc: 'Australian chart of accounts (AASB) and NZ chart of accounts; GST, ABN/ACN/TFN validation; PEPPOL e-invoicing; batch payments through ABA and NZ EFT.' },
              { name: 'Inventory & Manufacturing', icon: <Package className="w-5 h-5 text-indigo-400" />, desc: 'Multi-warehouse stock, lots and serials, replenishment; plus light manufacturing with bills of materials, production orders and costing.' },
              { name: 'Sales, Purchase & CRM', icon: <ShoppingCart className="w-5 h-5 text-pink-400" />, desc: 'Connect leads, quotations, orders, purchasing, fulfilment and invoicing into one flow that eliminates re-keying.' },
              { name: 'Projects & Timesheets', icon: <Clock className="w-5 h-5 text-citrus" />, desc: 'Project work, time capture, costing and billing. Field service where applicable. Linked directly to invoicing.' },
              { name: 'POS, Website & eCommerce', icon: <Globe className="w-5 h-5 text-indigo-400" />, desc: 'Where retail or online operations are in scope, integrated with inventory and accounting automatically.' },
            ].map((app, i) => (
              <AnimatedSection key={app.name} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                    {app.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-3">{app.name}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">{app.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNING PRINCIPLE */}
      <section className="section-gradient">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="dark-card p-10 glow-pulse">
              <div className="w-14 h-14 rounded-2xl bg-citrus/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-citrus" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our governing principle</h3>
              <p className="text-[15px] text-slate-300 leading-[1.8] max-w-2xl mx-auto">
                Standardise first. Configure where needed. Customise only where the value clearly beats the risk and the support burden. That is how a ConexusOne ERP project stays a ConexusOne ERP project, and not a custom software build disguised as an implementation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* DELIVERY */}
      <ProcessFlow
        heading="Step by step to a working system"
        steps={[
          { title: 'Define outcomes and requirements', icon: <Target className="w-4 h-4" />, desc: 'Agree the business outcomes and the process the system must support. You get a defined outcome and requirement set.' },
          { title: 'Select minimum viable modules', icon: <Layers className="w-4 h-4" />, desc: 'Start with the smallest module set that delivers value, then stage the rest. You get a staged module plan.' },
          { title: 'Validate ANZ localisation', icon: <Globe className="w-4 h-4" />, desc: 'Confirm the accounting, e-invoicing, tax and payroll approach for each country. You get a validated localisation and compliance approach.' },
          { title: 'Build, migrate, test and train', icon: <Wrench className="w-4 h-4" />, desc: 'Configure to design, keep customisation governed, and prepare your people. You get a configured, tested system and trained users.' },
          { title: 'Stabilise and stage', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Stabilise, measure, and add modules only when they earn it. You get a stable core and a roadmap.' },
        ]}
      />

      {/* FAQ */}
      <section className="section-muted">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em]">
              Straight answers
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'How is this different from Zoho or Business Central?', a: 'ConexusOne ERP is the right fit for businesses that need more integration depth than Zoho but want open-source flexibility over Microsoft licensing. The right platform comes out of Discovery.' },
              { q: 'Can we start small and grow?', a: 'Yes. We recommend the minimum viable module set that delivers value, then stage additional modules only when they earn their place. Over-configuring on day one is one of the most common ERP mistakes.' },
              { q: 'What about customisation?', a: 'Our principle is standardise first, configure where needed, customise only where the value clearly beats the ongoing support burden. This keeps upgrade paths clean and costs predictable.' },
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
        headline="Decide what to standardise, configure or build, before you start."
        subtext="Start with a conversation about your operation. No commitment."
        primaryCTA="Assess Whether ConexusOne ERP Fits"
        primaryHref="/contact"
      />
    </>
  );
}
