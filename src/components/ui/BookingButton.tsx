'use client';

import { ArrowRight } from 'lucide-react';
import { useBooking } from './BookingModal';

interface BookingButtonProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function BookingButton({ className = 'btn-primary', children, style }: BookingButtonProps) {
  const { open } = useBooking();
  return (
    <button onClick={open} className={className} style={style}>
      {children || <>Book a free assessment <ArrowRight className="w-4 h-4" /></>}
    </button>
  );
}
