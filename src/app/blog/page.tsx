import React from 'react';
import { Newspaper } from 'lucide-react';
import { BlogCard } from '@/components/BlogCard';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';

interface Post {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  tag: string;
}

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(
    POSTS_QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <section className="bg-abradepa-dark pt-32 pb-24 text-white px-4 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 opacity-5 pointer-events-none hidden lg:block rotate-6">
          <Newspaper size={360} strokeWidth={0.5} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="text-abradepa-yellow" size={20} />
                <span className="text-abradepa-pale text-xs font-bold uppercase tracking-[0.2em]">
                  Informativos e artigos
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight uppercase">
                Blog
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl italic border-l-4 border-abradepa-yellow pl-6">
                Informação, ciência e histórias reais para disseminar o
                conhecimento sobre a saúde integral e o impacto social.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.slug}
                title={post.title}
                description={post.description}
                image={post.image || '/logo-abradepa-new.png'}
                date={
                  post.date
                    ? new Date(post.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })
                    : 'Data não disponível'
                }
                tag={post.tag || 'Social'}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="pb-16 text-center max-w-2xl mx-auto">
        <p className="text-abradepa-medium font-black text-xs uppercase tracking-[0.2em] mb-4">
          Abradepa Associação Brasileira de Dermomicropigmentação Paramédica e
          Anaplastologia
        </p>
        <p className="text-abradepa-medium text-sm font-light uppercase tracking-widest">
          Redesenhando Histórias!
        </p>
      </div>
    </div>
  );
}
