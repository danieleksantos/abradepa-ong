'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutTeaser() {
  return (
    <section
      id="quem-somos"
      className="py-20 md:pt-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-6">
          <div className="relative group lg:flex lg:items-center">
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-abradepa-yellow rounded-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="relative h-100 md:h-125 w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <Image
                src="/about.png"
                alt="Presidente Simone Borges ABRADEPA"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-abradepa-dark/40 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-abradepa-dark font-black uppercase tracking-[0.2em] text-[16px] mb-4 border-l-4 border-abradepa-yellow pl-3 inline-block">
              {' '}
              Nossa Essência
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-abradepa-dark mb-8 leading-tight">
              Um ambiente para todos, com foco na
              <span className="text-abradepa-dark italic underline decoration-abradepa-yellow decoration-4 underline-offset-4">
                {' '}
                Saúde Integral.{' '}
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                A Abradepa nasceu em Curitiba – PR com a missão de tornar a
                saúde integral acessível à todos. Atuamos no cuidado físico,
                mental e emocional, oferecendo terapias e suporte para promover
                bem-estar e qualidade de vida.
              </p>

              <p>
                Nossa atuação vai além da saúde: ajudamos cada pessoa a
                reconstruir sua história, fortalecer sua autonomia e viver com
                mais propósito.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-8 border-t border-slate-50">
          <Link
            href="/sobre"
            className="btn-primary w-full md:w-fit px-12 py-4 text-sm flex items-center justify-center gap-2 group hover:scale-105"
          >
            Conheça nossa história completa
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
