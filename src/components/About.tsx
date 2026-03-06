import Image from 'next/image';

export function About() {
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
                alt="Acolhimento ABRADEPA"
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
              Nossa Essência e Valores
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-abradepa-dark mb-8 leading-tight">
              Um ambiente inclusivo para a{' '}
              <span className="text-abradepa-medium italic">
                Saúde Integral.
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                A <strong>ABRADEPA</strong> nasceu da visão da nossa presidente,
                Simone Borges, com a missão de proporcionar um suporte
                transformador que integra a dermomicropigmentação paramédica e a
                anaplastologia ao cuidado oncológico.
              </p>

              <p>
                Fundada em 2022, nossa associação funciona como uma colmeia de
                colaboração, onde cada profissional contribui para restaurar a
                autoestima e a funcionalidade. Utilizamos{' '}
                <strong>práticas integrativas e complementares</strong> para
                promover o equilíbrio entre corpo e mente, garantindo uma
                jornada de esperança e inovação.
              </p>

              <p className="border-l-4 border-abradepa-yellow pl-6 italic font-medium text-abradepa-dark/80 bg-slate-50 py-4 rounded-r-lg">
                "Nosso compromisso reflete o círculo da vida: um espaço sem
                exclusões, focado na totalidade, plenitude e no acolhimento de
                cada indivíduo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
