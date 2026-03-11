'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutTeaser() {
  return (
    <section
      id="quem-somos"
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
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
            <span className="text-abradepa-medium font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Nossa Essência
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-abradepa-dark mb-8 leading-tight">
              Um ambiente inclusivo para a{' '}
              <span className="text-abradepa-medium italic">
                Saúde Integral.
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                A Abradepa nasceu em Curitiba - PR com o propósito de oferecer
                esperança e humanidade aqueles que enfrentam desafios complexos
                de saúde. Liderada por uma mulher visionária, a associação vai
                além de tratamentos, oferecendo um recomeço e suporte integral.
              </p>

              <p>
                A Abradepa almeja expandir cada vez mais, o acesso às terapias,
                capacitando cada pessoa a redesenhar sua história e viver com
                plena confiança e de posse da sua Saúde Integral.
              </p>

              <div className="pt-6 border-t border-slate-50">
                <Link
                  href="/sobre"
                  className="btn-primary w-full md:w-fit px-8 py-4 text-sm flex items-center justify-center gap-2 group hover:scale-105"
                >
                  Conheça nossa história completa
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
