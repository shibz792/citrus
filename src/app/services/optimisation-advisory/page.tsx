'use client';

import { motion } from 'framer-motion';
import { LineChart, Target, Users, CheckCircle2, ArrowRight, BarChart3, TrendingUp, Settings, Wrench, HelpCircle, Search, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

export default function AdvisoryPage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                When the numbers are below target,{' '}
                <span className="gradient-text">fix the cause, not the dashboard.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                We work with your leaders and operators to lift utilisation, tighten process discipline and get measured performance from what you already own. The system is live. Now make it deliver.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Review a performance gap
                  <ArrowRight className="w-5 h-5" />
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
                      <LineChart className="w-4 h-4 text-citrus" />
                    </div>
                    <span className="text-[13px] font-semibold text-white">Performance Monitor</span>
                  </div>
                  <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-citrus animate-pulse" /> Live
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'KPI vs target', value: '67% → Improving' },
                    { label: 'Utilisation rate', value: '41% → 72%' },
                    { label: 'Workarounds', value: '8 → 2 remaining' },
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
                    <span className="text-[12px] text-citrus font-medium">3 interventions delivering results</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="section-dark relative">
        <div className="orb orb-coral w-[300px] h-[300px] top-[-100px] right-[-100px] opacity-30" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-[2rem] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-5">
                Go-live is the starting line, not the finish
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-6">
                Most systems underperform not because of the technology, but because adoption plateaus, workarounds persist, and the configuration never evolves with the business. The system is live, but the value the business case promised has not arrived.
              </p>
              <p className="text-[15px] text-slate-400 leading-[1.8]">
                Optimisation & Advisory finds the root cause, designs the intervention, supports execution, and measures the result. Then hands it back.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <TrendingUp className="w-4 h-4 text-slate-400" style={{ transform: 'rotate(180deg)' }} />, text: 'KPIs below the business case targets' },
                  { icon: <Settings className="w-4 h-4 text-citrus" />, text: 'Configuration has not kept pace with the business' },
                  { icon: <Users className="w-4 h-4 text-slate-400" />, text: 'Workarounds still in use months after go-live' },
                  { icon: <BarChart3 className="w-4 h-4 text-citrus" />, text: 'Utilisation is low and nobody is measuring why' },
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

      {/* WHAT WE DO */}
      <section className="section-light relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Find the cause, design the fix, measure the result
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <Search className="w-6 h-6 text-citrus" />, title: 'Root cause analysis', desc: 'We find the real cause. Not the symptom, not the department people blame. The actual constraint or gap driving underperformance.' },
              { icon: <Wrench className="w-6 h-6 text-indigo-400" />, title: 'Targeted intervention', desc: 'Prioritised actions with owners and timelines. Process changes, configuration updates, training, whatever the root cause demands.' },
              { icon: <LineChart className="w-6 h-6 text-pink-400" />, title: 'Measured handback', desc: 'KPIs tracked over an agreed period. When the numbers move, we hand ownership back to your team with a sustainable operating rhythm.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="glass-card p-7 h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <ProcessFlow
        heading="Three steps to measurable improvement"
        steps={[
          { title: 'Baseline and root cause', icon: <Target className="w-4 h-4" />, desc: 'Establish the baseline. Measure what is actually happening against what should be happening. Find the root cause, not the symptom. You get a baseline and the root cause named. No guesswork, no blame, just evidence.' },
          { title: 'Design and support execution', icon: <Wrench className="w-4 h-4" />, desc: 'Design prioritised interventions and help deliver them. Process change, configuration, training, whatever the root cause demands. You get an action plan with owners and changes made, not a report that sits on a shelf.' },
          { title: 'Monitor and hand back', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Track KPIs over an agreed period. Adjust where needed. Transfer ownership back to your team when the numbers are stable. You get measured movement and a handover plan. Sustainable improvement, not dependency.' },
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
              { q: 'We did not implement with Citrus. Can you still help?', a: 'Yes. We audit the current state objectively. It does not matter who built it. What matters is whether it is delivering value now.' },
              { q: 'How long does an advisory engagement take?', a: 'The initial baseline and root cause typically takes 2 to 4 weeks. The intervention and monitoring period depends on the complexity. We agree the timeline before starting.' },
              { q: 'Is this an ongoing retainer?', a: 'It can be, but the default is a defined engagement with a handover point. The goal is to transfer ownership back to your team, not create a dependency.' },
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
        headline="Fix the cause, not the dashboard."
        subtext="Start with an honest look at what is underperforming and why."
        primaryCTA="Review a Performance Gap"
        primaryHref="/contact"
      />
    </>
  );
}
