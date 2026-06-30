'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, MapPin } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import BookingButton from '../ui/BookingButton';
import mapData from '@/data/map-dots.json';

const pinColors = ['#2dd4a8', '#818cf8', '#f472b6'];

interface Country {
  name: string;
  x: number;
  y: number;
  region: string;
}

const countries: Country[] = [
  { name: 'New Zealand', x: 104, y: 53, region: 'Oceania' },
  { name: 'Australia', x: 95, y: 47, region: 'Oceania' },
  { name: 'Micronesia', x: 100, y: 35, region: 'Oceania' },
  { name: 'Polynesia', x: 108, y: 40, region: 'Oceania' },
  { name: 'Melanesia', x: 102, y: 42, region: 'Oceania' },
  { name: 'Germany', x: 54, y: 18, region: 'Europe' },
  { name: 'France', x: 50, y: 20, region: 'Europe' },
  { name: 'Spain', x: 47, y: 23, region: 'Europe' },
  { name: 'Ireland', x: 46, y: 16, region: 'Europe' },
  { name: 'Monaco', x: 52, y: 22, region: 'Europe' },
  { name: 'Italy', x: 55, y: 22, region: 'Europe' },
  { name: 'UAE', x: 66, y: 30, region: 'Middle East & Africa' },
  { name: 'South Africa', x: 58, y: 51, region: 'Middle East & Africa' },
  { name: 'Ivory Coast', x: 48, y: 36, region: 'Middle East & Africa' },
  { name: 'Morocco', x: 47, y: 27, region: 'Middle East & Africa' },
  { name: 'China', x: 85, y: 24, region: 'Asia' },
  { name: 'Japan', x: 93, y: 22, region: 'Asia' },
  { name: 'India', x: 74, y: 32, region: 'Asia' },
  { name: 'Sri Lanka', x: 75, y: 37, region: 'Asia' },
  { name: 'USA', x: 20, y: 26, region: 'Americas' },
  { name: 'Canada', x: 18, y: 20, region: 'Americas' },
  { name: 'Brazil', x: 36, y: 45, region: 'Americas' },
];

const regions = [
  { name: 'Oceania', color: '#2dd4a8', labelX: 98, labelY: 55 },
  { name: 'Europe', color: '#818cf8', labelX: 50, labelY: 14 },
  { name: 'Middle East & Africa', color: '#f472b6', labelX: 56, labelY: 34 },
  { name: 'Asia', color: '#2dd4a8', labelX: 80, labelY: 20 },
  { name: 'Americas', color: '#818cf8', labelX: 22, labelY: 18 },
];

function DotMap({ hoveredCountry, hoveredRegion }: { hoveredCountry: string | null; hoveredRegion: string | null }) {
  const { points, pins } = mapData as { points: { x: number; y: number }[]; pins: { x: number; y: number; label: string }[] };
  const vw = 122;
  const vh = 62;

  const labelRegion = hoveredRegion || (hoveredCountry ? countries.find(c => c.name === hoveredCountry)?.region : null);

  return (
    <svg viewBox={`0 0 ${vw} ${vh}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <defs>
        {['#2dd4a8', '#818cf8', '#f472b6'].map((c, i) => (
          <radialGradient key={i} id={`glow-${i}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={c} stopOpacity="0.5" />
            <stop offset="100%" stopColor={c} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>

      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={0.22} fill="rgba(148,163,184,0.13)" />
      ))}

      {pins.map((pin, i) => {
        const color = pinColors[i % 3];
        return (
          <g key={`pin-${i}`}>
            <motion.circle cx={pin.x} cy={pin.y} r={1.5} fill={`url(#glow-${i % 3})`}
              initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }} />
            <motion.circle cx={pin.x} cy={pin.y} r={0.35} fill={color}
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.05, type: 'spring', stiffness: 300 }} />
            <motion.circle cx={pin.x} cy={pin.y} r={0.35} fill={color} opacity={0.4}
              animate={{ scale: [1, 3], opacity: [0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }} />
          </g>
        );
      })}

      {[
        { from: pins[0], to: pins[3], color: '#2dd4a8' },
        { from: pins[1], to: pins[5], color: '#818cf8' },
        { from: pins[2], to: pins[10], color: '#f472b6' },
        { from: pins[7], to: pins[10], color: '#2dd4a8' },
        { from: pins[3], to: pins[2], color: '#818cf8' },
        { from: pins[5], to: pins[6], color: '#f472b6' },
      ].map((arc, i) => {
        if (!arc.from || !arc.to) return null;
        const mx = (arc.from.x + arc.to.x) / 2;
        const dist = Math.abs(arc.from.x - arc.to.x);
        const my = Math.min(arc.from.y, arc.to.y) - Math.max(dist * 0.15, 2);
        const d = `M ${arc.from.x} ${arc.from.y} Q ${mx} ${my} ${arc.to.x} ${arc.to.y}`;
        return (
          <motion.path key={`arc-${i}`} d={d} fill="none" stroke={arc.color} strokeWidth={0.18} strokeOpacity={0.3} strokeDasharray="0.8 0.5"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: 'easeInOut' }} />
        );
      })}

      {regions.map((r, i) => {
        const isActive = labelRegion === r.name;
        return (
          <motion.g key={`region-${i}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.08 }}>
            <text x={r.labelX} y={r.labelY} fill={r.color} fontSize={isActive ? 2 : 1.6} fontWeight={700} fontFamily="system-ui, sans-serif"
              opacity={isActive ? 1 : 0.5} style={{ transition: 'all 0.3s ease' }}>
              {r.name}
            </text>
          </motion.g>
        );
      })}

      {countries.map((c, i) => {
        const isHovered = hoveredCountry === c.name;
        const isRegionHovered = hoveredRegion === c.region;
        const region = regions.find(r => r.name === c.region);
        const color = region?.color || '#94a3b8';
        return (
          <g key={`cl-${i}`}>
            {isHovered && (
              <>
                <circle cx={c.x} cy={c.y} r={2.5} fill={color} opacity={0.15} />
                <circle cx={c.x} cy={c.y} r={0.5} fill={color} opacity={1} />
                <text x={c.x + 1} y={c.y + 0.4} fill={color} fontSize={1.3} fontWeight={600} fontFamily="system-ui, sans-serif" opacity={1}>
                  {c.name}
                </text>
              </>
            )}
            {!isHovered && isRegionHovered && (
              <>
                <circle cx={c.x} cy={c.y} r={1.8} fill={color} opacity={0.08} />
                <circle cx={c.x} cy={c.y} r={0.4} fill={color} opacity={0.6} />
                <text x={c.x + 0.8} y={c.y + 0.4} fill={color} fontSize={1} fontWeight={500} fontFamily="system-ui, sans-serif" opacity={0.7}>
                  {c.name}
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function GlobalFootprint() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const groupedByRegion = regions.map(r => ({
    ...r,
    countries: countries.filter(c => c.region === r.name),
  }));

  return (
    <section className="section-dark relative py-20">
      <div className="orb orb-citrus w-[400px] h-[400px] -top-32 left-[5%] opacity-20" />
      <div className="orb orb-indigo w-[300px] h-[300px] -bottom-24 right-[10%] opacity-15" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
        <AnimatedSection className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-citrus" />
            <span className="text-[12px] uppercase tracking-[0.15em] text-citrus font-medium">Global Footprint</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white tracking-[-0.02em] mb-4">
            At the heart of global commerce
          </h2>
          <p className="text-[15px] text-slate-400 max-w-xl mx-auto leading-[1.8]">
            250+ customers serviced globally, completing 800+ projects with 60+ consultants across 75+ locations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#040710] p-3 sm:p-5">
                <DotMap hoveredCountry={hoveredCountry} hoveredRegion={hoveredRegion} />
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-1 order-1 lg:order-2">
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {groupedByRegion.map((region, ri) => (
                  <div key={ri}>
                    <button
                      onMouseEnter={() => setHoveredRegion(region.name)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      className="flex items-center gap-2 mb-2 group cursor-pointer w-full text-left"
                    >
                      <div className="w-2 h-2 rounded-full transition-transform group-hover:scale-150" style={{ backgroundColor: region.color }} />
                      <span className="text-[13px] font-bold text-white group-hover:text-citrus transition-colors">{region.name}</span>
                    </button>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 pl-4">
                      {region.countries.map((country, ci) => (
                        <button
                          key={ci}
                          onMouseEnter={() => setHoveredCountry(country.name)}
                          onMouseLeave={() => setHoveredCountry(null)}
                          className={`text-[11px] px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                            hoveredCountry === country.name
                              ? 'text-white bg-white/10'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {country.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="flex justify-center mt-8">
            <BookingButton className="btn-citrus text-[14px] px-8 py-3 justify-center">
              Discuss your region <MapPin className="w-4 h-4" />
            </BookingButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
