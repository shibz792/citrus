'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Copy, Clock, TrendingDown, Zap, Target, CheckCircle2, Search, Compass, Wrench, LineChart, Shield, Users, Sparkles, AlertTriangle, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import LiveScanVisual from '@/components/hero-visuals/LiveScanVisual';
import TrustStats from '@/components/sections/TrustStats';
import BookingButton from '@/components/ui/BookingButton';
import LogoMarquee from '@/components/sections/LogoMarquee';
import GlobalFootprint from '@/components/sections/GlobalFootprint';

const clientLogos = [
  { src: '/logos/clients/clients_cevalogistics.webp', alt: 'CEVA Logistics' },
  { src: '/logos/clients/clients_hyundaiglovis.webp', alt: 'Hyundai Glovis' },
  { src: '/logos/clients/clients_mondialevgl.webp', alt: 'Mondiale VGL' },
  { src: '/logos/clients/clients_portsofauckland.webp', alt: 'Ports of Auckland' },
  { src: '/logos/clients/clients_frucorsuntory.webp', alt: 'Frucor Suntory' },
  { src: '/logos/clients/clients_mitre10.webp', alt: 'Mitre 10' },
  { src: '/logos/clients/clients_bidvestlogistics.webp', alt: 'Bidvest Logistics' },
  { src: '/logos/clients/clients_yamatotransport.webp', alt: 'Yamato Transport' },
  { src: '/logos/clients/clients_aucklandcouncil.webp', alt: 'Auckland Council' },
  { src: '/logos/clients/clients_kanooshipping.webp', alt: 'Kanoo Shipping' },
  { src: '/logos/clients/clients_deugrogroup.webp', alt: 'Deugro Group' },
  { src: '/logos/clients/clients_npdl.webp', alt: 'Neptune Pacific Direct Line' },
  { src: '/logos/clients/clients_thewonderfulcompany.webp', alt: 'The Wonderful Company' },
  { src: '/logos/clients/clients_tql.webp', alt: 'TQL' },
  { src: '/logos/clients/clients_uwl.webp', alt: 'UWL' },
  { src: '/logos/clients/clients_gefco.webp', alt: 'Gefco' },
];

const clientLogos2 = [
  { src: '/logos/clients/clients_1upcargo.webp', alt: '1UP Cargo' },
  { src: '/logos/clients/clients_seafrigogroup.webp', alt: 'Seafrigo Group' },
  { src: '/logos/clients/clients_redington.webp', alt: 'Redington' },
  { src: '/logos/clients/clients_livingston.webp', alt: 'Livingston' },
  { src: '/logos/clients/clients_rapidlogistics.webp', alt: 'Rapid Logistics' },
  { src: '/logos/clients/clients_naurushippingline.webp', alt: 'Nauru Shipping Line' },
  { src: '/logos/clients/clients_pacifictradewest.webp', alt: 'Pacific Trade West' },
  { src: '/logos/clients/clients_healthalliance.webp', alt: 'Health Alliance' },
  { src: '/logos/clients/clients_vbegroup.webp', alt: 'VBE Group' },
  { src: '/logos/clients/clients_riflogistics.webp', alt: 'RIF Logistics' },
  { src: '/logos/clients/clients_transam.webp', alt: 'TransAm' },
  { src: '/logos/clients/clients_xpand.webp', alt: 'Xpand Logistics' },
  { src: '/logos/clients/clients_neptuneshippingagency.webp', alt: 'Neptune Shipping Agency' },
  { src: '/logos/clients/clients_northernregionfootball.webp', alt: 'Northern Region Football' },
  { src: '/logos/clients/clients_predatorfree2050.webp', alt: 'Predator Free 2050' },
  { src: '/logos/clients/clients_changemanagementinst.webp', alt: 'Change Management Institute' },
];

const W = 'max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16';

const platformLogos: Record<string, { src: string; label?: string }> = {
  'ConexusOne AI': { src: '/ConexusOneAI.png' },
  'Zoho': { src: '/zoho-logo.svg' },
  'ConexusOne ERP': { src: '/ConexusOneERP.png' },
  'CargoWise': { src: '/cargowise-logo.svg' },
  'Business Central': { src: '/business-central-icon.svg', label: 'Business Central' },
  'Raechal AI': { src: '/raechal-logo.png' },
};

const platforms = [
  { name: 'ConexusOne AI', tag: 'Flagship', desc: 'Agentic AI that completes freight and customs tasks end to end.', href: '/platforms/conexusone-ai' },
  { name: 'Zoho', tag: 'Business', desc: 'Books, Inventory, CRM and Bigin. Finance and sales first.', href: '/platforms/zoho' },
  { name: 'ConexusOne ERP', tag: 'Connected ERP', desc: 'One connected system with ANZ localisation and compliance built in.', href: '/platforms/conexusone-erp' },
  { name: 'CargoWise', tag: 'Logistics', desc: 'Implementation, optimisation, integration and managed support.', href: '/platforms/cargowise' },
  { name: 'Business Central', tag: 'Enterprise', desc: 'Structured finance and operations for Microsoft-aligned businesses.', href: '/platforms/business-central' },
  { name: 'Raechal AI', tag: 'Visibility', desc: 'See what AI search engines say about your business. Then fix it.', href: '/platforms/raechal-ai' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="aurora-bg" />
        <div className="aurora-third" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className={`relative w-full pt-28 pb-16 ${W}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                Find what&apos;s costing you{' '}
                <span className="gradient-text">revenue, margin, and control.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                AI to find the problem fast. Experienced consultants to fix it properly. The right systems to make it stick.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 mb-4">
                <BookingButton />
                <Link href="#journey" className="btn-secondary">How it works</Link>
              </motion.div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-[13px] text-slate-400">30-minute call · No software pitch · No obligation</motion.p>
            </div>

            {/* Animated assessment visual */}
            <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:block">
              <LiveScanVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <TrustStats />

      {/* CLIENT LOGOS */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 mb-6">
          <p className="text-center text-[12px] uppercase tracking-[0.15em] text-slate-400 font-medium">Trusted by leading organisations across ANZ and beyond</p>
        </div>
        <LogoMarquee logos={clientLogos} speed={35} className="mb-4" />
        <LogoMarquee logos={clientLogos2} speed={40} reverse />
      </section>

      {/* PAIN POINTS */}
      <section className="section-dark relative">
        <div className={W}>
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-3">Growth is adding admin, not profit</h2>
            <p className="text-[15px] text-slate-400 leading-[1.7] max-w-xl mx-auto">Work gets done twice. Decisions land late. Systems sit half-used. It is friction, everywhere.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: <Copy className="w-5 h-5 text-citrus" />, title: 'Double handling', desc: 'Same data keyed into three systems. Every entry is a chance for error.' },
              { icon: <Clock className="w-5 h-5 text-indigo-400" />, title: 'Late decisions', desc: 'Reports arrive after the moment passes. Opportunities gone.' },
              { icon: <TrendingDown className="w-5 h-5 text-pink-400" />, title: 'Margin leakage', desc: 'Wrong charges, missed invoices, avoidable fines compound monthly.' },
              { icon: <AlertTriangle className="w-5 h-5 text-citrus" />, title: 'Underused systems', desc: 'Platforms at 30% utilisation. That is not an IT problem.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} whileHover={{ y: -4, borderColor: 'rgba(45,212,168,0.3)' }} className="border border-white/8 rounded-xl p-5 bg-white/[0.02] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center mb-3">{item.icon}</div>
                <h3 className="text-[15px] font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-[13px] text-slate-400 leading-[1.6]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-gradient relative">
        <div className={W}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-[2rem] font-bold text-slate-900 leading-[1.15] tracking-[-0.02em] mb-4">Start with opportunity, not software</h2>
                <p className="text-[15px] text-slate-500 leading-[1.7] mb-6">Most firms sell a platform on day one. We start by finding whether you need one at all.</p>
                <div className="space-y-3">
                  {[
                    { icon: <Zap className="w-4 h-4 text-citrus" />, title: 'AI for speed, people for judgement', desc: 'A consultant always owns the recommendation.' },
                    { icon: <Target className="w-4 h-4 text-pink-400" />, title: 'Outcomes before platforms', desc: 'We recommend the right fit, including none.' },
                    { icon: <CheckCircle2 className="w-4 h-4 text-indigo-400" />, title: 'We finish the job', desc: 'Configuration, migration, training, go-live and the weeks after.' },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }} className="flex gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${i === 0 ? 'bg-citrus/8 border border-citrus/20' : i === 1 ? 'bg-pink-400/8 border border-pink-400/20' : 'bg-indigo-400/8 border border-indigo-400/20'}`}>{item.icon}</div>
                      <div><p className="text-[14px] font-bold text-slate-900">{item.title}</p><p className="text-[13px] text-slate-500 mt-0.5">{item.desc}</p></div>
                    </motion.div>
                  ))}
                </div>
                <Link href="/services/ai-first-business-assessment" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-citrus-dark hover:text-citrus-dark mt-5 transition-colors">Learn about our assessment <ArrowRight className="w-3.5 h-3.5" /></Link>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15} direction="right">
                <div className="dark-card p-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-citrus/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-citrus" />
                      </div>
                      <span className="text-[13px] font-semibold text-white">Three honest outcomes</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { num: '01', label: 'Stop', desc: 'There is no problem worth solving right now.' },
                        { num: '02', label: 'Fix one thing', desc: 'One intervention will move the needle.' },
                        { num: '03', label: 'Go deeper', desc: 'A full implementation is warranted.' },
                      ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                          <span className="text-[18px] font-bold gradient-text leading-none mt-0.5">{item.num}</span>
                          <div>
                            <div className="text-[13px] font-semibold text-white">{item.label}</div>
                            <div className="text-[12px] text-slate-400 mt-0.5">{item.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-[12px] text-slate-500 mt-4 leading-[1.6]">We tell you what we find, not what you want to hear.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="section-light relative">
        <div className={W}>
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-2">Six platforms, chosen on fit</h2>
            <p className="text-[15px] text-slate-500 max-w-md mx-auto">We have preferred outcomes, not preferred vendors.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {platforms.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}>
                <Link href={p.href} className="group block h-full">
                  <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }} className="glass-card p-5 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] uppercase tracking-[0.15em] font-bold ${i % 3 === 0 ? 'text-citrus-dark' : i % 3 === 1 ? 'text-indigo-400' : 'text-pink-400'}`}>{p.tag}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-citrus transition-colors" />
                    </div>
                    <h3 className="sr-only">{p.name}</h3>
                    <div className="h-8 flex items-center gap-2 mb-3">
                      <Image src={platformLogos[p.name]?.src ?? ''} alt={p.name} width={120} height={32} className="h-full w-auto object-contain" />
                      {platformLogos[p.name]?.label && (
                        <span className="text-[15px] font-bold text-slate-800 tracking-tight">{platformLogos[p.name]?.label}</span>
                      )}
                    </div>
                    <p className="text-[13px] text-slate-500 leading-[1.55]">{p.desc}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section-dark py-14 relative">
        <div className={W}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '3-5x', label: 'More business', sub: 'Same team size' },
              { value: '80%', label: 'Fewer errors', sub: 'Documents & accounting' },
              { value: '50%', label: 'Fewer fines', sub: 'Compliance automation' },
              { value: '30min', label: 'Saved per job', sub: 'Shipment creation' },
            ].map((m, i) => (
              <motion.div key={i} initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, type: 'spring', stiffness: 150 }} className="text-center p-4 border border-white/8 rounded-xl bg-white/[0.02]">
                <div className="text-[2rem] md:text-[2.5rem] font-bold gradient-text leading-none mb-1 tracking-tight">{m.value}</div>
                <div className="text-[13px] font-bold text-white">{m.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="section-light relative">
        <div className={W}>
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-2">One journey, four stages</h2>
            <p className="text-[15px] text-slate-500 max-w-md mx-auto">Join at any point. Each stage takes the risk out of the next.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', icon: <Search className="w-5 h-5" />, title: 'Assessment', desc: 'AI and consultants find where revenue, cost and effort leak. You get a clear picture and a firm recommendation.', href: '/services/ai-first-business-assessment' },
              { num: '02', icon: <Compass className="w-5 h-5" />, title: 'Discovery', desc: 'Design the target process, choose the platform on evidence, lock the scope before anyone builds.', href: '/services/discovery-solution-design' },
              { num: '03', icon: <Wrench className="w-5 h-5" />, title: 'Implementation', desc: 'Configure, migrate, test, train and go live with formal change control. The goal is adoption.', href: '/services/systems-implementation' },
              { num: '04', icon: <LineChart className="w-5 h-5" />, title: 'Advisory', desc: 'Lift utilisation and performance once live. Measure, intervene, hand back.', href: '/services/optimisation-advisory' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={step.href} className="group block h-full">
                  <motion.div whileHover={{ y: -6 }} className="border-gradient h-full">
                    <div className="p-5 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-citrus to-citrus-dark flex items-center justify-center text-white" style={{ boxShadow: '0 4px 14px rgba(45,212,168,0.25)' }}>{step.icon}</div>
                        <span className="text-[24px] font-bold gradient-text">{step.num}</span>
                      </div>
                      <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">{step.title}</h3>
                      <p className="text-[13px] text-slate-500 leading-[1.6] mb-3 flex-1">{step.desc}</p>
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-citrus-dark group-hover:gap-2 transition-all">Learn more <ChevronRight className="w-3 h-3" /></span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CITRUS + CONVERSION */}
      <section className="section-gradient relative">
        <div className={W}>
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em]">Why businesses choose Citrus</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <Sparkles className="w-5 h-5 text-citrus" />, title: 'AI for speed', desc: 'AI scans wide and fast, finding what manual review misses. A consultant always validates and owns the call.' },
              { icon: <Shield className="w-5 h-5 text-pink-400" />, title: 'Outcomes first', desc: 'We recommend the right fit, including none. If the answer is stop, we say so. Clarity, not a platform sale.' },
              { icon: <Users className="w-5 h-5 text-indigo-400" />, title: 'We finish the job', desc: 'Assessment through implementation, training, go-live and stabilisation. Not a deck someone else makes real.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }} className="glass-card p-6 h-full">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${i === 0 ? 'bg-citrus/10 border border-citrus/20' : i === 1 ? 'bg-pink-400/10 border border-pink-400/20' : 'bg-indigo-400/10 border border-indigo-400/20'}`}>{item.icon}</div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-1.5 tracking-tight">{item.title}</h3>
                <p className="text-[14px] text-slate-500 leading-[1.65]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <AnimatedSection>
            <div className="dark-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div><h3 className="text-[17px] font-bold text-white mb-1">Ready to find out what is costing you?</h3><p className="text-[14px] text-slate-400">Book a 30-minute call and we will tell you what we find.</p></div>
              <BookingButton className="btn-citrus whitespace-nowrap flex-shrink-0">Book your assessment <ArrowRight className="w-4 h-4" /></BookingButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GlobalFootprint />

      <CTASection headline="Find out where your operation is losing time, margin or control." subtext="30-minute call. No software pitch. No obligation." primaryCTA="Discuss your challenge" primaryHref="/contact" secondaryCTA="inquiry@citrus.global" secondaryHref="mailto:inquiry@citrus.global" />
    </>
  );
}
