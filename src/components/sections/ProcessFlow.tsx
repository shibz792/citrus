'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

interface Step {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href?: string;
}

interface ProcessFlowProps {
  heading: string;
  subheading?: string;
  steps: Step[];
}

const stepColors = [
  { grad: 'linear-gradient(135deg, #2dd4a8, #15a17e)', solid: '#2dd4a8', text: 'text-citrus-dark', glow: 'rgba(45,212,168,0.5)' },
  { grad: 'linear-gradient(135deg, #818cf8, #6366f1)', solid: '#818cf8', text: 'text-indigo-500', glow: 'rgba(129,140,248,0.5)' },
  { grad: 'linear-gradient(135deg, #f472b6, #ec4899)', solid: '#f472b6', text: 'text-pink-500', glow: 'rgba(244,114,182,0.5)' },
];

// Desktop always stays horizontal. Beyond this many steps a single row would
// get cramped, so it wraps into multiple rows instead of switching to a
// vertical layout.
const ROW_LIMIT = 4;

function chunkRows<T>(items: T[], limit: number): T[][] {
  if (items.length <= limit) return [items];
  const numRows = Math.ceil(items.length / limit);
  const rowSize = Math.ceil(items.length / numRows);
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += rowSize) rows.push(items.slice(i, i + rowSize));
  return rows;
}

/**
 * Flow indicator between two steps. Deliberately not a connecting line:
 * it's a single self-contained flex child with no coordinates to compute
 * and nothing that depends on the size of its neighbours, so it can never
 * end up misaligned or half-rendered the way a stitched-together line can.
 */
function FlowArrow({ direction, color }: { direction: 'right' | 'down'; color: string }) {
  const Icon = direction === 'right' ? ChevronRight : ChevronDown;
  return (
    <div className={direction === 'right' ? 'flex items-center justify-center w-6 sm:w-8 flex-shrink-0 self-center' : 'flex items-center justify-center w-full py-1'}>
      <motion.div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}15`, border: `1px solid ${color}35` }}
        animate={
          direction === 'right'
            ? { x: [0, 3, 0], opacity: [0.55, 1, 0.55] }
            : { y: [0, 3, 0], opacity: [0.55, 1, 0.55] }
        }
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon className="w-4 h-4" style={{ color }} />
      </motion.div>
    </div>
  );
}

function StepBadge({ step, i }: { step: Step; i: number }) {
  const c = stepColors[i % 3];
  return (
    <div className="relative flex-shrink-0">
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ border: `2px solid ${c.solid}` }}
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: [0.7, 0], scale: [1, 1.7] }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 + i * 0.1, duration: 0.9, ease: 'easeOut' }}
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: [0, 1.15, 1] }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white relative z-10"
        style={{ background: c.grad, boxShadow: `0 6px 18px ${c.glow}` }}
      >
        {step.icon}
      </motion.div>
    </div>
  );
}

function StepCard({ step, i, layout }: { step: Step; i: number; layout: 'horizontal' | 'vertical' }) {
  const c = stepColors[i % 3];
  const horizontal = layout === 'horizontal';
  const content = (
    <>
      <div className={`flex items-center gap-1.5 ${horizontal ? 'justify-center' : 'justify-start'}`}>
        <span className={`text-[11px] font-bold uppercase tracking-wider ${c.text}`}>
          Step {String(i + 1).padStart(2, '0')}
        </span>
        {step.href && <ArrowUpRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ${c.text}`} />}
      </div>
      <h3 className="text-[14.5px] font-bold text-slate-900 mt-1 mb-1.5 text-balance">{step.title}</h3>
      <p className="text-[12px] text-slate-500 leading-[1.55] text-balance">{step.desc}</p>
    </>
  );

  const className = `flex-1 rounded-2xl border border-slate-100 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04),0_8px_20px_rgba(15,23,42,0.04)] px-5 py-4 transition-shadow group-hover:shadow-[0_4px_14px_rgba(15,23,42,0.06)] ${
    horizontal ? 'mt-5 text-center w-full max-w-[300px]' : 'max-w-md'
  } ${step.href ? 'group-hover:border-slate-200' : ''}`;

  if (step.href) {
    return (
      <Link href={step.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

function StepItem({ step, i, layout }: { step: Step; i: number; layout: 'horizontal' | 'vertical' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={
        layout === 'horizontal'
          ? 'group relative flex flex-col items-center flex-1 px-2 sm:px-3'
          : 'group relative flex items-start gap-5'
      }
    >
      <StepBadge step={step} i={i} />
      <StepCard step={step} i={i} layout={layout} />
    </motion.div>
  );
}

function DesktopFlow({ steps }: { steps: Step[] }) {
  const rows = chunkRows(steps, ROW_LIMIT);
  const rowStarts = rows.map((_, rIdx) => rows.slice(0, rIdx).reduce((sum, r) => sum + r.length, 0));

  return (
    <div className="flex flex-col gap-y-3">
      {rows.map((row, rIdx) => {
        const rowStart = rowStarts[rIdx];
        return (
          <Fragment key={rIdx}>
            <div className="flex items-start">
              {row.map((step, idx) => {
                const i = rowStart + idx;
                return (
                  <Fragment key={i}>
                    <StepItem step={step} i={i} layout="horizontal" />
                    {idx < row.length - 1 && <FlowArrow direction="right" color={stepColors[(i + 1) % 3].solid} />}
                  </Fragment>
                );
              })}
            </div>
            {rIdx < rows.length - 1 && (
              <div className="flex justify-center">
                <FlowArrow direction="down" color={stepColors[(rowStart + row.length) % 3].solid} />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

function VerticalFlow({ steps }: { steps: Step[] }) {
  return (
    <div className="flex flex-col gap-1">
      {steps.map((step, i) => (
        <Fragment key={i}>
          <StepItem step={step} i={i} layout="vertical" />
          {i < steps.length - 1 && (
            <div className="flex pl-[22px]">
              <FlowArrow direction="down" color={stepColors[(i + 1) % 3].solid} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default function ProcessFlow({ heading, subheading, steps }: ProcessFlowProps) {
  return (
    <section className="section-gradient relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-slate-900 tracking-[-0.02em] mb-2">{heading}</h2>
          {subheading && <p className="text-[15px] text-slate-500 max-w-lg mx-auto">{subheading}</p>}
        </AnimatedSection>

        <div className="hidden md:block">
          <DesktopFlow steps={steps} />
        </div>
        <div className="md:hidden">
          <VerticalFlow steps={steps} />
        </div>
      </div>
    </section>
  );
}
