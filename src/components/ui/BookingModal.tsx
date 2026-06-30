'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Mail, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { createContext, useContext, useState, useCallback } from 'react';

interface BookingContextType {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const BookingContext = createContext<BookingContextType>({ open: () => {}, close: () => {}, isOpen: false });

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <BookingContext.Provider value={{ open, close, isOpen }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} />
    </BookingContext.Provider>
  );
}

function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [view, setView] = useState<'choose' | 'book'>('choose');

  const handleClose = () => {
    onClose();
    setTimeout(() => setView('choose'), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={`fixed z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${view === 'book' ? 'w-[95vw] max-w-[700px] h-[85vh]' : 'w-[90vw] max-w-[480px]'}`}
          >
            <div className="relative rounded-2xl overflow-hidden h-full" style={{ background: 'linear-gradient(170deg, #050810, #0a1018 50%, #050810)' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle, rgba(45,212,168,0.15) 0%, transparent 50%)' }} />
                <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 50%)' }} />
              </div>

              <button onClick={handleClose} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <X className="w-4 h-4" />
              </button>

              {view === 'book' && (
                <button onClick={() => setView('choose')} className="absolute top-4 left-4 z-10 text-[13px] text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 rotate-180" /> Back
                </button>
              )}

              <AnimatePresence mode="wait">
                {view === 'choose' ? (
                  <motion.div
                    key="choose"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="relative p-8"
                  >
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                        className="w-14 h-14 rounded-2xl bg-citrus/15 border border-citrus/20 flex items-center justify-center mx-auto mb-4"
                      >
                        <Calendar className="w-6 h-6 text-citrus" />
                      </motion.div>
                      <h2 className="text-[22px] font-bold text-white mb-2">Let&apos;s talk about your operation</h2>
                      <p className="text-[14px] text-slate-400 leading-relaxed">Choose how you&apos;d like to connect. No commitment, no software pitch.</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <motion.button
                        onClick={() => setView('book')}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="group w-full flex items-center gap-4 p-4 rounded-xl border border-citrus/20 bg-citrus/5 hover:bg-citrus/10 hover:border-citrus/40 transition-all text-left"
                      >
                        <div className="w-11 h-11 rounded-xl bg-citrus/15 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-citrus" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[15px] font-semibold text-white mb-0.5">Book a 30-minute call</div>
                          <div className="text-[12px] text-slate-400">Pick a time that works for you</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-citrus opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </motion.button>

                      <motion.a
                        href="mailto:inquiry@citrus.global"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 }}
                        className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all"
                      >
                        <div className="w-11 h-11 rounded-xl bg-pink-400/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-pink-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[15px] font-semibold text-white mb-0.5">Send us an email</div>
                          <div className="text-[12px] text-slate-400">inquiry@citrus.global</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </motion.a>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 30 minutes</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> No obligation</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="book"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col"
                  >
                    <div className="pt-14 px-6 pb-3">
                      <h2 className="text-[18px] font-bold text-white">Pick a time</h2>
                      <p className="text-[13px] text-slate-400">30-minute call with a Citrus consultant</p>
                    </div>
                    <div className="flex-1 px-3 pb-3">
                      <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                        <iframe
                          src="https://outlook.office.com/book/CitrusGlobal1@citrus.global/?ismsaljsauthenabled"
                          width="100%"
                          height="100%"
                          scrolling="yes"
                          style={{ border: 0, minHeight: '500px' }}
                          title="Book a call with Citrus Global"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
