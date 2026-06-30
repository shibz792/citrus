'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Ship, Package, Factory, ShoppingCart, Warehouse, ArrowRight, ArrowUpRight, Search, Compass, Wrench, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';
import IndustryCoverageVisual from '@/components/hero-visuals/IndustryCoverageVisual';

const industries = [
  {
    icon: <Ship className="w-6 h-6" />,
    title: 'Freight Forwarding and Customs',
    desc: 'CargoWise and ConexusOne AI across the enquiry-to-invoice lifecycle. Implementation, optimisation, agentic automation and managed support for ANZ forwarders and customs brokers.',
    platforms: ['CargoWise', 'ConexusOne AI'],
    links: [
      { label: 'CargoWise', href: '/platforms/cargowise' },
      { label: 'ConexusOne AI', href: '/platforms/conexusone-ai' },
    ],
  },
  {
    icon: <Warehouse className="w-6 h-6" />,
    title: 'Logistics and Warehousing',
    desc: 'CargoWise, ConexusOne AI, or Zoho Inventory by size. Whether you run a warehouse, a 3PL or a transport fleet, we match the platform to the operation and the volume.',
    platforms: ['CargoWise', 'ConexusOne AI', 'Zoho'],
    links: [
      { label: 'CargoWise', href: '/platforms/cargowise' },
      { label: 'Zoho', href: '/platforms/zoho' },
    ],
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Importers and Distributors',
    desc: 'Zoho, ConexusOne ERP or Business Central for purchasing, stock, sales and finance. Connected systems for businesses that buy, hold and sell product across ANZ.',
    platforms: ['Zoho', 'ConexusOne ERP', 'Business Central'],
    links: [
      { label: 'Zoho', href: '/platforms/zoho' },
      { label: 'ConexusOne ERP', href: '/platforms/conexusone-erp' },
      { label: 'Business Central', href: '/platforms/business-central' },
    ],
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Manufacturing',
    desc: 'ConexusOne ERP or Business Central for light manufacturing, after qualification. Bills of materials, production orders, costing and inventory connected to finance and sales.',
    platforms: ['ConexusOne ERP', 'Business Central'],
    links: [
      { label: 'ConexusOne ERP', href: '/platforms/conexusone-erp' },
      { label: 'Business Central', href: '/platforms/business-central' },
    ],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'E-commerce Growth and Operations',
    desc: 'Raechal AI for visibility in AI search, plus the right ERP for fulfilment. Get found by AI assistants and search engines, then run the back end that delivers.',
    platforms: ['Raechal AI', 'Zoho', 'ConexusOne ERP'],
    links: [
      { label: 'Raechal AI', href: '/platforms/raechal-ai' },
      { label: 'Zoho', href: '/platforms/zoho' },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
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
                Built for how{' '}
                <span className="gradient-text">your industry works.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
                Every industry has its own workflows, compliance and pressure points. We match the platform and scope to the way your sector actually operates, not to a generic playbook.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Discuss your sector
                  <ArrowRight className="w-5 h-5" />
                </BookingButton>
                <Link href="/solutions" className="btn-secondary text-base px-8 py-4">
                  Browse by outcome
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <IndustryCoverageVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-light relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Five sectors, matched to the right platform
            </h2>
            <p className="text-[15px] text-slate-500 max-w-xl mx-auto">
              Start from your sector. We point you to the right product and service.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-5">
            {industries.map((ind, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }} className="glass-card p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 ${i % 3 === 0 ? 'bg-citrus/8 border border-citrus/15 text-citrus-dark' : i % 3 === 1 ? 'bg-indigo-400/8 border border-indigo-400/15 text-indigo-400' : 'bg-pink-400/8 border border-pink-400/15 text-pink-400'}`}>
                    {ind.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2 tracking-tight">{ind.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7] mb-4 flex-1">{ind.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ind.platforms.map((p) => (
                      <span key={p} className="text-[10px] font-medium text-citrus-dark bg-citrus/8 px-2.5 py-1 rounded-full whitespace-nowrap">{p}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-4 border-t border-slate-100">
                    {ind.links.map((link) => (
                      <Link key={link.label} href={link.href} className="inline-flex items-center gap-1 text-[13px] font-semibold text-citrus-dark hover:text-citrus transition-colors">
                        {link.label} <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProcessFlow
        heading="Every engagement starts the same way"
        subheading="One journey, four stages. Join at any point."
        steps={[
          { title: 'Assessment', icon: <Search className="w-4 h-4" />, desc: 'Find out what is costing you money and whether software is even the right answer.', href: '/services/ai-first-business-assessment' },
          { title: 'Discovery', icon: <Compass className="w-4 h-4" />, desc: 'Map the requirement and design the solution before anyone builds anything.', href: '/services/discovery-solution-design' },
          { title: 'Implementation', icon: <Wrench className="w-4 h-4" />, desc: 'Configure, migrate, integrate and train on the real process, not a demo.', href: '/services/systems-implementation' },
          { title: 'Advisory', icon: <TrendingUp className="w-4 h-4" />, desc: 'Stay optimised with ongoing support, refinement and measured improvement.', href: '/services/optimisation-advisory' },
        ]}
      />

      <CTASection
        headline="Tell us your sector and we will tell you where to start."
        subtext="30-minute call. No software pitch. No obligation."
        primaryCTA="Discuss your industry"
        primaryHref="/contact"
        secondaryCTA="Email inquiry@citrus.global"
        secondaryHref="mailto:inquiry@citrus.global"
      />
    </>
  );
}
