'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { onAuthChange } from '@/lib/auth';
import { User } from 'firebase/auth';

interface HeaderProps {
  brand: string;
  links: Array<{ label: string; href: string }>;
  cta: { label: string; href: string };
  ctaRef?: React.RefObject<HTMLAnchorElement | null>;
}

export default function Header({ brand, links, cta, ctaRef }: HeaderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!ctaRef || !ctaRef.current) return;
    function onScroll() {
      if (window.innerWidth > 768) {
        setCompact(false);
        return;
      }
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      setCompact(rect.bottom < 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ctaRef]);

   return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-[var(--purple)] shadow-md"
      style={{
        // Declare CSS variables for colors
        '--dark-green': 'rgb(0,51,44)',
        '--purple': 'rgb(196,165,233)',
      } as React.CSSProperties}
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center gap-8">
        {/* Logo - Minka Logo */}
        <div className="flex flex-none items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition flex-shrink-0">
            <Image
              src="/images/minka-logo.png"
              alt="Minka Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Centered Navigation - absolute center on mobile, flex center on desktop */}
        <nav
          className={`gap-8 min-w-0 transition-all duration-300
            ${compact ? 'hidden' : ''}
            md:flex flex-1 items-center justify-center
            hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:relative md:block`
          }
          style={{ pointerEvents: compact ? 'none' : undefined }}
        >
          <Link href="/blog" className="text-black font-medium hover:text-gray-700 transition text-sm px-6 rounded-full flex items-center h-10">
            Blog
          </Link>
          <Link href="/about" className="text-black font-medium hover:text-gray-700 transition text-sm px-6 rounded-full flex items-center h-10">
            About
          </Link>
        </nav>

        {/* Buttons - Registration always right, Vhod hidden in compact mode */}
        <div className="flex flex-none items-center gap-4 ml-auto">
          <Button 
            asChild 
            size="sm" 
            className="bg-[var(--dark-green)] hover:bg-[#00251f] text-white px-8 md:px-10 rounded-full font-semibold h-10 flex items-center min-w-[110px] md:min-w-[140px] justify-center"
          >
            <Link href="/auth/signup">Регистрация</Link>
          </Button>
        </div>
    </div>
  </header>
  );
}