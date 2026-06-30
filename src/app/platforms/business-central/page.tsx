'use client';

import { motion } from 'framer-motion';
import { Building2, Calculator, Package, Briefcase, Monitor, ArrowRight, AlertTriangle, TrendingDown, Users, CheckCircle2, Settings, Wrench, Target, HelpCircle, BarChart3, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

export default function BusinessCentralPage() {
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
              <div className="h-9 flex items-center gap-2.5 mb-6">
                <img src="/business-central-icon.svg" alt="" className="h-full w-auto object-contain" />
                <span className="text-[15px] font-semibold text-slate-700 tracking-tight">Dynamics 365 Business Central</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                When finance and operations{' '}
                <span className="gradient-text">outgrow entry-level tools.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                Business Central gives established, Microsoft-oriented ANZ businesses structured finance and operational control across ledger, inventory, projects, service and light manufacturing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Assess your fit
                  <ArrowRight className="w-5 h-5" />
                </BookingButton>
                <BookingButton className="btn-secondary text-base px-8 py-4">
                  Review your current systems
                </BookingButton>
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
                      <Calculator className="w-4 h-4 text-citrus" />
                    </div>
                    <span className="text-[13px] font-semibold text-white">Finance & Operations Review</span>
                  </div>
                  <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-citrus animate-pulse" /> Running
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Month-end close', value: '8 days → Target 2 days' },
                    { label: 'Reporting accuracy', value: '76%' },
                    { label: 'Process automation', value: '18% coverage' },
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
                    <span className="text-[12px] text-citrus font-medium">Migration path identified</span>
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
                You need more than what Xero or MYOB can offer
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-6">
                Your finance team spends too long reconciling. Inventory counts drift. Project profitability is a guess until month-end. And the tools you rely on were designed for businesses half your size.
              </p>
              <p className="text-[15px] text-slate-400 leading-[1.8]">
                You need structured control, not another workaround. Business Central delivers it inside the Microsoft ecosystem you already operate in.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <AlertTriangle className="w-4 h-4 text-citrus" />, text: 'Current tools hit their ceiling as the business scales' },
                  { icon: <TrendingDown className="w-4 h-4 text-slate-400" />, text: 'Reporting lags behind and decisions suffer' },
                  { icon: <Calculator className="w-4 h-4 text-slate-400" />, text: 'Month-end close takes too many hands and too many days' },
                  { icon: <Users className="w-4 h-4 text-citrus" />, text: 'No visibility into project or service profitability' },
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

      {/* CAPABILITIES */}
      <section className="section-light relative">
        <div className="orb orb-citrus w-[300px] h-[300px] -top-32 -left-32 opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Enterprise-grade capability, right-sized for ANZ
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { name: 'Finance & Control', icon: <Calculator className="w-5 h-5 text-citrus" />, desc: 'Ledger, receivables, payables, cash flow, fixed assets, dimensions, budgets and reporting. The structured financial backbone your business has outgrown Xero for.' },
              { name: 'Distribution & Inventory', icon: <Package className="w-5 h-5 text-indigo-400" />, desc: 'Purchasing, sales orders, inventory, locations, replenishment, costing and fulfilment. Real stock control, not spreadsheet approximation.' },
              { name: 'Projects & Service', icon: <Briefcase className="w-5 h-5 text-pink-400" />, desc: 'Project budgets, resources, timesheets, billing; plus service orders, equipment and contracts. See profitability at the project level, not after the fact.' },
              { name: 'Microsoft 365 Alignment', icon: <Monitor className="w-5 h-5 text-citrus" />, desc: 'Scoped connections to Excel, Outlook, Teams and Power BI, configured rather than assumed. Your team works in the tools they already know.' },
            ].map((cap, i) => (
              <AnimatedSection key={cap.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="glass-card p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                    {cap.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-3">{cap.name}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">{cap.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <ProcessFlow
        heading="How we deliver it"
        subheading="A structured process that qualifies the fit before committing to the build."
        steps={[
          { title: 'Qualify', icon: <Target className="w-4 h-4" />, desc: 'Assess size, complexity and your Microsoft environment. You get a clear understanding of fit and scope.' },
          { title: 'Design', icon: <Settings className="w-4 h-4" />, desc: 'Map requirements, confirm licensing and localisation, and design migration and reporting. You get a detailed design and licensing plan.' },
          { title: 'Build and train', icon: <Wrench className="w-4 h-4" />, desc: 'Configure, test and train on the real process. You get a working system with trained users.' },
          { title: 'Go live and review', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Cut over, stabilise and review the value delivered. You get a live, stable system with measured outcomes.' },
        ]}
      />

      {/* WHO IT IS FOR */}
      <section className="section-muted">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Business Central fits when
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <Building2 className="w-5 h-5 text-citrus" />, title: 'You are Microsoft-first', desc: 'Your team already runs on Outlook, Excel, Teams and SharePoint. Business Central slots in rather than fighting the stack.' },
              { icon: <BarChart3 className="w-5 h-5 text-indigo-400" />, title: 'You need structured finance', desc: 'Multi-dimensional reporting, budgets, fixed assets and proper audit trails that Xero or MYOB cannot deliver.' },
              { icon: <Briefcase className="w-5 h-5 text-pink-400" />, title: 'You run projects or service', desc: 'Project costing, time capture and service management need to be integrated with your financials, not bolted on.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-7 h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">{item.desc}</p>
                </motion.div>
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
              Straight answers
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Only for big enterprises?', a: 'No. It suits growing small and midsized businesses that need stronger control. The Essentials licence starts at a fraction of what most assume. The final call comes out of Discovery.' },
              { q: 'How does it compare to ConexusOne ERP or Zoho?', a: 'Business Central is the right choice for Microsoft-first businesses that need structured financial control. ConexusOne ERP suits open-source preference. Zoho suits lighter, faster-to-value needs. We recommend on evidence.' },
              { q: 'Can we migrate from MYOB or Xero?', a: 'Yes. We plan and execute the data migration as part of the implementation. The key is clean mapping before the move, not a bulk dump.' },
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
        headline="Decide if it is the right level of system before you invest."
        subtext="We will tell you whether Business Central fits or whether something lighter makes more sense."
        primaryCTA="Assess Your Fit"
        primaryHref="/contact"
      />
    </>
  );
}
