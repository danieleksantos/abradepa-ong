'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tag: string;
}

export function NewsCard({
  id,
  title,
  description,
  image,
  date,
  tag,
}: NewsCardProps) {
  return (
    <Link
      href={`/novidades/${id}`}
      className="group bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-[10px] font-bold text-abradepa-medium uppercase tracking-widest">
            {tag}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col grow">
        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase mb-4">
          <Calendar size={14} />
          {date}
        </div>
        <h2 className="text-xl font-black text-abradepa-dark mb-4 leading-tight group-hover:text-abradepa-medium transition-colors uppercase tracking-tight">
          {title}
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
          {description}
        </p>
        <div className="flex items-center gap-2 text-abradepa-dark font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
          Continuar Lendo{' '}
          <ArrowRight size={16} className="text-abradepa-yellow" />
        </div>
      </div>
    </Link>
  );
}
