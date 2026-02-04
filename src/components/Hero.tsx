'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeroProps {
  content: {
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
  };
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative z-10 pt-32 pb-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            {content.title}
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-md">
            {content.description}
          </p>

          <Button asChild size="lg" className="bg-purple-400 hover:bg-purple-500 text-white">
            <Link href={content.primaryCta.href}>
              {content.primaryCta.label}
            </Link>
          </Button>
        </div>

        {/* Right Content - Minka Mascot */}
        <div className="relative h-96 md:h-full hidden md:flex items-center justify-center">
          <div className="relative w-full h-full max-w-md">
            <Image
              src="/images/minka-cat.png"
              alt="Minka the cat"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

