import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Objectives } from '@/components/Objectives';
import { Board } from '@/components/Board';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="grow">
        <section className="relative overflow-hidden bg-abradepa-dark px-4 py-20 md:py-32">
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-abradepa-medium/20 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Associação Brasileira de Apoio <br />à{' '}
              <span className="text-abradepa-pale">Saúde Integral</span>
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-lg font-medium text-white md:text-xl">
              Transformando vidas através do apoio oncológico, anaplastologia e
              dermomicropigmentação.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <button className="cursor-pointer rounded-full bg-abradepa-yellow px-8 py-3 text-lg font-bold text-abradepa-dark shadow-md transition-all hover:scale-105 hover:shadow-lg">
                Conheça nosso trabalho
              </button>
              <button className="cursor-pointer rounded-full bg-white px-8 py-3 text-lg font-bold text-abradepa-dark shadow-md transition-all hover:scale-105 hover:shadow-lg">
                Fale Conosco
              </button>
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
                Acesse conteúdos chancelados com dupla certificação para
                capacitação profissional e acolhimento de pacientes.
              </p>
            </div>
            <button className="w-full md:w-auto cursor-pointer rounded-full bg-abradepa-yellow px-10 py-4 text-center text-lg font-bold text-abradepa-dark shadow-sm transition-all hover:shadow-md hover:brightness-110">
              Saiba mais
            </button>
          </div>
        </section>

        {/* 3. Quem Somos: A História e Missão */}
        <About />

        {/* 4. Objetivos: As Frentes de Atuação (O que fazemos) */}
        <Objectives />

        {/* 5. Diretoria: Liderança e Confiança */}
        <Board />
      </main>

      <Footer />
    </div>
  );
}
