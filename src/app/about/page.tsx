'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Target, Search, Shield, Globe, MapPin, Users, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import GlanceVisual from '@/components/hero-visuals/GlanceVisual';
import LogoMarquee from '@/components/sections/LogoMarquee';

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
  { src: '/logos/clients/clients_seafrigogroup.webp', alt: 'Seafrigo Group' },
  { src: '/logos/clients/clients_redington.webp', alt: 'Redington' },
  { src: '/logos/clients/clients_rapidlogistics.webp', alt: 'Rapid Logistics' },
  { src: '/logos/clients/clients_livingston.webp', alt: 'Livingston' },
];

const partnerLogos = [
  { src: '/logos/partners/logo-cargowise.webp', alt: 'CargoWise' },
  { src: '/logos/partners/logo-aws.webp', alt: 'AWS' },
  { src: '/logos/partners/logo-microsoft.webp', alt: 'Microsoft' },
  { src: '/logos/partners/logo-salesforce.webp', alt: 'Salesforce' },
  { src: '/logos/partners/logo-automationanywhere.webp', alt: 'Automation Anywhere' },
  { src: '/logos/partners/logo-uipath.webp', alt: 'UiPath' },
  { src: '/logos/partners/logo-blume.webp', alt: 'Blume' },
  { src: '/logos/partners/logo-microlistics.webp', alt: 'Microlistics' },
  { src: '/logos/partners/logo-wisetechglobal.webp', alt: 'WiseTech Global' },
];

const partners = [
  { name: 'Richard Raj', role: 'Partner, New Zealand', photo: '/Partners/richard.png' },
  { name: 'Ikraam Reyaz', role: 'Partner, U.A.E', photo: '/Partners/ikraam.png' },
  { name: 'Raja Ratandeep', role: 'Partner, India', photo: '/Partners/raja.png' },
];

const beliefs = [
  { icon: <Target className="w-5 h-5 text-citrus" />, title: 'Outcomes are what we sell', desc: 'Platforms are how we deliver them. If the outcome does not require a platform, we say so.' },
  { icon: <Zap className="w-5 h-5 text-indigo-400" />, title: 'AI for speed', desc: 'People stay accountable for the call. AI analyses faster than any team could, but a consultant always owns the recommendation.' },
  { icon: <Search className="w-5 h-5 text-pink-400" />, title: 'Discovery before delivery', desc: 'Always. Most failed projects were never technology failures. They were scope failures that Discovery would have caught.' },
  { icon: <Shield className="w-5 h-5 text-citrus" />, title: 'Fit over preference', desc: 'Sometimes the right answer is no platform at all. We recommend on evidence, not on which vendor we prefer.' },
];

export default function AboutPage() {
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
                We find what is quietly costing ANZ businesses, then{' '}
                <span className="gradient-text">make the fix stick.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                AI-first consulting, implementation and operational improvement for Australian and New Zealand businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <GlanceVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PARTNERSHIP */}
      <section className="section-dark relative">
        <div className="orb orb-indigo w-[400px] h-[400px] -top-48 -right-48 opacity-30" />
        <div className="orb orb-coral w-[300px] h-[300px] -bottom-32 -left-32 opacity-20" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-white tracking-[-0.02em] mb-4">
              A partnership built on delivery
            </h2>
            <p className="text-[15px] text-slate-400 max-w-2xl mx-auto leading-[1.8]">
              In 2023, after working multiple projects together, two companies joined forces to create Citrus Global. A dynamic fusion of global supply chain technology and local digital enablement for the Oceania region.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <AnimatedSection delay={0.1}>
              <motion.div whileHover={{ y: -4 }} className="border border-white/10 rounded-2xl p-7 bg-white/[0.03] backdrop-blur-sm h-full">
                <div className="h-14 mb-5 flex items-center">
                  <Image src="/sfl-tech.png" alt="SFL Tech" width={180} height={56} className="h-12 w-auto brightness-0 invert opacity-90" />
                </div>
                <p className="text-[13px] text-slate-400 leading-[1.7]">
                  A global supply chain technology provider with a 100+ person team and Platinum accreditation for CargoWise deployments. Deep expertise in logistics systems, ERP, AI-driven solutions and data analytics across five continents.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div whileHover={{ y: -4 }} className="border border-white/10 rounded-2xl p-7 bg-white/[0.03] backdrop-blur-sm h-full">
                <div className="h-14 mb-5 flex items-center">
                  <Image src="/kmc-logo-light.png" alt="Knights Move Consulting" width={220} height={64} className="h-14 w-auto brightness-0 invert opacity-90" />
                </div>
                <p className="text-[13px] text-slate-400 leading-[1.7]">
                  A lean digital enabler for industries in Oceania. End-to-end project management, management consultancy and digital transformation with deep understanding of ANZ business operations and compliance.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Briefcase className="w-5 h-5 text-citrus" />, value: '800+', label: 'Projects completed' },
                { icon: <Users className="w-5 h-5 text-indigo-400" />, value: '60+', label: 'Consultants' },
                { icon: <MapPin className="w-5 h-5 text-pink-400" />, value: '75+', label: 'Locations' },
                { icon: <Globe className="w-5 h-5 text-citrus" />, value: '5', label: 'Continents' },
              ].map((stat, i) => (
                <motion.div key={i} whileHover={{ y: -2 }} className="text-center p-4 border border-white/8 rounded-xl bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center mx-auto mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold gradient-text mb-0.5">{stat.value}</div>
                  <div className="text-[11px] text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-14 relative overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 mb-6">
          <AnimatedSection className="text-center">
            <p className="text-[12px] uppercase tracking-[0.15em] text-slate-400 font-medium">Trusted by leading organisations</p>
          </AnimatedSection>
        </div>
        <LogoMarquee logos={clientLogos} speed={35} />
      </section>

      {/* PHILOSOPHY */}
      <section className="section-light">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-[2rem] font-bold text-slate-900 leading-[1.15] tracking-[-0.02em] mb-6">
                Honest consulting that starts with the outcome
              </h2>
              <p className="text-[15px] text-slate-500 leading-[1.8] mb-5">
                Plenty of firms will sell you a platform. Fewer will tell you whether you need one. We start with the outcome, use AI to find the opportunity faster than any manual review could, and put experienced consultants in front of every recommendation.
              </p>
              <p className="text-[15px] text-slate-500 leading-[1.8] mb-5">
                AI is brilliant at speed. It is also confidently wrong often enough that a person has to own the call. So one of ours always does.
              </p>
              <p className="text-[15px] text-slate-500 leading-[1.8]">
                We sell outcomes, not software. We treat Discovery as non-negotiable, because most failed projects were never technology failures. And we measure ourselves on adoption, not go-live, because a system nobody uses is just an expensive way to make the old problem worse.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4 mt-6">
                {beliefs.map((belief, i) => (
                  <motion.div key={i} whileHover={{ y: -2 }} className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                        {belief.icon}
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-slate-900 mb-1">{belief.title}</h3>
                        <p className="text-[13px] text-slate-500 leading-[1.6]">{belief.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-dark relative">
        <div className="orb orb-citrus w-[350px] h-[350px] -top-40 left-[10%] opacity-20" />
        <div className="orb orb-coral w-[250px] h-[250px] -bottom-24 right-[15%] opacity-15" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-white tracking-[-0.02em] mb-3">
              The people behind the work
            </h2>
            <p className="text-[15px] text-slate-400 max-w-lg mx-auto">
              Three partners across three time zones, ensuring local accountability with global reach.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="relative group text-center"
                >
                  <div className="border-gradient-dark rounded-2xl">
                    <div className="p-8 rounded-[13px]">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-citrus/30 via-indigo-400/20 to-pink-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-citrus/40 transition-all duration-500">
                          <Image src={partner.photo} alt={partner.name} width={128} height={128} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <h3 className="text-[17px] font-bold text-white mb-1.5">{partner.name}</h3>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-citrus font-semibold">{partner.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PARTNERS */}
      <section className="py-14 relative overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 mb-6">
          <AnimatedSection className="text-center">
            <p className="text-[12px] uppercase tracking-[0.15em] text-slate-400 font-medium">Technology partners</p>
          </AnimatedSection>
        </div>
        <LogoMarquee logos={partnerLogos} speed={25} grayscale={false} />
      </section>

      {/* PLATFORMS OVERVIEW */}
      <section className="section-muted">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Six platforms, chosen on fit
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              We do not have a preferred vendor. We have preferred outcomes. The right platform is the one that fits your operation.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['ConexusOne AI', 'Zoho', 'ConexusOne ERP', 'CargoWise', 'Business Central', 'Raechal AI'].map((platform, i) => (
              <AnimatedSection key={platform} delay={i * 0.05}>
                <motion.span
                  whileHover={{ y: -2, borderColor: '#2dd4a8' }}
                  className="inline-block px-6 py-3 rounded-full bg-white text-sm font-medium text-slate-700 border border-slate-200 shadow-sm cursor-default transition-colors"
                >
                  {platform}
                </motion.span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Start with a conversation about what is not working."
        subtext="30-minute call. No software pitch. No obligation."
        primaryCTA="Book an AI-First Assessment"
        primaryHref="/contact"
        secondaryCTA="Email inquiry@citrus.global"
        secondaryHref="mailto:inquiry@citrus.global"
      />
    </>
  );
}
