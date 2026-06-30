'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Zap, Truck, Layers, TrendingUp, CheckCircle } from 'lucide-react';

const problems = [
  { label: 'Revenue gaps', icon: TrendingUp, color: '#f472b6' },
  { label: 'Manual processes', icon: Layers, color: '#818cf8' },
  { label: 'Logistics delays', icon: Truck, color: '#2dd4a8' },
  { label: 'Data silos', icon: Zap, color: '#818cf8' },
];

const solutions = [
  'Zoho CRM',
  'ConexusOne AI',
  'CargoWise',
  'Business Central',
];

export default function SolutionFinderVisual() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const cycleRef = useRef(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function runStep(step: number) {
      if (step >= 4) {
        timeout = setTimeout(() => {
          setActiveIndex(-1);
          setMatched(new Set());
          cycleRef.current++;
          timeout = setTimeout(() => runStep(0), 800);
        }, 1000);
        return;
      }

      setActiveIndex(step);

      timeout = setTimeout(() => {
        setMatched(prev => new Set([...prev, step]));
        timeout = setTimeout(() => runStep(step + 1), 400);
      }, 700);
    }

    timeout = setTimeout(() => runStep(0), 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="dark-card p-6 glow-pulse relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-citrus/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-citrus" />
            </div>
            <span className="text-[13px] font-semibold text-white">Solution Finder</span>
          </div>
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[11px] text-citrus font-medium flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-citrus" /> Matching
          </motion.span>
        </div>

        <div className="space-y-2">
          {problems.map((p, i) => {
            const Icon = p.icon;
            const isActive = activeIndex === i;
            const isMatched = matched.has(i);
            return (
              <div key={i} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    borderColor: isActive ? 'rgba(45,212,168,0.4)' : isMatched ? 'rgba(129,140,248,0.3)' : 'rgba(255,255,255,0.08)',
                    backgroundColor: isActive ? 'rgba(45,212,168,0.08)' : 'rgba(255,255,255,0.03)',
                  }}
                  transition={isActive || isMatched ? { duration: 0.25 } : { delay: 0.3 + i * 0.1 }}
                  className="flex-1 flex items-center gap-2 p-2.5 rounded-lg border text-[11px]"
                >
                  <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-citrus' : isMatched ? 'text-indigo-400' : 'text-slate-500'}`} />
                  <span className={isActive ? 'text-white' : isMatched ? 'text-slate-300' : 'text-slate-400'}>{p.label}</span>
                </motion.div>

                <div className="w-10 flex-shrink-0 flex items-center justify-center">
                  <svg width="40" height="16" viewBox="0 0 40 16" className="overflow-visible">
                    <line
                      x1="0" y1="8" x2="30" y2="8"
                      stroke={isActive ? '#2dd4a8' : isMatched ? '#818cf8' : 'rgba(255,255,255,0.08)'}
                      strokeWidth="1.5"
                      strokeDasharray={isActive || isMatched ? "0" : "3 3"}
                      style={{ transition: 'stroke 0.3s ease' }}
                    />
                    <polygon
                      points="30,4 38,8 30,12"
                      fill={isActive ? '#2dd4a8' : isMatched ? '#818cf8' : 'rgba(255,255,255,0.1)'}
                      style={{ transition: 'fill 0.3s ease' }}
                    />
                    {isActive && (
                      <motion.circle
                        cy="8" r="2.5"
                        fill="#2dd4a8"
                        initial={{ cx: 0, opacity: 0 }}
                        animate={{ cx: [0, 34], opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      />
                    )}
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    borderColor: isActive ? 'rgba(45,212,168,0.4)' : isMatched ? 'rgba(129,140,248,0.3)' : 'rgba(255,255,255,0.08)',
                    backgroundColor: isActive ? 'rgba(45,212,168,0.08)' : 'rgba(255,255,255,0.03)',
                    scale: isActive ? 1.02 : 1,
                  }}
                  transition={isActive || isMatched ? { duration: 0.25 } : { delay: 0.4 + i * 0.1 }}
                  className="flex-1 flex items-center justify-between p-2.5 rounded-lg border text-[11px]"
                >
                  <span className={isActive ? 'text-white font-medium' : isMatched ? 'text-slate-300' : 'text-slate-400'}>{solutions[i]}</span>
                  {isMatched && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400 }}>
                      <CheckCircle className="w-3 h-3 text-citrus" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: matched.size >= 4 ? 1 : 0, y: matched.size >= 4 ? 0 : 4 }}
          transition={{ duration: 0.3 }}
          className="mt-4 p-3 rounded-lg bg-citrus/10 border border-citrus/20"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-citrus" />
            <span className="text-[12px] text-citrus font-medium">Optimal platform mix identified</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
