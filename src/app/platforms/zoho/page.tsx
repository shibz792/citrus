'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Package, Receipt, BarChart3, Users, Briefcase, ArrowRight, FileSpreadsheet, AlertTriangle, Calculator, PieChart, Workflow, UserCheck, Layers, Wrench, Settings, HelpCircle, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

export default function ZohoPage() {
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
                <img src="/zoho-logo.svg" alt="Zoho" className="h-full w-auto object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                The right Zoho apps for your business.{' '}
                <span className="gradient-text">Not all fifty of them.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                Citrus implements the Zoho applications ANZ businesses actually need. Finance, inventory and sales first, delivered by a team that has done these implementations many times.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Assess whether Zoho fits
                  <ArrowRight className="w-5 h-5" />
                </BookingButton>
                <Link href="#bundle" className="btn-secondary text-base px-8 py-4">
                  See the starting bundle
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <BookOpen className="w-5 h-5 text-citrus" />, name: 'Books', desc: 'Accounting & GST' },
                  { icon: <Package className="w-5 h-5 text-indigo-400" />, name: 'Inventory', desc: 'Stock & orders' },
                  { icon: <Users className="w-5 h-5 text-pink-400" />, name: 'CRM', desc: 'Sales pipeline' },
                  { icon: <Receipt className="w-5 h-5 text-citrus" />, name: 'Expense', desc: 'Approvals & claims' },
                ].map((app, i) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="glass-card p-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                      {app.icon}
                    </div>
                    <p className="text-sm font-bold text-slate-900">{app.name}</p>
                    <p className="text-xs text-slate-400">{app.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-dark relative">
        <div className="orb orb-coral w-[300px] h-[300px] top-[-100px] right-[-100px] opacity-30" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-[2rem] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-5">
                You have outgrown spreadsheets but a full ERP is overkill
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-6">
                Finance, stock and sales run on spreadsheets that never quite agree. Staff duplicate customer and financial data across three different tools. And the pipeline lives in one person&apos;s head, so follow-up is a coin toss.
              </p>
              <p className="text-[15px] text-slate-400 leading-[1.8]">
                You need connected systems, not an enterprise project. Something that works next quarter, not next year.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <FileSpreadsheet className="w-4 h-4 text-slate-400" />, text: 'Finance lives in spreadsheets nobody trusts' },
                  { icon: <AlertTriangle className="w-4 h-4 text-citrus" />, text: 'Stock levels are a guess until someone counts' },
                  { icon: <Users className="w-4 h-4 text-slate-400" />, text: 'Pipeline depends on who remembers to follow up' },
                  { icon: <Calculator className="w-4 h-4 text-slate-400" />, text: 'GST, invoicing and reconciliation take days' },
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

      {/* FINANCE FIRST */}
      <section className="section-light relative">
        <div className="orb orb-citrus w-[300px] h-[300px] -top-32 -left-32 opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Where our delivery team is deepest
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              We start with finance because it touches everything. Get Books right and every other app plugs in cleanly.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: 'Zoho Books', icon: <BookOpen className="w-5 h-5 text-citrus" />, desc: 'Accounting, invoicing, bills, expenses, approvals and GST. The lowest-friction starting point for any ANZ business moving off spreadsheets.', highlight: 'Start here' },
              { name: 'Zoho Inventory', icon: <Package className="w-5 h-5 text-indigo-400" />, desc: 'Advanced inventory: multiple warehouses, serial and batch tracking, and order management. Connects directly to Books for automatic cost and revenue sync.', highlight: 'Scale here' },
              { name: 'Zoho Expense', icon: <Receipt className="w-5 h-5 text-pink-400" />, desc: 'Expense capture, approvals and reimbursement. Adds value alongside Books for teams with high-volume travel, project or field expenses.', highlight: 'Add when ready' },
            ].map((app, i) => (
              <AnimatedSection key={app.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="glass-card p-7 h-full"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {app.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-citrus-dark bg-citrus/8 border border-citrus/15 px-2.5 py-1 rounded-full">{app.highlight}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-3">{app.name}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">{app.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SALES CRM */}
      <section className="section-gradient">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Pick the CRM that fits the team
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              Not every sales team needs a full CRM. We help you pick the right level of capability for where you are now.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection>
              <motion.div whileHover={{ y: -4 }} className="glass-card p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-citrus/8 border border-citrus/15 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-citrus-dark" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-slate-900">Zoho CRM</h3>
                    <span className="text-[10px] uppercase tracking-wider text-citrus-dark font-semibold">Full pipeline</span>
                  </div>
                </div>
                <p className="text-[13px] text-slate-500 leading-[1.7] mb-5">For mid-to-large teams with complex pipelines, automation, approvals, detailed reporting and integrations. The right choice when your sales process has multiple stages, territories or approval layers.</p>
                <div className="flex flex-wrap gap-2">
                  {['Automation', 'Approvals', 'Reporting', 'Integrations'].map(tag => (
                    <span key={tag} className="text-[11px] font-medium text-citrus-dark bg-citrus/8 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <motion.div whileHover={{ y: -4 }} className="glass-card p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-400/8 border border-indigo-400/15 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-slate-900">Zoho Bigin</h3>
                    <span className="text-[10px] uppercase tracking-wider text-citrus-dark font-semibold">Simple pipeline</span>
                  </div>
                </div>
                <p className="text-[13px] text-slate-500 leading-[1.7] mb-5">A simpler, lower-cost pipeline for small teams. Around half the cost of CRM and fast to adopt. The right choice when you need deal visibility without the weight of a full CRM.</p>
                <div className="flex flex-wrap gap-2">
                  {['Quick setup', 'Low cost', 'Simple', 'Deal tracking'].map(tag => (
                    <span key={tag} className="text-[11px] font-medium text-citrus-dark bg-citrus/8 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* GO FURTHER */}
      <section className="section-muted">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Where we can extend
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              Once the core is running, these apps add specialised capability where the business needs it.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Zoho Analytics', icon: <PieChart className="w-5 h-5 text-citrus" />, desc: 'Custom dashboards and reports that pull from every connected Zoho app.' },
              { name: 'People & Recruit', icon: <UserCheck className="w-5 h-5 text-indigo-400" />, desc: 'Full HRMS and recruitment, from onboarding to leave management.' },
              { name: 'Zoho Projects', icon: <Layers className="w-5 h-5 text-pink-400" />, desc: 'Project and task management with timesheets, milestones and client portals.' },
              { name: 'Creator & Flow', icon: <Workflow className="w-5 h-5 text-citrus" />, desc: 'Custom apps and automations for the last 20% of your needs that off-the-shelf cannot solve.' },
            ].map((app, i) => (
              <AnimatedSection key={app.name} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4">
                    {app.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-2">{app.name}</h3>
                  <p className="text-[12px] text-slate-500 leading-[1.6]">{app.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDED BUNDLE */}
      <section id="bundle" className="section-dark relative">
        <div className="orb orb-citrus w-[400px] h-[400px] -top-40 -right-40 opacity-20" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-white tracking-[-0.02em] mb-4">
              Books + Inventory + CRM or Bigin
            </h2>
            <p className="text-[15px] text-slate-400 max-w-lg mx-auto leading-[1.7]">
              The lowest-friction entry points, the fastest to value, and the foundation we grow from once we understand your operation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <BookOpen className="w-5 h-5" />, title: 'Accounting sorted', desc: 'GST, invoicing and reconciliation handled properly from day one.' },
              { icon: <Package className="w-5 h-5" />, title: 'Stock visibility', desc: 'Multi-warehouse tracking synced with your financials automatically.' },
              { icon: <Users className="w-5 h-5" />, title: 'Pipeline under control', desc: 'Every lead tracked, every follow-up scheduled, nothing in someone\'s head.' },
            ].map((item, i) => {
              const colors = ['#2dd4a8', '#818cf8', '#f472b6'];
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, borderColor: colors[i] }}
                    className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: colors[i], boxShadow: `0 6px 20px ${colors[i]}40` }}>
                      {item.icon}
                    </div>
                    <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-[13px] text-slate-400 leading-[1.6]">{item.desc}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY STEPS */}
      <ProcessFlow
        heading="From conversation to go-live"
        subheading="A structured process that delivers working software without scope surprises."
        steps={[
          { title: 'Discovery call', icon: <Users className="w-4 h-4" />, desc: 'Map your business workflow, processes, pain points, and what you want Zoho to resolve. You get a clear picture of the requirement and the gap.' },
          { title: 'Plan and scope', icon: <Settings className="w-4 h-4" />, desc: 'Choose the apps and the right Zoho plan tier, and confirm customisation, migration and training needs. You get a scoped solution and the right plan, not over-bought.' },
          { title: 'Signed scope of work', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Detail the deliverables and agree them in writing, so there is no ambiguity. You get a clear, signed statement of work.' },
          { title: 'Build and migrate', icon: <Wrench className="w-4 h-4" />, desc: 'Configure, build any custom Creator pieces, and migrate your data. You get a working, configured system with your data in it.' },
          { title: 'Train and go live', icon: <UserCheck className="w-4 h-4" />, desc: 'Role-based training with a single point of contact and a realistic, buffered timeline. You get trained users and a smooth go-live.' },
        ]}
      />

      {/* FAQ */}
      <section className="section-gradient">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em]">
              Honest answers to the questions that matter
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Why not just buy Zoho directly?', a: 'You can. But most teams underestimate the configuration, migration and training work. You end up with the right software and the wrong setup. We get it working properly the first time.' },
              { q: 'Do I need all the apps at once?', a: 'No. We start with the bundle that delivers value fastest and add apps only when they earn their place. Over-buying is as common as under-buying.' },
              { q: 'How long does it take?', a: 'A typical Books + Inventory + CRM implementation takes 4 to 8 weeks from signed scope to go-live. Timeline depends on data complexity and customisation needs.' },
              { q: 'What about Zoho One?', a: 'Zoho One gives you access to 45+ apps. Most businesses use fewer than ten. We help you pick the right plan tier so you are not paying for capability you never touch.' },
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
        headline="Start with the workflow, not the catalogue."
        subtext="A 30-minute call to understand your operation and tell you whether Zoho is the right fit."
        primaryCTA="Assess Whether Zoho Fits"
        primaryHref="/contact"
        secondaryCTA="inquiry@citrus.global"
        secondaryHref="mailto:inquiry@citrus.global"
      />
    </>
  );
}
