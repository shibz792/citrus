'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  { value: 250, prefix: '', suffix: '+', label: 'Customers' },
  { value: 800, prefix: '', suffix: '+', label: 'Projects' },
  { value: 60, prefix: '', suffix: '+', label: 'Consultants' },
  { value: 75, prefix: '', suffix: '+', label: 'Locations' },
  { value: 100, prefix: '$', suffix: 'M', label: 'Revenue' },
  { value: 40, prefix: '', suffix: '+', label: 'Years experience' },
];

function StatCount({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  return (
    <section className="relative py-10 border-y border-slate-100 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 lg:divide-x lg:divide-slate-100">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="text-center px-2"
            >
              <div className="text-[1.75rem] sm:text-[2rem] font-bold gradient-text tabular-nums">
                <StatCount value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-[11.5px] text-slate-500 mt-1 uppercase tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
