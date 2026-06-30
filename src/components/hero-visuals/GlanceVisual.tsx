'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BarChart3, Globe, MapPin, Users, Briefcase, CheckCircle } from 'lucide-react';

function AnimatedCounter({ target, delay = 0 }: { target: number; delay?: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, delay]);
  return <>{display.toLocaleString()}</>;
}

const metrics = [
  { icon: Briefcase, label: 'Projects completed', value: 800, suffix: '+', color: 'text-citrus', bg: 'bg-citrus/15' },
  { icon: Users, label: 'Consultants', value: 60, suffix: '+', color: 'text-indigo-400', bg: 'bg-indigo-400/15' },
  { icon: MapPin, label: 'Global locations', value: 75, suffix: '+', color: 'text-pink-400', bg: 'bg-pink-400/15' },
  { icon: Globe, label: 'Continents', value: 5, suffix: '', color: 'text-citrus', bg: 'bg-citrus/15' },
];

function PulseRing({ delay, size, color }: { delay: number; size: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full border pointer-events-none"
      style={{ width: size, height: size, top: '50%', left: '50%', marginTop: -size / 2, marginLeft: -size / 2, borderColor: color }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.2, 1.4] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeOut' }}
    />
  );
}

export default function GlanceVisual() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % metrics.length);
    }, 2000);
    const start = setTimeout(() => setActive(0), 600);
    return () => { clearInterval(interval); clearTimeout(start); };
  }, []);

  return (
    <div className="dark-card p-6 glow-pulse relative overflow-hidden">
      <PulseRing delay={0} size={300} color="rgba(45,212,168,0.08)" />
      <PulseRing delay={1} size={400} color="rgba(129,140,248,0.06)" />
      <PulseRing delay={2} size={350} color="rgba(244,114,182,0.05)" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-citrus/20 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-citrus" />
            </div>
            <span className="text-[13px] font-semibold text-white">Citrus at a Glance</span>
          </div>
          <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
            <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-citrus" /> Live
          </span>
        </div>

        <div className="space-y-2.5">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="relative"
              >
                <motion.div
                  animate={isActive ? { borderColor: 'rgba(45,212,168,0.25)', backgroundColor: 'rgba(255,255,255,0.06)' } : { borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.03)' }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                      className={`w-7 h-7 rounded-md ${metric.bg} flex items-center justify-center`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${metric.color}`} />
                    </motion.div>
                    <span className="text-[12px] text-slate-400">{metric.label}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[13px] font-semibold text-white tabular-nums">
                      <AnimatedCounter target={metric.value} delay={800 + i * 200} />
                    </span>
                    <span className="text-[13px] font-semibold text-white">{metric.suffix}</span>
                  </div>
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="metric-glow"
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{ boxShadow: '0 0 20px rgba(45,212,168,0.1)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-3 p-3 rounded-lg bg-citrus/10 border border-citrus/20"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-citrus" />
            <span className="text-[12px] text-citrus font-medium">Global expertise, local delivery</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
