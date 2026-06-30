'use client';

import { motion } from 'framer-motion';
import { Brain, Users, ArrowRight, Target, Zap, FileText, TrendingUp, AlertTriangle, Clock, Shield, HelpCircle, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

export default function AssessmentPage() {
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
                Find the money{' '}
                <span className="gradient-text">before you spend the money.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                Where is revenue leaking, cost piling up and effort getting wasted? We find out first, with AI doing the analysis and a consultant making the call. You get a clear picture of the opportunity and a firm recommendation on what to do next.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Request an assessment
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
                      <Brain className="w-4 h-4 text-citrus" />
                    </div>
                    <span className="text-[13px] font-semibold text-white">AI-First Scan</span>
                  </div>
                  <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-citrus animate-pulse" /> Running
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: 'Revenue leakage', value: '$210K/yr identified' },
                    { label: 'Process gaps', value: '9 found' },
                    { label: 'Quick wins', value: '4 actionable' },
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
                    <span className="text-[12px] text-citrus font-medium">Assessment complete, 3 recommendations</span>
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
                Most businesses skip straight to buying software
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-6">
                They pick a platform before understanding the problem. The implementation lands, but the real issue was never a technology gap. It was a process issue, a data issue, or a people issue that software alone cannot fix.
              </p>
              <p className="text-[15px] text-slate-400 leading-[1.8]">
                The assessment exists to prevent that. It finds where revenue, cost and effort are leaking, quantifies the opportunity, and tells you honestly whether a platform is the right response.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <AlertTriangle className="w-4 h-4 text-citrus" />, text: 'Revenue leaks you have normalised but not measured' },
                  { icon: <Clock className="w-4 h-4 text-slate-400" />, text: 'Effort wasted on manual processes that should be automated' },
                  { icon: <TrendingUp className="w-4 h-4 text-slate-400" style={{ transform: 'rotate(180deg)' }} />, text: 'Costs compounding in places nobody is watching' },
                  { icon: <Users className="w-4 h-4 text-citrus" />, text: 'Decisions made on gut feel because data arrives too late' },
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

      {/* HOW IT WORKS */}
      <section className="section-light relative">
        <div className="orb orb-citrus w-[300px] h-[300px] -top-32 -left-32 opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              AI speed, human judgement
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              The assessment combines AI analysis with experienced consultant validation. Neither alone is enough.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <Brain className="w-6 h-6 text-citrus" />, title: 'AI scans wide', desc: 'AI analyses your data to surface value leakage, process gaps and opportunities that manual review would miss or take weeks to find.' },
              { icon: <Users className="w-6 h-6 text-indigo-400" />, title: 'Consultants go deep', desc: 'An experienced consultant strips out false positives, applies context and business judgement, and stands behind every finding.' },
              { icon: <Target className="w-6 h-6 text-pink-400" />, title: 'You get clarity', desc: 'A prioritised opportunity summary with a clear recommendation: stop, fix one thing, or go deeper into Discovery.' },
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
        heading="Four steps to a clear answer"
        steps={[
          { title: 'Qualification', icon: <Shield className="w-4 h-4" />, desc: 'Confirm fit, data availability and capacity. Agree what we are looking for and what we will measure against. You get a clear go or no-go and a defined scope.' },
          { title: 'AI-assisted analysis', icon: <Zap className="w-4 h-4" />, desc: 'Run AI across your data to surface value leakage and gaps. The AI scans wider and faster than any manual review could match. You get a fast, wide scan that finds what people miss.' },
          { title: 'Consultant validation', icon: <Users className="w-4 h-4" />, desc: 'Strip out false positives, apply commercial context and business judgement. Every finding is reviewed by a person. You get findings a person stands behind, not a model.' },
          { title: 'Findings and next step', icon: <FileText className="w-4 h-4" />, desc: 'Recommend stop, targeted fix, or Discovery. Quantify the opportunity and present a clear recommendation. You get a prioritised opportunity summary and a clear next step.' },
        ]}
      />

      {/* THREE OUTCOMES */}
      <section className="section-muted">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              We tell you what we find, not what you want to hear
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { num: '01', title: 'Stop', desc: 'The problem is smaller than expected, or the fix is organisational, not technological. No platform needed. We say so.', color: '#2dd4a8' },
              { num: '02', title: 'Fix one thing', desc: 'There is a targeted intervention that will deliver measurable value. A process change, an integration, or a configuration fix.', color: '#818cf8' },
              { num: '03', title: 'Go deeper', desc: 'The opportunity justifies Discovery. We scope it, recommend the platform on evidence, and bring a delivery plan.', color: '#f472b6' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-7 h-full">
                  <div className="text-[2rem] font-bold mb-3" style={{ color: item.color }}>{item.num}</div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2">{item.title}</h3>
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
              { q: 'What data do you need from us?', a: 'It depends on the scope, but typically financial data, operational metrics and access to key people. We confirm exactly what is needed during qualification.' },
              { q: 'How long does the assessment take?', a: 'Typically 2 to 4 weeks from qualification to findings presentation. The AI analysis is fast; the consultant validation is thorough.' },
              { q: 'What does it cost?', a: 'It is a fixed-fee engagement scoped during qualification. We will tell you the investment before you commit. The assessment is designed to pay for itself in the findings.' },
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
        headline="Find the money before you spend the money."
        subtext="Book a 30-minute call to scope a structured assessment of your operation."
        primaryCTA="Book an Assessment Call"
        primaryHref="/contact"
        secondaryCTA="inquiry@citrus.global"
        secondaryHref="mailto:inquiry@citrus.global"
      />
    </>
  );
}
