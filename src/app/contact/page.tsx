'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, ArrowRight, Phone, MessageSquare, CheckCircle2, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BookingButton from '@/components/ui/BookingButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:inquiry@citrus.global?subject=Assessment Request from ${formData.name} - ${formData.company}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="aurora-bg" />
        <div className="aurora-third" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em] mb-6">
                Tell us what&rsquo;s not working.{' '}
                <span className="gradient-text">We&rsquo;ll show you what can be fixed.</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                The first conversation is a 30-minute qualification call. We will talk through your operation, the outcome you need and the right next step. No software pitch, no obligation.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-citrus/8 border border-citrus/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-citrus" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-0.5">Email</p>
                    <a href="mailto:inquiry@citrus.global" className="text-[15px] font-semibold text-slate-900 hover:text-citrus-dark transition-colors">
                      inquiry@citrus.global
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-400/8 border border-indigo-400/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-0.5">Phone</p>
                    <div className="flex flex-col gap-0.5">
                      <a href="tel:+64212289920" className="text-[15px] font-semibold text-slate-900 hover:text-citrus-dark transition-colors">+64 21 228 9920</a>
                      <a href="tel:+64223001673" className="text-[15px] font-semibold text-slate-900 hover:text-citrus-dark transition-colors">+64 22 300 1673</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-400/8 border border-pink-400/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-0.5">Region</p>
                    <p className="text-[15px] font-semibold text-slate-900">Australia &middot; New Zealand</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-citrus/8 border border-citrus/15 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-citrus" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-0.5">Response</p>
                    <p className="text-[15px] font-semibold text-slate-900">Within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <BookingButton className="btn-primary text-base px-8 py-4">
                  Book a meeting
                  <Calendar className="w-5 h-5" />
                </BookingButton>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200/60">
                <p className="text-[13px] text-slate-400 mb-4 font-medium">What to expect from the first call:</p>
                <div className="space-y-2.5">
                  {[
                    '30 minutes. We listen first.',
                    'We will ask about your operation and what is not working.',
                    'Honest recommendation on whether we can help.',
                    'No software pitch. No obligation.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-citrus-dark flex-shrink-0" />
                      <span className="text-[13px] text-slate-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <AnimatedSection delay={0.3}>
              <div className="border-gradient">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-citrus/8 border border-citrus/15 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-citrus" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">Book an assessment</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-[11px] uppercase tracking-wider text-slate-500 font-medium mb-2">
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-citrus/30 focus:border-citrus/50 transition-all"
                        placeholder="Jane Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11px] uppercase tracking-wider text-slate-500 font-medium mb-2">
                        Work email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-citrus/30 focus:border-citrus/50 transition-all"
                        placeholder="jane@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-[11px] uppercase tracking-wider text-slate-500 font-medium mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-citrus/30 focus:border-citrus/50 transition-all"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[11px] uppercase tracking-wider text-slate-500 font-medium mb-2">
                        What is not working?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-citrus/30 focus:border-citrus/50 transition-all resize-none"
                        placeholder="Tell us about the challenge you are facing..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center py-4">
                      Send message
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      Starts with a 30-minute call. No obligation.
                    </p>
                  </form>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
