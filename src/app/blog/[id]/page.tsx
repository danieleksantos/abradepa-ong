import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import { POST_DETAIL_QUERY } from '@/sanity/lib/queries';

const builder = urlBuilder(client);

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-black text-abradepa-dark mt-10 mb-4 uppercase tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-abradepa-dark mt-8 mb-3 uppercase">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-slate-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-abradepa-yellow pl-6 italic my-8 text-lg text-slate-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-slate-700">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      return (
        <div className="my-10 relative w-full h-75 md:h-112.5 overflow-hidden rounded-3xl border-2 border-slate-50 shadow-sm">
          <Image
            src={builder.image(value).url()}
            alt="Imagem do conteúdo"
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ArtigoPage({ params }: Props) {
  const { id } = await params;

  const post = await client.fetch(
    POST_DETAIL_QUERY,
    { slug: id },
    { next: { revalidate: 60 } },
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="animate-fade-in bg-white min-h-screen pb-24">
      <header className="pt-32 pb-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-abradepa-medium font-bold text-xs uppercase tracking-widest mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-abradepa-yellow/20 text-abradepa-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {post.tag || 'Informativo'}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase">
              <Calendar size={14} />
              {post.date
                ? new Date(post.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })
                : 'Data Indisponível'}
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
            src={post.image || '/fallback-blog.jpg'}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-16">
        <div className="prose prose-slate prose-lg max-w-none">
          {post.description && (
            <p className="text-xl font-medium text-slate-600 mb-10 leading-relaxed italic border-l-4 border-abradepa-yellow pl-6">
              {post.description}
            </p>
          )}

          <div className="text-slate-800">
            <PortableText value={post.body} components={components} />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              <Tag size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Saúde Integral • ABRADEPA • {post.tag || 'Social'}
              </span>
            </div>

            <Link
              href="/blog"
              className="group flex items-center gap-2 text-abradepa-dark font-black text-xs uppercase tracking-widest hover:text-abradepa-medium transition-colors"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Voltar para o blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
