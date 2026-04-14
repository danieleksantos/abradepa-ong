'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AboutTeaser } from '@/components/AboutTeaser';
import { Objectives } from '@/components/Objectives';
import { Supporters } from '@/components/Supporters';
import { MessageCircle, ArrowRight, Plus } from 'lucide-react';

export default function Home() {
  const whatsappUrl = 'https://wa.me/5541995912817';

  return (
    <>
      <section className="relative overflow-hidden bg-abradepa-dark px-4 py-20 md:py-32">
        <div className="absolute inset-0 z-0 lg:hidden opacity-60">
          <Image
            src="/cuidado-integral.jpg"
            alt="Background Abradepa"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-abradepa-dark/80 via-abradepa-dark/40 to-abradepa-dark" />
        </div>

        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-abradepa-medium/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="animate-fade-in mb-8 text-4xl font-extrabold text-white md:text-7xl tracking-tight leading-[1.1]">
                ABRADEPA <br />
                <span className="text-abradepa-pale text-2xl md:text-4xl block mt-2">
                  Saúde Integral
                </span>
              </h1>

              <p className="mx-auto lg:mx-0 mb-12 max-w-2xl text-lg text-white md:text-xl leading-relaxed lg:font-light">
                Transformando vidas ao ampliar o acesso à saúde, com consultas
                médicas acessíveis, anaplastologia (próteses estéticas
                personalizadas), terapias integrativas e dermopigmentação
                paramédica.
              </p>

              <div className="flex flex-col justify-center lg:justify-start gap-6 sm:flex-row">
                <Link
                  href="/sobre"
                  className="btn-primary px-8 py-3 text-base font-semibold group inline-flex items-center justify-center hover:scale-105"
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
                  className="btn-secondary px-8 py-3 text-base font-semibold hover:scale-105"
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
                    sizes="420px"
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
            <h2 className="mb-4 text-abradepa-dark tracking-tight text-2xl md:text-3xl font-semibold normal-case">
              Acesso à Saúde
            </h2>
            <p className="text-base text-slate-500">
              Consultas com Médicos, Psicólogos e Nutricionistas.
            </p>
          </div>
          <Link
            href="/cartao-abradepa"
            className="btn-primary px-10 py-4 hover:brightness-110"
          >
            Saiba mais
          </Link>
        </div>
      </section>

      <AboutTeaser />
      <Objectives />
      <Supporters />

      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0 md:gap-6">
          <div className="text-center md:text-left order-1 md:order-2 flex flex-col">
            <h3 className="text-xs font-black text-abradepa-dark uppercase tracking-[0.3em] mb-1">
              Cartão Abradepa Saúde+
            </h3>
            <p className="text-slate-600 text-[9px] uppercase tracking-[0.15em] font-bold opacity-80 mb-0 md:mb-4">
              Cuidado integral para você e sua família
            </p>

            <div className="hidden md:block">
              <Link
                href="/cartao-abradepa"
                className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-abradepa-dark hover:text-abradepa-medium transition-colors"
              >
                <span className="border-b border-abradepa-yellow pb-0.5">
                  Adquirir agora
                </span>
                <Plus size={10} className="text-abradepa-yellow" />
              </Link>
            </div>
          </div>

          <Link
            href="/cartao-abradepa"
            className="block group shrink-0 order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-abradepa-yellow/10 blur-2xl rounded-full scale-110 group-hover:bg-abradepa-yellow/20 transition-all duration-500" />
              <Image
                src="/cartao-abradepa.png"
                alt="Cartão Abradepa Saúde+"
                width={240}
                height={160}
                className="relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] group-hover:drop-shadow-[0_20px_40px_rgba(255,210,0,0.15)] transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1"
                style={{ width: '220px', height: 'auto' }}
              />
            </div>
          </Link>

          <div className="text-center order-3 md:hidden">
            <Link
              href="/cartao-abradepa"
              className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-abradepa-dark hover:text-abradepa-medium transition-colors"
            >
              <span className="border-b border-abradepa-yellow pb-0.5 ">
                Adquirir agora
              </span>
              <Plus size={10} className="text-abradepa-yellow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
