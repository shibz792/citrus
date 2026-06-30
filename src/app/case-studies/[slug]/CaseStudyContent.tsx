'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Truck, RefreshCw, Package, HeartPulse, Globe, Users,
  AlertTriangle, Lightbulb, TrendingUp, BarChart3, Building2, CheckCircle2,
  DollarSign, Clock, Percent, FileText,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import type { CaseStudy, ContentBlock } from '@/data/case-studies';

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  'global-automotive-logistics': Truck,
  'bpo-robotic-process-automation': RefreshCw,
  'frucor-suntory-lean-agile': Package,
  'healthalliance-transformation': HeartPulse,
  'pacific-trade-invest': Globe,
  'cmi-transformation': Users,
};

const cardColors = [
  { bg: 'bg-citrus/8', border: 'border-citrus/15', text: 'text-citrus-dark', badge: 'bg-citrus' },
  { bg: 'bg-indigo-400/8', border: 'border-indigo-400/15', text: 'text-indigo-500', badge: 'bg-indigo-400' },
  { bg: 'bg-pink-400/8', border: 'border-pink-400/15', text: 'text-pink-500', badge: 'bg-pink-400' },
];

type Item = { title: string; blocks: ContentBlock[] };
type Section = { heading: string; intro: ContentBlock[]; items: Item[] };

function groupBlocks(blocks: ContentBlock[]): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;
  let currentItem: Item | null = null;

  for (const block of blocks) {
    if (block.type === 'heading' && block.level !== 'sub') {
      current = { heading: block.text, intro: [], items: [] };
      sections.push(current);
      currentItem = null;
      continue;
    }
    if (!current) {
      current = { heading: '', intro: [], items: [] };
      sections.push(current);
    }
    if (block.type === 'heading' && block.level === 'sub') {
      currentItem = { title: block.text, blocks: [] };
      current.items.push(currentItem);
      continue;
    }
    if (currentItem) currentItem.blocks.push(block);
    else current.intro.push(block);
  }
  return sections;
}

function sectionIcon(heading: string) {
  const h = heading.toLowerCase();
  if (h.includes('problem') || h.includes('challenge')) return AlertTriangle;
  if (h.includes('solution')) return Lightbulb;
  if (h.includes('statistic')) return BarChart3;
  if (h.includes('result') || h.includes('benefit') || h.includes('impact') || h.includes('advantage')) return TrendingUp;
  if (h.includes('client') || h.includes('overview')) return Building2;
  if (h.includes('advantages')) return CheckCircle2;
  return FileText;
}

function statIcon(item: { value: string; label: string }) {
  const v = item.value.toLowerCase();
  const l = item.label.toLowerCase();
  if (v.includes('$')) return DollarSign;
  if (v.includes('%') || l.includes('%')) return Percent;
  if (l.includes('hr') || l.includes('hour') || l.includes('day') || l.includes('week') || l.includes('min')) return Clock;
  return TrendingUp;
}

function StatsBlock({ items, title, compact }: { items: { value: string; label: string }[]; title?: string; compact?: boolean }) {
  return (
    <div className={compact ? 'pt-1' : 'py-1'}>
      {title && (
        <span className="inline-block text-[11px] uppercase tracking-[0.12em] font-bold text-slate-400 mb-2.5">{title}</span>
      )}
      <div className={`grid gap-3 ${items.length === 1 ? 'grid-cols-1 max-w-[220px]' : items.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
        {items.map((s, j) => {
          const Icon = statIcon(s);
          const c = cardColors[j % 3];
          return (
            <div key={j} className={`rounded-xl p-4 ${compact ? 'p-3.5' : 'p-4'} ${c.bg} border ${c.border}`}>
              <Icon className={`w-3.5 h-3.5 ${c.text} mb-1.5 opacity-70`} />
              <div className={`${compact ? 'text-[16px]' : 'text-[18px]'} font-bold ${c.text} leading-tight`}>{s.value}</div>
              <div className="text-[11px] text-slate-500 leading-snug mt-1">{s.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Bullets({ items, compact }: { items: string[]; compact?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, j) => (
        <li key={j} className={`flex items-start gap-2.5 ${compact ? 'text-[13.5px]' : 'text-[15px]'} text-slate-600 leading-[1.7]`}>
          <CheckCircle2 className="w-4 h-4 text-citrus-dark/70 mt-0.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function renderBlock(block: ContentBlock, key: number, compact = false) {
  if (block.type === 'paragraph') {
    return (
      <p key={key} className={`${compact ? 'text-[13.5px] leading-[1.7]' : 'text-[15px] leading-[1.8]'} text-slate-600`}>
        {block.text}
      </p>
    );
  }
  if (block.type === 'bullets') return <Bullets key={key} items={block.items} compact={compact} />;
  if (block.type === 'stats') return <StatsBlock key={key} items={block.items} title={block.title} compact={compact} />;
  return null;
}

function ItemCardGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
      {items.map((item, i) => {
        const c = cardColors[i % 3];
        return (
          <motion.div
            key={i}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className={`rounded-2xl p-5 border ${c.bg} ${c.border}`}
          >
            <div className={`w-7 h-7 rounded-lg ${c.badge} text-white flex items-center justify-center text-[11px] font-bold mb-3`}>
              {i + 1}
            </div>
            <h3 className="text-[14.5px] font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
            <div className="space-y-2">{item.blocks.map((b, j) => renderBlock(b, j, true))}</div>
          </motion.div>
        );
      })}
    </div>
  );
}

function SolutionTimeline({ items }: { items: Item[] }) {
  return (
    <div className="mt-1">
      {items.map((item, i) => (
        <div key={i} className="relative flex gap-4 pb-7 last:pb-0">
          {i < items.length - 1 && (
            <span className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent" />
          )}
          <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-500 text-white flex items-center justify-center font-bold text-[14px] flex-shrink-0 shadow-sm shadow-indigo-200/60">
            {i + 1}
          </div>
          <div className="flex-1 pt-1.5">
            <h3 className="text-[15px] font-bold text-slate-900 mb-1.5 leading-snug">{item.title}</h3>
            <div className="space-y-2">{item.blocks.map((b, j) => renderBlock(b, j, true))}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyContent({ caseStudy }: { caseStudy: CaseStudy }) {
  const Icon = icons[caseStudy.slug] ?? Users;
  const sections = groupBlocks(caseStudy.blocks);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="aurora-bg" />
        <div className="aurora-third" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-[900px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 hover:text-citrus-dark transition-colors mb-6">
              <ArrowLeft className="w-3.5 h-3.5" /> All case studies
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-citrus/8 border border-citrus/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-citrus-dark" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-citrus-dark">{caseStudy.industry}</span>
                <p className="text-[15px] font-bold text-slate-900">{caseStudy.client}</p>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-900 leading-[1.15] tracking-[-0.03em] mb-6">
              {caseStudy.title}
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8">{caseStudy.summary}</p>

            {caseStudy.heroStats.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {caseStudy.heroStats.map((s, i) => {
                  const StatI = statIcon(s);
                  const c = cardColors[i % 3];
                  return (
                    <div key={s.label} className={`flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-xl ${c.bg} border ${c.border}`}>
                      <div className={`w-8 h-8 rounded-lg ${c.badge} flex items-center justify-center flex-shrink-0`}>
                        <StatI className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className={`block text-[16px] font-bold leading-tight ${c.text}`}>{s.value}</span>
                        <span className="block text-[11px] text-slate-500 leading-tight">{s.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-light relative">
        <div className="max-w-[820px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="space-y-6">
            {sections.map((section, si) => {
              const SectionIcon = sectionIcon(section.heading);
              return (
                <AnimatedSection key={si} delay={Math.min(si * 0.03, 0.3)}>
                  {section.heading && (
                    <div className="flex items-center gap-3 pt-5 mb-3.5">
                      <div className="w-9 h-9 rounded-lg bg-slate-900/[0.04] border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <SectionIcon className="w-4 h-4 text-slate-600" />
                      </div>
                      <h2 className="text-[1.25rem] font-bold text-slate-900 tracking-tight">{section.heading}</h2>
                    </div>
                  )}
                  <div className="space-y-4">
                    {section.intro.map((b, i) => renderBlock(b, i))}
                  </div>
                  {section.items.length === 1 && (
                    <div className="mt-4">
                      <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">{section.items[0].title}</h3>
                      <div className="space-y-2">{section.items[0].blocks.map((b, j) => renderBlock(b, j))}</div>
                    </div>
                  )}
                  {section.items.length >= 2 && section.heading.toLowerCase().includes('solution') && (
                    <SolutionTimeline items={section.items} />
                  )}
                  {section.items.length >= 2 && !section.heading.toLowerCase().includes('solution') && (
                    <ItemCardGrid items={section.items} />
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Your operation could be the next case study."
        subtext="Book a 30-minute call and we will tell you what we find."
        primaryCTA="Discuss your challenge"
        primaryHref="/contact"
        secondaryCTA="Back to all case studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
