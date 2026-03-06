'use client';

import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import newsData from '@/data/news.json';

export default function ArtigoPage() {
  const params = useParams();
  const router = useRouter();

  const post = newsData.find((item) => item.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-abradepa-dark">
          Artigo não encontrado
        </h1>
        <button
          onClick={() => router.push('/novidades')}
          className="btn-primary mt-4"
        >
          Voltar para Novidades
        </button>
      </div>
    );
  }

  return (
    <article className="animate-fade-in bg-white min-h-screen pb-24">
      <header className="pt-32 pb-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-abradepa-medium font-bold text-xs uppercase tracking-widest mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft size={16} /> Voltar
          </button>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-abradepa-yellow/20 text-abradepa-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {post.tag}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase">
              <Calendar size={14} />
              {post.date}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-abradepa-dark leading-tight tracking-tight uppercase">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="relative h-75 md:h-125 w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized={post.image.startsWith('http')}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-16">
        <div className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl font-medium text-slate-600 mb-8 leading-relaxed italic border-l-4 border-abradepa-yellow pl-6">
            {post.description}
          </p>

          <div className="text-slate-800 leading-relaxed space-y-6 whitespace-pre-line">
            {post.content}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <Tag size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Saúde Integral • ABRADEPA • {post.tag}
            </span>
          </div>

          <button
            onClick={() => router.push('/novidades')}
            className="group flex items-center gap-2 text-abradepa-dark font-black text-xs uppercase tracking-widest hover:text-abradepa-medium transition-colors cursor-pointer"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Voltar para as novidades
          </button>
        </div>
      </div>
    </article>
  );
}
