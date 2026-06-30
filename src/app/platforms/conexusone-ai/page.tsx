'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, animate, useInView } from 'framer-motion';
import { Brain, Mail, FileText, Ship, ClipboardCheck, ArrowRight, Zap, Bot, CheckCircle2, AlertTriangle, TrendingUp, Workflow, Globe, BarChart3, Shield, Clock, Users, MessageSquare, HelpCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import BookingButton from '@/components/ui/BookingButton';
import ProcessFlow from '@/components/sections/ProcessFlow';

const metricColors = ['#2dd4a8', '#818cf8', '#f472b6'];

function RingMetric({ headline, unit, ring, color, icon }: { headline: number; unit: string; ring: number; color: string; icon: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);
  const size = 104;
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, headline, {
      duration: 1.6,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, headline]);

  return (
    <div ref={ref} className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90 absolute inset-0">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: circumference - (ring / 100) * circumference } : {}}
          transition={{ duration: 1.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-5 h-5 mb-0.5">{icon}</div>
        <span className="text-[19px] font-extrabold text-white leading-none tabular-nums">
          {Math.round(display)}{unit}
        </span>
      </div>
    </div>
  );
}

const agentGroups = [
  { name: 'Commercial', icon: <TrendingUp className="w-4 h-4" />, agents: ['Inquiry', 'Opportunity', 'Lead Qualification', 'Rating', 'Quotation', 'Tariff & Contract', 'Tender/Bid'] },
  { name: 'Booking', icon: <ClipboardCheck className="w-4 h-4" />, agents: ['Booking Carrier', 'Customer Booking', 'Space & Allocation', 'Equipment/Container', 'Shipment Creation', 'Consolidation', 'Amendment'] },
  { name: 'Documentation', icon: <FileText className="w-4 h-4" />, agents: ['Shipping Instruction', 'BL Drafting', 'AWB', 'Manifest', 'Invoice & Packing', 'Certificate of Origin', 'eBL'] },
  { name: 'Customs & Compliance', icon: <Shield className="w-4 h-4" />, agents: ['Customs Declaration', 'HS Classification', 'Duty & Tax', 'Sanctions Screening', 'Dangerous Goods', 'Licence & Permit'] },
  { name: 'Execution', icon: <Ship className="w-4 h-4" />, agents: ['Pickup', 'Trucking & Drayage', 'Terminal & Port', 'Warehouse/CFS', 'Stuffing', 'Delivery', 'Empty Return'] },
  { name: 'Visibility', icon: <Globe className="w-4 h-4" />, agents: ['Tracking & Milestones', 'ETA Prediction', 'Delay Detection', 'Proof of Delivery', 'Reefer/IoT'] },
  { name: 'Finance', icon: <BarChart3 className="w-4 h-4" />, agents: ['Customer Invoicing', 'Vendor/AP Invoice', 'Cost Accrual', 'Reconciliation', 'Collections & Credit', 'Demurrage & Detention', 'Claims & Disputes'] },
  { name: 'Customer & Orchestration', icon: <Users className="w-4 h-4" />, agents: ['Customer Service', 'Notifications', 'Reporting & Analytics', 'Master Data', 'Exception Orchestrator'] },
];

const integrations = [
  { name: 'CargoWise', logo: '/cargowise-logo.svg' },
  { name: 'SAP', logo: '/logos/integrations/sap.svg' },
  { name: 'Oracle', logo: '/logos/integrations/oracle.svg' },
  { name: 'NetSuite', logo: '/logos/integrations/netsuite.png' },
  { name: 'Sage', logo: '/logos/integrations/sage.svg' },
  { name: 'Xero', logo: '/logos/integrations/xero.svg' },
  { name: 'QuickBooks', logo: '/logos/integrations/quickbooks.svg' },
  { name: 'Salesforce', logo: '/logos/integrations/salesforce.svg' },
  { name: 'HubSpot', logo: '/logos/integrations/hubspot.svg' },
  { name: 'Slack', logo: '/logos/integrations/slack.svg' },
];

const valueMetrics = [
  { area: 'Enquiry & Rates', icon: <MessageSquare className="w-4 h-4 text-citrus" />, detail: '100% capture, 3x faster, automated quotes', result: '1-8% higher conversion', headline: 100, unit: '%', ring: 100 },
  { area: 'Jobs & Shipments', icon: <Ship className="w-4 h-4 text-indigo-400" />, detail: '100% job capture, 5x faster creation', result: '~30 min saved per job, 90% fewer misses', headline: 90, unit: '%', ring: 90 },
  { area: 'Docs & Accounting', icon: <FileText className="w-4 h-4 text-pink-400" />, detail: '5x jobs per user, 80%+ fewer errors', result: '1.5-2 hours per job, 50% fewer fines', headline: 80, unit: '%', ring: 80 },
  { area: 'Tracking', icon: <Globe className="w-4 h-4 text-citrus" />, detail: 'Near-zero time, full visibility', result: '20-30 min/job, 75%+ less demurrage', headline: 75, unit: '%', ring: 75 },
  { area: 'Credit & Finance', icon: <BarChart3 className="w-4 h-4 text-indigo-400" />, detail: '3x faster invoicing, 5x collections', result: '~30% lower cost of capital', headline: 30, unit: '%', ring: 30 },
  { area: 'Across the Suite', icon: <TrendingUp className="w-4 h-4 text-pink-400" />, detail: 'More selling time, audit-ready records', result: '3-5x more business, same team', headline: 5, unit: 'x', ring: 60 },
];

const steps = [
  { title: 'Qualify the use case', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Assess one workflow, its volume and its value, and confirm it is worth automating. You get a go or no-go on the use case, with the value case.' },
  { title: 'Map workflow and documents', icon: <Workflow className="w-4 h-4" />, desc: 'Map the triggers, the documents and how the work flows today. You get a clear map of the workflow to be automated.' },
  { title: 'Define rules and exceptions', icon: <Shield className="w-4 h-4" />, desc: 'Set the rules the agent follows and the exceptions it must escalate. You get agreed rules and an exception model.' },
  { title: 'Test on your data', icon: <ClipboardCheck className="w-4 h-4" />, desc: 'Run the agent against representative inputs before production. You get measured results against your baseline.' },
  { title: 'Integrate and set human review', icon: <Users className="w-4 h-4" />, desc: 'Confirm system access and the points where a person signs off. You get an integration approach and review design.' },
  { title: 'Pilot, measure and scale', icon: <TrendingUp className="w-4 h-4" />, desc: 'Run a measured pilot, then scale with governance and support. You get a pilot result and a scale recommendation.' },
];

export default function ConexusAIPage() {
  return (
    <>
      {/* HERO */}
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
              <div className="h-9 flex items-center mb-6">
                <Image src="/ConexusOneAI.png" alt="ConexusOne AI" width={160} height={36} className="h-full w-auto object-contain" priority />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                AI agents that finish{' '}
                <span className="gradient-text">the work. End to end.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                ConexusOne AI is agentic AI built for logistics. Specialised agents read your emails and documents, create the records in your ERP or TMS, validate them, and complete real freight-forwarding and customs tasks without manual keying.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Book a demo
                  <ArrowRight className="w-5 h-5" />
                </BookingButton>
                <Link href="#how-agent-works" className="btn-secondary text-base px-8 py-4">
                  See the agent lifecycle
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="dark-card p-8 glow-pulse">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-citrus/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-citrus" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">ConexusOne Agent</p>
                      <p className="text-xs text-slate-400">Processing shipment...</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-citrus animate-pulse" />
                      <span className="text-xs text-citrus font-medium">Live</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: <Mail className="w-3.5 h-3.5" />, text: 'Email received from carrier', status: 'done' },
                      { icon: <FileText className="w-3.5 h-3.5" />, text: 'Extracting booking data...', status: 'done' },
                      { icon: <Ship className="w-3.5 h-3.5" />, text: 'Creating shipment in CargoWise', status: 'done' },
                      { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: 'Validated and ready for review', status: 'active' },
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.2 }}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10"
                      >
                        <div className={`${step.status === 'active' ? 'text-citrus' : 'text-slate-500'}`}>{step.icon}</div>
                        <span className={`text-sm ${step.status === 'active' ? 'text-citrus font-medium' : 'text-slate-400'}`}>{step.text}</span>
                        {step.status === 'done' && <CheckCircle2 className="w-3.5 h-3.5 text-citrus/50 ml-auto" />}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-citrus/10 rounded-full blur-[60px]" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-citrus/8 rounded-full blur-[60px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-dark relative">
        <div className="orb orb-coral w-[300px] h-[300px] top-[-100px] right-[-100px] opacity-30" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-[2rem] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-5">
                Your team is buried in manual keying
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.8] mb-6">
                Your coordinators open dozens of emails before lunch. Every enquiry, booking and shipment is read by hand and keyed in three or four times. A missing HS code or a wrong charge surfaces a week later, as a fine or a held container.
              </p>
              <p className="text-[15px] text-slate-400 leading-[1.8]">
                The best people in your business spend their day on data entry. The work that grows the business waits in a queue that never gets shorter.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <Clock className="w-4 h-4 text-slate-400" />, text: 'Slow quotes lose deals before you see them' },
                  { icon: <AlertTriangle className="w-4 h-4 text-citrus" />, text: 'Re-keying across systems multiplies errors' },
                  { icon: <TrendingUp className="w-4 h-4 text-slate-400" style={{ transform: 'rotate(180deg)' }} />, text: 'Late invoices leak margin every single month' },
                  { icon: <Users className="w-4 h-4 text-slate-400" />, text: 'Your best people are stuck on data entry' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-white/[0.03]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[14px] text-slate-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LIVE AGENTS */}
      <section className="section-light relative">
        <div className="orb orb-citrus w-[300px] h-[300px] -top-32 -left-32 opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Four agents in production
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              These agents are running right now, processing real shipments for logistics businesses across ANZ.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Import Console Creation', icon: <Ship className="w-5 h-5" />, desc: 'Builds the shipment or console for air and ocean import shipments automatically from carrier data.' },
              { name: 'Ocean Export Shipment', icon: <FileText className="w-5 h-5" />, desc: 'Builds the ocean export shipment straight from the carrier booking confirmation.' },
              { name: 'Ocean Export Booking', icon: <ClipboardCheck className="w-5 h-5" />, desc: 'Places ocean export bookings with carriers automatically from your instructions.' },
              { name: 'Customs Declaration', icon: <Shield className="w-5 h-5" />, desc: 'Creates the customs declaration job, validates HS codes, and prepares it for submission.' },
            ].map((agent, i) => (
              <AnimatedSection key={agent.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="glass-card p-6 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i % 3 === 0 ? 'bg-citrus/8 border border-citrus/15 text-citrus-dark' : i % 3 === 1 ? 'bg-indigo-400/8 border border-indigo-400/15 text-indigo-400' : 'bg-pink-400/8 border border-pink-400/15 text-pink-400'}`}>
                      {agent.icon}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${i % 3 === 0 ? 'bg-citrus' : i % 3 === 1 ? 'bg-indigo-400' : 'bg-pink-400'}`} />
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${i % 3 === 0 ? 'text-citrus-dark' : i % 3 === 1 ? 'text-indigo-400' : 'text-pink-400'}`}>Live</span>
                    </div>
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-2">{agent.name}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.6]">{agent.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FULL CATALOGUE */}
      <section className="section-gradient relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              40+ agents, grouped by function
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              Every major logistics workflow has a dedicated agent ready to deploy.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {agentGroups.map((group, i) => {
              const dot = i % 3 === 0 ? 'bg-citrus' : i % 3 === 1 ? 'bg-indigo-400' : 'bg-pink-400';
              const iconWrap = i % 3 === 0 ? 'bg-citrus/8 border-citrus/15 text-citrus-dark' : i % 3 === 1 ? 'bg-indigo-400/8 border-indigo-400/15 text-indigo-400' : 'bg-pink-400/8 border-pink-400/15 text-pink-400';
              return (
                <AnimatedSection key={group.name} delay={i * 0.05}>
                  <motion.div whileHover={{ y: -4 }} className="glass-card p-6 h-full">
                    <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-slate-100">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${iconWrap}`}>
                        {group.icon}
                      </div>
                      <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider">{group.name}</h3>
                      <span className="ml-auto text-[11px] font-medium text-slate-400">{group.agents.length} agents</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-y-2">
                      {group.agents.map((agent) => (
                        <li key={agent} className="flex items-center gap-2.5">
                          <span className={`w-1 h-1 rounded-full flex-shrink-0 ${dot}`} />
                          <span className="text-[13px] text-slate-600 leading-tight">{agent}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW AGENT WORKS */}
      <section id="how-agent-works" className="section-dark relative">
        <div className="orb orb-indigo w-[400px] h-[400px] -bottom-48 -left-32 opacity-25" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-white tracking-[-0.02em] mb-3">
              From document to done
            </h2>
            <p className="text-[15px] text-slate-400 max-w-lg mx-auto">
              Each agent follows the same disciplined lifecycle. No black boxes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: 1, icon: <Mail className="w-5 h-5" />, title: 'Trigger', desc: 'A booking confirmation, email or document arrives in the monitored channel.' },
              { num: 2, icon: <Brain className="w-5 h-5" />, title: 'Read & Extract', desc: 'The agent understands the data, even from unstructured or messy documents.' },
              { num: 3, icon: <Zap className="w-5 h-5" />, title: 'Create', desc: 'It creates the shipment, booking or declaration record in your systems.' },
              { num: 4, icon: <CheckCircle2 className="w-5 h-5" />, title: 'Validate & Hand Off', desc: 'It checks the result and routes to a human for sign-off only where needed.' },
            ].map((step, i) => {
              const colors = ['#2dd4a8', '#818cf8', '#f472b6', '#2dd4a8'];
              return (
                <AnimatedSection key={step.num} delay={i * 0.15}>
                  <div className="text-center">
                    <motion.div
                      whileInView={{ scale: [0.6, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.4 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6"
                      style={{ background: `linear-gradient(135deg, ${colors[i]}, ${colors[i]}90)`, boxShadow: `0 8px 30px ${colors[i]}40` }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-[15px] font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-[13px] text-slate-400 leading-[1.6]">{step.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section-muted">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Works with your systems
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              ConexusOne AI connects to the platforms you already run. No rip-and-replace required.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {integrations.map((sys, i) => (
              <AnimatedSection key={sys.name} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -4, borderColor: '#2dd4a8' }}
                  className="flex items-center justify-center h-20 px-4 rounded-xl bg-white border border-slate-200 shadow-sm transition-colors"
                >
                  <img src={sys.logo} alt={sys.name} className="h-8 w-full max-w-[100px] object-contain" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="section-light relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Measurable impact across every workflow
            </h2>
            <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
              Live performance ranges drawn straight from ConexusOne AI&apos;s deployed agents.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="dark-card glow-pulse p-6 sm:p-10 relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
                {valueMetrics.map((metric, i) => {
                  const color = metricColors[i % 3];
                  return (
                    <motion.div
                      key={metric.area}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col h-full transition-colors hover:border-white/20"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <RingMetric headline={metric.headline} unit={metric.unit} ring={metric.ring} color={color} icon={metric.icon} />
                        <h3 className="text-[15px] font-bold text-white leading-tight">{metric.area}</h3>
                      </div>
                      <p className="text-[12.5px] text-slate-400 leading-[1.6] mb-3">{metric.detail}</p>
                      <p className="text-[13.5px] font-semibold mt-auto pt-3 border-t border-white/[0.06]" style={{ color }}>
                        {metric.result}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="relative z-10 mt-8 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="text-center md:text-left">
                  <h3 className="text-[17px] font-bold text-white mb-1">See these numbers on your own workflow</h3>
                  <p className="text-[13.5px] text-slate-400">Book a demo on a real shipment. We process your data, not a slideshow.</p>
                </div>
                <BookingButton className="btn-citrus whitespace-nowrap flex-shrink-0">
                  Book a demo
                  <ArrowRight className="w-4 h-4" />
                </BookingButton>
              </div>
            </div>
          </AnimatedSection>

          <p className="text-xs text-slate-400 text-center mt-6 max-w-xl mx-auto">
            Figures above are ConexusOne AI&apos;s stated product impact. Actual results depend on your workflow, data and scope.
          </p>
        </div>
      </section>

      {/* DELIVERY STEPS */}
      <ProcessFlow
        heading="From qualified use case to production"
        subheading="Every deployment follows a structured, evidence-led process. You see results before you scale."
        steps={steps}
      />

      {/* FAQ */}
      <section className="section-light">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-[2rem] font-bold text-slate-900 tracking-[-0.02em]">
              Common questions, direct answers
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { icon: <HelpCircle className="w-5 h-5 text-citrus" />, q: 'Do the agents replace my team?', a: 'No. Agents handle the repetitive keying and document work so your coordinators spend time on exceptions, customers and growth. Your team does more valuable work, not less work.' },
              { icon: <HelpCircle className="w-5 h-5 text-indigo-400" />, q: 'How do agents handle exceptions?', a: 'They retry, resolve what they can, and escalate only genuine edge cases to a person, with full context attached. You define the escalation rules during setup.' },
              { icon: <HelpCircle className="w-5 h-5 text-pink-400" />, q: 'Do I need to change my ERP or TMS?', a: 'No. ConexusOne AI works around your existing systems. The exact integration is confirmed during assessment. CargoWise, SAP, Oracle, NetSuite and many others are supported.' },
              { icon: <HelpCircle className="w-5 h-5 text-citrus" />, q: 'How long until we see results?', a: 'The first agent can be in production within weeks. You start with one workflow, measure the impact, then scale. No big-bang rollouts.' },
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                      {faq.icon}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-slate-900 mb-2">{faq.q}</h3>
                      <p className="text-[13px] text-slate-500 leading-[1.7]">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Put your busywork on autopilot."
        subtext="Book a demo on a real shipment workflow. See ConexusOne AI process your data, not a slideshow."
        primaryCTA="Book a Demo"
        primaryHref="/contact"
        secondaryCTA="inquiry@citrus.global"
        secondaryHref="mailto:inquiry@citrus.global"
      />
    </>
  );
}
