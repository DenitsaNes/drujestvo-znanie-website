'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { homeContent } from '@/lib/content/home';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Как да научиш немски по-бързо: 5 проверени техники',
    excerpt: 'Открийте най-ефективните методи за бързо овладяване на немския език.',
    date: 'Януари 18, 2026',
    author: 'Мария Иванова',
    category: 'Учебни методи',
    slug: 'how-to-learn-german-faster',
  },
  {
    id: '2',
    title: 'Преимуществата на спейсд повторението във обучението',
    excerpt: 'Научете защо спейсд повторението е ключът към дълготрайното запомняне.',
    date: 'Януари 15, 2026',
    author: 'Томас Бергер',
    category: 'Наука за обучението',
    slug: 'benefits-of-spaced-repetition',
  },
  {
    id: '3',
    title: 'Приказни за правилни разговори на немски',
    excerpt: 'Как историите помагат при изучаването на реалистични разговори.',
    date: 'Януари 12, 2026',
    author: 'Анна Шмидт',
    category: 'Практика на разговор',
    slug: 'stories-for-conversation',
  },
  {
    id: '4',
    title: 'Овладяване на немските граматични правила със свои собствени примери',
    excerpt: 'Как да го направиш по-лесно и по-приятно изучаването на граматика.',
    date: 'Януари 10, 2026',
    author: 'Карл Вебер',
    category: 'Граматика',
    slug: 'german-grammar-guide',
  },
  {
    id: '5',
    title: 'Историята зад Мinka: Защо приказите имат значение',
    excerpt: 'Разберете философията, която стои зад нашия подход към обучението.',
    date: 'Януари 8, 2026',
    author: 'София Левски',
    category: 'Наши истории',
    slug: 'story-behind-minka',
  },
  {
    id: '6',
    title: 'Построени иска скорост: Постигане на платото в обучението',
    excerpt: 'Как да преодолеете периодите на застой в вашото обучение.',
    date: 'Януари 5, 2026',
    author: 'Петър Антонов',
    category: 'Мотивация',
    slug: 'overcoming-learning-plateau',
  },
];

export default function BlogPage() {
  return (
    <div className="relative z-10 text-[#111111]">
      <Header brand={homeContent.brand} links={homeContent.navLinks} cta={homeContent.headerCta} />
      <main className="relative z-10 bg-white pt-24 pb-20">
        {/* Header Section */}
        <section className="px-6 sm:px-8 py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6">
              Блог за обучение
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Открийте советите, техниките и историите, които ще трансформират вашето обучение на немски.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <section className="px-6 sm:px-8 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-[#C4A5E9] to-[#E8D9F9] rounded-lg overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-2 bg-purple-400 text-white rounded-full text-sm font-semibold">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-sm text-gray-700">{blogPosts[0].date}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-[#1a1a1a] leading-tight">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-lg text-gray-800">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                      <span className="text-sm font-semibold text-gray-700">Автор: {blogPosts[0].author}</span>
                      <Link href={`/blog/${blogPosts[0].slug}`} className="text-purple-600 hover:text-purple-700 font-semibold">
                        Прочети повече →
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden bg-gray-300">
                    {/* Placeholder for featured image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                      Изображение
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="px-6 sm:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-12">Последни постинги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-br from-purple-200 to-purple-100 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Изображение</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-xs text-gray-600">от {post.author}</span>
                      <span className="text-purple-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-6 sm:px-8 py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#1a1a1a]">Останете на курс</h2>
              <p className="text-lg text-gray-700">
                Получавайте最нови совети и техники за обучение директно във вашата пощенска кутия.
              </p>
            </div>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Вашият имейл..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold skew-x-[-10deg] transition-colors"
              >
                Абонирай се
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer content={homeContent.footer} />
    </div>
  );
}
