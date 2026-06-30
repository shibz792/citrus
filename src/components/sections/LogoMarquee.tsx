'use client';

import Image from 'next/image';

interface LogoMarqueeProps {
  logos: { src: string; alt: string }[];
  speed?: number;
  reverse?: boolean;
  className?: string;
  grayscale?: boolean;
}

export default function LogoMarquee({ logos, speed = 30, reverse = false, className = '', grayscale = true }: LogoMarqueeProps) {
  const doubled = [...logos, ...logos];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex items-center gap-12 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((logo, i) => (
          <div key={i} className="flex-shrink-0 h-10 w-auto flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className={`h-8 w-auto object-contain ${grayscale ? 'opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-300' : 'opacity-70 hover:opacity-100 transition-opacity duration-300'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
