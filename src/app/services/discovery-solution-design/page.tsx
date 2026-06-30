'use client';

import { motion } from 'framer-motion';
import { Compass, Workflow, CheckCircle2, ArrowRight, FileText, Settings, BarChart3, Shield, HelpCircle, Layers, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

export default function DiscoveryPage() {
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
                Know exactly what to build, and why,{' '}
                <span className="gradient-text">before anyone builds it.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                Discovery turns an opportunity into a delivery-ready plan: target process, the right platform on evidence, scope, risks and the commercial case. When Discovery is done properly, implementation has fewer surprises, lower cost and higher adoption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Discuss a Discovery engagement
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
                      <Compass className="w-4 h-4 text-citrus" />
                    </div>
                    <span className="text-[13px] font-semibold text-white">Discovery Output</span>
                  </div>
                  <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-citrus animate-pulse" /> Live
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Workflows mapped', value: '12 of 12' },
                    { label: 'Platform fit', value: 'Validated' },
                    { label: 'Scope locked', value: '47 requirements' },
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
                    <span className="text-[12px] text-citrus font-medium">Delivery-ready plan complete</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY DISCOVERY */}
      <section className="section-dark relative">
        <div className="orb orb-coral w-[300px] h-[300px] top-[-100px] right-[-100px] opacity-30" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-white tracking-[-0.02em] mb-4">
              Most failed projects were never technology failures
            </h2>
            <p className="text-[15px] text-slate-400 max-w-2xl mx-auto leading-[1.8]">
              They were scope failures. The requirements were wrong, the platform was chosen on preference instead of evidence, or the team discovered mid-build that the process it was meant to support had never been agreed. Discovery prevents all of that.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <Workflow className="w-5 h-5 text-citrus" />, title: 'Process first', desc: 'We design the target process before picking the platform. The platform serves the workflow, not the other way around.' },
              { icon: <Layers className="w-5 h-5 text-indigo-400" />, title: 'Platform on evidence', desc: 'We test the recommended platform against your real requirements and rule out alternatives with documented reasoning.' },
              { icon: <FileText className="w-5 h-5 text-pink-400" />, title: 'Scope locked down', desc: 'A detailed scope of work with real numbers: deliverables, timeline, risks and the commercial case. No ambiguity.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(45,212,168,0.4)' }}
                  className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm transition-colors h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-[1.6]">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section-light relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              A delivery-ready plan, not a document
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <Compass className="w-5 h-5 text-citrus" />, title: 'Target-state workflow', desc: 'How work will flow once the system is in place. Agreed by your team, not designed in a vacuum.' },
              { icon: <CheckCircle2 className="w-5 h-5 text-indigo-400" />, title: 'Platform recommendation', desc: 'A documented recommendation you can defend to stakeholders. Alternatives considered and ruled out with reasoning.' },
              { icon: <BarChart3 className="w-5 h-5 text-pink-400" />, title: 'Scope and commercial case', desc: 'What is in, what is out, what it will cost, and what the expected return is. Real numbers, not estimates.' },
              { icon: <Shield className="w-5 h-5 text-citrus" />, title: 'Risk register', desc: 'Known risks identified, assessed and mitigated before the build starts. Not discovered mid-project.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
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

      {/* STEPS */}
      <ProcessFlow
        heading="Three steps to a delivery-ready plan"
        steps={[
          { title: 'Current-state and target-state', icon: <Workflow className="w-4 h-4" />, desc: 'Map how work flows today and design the future state with your team. Test assumptions against real data and real people. You get a target-state workflow your team signs off on. A plan people will actually adopt.' },
          { title: 'Platform and integration validation', icon: <Settings className="w-4 h-4" />, desc: 'Test the recommended platform against your actual requirements. Evaluate alternatives and document why one fits and others do not. You get a platform recommendation you can defend, with clear evidence and documented trade-offs.' },
          { title: 'Scope and proposal', icon: <FileText className="w-4 h-4" />, desc: 'Agree what is in and out. Define deliverables, timeline, risks and bring it together commercially with a clear proposal. You get a delivery plan with real numbers. Everything you need to approve the build.' },
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
              { q: 'Do we need an Assessment before Discovery?', a: 'Not always. If you already know the problem and have a clear opportunity, Discovery can start directly. The Assessment is for when the problem is not yet clearly defined or quantified.' },
              { q: 'How long does Discovery take?', a: 'Typically 3 to 6 weeks depending on the complexity and number of stakeholders. We agree the timeline before starting.' },
              { q: 'What if Discovery says the platform is wrong?', a: 'Then we saved you from a bad implementation. That is exactly the point. Better to find out in Discovery than mid-build.' },
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
        headline="Know exactly what to build before anyone builds it."
        subtext="Book a 30-minute call to scope a discovery engagement for your operation."
        primaryCTA="Discuss a Discovery Engagement"
        primaryHref="/contact"
      />
    </>
  );
}
