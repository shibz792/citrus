'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { useBooking } from '../ui/BookingModal';

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCTA: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export default function CTASection({ headline, subtext, primaryCTA, secondaryCTA, secondaryHref }: CTASectionProps) {
  const { open } = useBooking();
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(170deg, #050810, #0a1018 50%, #050810)' }} />
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] top-[-300px] left-[0%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45,212,168,0.25) 0%, transparent 50%)', filter: 'blur(80px)', animation: 'orb-drift 12s ease-in-out infinite alternate' }} />
        <div className="absolute w-[600px] h-[600px] bottom-[-250px] right-[5%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.22) 0%, transparent 50%)', filter: 'blur(80px)', animation: 'orb-drift 16s ease-in-out infinite alternate-reverse' }} />
        <div className="absolute w-[500px] h-[500px] top-[10%] right-[-5%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.16) 0%, transparent 50%)', filter: 'blur(80px)', animation: 'orb-drift 20s ease-in-out infinite alternate' }} />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <AnimatedSection className="relative max-w-[800px] mx-auto px-6 sm:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          {headline}
        </motion.h2>
        {subtext && (
          <p className="text-base text-slate-400 mb-10 max-w-md mx-auto">{subtext}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <button onClick={open} className="btn-citrus text-base px-10 py-5">
              {primaryCTA}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
          {secondaryCTA && secondaryHref && (
            <Link href={secondaryHref} className="text-sm text-slate-400 hover:text-citrus transition-colors underline underline-offset-4 decoration-slate-600 hover:decoration-citrus">
              {secondaryCTA}
            </Link>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
}
