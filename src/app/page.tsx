'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AboutTeaser } from '@/components/AboutTeaser';
import { Objectives } from '@/components/Objectives';
import { Supporters } from '@/components/Supporters';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const whatsappUrl = 'https://wa.me/5541991541319';

  return (
    <>
      <section className="relative overflow-hidden bg-abradepa-dark px-4 py-20 md:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-abradepa-medium/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="animate-fade-in mb-8 text-4xl font-extrabold text-white md:text-7xl tracking-tight leading-[1.1]">
                ABRADEPA <br />
                <span className="text-abradepa-pale text-3xl md:text-5xl block mt-2">
                  Saúde Integral
                </span>
              </h1>

              <p className="mx-auto lg:mx-0 mb-12 max-w-2xl text-lg text-white/90 md:text-xl leading-relaxed">
                Transformando vidas ao ampliar o acesso à saúde, com consultas
                médicas acessíveis, anaplastologia (próteses estéticas
                personalizadas), terapias integrativas e dermopigmentação
                paramédica.
              </p>

              <div className="flex flex-col justify-center lg:justify-start gap-6 sm:flex-row">
                <Link
                  href="/sobre"
                  className="btn-primary px-10 py-4 text-lg group inline-flex items-center justify-center hover:scale-105"
                >
                  Conheça nossa história
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-10 py-4 text-lg hover:scale-105"
                >
                  <MessageCircle size={20} /> Fale Conosco
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-105 ml-auto">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-abradepa-yellow rounded-[3rem] -z-10" />

                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-abradepa-medium">
                  <Image
                    src="/cuidado-integral.jpg"
                    alt="Acolhimento e Saúde Integral ABRADEPA"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="acesso-saude"
        className="relative z-20 mx-auto -mt-16 max-w-7xl px-4"
      >
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:flex-row md:p-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold text-abradepa-dark uppercase tracking-tight">
              Acesso à Saúde
            </h2>
            <p className="text-lg text-slate-600">
              Consultas com Médicos, Psicólogos e Nutricionistas.
            </p>
          </div>
          <Link
            href="/cursos#cartao-saude"
            className="btn-primary px-10 py-4 hover:brightness-110"
          >
            Saiba mais
          </Link>
        </div>
      </section>

      <AboutTeaser />
      <Objectives />
      <Supporters />
    </>
  );
}
