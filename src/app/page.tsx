import Image from 'next/image';
import { About } from '@/components/About';
import { Objectives } from '@/components/Objectives';
import { Board } from '@/components/Board';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-abradepa-dark px-4 py-20 md:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-abradepa-medium/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="animate-fade-in mb-8 text-4xl font-extrabold text-white md:text-7xl tracking-tight leading-[1.1]">
                Associação Brasileira de Apoio <br />à{' '}
                <span className="text-abradepa-pale">Saúde Integral</span>
              </h1>
              <p className="mx-auto lg:mx-0 mb-12 max-w-2xl text-lg text-white/90 md:text-xl leading-relaxed">
                Transformando vidas através do suporte oncológico,
                anaplastologia e dermomicropigmentação paramédica.
              </p>
              <div className="flex flex-col justify-center lg:justify-start gap-6 sm:flex-row">
                <button className="btn-primary px-10 py-4 text-lg group">
                  Nosso trabalho
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="cursor-pointer rounded-full bg-white px-10 py-4 text-lg font-bold text-abradepa-dark shadow-md transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> Fale Conosco
                </button>
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
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-abradepa-dark/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-abradepa text-[10px] font-bold uppercase tracking-widest text-center">
                      Ambiente Inclusivo e Transformador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:flex-row md:p-12">
          <div className="flex-1">
            <h2 className="mb-4 text-3xl font-bold text-abradepa-dark">
              Cursos e Capacitações
            </h2>
            <p className="text-lg text-slate-600">
              Acesse conteúdos chancelados com dupla certificação.
            </p>
          </div>
          <button className="btn-secondary">Saiba mais</button>
        </div>
      </section>

      <About />
      <Objectives />
      <Board />
    </>
  );
}
