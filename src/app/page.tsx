'use client';

import Header from '@/components/Header';
import { useRef } from 'react';
import Footer from '@/components/Footer';
import { homeContent } from '@/lib/content/home';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <div className="relative z-10 text-[#111111]">
      <Header brand={homeContent.brand} links={homeContent.navLinks} cta={homeContent.headerCta} ctaRef={ctaRef} />
      <main className="relative z-10 bg-white pt-16">
        {/* Hero Section */}
        <section
          className="relative min-h-screen py-24 md:py-32 px-8 md:px-16"
          style={{
            backgroundImage: "url('/images/backgroud.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-pt-serif font-bold text-[#1a1a1a] leading-tight tracking-tight">
                Научи немски като се потопиш в един нов свят.
              {/* Font changed to PT Serif */}
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Влез в света на Мinka, където немският език се преживява чрез приключения, игра и контекст, който остава в паметта ти завинаги. Научи нови думи, срещни нови хора и достигни целите си заедно с Мinka.
              </p>

              <Button asChild size="lg" className="bg-purple-400 hover:bg-purple-500 text-white rounded-full px-8 py-6 text-base font-semibold">
                <Link href="/onboarding" ref={ctaRef}>
                  Започни своето приключение →
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

        {/* Feature Sections */}
        <section className="py-28 px-8 md:px-16" style={{ backgroundColor: '#F7F7F1' }}>
          <div className="space-y-32 max-w-4xl mx-auto">
            
            {/* Feature 1: Уча чрез история */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 w-full text-center">
                <h2 className="text-4xl font-bold text-[#1a1a1a] leading-tight font-pt-serif w-full text-center">Учи през история</h2>
                <p className="text-lg text-gray-700 leading-relaxed w-full text-center">
                  Всеки урок е епизод. Всеки епизод - нова част от голямата история.
                   Учиш думи и граматика естествено, докато следваш героите и сюжета.
                </p>
              </div>
              <div className="relative h-[340px] md:h-[440px] w-full">
                <Image
                  src="/images/minka-stories.png"
                  alt="Learn through stories"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Feature 2: Играй и научавай */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[340px] md:h-[440px] w-full">
                <Image
                  src="/images/minka-play.png"
                  alt="Play and learn"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6 w-full text-center">
                <h2 className="text-4xl font-bold text-[#1a1a1a] leading-tight font-pt-serif w-full text-center">Играй и напредвай</h2>
                <p className="text-lg text-gray-700 leading-relaxed w-full text-center">
                  Събирай точки, отключвай нови глави, изпълнявай мисии. 
                  Малките победи те държат мотивиран - без натиск, без стрес.
                </p>
              </div>
            </div>

            {/* Feature 3: Повтарай без усилие */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 w-full text-center">
                <h2 className="text-4xl font-bold text-[#1a1a1a] leading-tight font-pt-serif w-full text-center">Повтарай без усилие</h2>
                <p className="text-lg text-gray-700 leading-relaxed w-full text-center">
                 Нашата система ти припомня думите точно когато имаш нужда. 
                 Без скучни тестове. Просто леко повторение, което работи.
                </p>
              </div>
              <div className="relative h-[340px] md:h-[440px] w-full">
                <Image
                  src="/images/minka-repeat.png"
                  alt="Repeat without effort"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Feature 4: Уча със своето темпо */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[340px] md:h-[440px] w-full">
                <Image
                  src="/images/minka-pace.png"
                  alt="Learn at your pace"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-6 w-full text-center">
                <h2 className="text-4xl font-bold text-[#1a1a1a] leading-tight font-pt-serif w-full text-center">Учи със своето темпо</h2>
                <p className="text-lg text-gray-700 leading-relaxed w-full text-center">
                 5 минути или 30 - ти решаваш. Историята те чака винаги, когато си готов.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Wave Image before How it works */}
        <div className="w-full flex justify-center bg-[#F7F7F1]">
          <Image
            src="/images/Group 167.png"
            alt="Decorative wave with eyes"
            width={995}
            height={90}
            className="w-full h-[90px] max-w-5xl object-contain"
          />
        </div>
        {/* How it works section */}
        <section className="py-28 bg-white px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-20 text-[#1a1a1a] font-pt-serif">Как работи</h2>
            
            <div className="grid md:grid-cols-4 gap-8  style={{ backgroundColor: '#F7F7F1' }">
              {/* Step 1 */}
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-md">
                    1
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 font-pt-serif">Влез в историята</h3>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-md">
                    2
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 font-pt-serif">Учи чрез преживяване</h3>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-md">
                    3
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 font-pt-serif">Напредвай и отключвай</h3>
              </div>

              {/* Step 4 */}
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-md">
                    4
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 font-pt-serif">Затвърждавай без усилие</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase Section (redesigned) */}
        <section className="py-28 bg-white px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Left: Text */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl md:text-5xl font-bold text-[#184034] font-pt-serif mb-2 text-left">Историята е в сърцето на всичко</h2>
              <div className="text-lg md:text-xl font-semibold text-black mb-4 text-left">Език, който се учи като сериал</div>
              <div className="text-base text-[#222] mb-8 text-left max-w-md">
                Представи си: учиш немски не от учебник, а от история, която искаш да продължиш да четеш.
              </div>
              <div className="mt-16 md:mt-24 text-center w-full">
                <div className="font-bold text-xl md:text-2xl text-black mb-1">Не четеш за да учиш.</div>
                <div className="font-bold text-xl md:text-2xl text-black">Учиш, защото искаш да знаеш какво ще се случи.</div>
              </div>
            </div>
            {/* Right: Laptop and floating labels */}
            <div className="relative flex items-center justify-center h-full min-h-[350px]">
              <Image
                src="/images/laptop-showcase.png"
                alt="Laptop with Minka app"
                width={600}
                height={390}
                className="z-10 relative drop-shadow-xl md:w-[600px] w-full h-auto"
                priority={false}
              />
              {/* Floating labels */}
              {/* Floating labels - always in front and responsive */}
              {/* Floating labels - always absolute and overlapping for all sizes */}
              <div className="absolute left-4 top-4 z-30 rotate-[-15deg] pointer-events-none">
                <div className="bg-gradient-to-r from-[#B18BE8] to-[#A6D0F7] text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-lg whitespace-nowrap">Нови герои</div>
              </div>
              <div className="absolute right-4 top-16 z-30 rotate-[15deg] pointer-events-none">
                <div className="bg-gradient-to-r from-[#B18BE8] to-[#A6D0F7] text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-lg whitespace-nowrap">Мистерии, които те държат буден</div>
              </div>
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-30 rotate-[-8deg] pointer-events-none">
                <div className="bg-gradient-to-r from-[#B18BE8] to-[#A6D0F7] text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm md:text-lg whitespace-nowrap">
                  Места и култура, които оживяват
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-gradient-to-r from-[#C4A5E9] to-[#E8D9F9] px-8 md:px-16">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight font-pt-serif">Не чекай за училище.</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Учите, защото можете да учите каквото още се случва.
            </p>
            <Button asChild size="lg" className="bg-purple-400 hover:bg-purple-500 text-white rounded-full px-8 py-6 text-base font-semibold">
              <Link href="/auth/signup">
                Започни сега
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer content={homeContent.footer} />
    </div>
  );
}
