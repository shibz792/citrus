'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Ship, Package, ShoppingCart, Factory, Warehouse, Globe } from 'lucide-react';

const industries = [
  { name: 'Freight & Customs', icon: Ship, platforms: ['CargoWise', 'ConexusOne AI'], color: '#2dd4a8' },
  { name: 'Logistics', icon: Package, platforms: ['CargoWise', 'Business Central'], color: '#818cf8' },
  { name: 'Manufacturing', icon: Factory, platforms: ['Business Central', 'Zoho'], color: '#f472b6' },
  { name: 'E-commerce', icon: ShoppingCart, platforms: ['Zoho', 'ConexusOne ERP'], color: '#2dd4a8' },
  { name: 'Warehousing', icon: Warehouse, platforms: ['CargoWise', 'Raechal AI'], color: '#818cf8' },
];

export default function IndustryCoverageVisual() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % industries.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const active = industries[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <div className="dark-card p-6 glow-pulse relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-citrus/20 flex items-center justify-center">
              <Globe className="w-4 h-4 text-citrus" />
            </div>
            <span className="text-[13px] font-semibold text-white">ANZ Industry Coverage</span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">{activeIdx + 1}/{industries.length}</span>
        </div>

        <div className="flex gap-1.5 mb-4">
          {industries.map((ind, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="flex-1 h-1 rounded-full"
              animate={{ backgroundColor: i === activeIdx ? active.color : 'rgba(255,255,255,0.08)' }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${active.color}15` }}
              >
                <ActiveIcon className="w-5 h-5" style={{ color: active.color }} />
              </motion.div>
              <div>
                <div className="text-[14px] font-semibold text-white">{active.name}</div>
                <div className="text-[11px] text-slate-500">ANZ businesses</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Recommended platforms</div>
              {active.platforms.map((platform, j) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + j * 0.1 }}
                  className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                >
                  <span className="text-[11px] text-slate-300">{platform}</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 40 + ((platform.length * 7 + j * 13) % 30) }}
                    transition={{ delay: 0.3 + j * 0.15, duration: 0.6 }}
                    className="h-1 rounded-full"
                    style={{ backgroundColor: active.color, opacity: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mt-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={i}
                animate={i === activeIdx ? { scale: 1.15, borderColor: active.color } : { scale: 1, borderColor: 'rgba(255,255,255,0.06)' }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveIdx(i)}
                className="w-8 h-8 rounded-lg flex items-center justify-center border cursor-pointer bg-white/[0.02]"
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: i === activeIdx ? active.color : '#64748b' }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
