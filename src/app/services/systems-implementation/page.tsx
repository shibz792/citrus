'use client';

import { motion } from 'framer-motion';
import { Wrench, Database, Users, CheckCircle2, ArrowRight, Settings, Shield, FileText, HelpCircle, Zap, Layers, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

export default function ImplementationPage() {
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
                Turn the plan into a system{' '}
                <span className="gradient-text">your team actually uses.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                We deliver against an approved scope with defined owners, measurable criteria and formal change control. The goal is adoption, not configuration. A system nobody uses is just an expensive way to make the old problem worse.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Discuss a scoped implementation
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
                      <Wrench className="w-4 h-4 text-citrus" />
                    </div>
                    <span className="text-[13px] font-semibold text-white">Implementation Tracker</span>
                  </div>
                  <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-citrus animate-pulse" /> Active
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Configuration', value: '85% complete' },
                    { label: 'Data migration', value: 'Validated' },
                    { label: 'User training', value: '3 of 4 sessions done' },
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
                    <span className="text-[12px] text-citrus font-medium">Go-live readiness confirmed</span>
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
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-white tracking-[-0.02em] mb-4">
              Implementation is where projects succeed or fail
            </h2>
            <p className="text-[15px] text-slate-400 max-w-2xl mx-auto leading-[1.8]">
              Most failures are not technology problems. They are scope creep, poor data migration, no change management, or training that does not match how people actually work. Our implementation process is built to prevent all of that.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="w-5 h-5 text-citrus" />, title: 'Scope discipline', desc: 'Defined owners and formal change control. Nothing gets added without agreement.' },
              { icon: <Database className="w-5 h-5 text-indigo-400" />, title: 'Clean data', desc: 'Migrated data that is mapped, validated and trustworthy from day one.' },
              { icon: <Users className="w-5 h-5 text-pink-400" />, title: 'Real training', desc: 'Role-based training on the actual process, not a generic walkthrough.' },
              { icon: <CheckCircle2 className="w-5 h-5 text-citrus" />, title: 'Adoption focus', desc: 'We measure adoption, not go-live. A system people use, not a system that is technically live.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(45,212,168,0.4)' }}
                  className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm transition-colors h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[14px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-[1.6]">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="section-light relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Everything between approved scope and stable system
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { icon: <Settings className="w-5 h-5 text-citrus" />, title: 'System configuration', desc: 'Platform configured to the agreed design, not over-customised.' },
              { icon: <Layers className="w-5 h-5 text-indigo-400" />, title: 'Integration build', desc: 'Connections to your existing systems, tested end-to-end.' },
              { icon: <Database className="w-5 h-5 text-pink-400" />, title: 'Data migration', desc: 'Clean, mapped, validated data. Not a dump-and-hope approach.' },
              { icon: <FileText className="w-5 h-5 text-citrus" />, title: 'Testing & acceptance', desc: 'System testing and user acceptance with documented sign-off.' },
              { icon: <Users className="w-5 h-5 text-indigo-400" />, title: 'Training & change', desc: 'Role-based training and change management that drives adoption.' },
              { icon: <Zap className="w-5 h-5 text-pink-400" />, title: 'Go-live & hypercare', desc: 'Cut over support and stabilisation until the system is running cleanly.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.6]">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <ProcessFlow
        heading="Three phases to a working system"
        steps={[
          { title: 'Build and migrate', icon: <Wrench className="w-4 h-4" />, desc: 'Configure, integrate and migrate clean data. Every change governed against the approved scope. You get a configured system and trustworthy data with no scope surprise.' },
          { title: 'Test and accept', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Run system and user acceptance testing with documented sign-off at every gate. You get test evidence and an acceptance record that proves the system works.' },
          { title: 'Train, go live, hypercare', icon: <Users className="w-4 h-4" />, desc: 'Train on the real process, cut over with support, and stabilise until the team is confident. You get a live system, trained users, and a clean handover to operations.' },
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
              { q: 'Can we skip Discovery and go straight to implementation?', a: 'We strongly advise against it. Discovery prevents scope failures. But if you come with a fully defined scope and platform decision, we will review it honestly and tell you if it is ready to build against.' },
              { q: 'How do you handle scope changes?', a: 'Through formal change control. Every change is assessed for impact on timeline, cost and risk, documented, and approved before it enters the build. No informal additions.' },
              { q: 'What happens after go-live?', a: 'Hypercare: a defined stabilisation period where we monitor, fix and support. Then a clean handover to your team or to our Optimisation & Advisory service for ongoing improvement.' },
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
        headline="Turn the plan into a system your team actually uses."
        subtext="We deliver against scope, train on the real process, and measure adoption."
        primaryCTA="Discuss a Scoped Implementation"
        primaryHref="/contact"
      />
    </>
  );
}
