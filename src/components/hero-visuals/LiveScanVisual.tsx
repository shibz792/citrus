'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Package, Users, Truck, MessageSquare, BarChart3 } from 'lucide-react';

const CYCLE = 8; // seconds for the scan to complete
const CENTER = { x: 150, y: 160 };

const nodes = [
  { x: 150, y: 60, icon: DollarSign, label: 'Revenue', finding: '+$42k leak' },
  { x: 236.6, y: 110, icon: Package, label: 'Inventory', finding: '7 bottlenecks' },
  { x: 236.6, y: 210, icon: Users, label: 'CRM', finding: '34% utilised' },
  { x: 150, y: 260, icon: Truck, label: 'Logistics', finding: '12hrs/wk lost' },
  { x: 63.4, y: 210, icon: MessageSquare, label: 'Support', finding: '+$18k leak' },
  { x: 63.4, y: 110, icon: BarChart3, label: 'Reporting', finding: '3 blind spots' },
];

const colors = ['#2dd4a8', '#818cf8', '#f472b6'];

function AnimatedTotal({ target }: { target: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const duration = CYCLE * 1000 * 0.85;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setDisplay(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return <>${display.toLocaleString()}</>;
}

export default function LiveScanVisual() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), CYCLE * 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="dark-card p-6 glow-pulse relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-citrus/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-citrus" />
            </div>
            <span className="text-[13px] font-semibold text-white">Live Operational Scan</span>
          </div>
          <span className="text-[11px] text-citrus font-medium flex items-center gap-1">
            <motion.span
              animate={{ opacity: done ? 1 : [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: done ? 0 : Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-citrus"
            />
            {done ? 'Scan complete' : 'Scanning'}
          </span>
        </div>
        <p className="text-[12px] text-slate-400 mb-3">
          Six core systems, checked for hidden cost.
        </p>

        <div className="relative w-full max-w-[300px] mx-auto" style={{ aspectRatio: '300 / 330' }}>
          <svg viewBox="0 0 300 330" className="absolute inset-0 w-full h-full overflow-visible">
            <defs>
              <radialGradient id="sweepGrad" cx="0%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#2dd4a8" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#2dd4a8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* spokes */}
            {nodes.map((n, i) => (
              <line key={`line-${i}`} x1={CENTER.x} y1={CENTER.y} x2={n.x} y2={n.y} stroke="rgba(255,255,255,0.08)" strokeWidth={1.5} />
            ))}

            {/* flowing data dashes along each spoke */}
            {nodes.map((n, i) => (
              <motion.line
                key={`flow-${i}`}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={n.x}
                y2={n.y}
                stroke={colors[i % 3]}
                strokeWidth={1.5}
                strokeDasharray="3 9"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -24 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: i * 0.12 }}
                opacity={0.55}
              />
            ))}

            {/* radar sweep wedge - completes one pass, then fades and stops */}
            <motion.g
              style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
              animate={{ rotate: 360, opacity: [1, 1, 0] }}
              transition={{
                rotate: { duration: CYCLE, ease: 'linear' },
                opacity: { duration: CYCLE, times: [0, 0.9, 1], ease: 'linear' },
              }}
            >
              <path d="M 150 160 L 150 45 A 115 115 0 0 1 250 103 Z" fill="url(#sweepGrad)" />
            </motion.g>

            {/* hub */}
            <circle cx={CENTER.x} cy={CENTER.y} r={26} fill="#0a1018" stroke="rgba(45,212,168,0.4)" strokeWidth={1.5} />
            <foreignObject x={CENTER.x - 12} y={CENTER.y - 12} width={24} height={24}>
              <div className="w-6 h-6 rounded-full bg-citrus/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-citrus" />
              </div>
            </foreignObject>

            {/* nodes */}
            {nodes.map((n, i) => {
              const color = colors[i % 3];
              const delay = i * (CYCLE / nodes.length);
              const Icon = n.icon;
              return (
                <g key={`node-${i}`}>
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r={20}
                    fill="#0a1018"
                    initial={{ stroke: 'rgba(255,255,255,0.12)' }}
                    animate={{ stroke: color }}
                    transition={{ delay: delay + 0.3, duration: 0.4 }}
                    strokeWidth={1.5}
                  />
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r={20}
                    fill="none"
                    stroke={color}
                    strokeWidth={1.5}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: [0, 0.6, 0], scale: [1, 1.6, 1.6] }}
                    transition={{ delay: delay + 0.3, duration: 0.9, ease: 'easeOut' }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                  <foreignObject x={n.x - 11} y={n.y - 11} width={22} height={22}>
                    <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center" style={{ color }}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </foreignObject>

                  {/* always-visible category label */}
                  <text x={n.x} y={n.y + 33} textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.45)">
                    {n.label}
                  </text>

                  {/* finding appears once flagged, then stays put */}
                  <motion.text
                    x={n.x}
                    y={n.y + 46}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight="700"
                    fill={color}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.5, duration: 0.4 }}
                  >
                    {n.finding}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: CYCLE * 0.85, duration: 0.5 }}
          className="mt-2 p-3 rounded-lg bg-citrus/10 border border-citrus/20 flex items-center justify-between"
        >
          <span className="text-[12px] text-citrus font-medium">6 issues flagged across the operation</span>
          <span className="text-[15px] font-bold text-white tabular-nums">
            <AnimatedTotal target={186000} />
          </span>
        </motion.div>
      </div>
    </div>
  );
}
