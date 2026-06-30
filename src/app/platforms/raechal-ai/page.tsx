'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Search, Globe, FileText, BarChart3, Zap, ArrowRight, AlertTriangle, TrendingDown, Bot, Link2, PenTool, Settings, CheckCircle2, Target, HelpCircle, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

const dashboardFeatures = [
  { name: 'Overview', icon: <BarChart3 className="w-4 h-4 text-citrus" />, desc: 'Monthly visitors, average ranking position and Core Web Vitals at a glance.' },
  { name: 'Issues & Tasks', icon: <CheckCircle2 className="w-4 h-4 text-indigo-400" />, desc: 'Broken links, missing meta descriptions and thin-content pages, each with a prioritised one-click AI fix.' },
  { name: 'On-Page SEO', icon: <FileText className="w-4 h-4 text-pink-400" />, desc: 'Content score, keyword gaps, readability, internal and external links, title and meta coverage.' },
  { name: 'Off-Page SEO', icon: <Link2 className="w-4 h-4 text-citrus" />, desc: 'Referring domains, domain rating and anchor-text distribution.' },
  { name: 'Technical SEO', icon: <Settings className="w-4 h-4 text-indigo-400" />, desc: 'Crawlability, indexation coverage and JavaScript-render issues.' },
  { name: 'GEO & AI Visibility', icon: <Bot className="w-4 h-4 text-pink-400" />, desc: 'An AI-answer-readiness score and citation breakdown across ChatGPT, Perplexity and Google AI Overviews.' },
  { name: 'Keyword Studio', icon: <Search className="w-4 h-4 text-citrus" />, desc: 'Tracked keywords with intent, search volume and difficulty.' },
  { name: 'Blog Studio', icon: <PenTool className="w-4 h-4 text-indigo-400" />, desc: 'Long-form, SEO-scored article generation.' },
  { name: 'WordPress Autopilot', icon: <Zap className="w-4 h-4 text-pink-400" />, desc: 'Audits, content updates, broken-link fixes, redirects and media management pushed live.' },
];

export default function RaechalAIPage() {
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
                <Image src="/raechal-logo.png" alt="Raechal AI" width={160} height={36} className="h-full w-auto object-contain" priority />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                See exactly what AI says{' '}
                <span className="gradient-text">about your business.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                Raechal AI audits your website for traditional search and AI search, scores where you stand, and shows the precise fixes, prioritised by impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Book your free audit call
                  <ArrowRight className="w-5 h-5" />
                </BookingButton>
                <BookingButton className="btn-secondary text-base px-8 py-4">
                  Discuss a managed plan
                </BookingButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="dark-card p-8 glow-pulse">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-citrus/20 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-citrus" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">AI Visibility Score</p>
                    <p className="text-xs text-slate-400">Your business in AI search</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'ChatGPT', score: 72, color: '#2dd4a8' },
                    { label: 'Perplexity', score: 45, color: '#818cf8' },
                    { label: 'Google AI', score: 58, color: '#f472b6' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">{item.label}</span>
                        <span className="font-semibold" style={{ color: item.color }}>{item.score}/100</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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
                Your buyers ask AI before they ask Google
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-6">
                If ChatGPT, Gemini or Perplexity cannot find a clear, credible answer about your business, they recommend a competitor. And you never see the enquiry you lost.
              </p>
              <p className="text-[15px] text-slate-400 leading-[1.8]">
                Traditional SEO still matters, but the rules have changed. AI engines parse your site differently. They weigh structure, authority and answer-readiness. If your content is not optimised for both, you are invisible in the channel your buyers are moving to.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <AlertTriangle className="w-4 h-4 text-citrus" />, text: 'AI assistants recommend competitors because your site is not structured for them' },
                  { icon: <TrendingDown className="w-4 h-4 text-slate-400" />, text: 'Organic traffic declining as AI Overviews absorb clicks' },
                  { icon: <Search className="w-4 h-4 text-citrus" />, text: 'No visibility into how AI engines interpret your content' },
                  { icon: <Globe className="w-4 h-4 text-slate-400" />, text: 'Broken links, thin content and technical issues compounding' },
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

      {/* DASHBOARD */}
      <section className="section-light relative">
        <div className="orb orb-citrus w-[300px] h-[300px] -top-32 -left-32 opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Everything you need to see, in one place
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              Every issue comes with a prioritised fix. No guesswork, no consultant interpretation layer.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dashboardFeatures.map((feature, i) => (
              <AnimatedSection key={feature.name} delay={i * 0.05}>
                <motion.div whileHover={{ y: -4 }} className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-[14px] font-bold text-slate-900">{feature.name}</h3>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-[1.6]">{feature.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="section-gradient">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Where the impact is
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { metric: '~35%', icon: <TrendingDown className="w-6 h-6 text-citrus" style={{ transform: 'rotate(180deg) scaleX(-1)' }} />, label: 'Lower cost', desc: 'By replacing manual audits and external consultants with automated, always-on monitoring.' },
              { metric: '~60%', icon: <Sparkles className="w-6 h-6 text-indigo-400" />, label: 'Less manual work', desc: 'By automating repetitive fixes, content updates and reporting that would otherwise take specialist hours.' },
              { metric: '~5x', icon: <Zap className="w-6 h-6 text-pink-400" />, label: 'Faster execution', desc: 'Fixes ship as they are found rather than sitting in a sprint backlog.' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mx-auto mb-4"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-[2.5rem] font-bold gradient-text mb-1">{stat.metric}</div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-2">{stat.label}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.6] max-w-xs mx-auto">{stat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-xs text-slate-400 text-center mt-8 max-w-xl mx-auto">
            Figures above are Raechal AI&apos;s stated product impact. Actual results depend on your site, workflow and scope.
          </p>
        </div>
      </section>

      {/* DELIVERY */}
      <ProcessFlow
        heading="From audit to measurable improvement"
        steps={[
          { title: 'Confirm the basics', icon: <Target className="w-4 h-4" />, desc: 'Confirm the website, CMS, market and the visibility goal that matters commercially. You get a clear, agreed objective.' },
          { title: 'Run or review the audit', icon: <Search className="w-4 h-4" />, desc: 'Baseline technical, on-page, off-page and AI visibility. You get a visibility baseline you can see.' },
          { title: 'Prioritise by impact', icon: <BarChart3 className="w-4 h-4" />, desc: 'Rank the issues by commercial relevance and effort. You get a prioritised action plan.' },
          { title: 'Implement approved work', icon: <Zap className="w-4 h-4" />, desc: 'Apply the approved fixes and content, with sign-off on every change. You get approved improvements, live.' },
          { title: 'Measure and refresh', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Measure over an agreed period and refresh priorities. You get a measured progress review.' },
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
              { q: 'Do I need to switch CMS?', a: 'No. Raechal AI works with any CMS. The WordPress Autopilot adds deeper automation for WP sites, but the audit and recommendations work on any platform.' },
              { q: 'How is this different from Ahrefs or SEMrush?', a: 'Those tools show data. Raechal prioritises the fixes, scores AI readiness, and can push changes live. It is an execution platform, not just a reporting dashboard.' },
              { q: 'What does the free audit show?', a: 'A baseline technical, on-page, off-page and AI visibility score. Enough to see where you stand and whether the full platform is worth engaging.' },
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
        headline="Start a free audit and see where you stand in AI search."
        subtext="Book a 30-minute call and we'll show you exactly what ChatGPT, Gemini and Perplexity see when they look at your site."
        primaryCTA="Book a Free Audit Call"
        primaryHref="/contact"
      />
    </>
  );
}
