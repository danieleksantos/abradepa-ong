'use client';

import React from 'react';
import { Newspaper, ShieldCheck, NewspaperIcon } from 'lucide-react';
import { NewsCard } from '@/components/NewsCard';
import newsData from '@/data/news.json';

export default function NovidadesPage() {
  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <section className="bg-abradepa-dark pt-32 pb-24 text-white px-4 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none hidden lg:block">
          <Newspaper size={600} strokeWidth={0.5} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-abradepa-yellow" size={20} />
                <span className="text-abradepa-pale text-xs font-bold uppercase tracking-[0.2em]">
                  Informativos Oficiais
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Novidades
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Ética e responsabilidade como base fundamental do nosso apoio à
                saúde integral.
              </p>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-abradepa-yellow/10 blur-[100px] rounded-full"></div>
                <NewspaperIcon
                  size={260}
                  strokeWidth={0.5}
                  className="relative z-10 text-white/10 rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
