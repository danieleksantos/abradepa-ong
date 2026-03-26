'use client';

import Image from 'next/image';
import { MessageCircle, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export default function CapacitacaoPage() {
  const whatsappUrl = 'https://wa.me/5541991541319';

  return (
    <div className="bg-white min-h-screen relative">
      <section className="bg-abradepa-dark pt-40 pb-28 text-white px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            Capacitação e Conscientização
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-abradepa-yellow uppercase mb-8 tracking-widest leading-relaxed">
            PALESTRAS e WORKSHOP GRATUITOS OU COM VALORES SOCIAIS
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic font-light">
            Conectamos profissionais renomados para oferecer conhecimento
            técnico e apoio emocional, promovendo a saúde integral e o
            desenvolvimento humano.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3 px-4 sm:px-0">
              <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-2 border-abradepa-yellow rounded-full -m-1" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src="/palestrantes/gisele.jpeg"
                      alt="Gisele Lazara"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-abradepa-dark uppercase leading-tight mb-2">
                  Gisele Lazara de Faria Borges
                </h3>
                <p className="text-abradepa-medium font-bold uppercase text-[10px] tracking-widest mb-6">
                  Terapeuta Floral Integrativa e Pedagoga
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-8 px-4 sm:px-0">
              <h4 className="text-xl font-black text-abradepa-dark uppercase tracking-widest flex items-center gap-3">
                <Sparkles className="text-abradepa-yellow" /> Palestras e
                Workshops
              </h4>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    t: 'Terapia Floral e qualidade de vida: Apoio complementar para famílias atípicas',
                    d: 'Uma palestra sobre autocuidado, equilíbrio emocional e o uso dos Florais de Bach como apoio complementar para famílias atípicas e cuidadores.',
                  },
                  {
                    t: 'Workshop de Terapia Floral com Florais de Bach – Vivendo os Florais de Bach',
                    d: 'Uma vivência prática e sensível para profissionais de saúde que desejam integrar a Terapia Floral ao cuidado emocional.',
                  },
                  {
                    t: 'Cuide de Si! Filosofia dos Florais de Bach',
                    d: 'A palestra apresenta os Florais de Bach como uma ferramenta complementar de autocuidado, ajudando no equilíbrio emocional e desenvolvimento de virtudes humanas.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-abradepa-yellow transition-all group"
                  >
                    <h5 className="font-black text-abradepa-dark uppercase text-sm mb-4 leading-relaxed group-hover:text-abradepa-medium transition-colors">
                      {i + 1}. {item.t}
                    </h5>
                    <p className="text-slate-500 text-sm leading-relaxed italic">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3 px-4 sm:px-0">
              <div className="bg-slate-900 p-8 rounded-[3rem] shadow-xl text-white text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-2 border-abradepa-yellow rounded-full -m-1" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-900 shadow-md">
                    <Image
                      src="/palestrantes/gisele.jpeg"
                      alt="Rita Schumann"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight mb-2">
                  Rita Schumann
                </h3>
                <p className="text-abradepa-yellow font-bold uppercase text-[10px] tracking-widest mb-6">
                  Pedagoga e Psicopedagoga
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-8 px-4 sm:px-0">
              <h4 className="text-xl font-black text-abradepa-dark uppercase tracking-widest flex items-center gap-3">
                <BookOpen className="text-abradepa-yellow" /> Programas
                Educacionais
              </h4>
              <div className="space-y-6">
                {[
                  {
                    t: '1. Palestra de Regulação Emocional do comportamento',
                    items: [
                      'Transtorno do Processamento Sensorial',
                      '8 sistemas Sensoriais',
                      'Sistema Sensorial de Propriocepção',
                      'Sistema Sensorial de vestibular',
                      'Sistema Sensorial de interocepção',
                    ],
                  },
                  {
                    t: '2. Palestra de estratégias para a inclusão da criança TEA',
                    items: [
                      'Rotina visível e previsível',
                      'Movimento e Atividades adaptadas',
                      'Treinamento da consciência corporal',
                      'Ambiente Sensorial adequado',
                    ],
                  },
                ].map((prog, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
                  >
                    <h5 className="font-black text-abradepa-dark uppercase text-sm mb-6 leading-relaxed border-l-4 border-abradepa-yellow pl-4">
                      {prog.t}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {prog.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-xs font-bold text-slate-600 uppercase"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-abradepa-yellow shrink-0"
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3 px-4 sm:px-0">
              <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-2 border-abradepa-yellow rounded-full -m-1" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src="/palestrantes/gisele.jpeg"
                      alt="Pietra Corrêa"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-abradepa-dark uppercase leading-tight mb-2">
                  Pietra Corrêa Mello
                </h3>
                <p className="text-abradepa-medium font-bold uppercase text-[10px] tracking-widest mb-6">
                  Nutricionista
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-8 px-4 sm:px-0">
              <h4 className="text-xl font-black text-abradepa-dark uppercase tracking-widest flex items-center gap-3">
                <Sparkles className="text-abradepa-yellow" /> Palestra
              </h4>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-abradepa-yellow transition-all group">
                <h5 className="font-black text-abradepa-dark uppercase text-sm mb-4 leading-relaxed group-hover:text-abradepa-medium transition-colors">
                  1. Alimentação e suas influências no TDAH e TEA
                </h5>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  Uma análise profunda sobre como as escolhas alimentares e o
                  suporte nutricional impactam diretamente o comportamento e o
                  bem-estar de indivíduos com TDAH e TEA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3 px-4 sm:px-0">
              <div className="bg-slate-900 p-8 rounded-[3rem] shadow-xl text-white text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-2 border-abradepa-yellow rounded-full -m-1" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-900 shadow-md">
                    <Image
                      src="/palestrantes/gisele.jpeg"
                      alt="Eunice Roberto"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight mb-2">
                  Eunice Roberto
                </h3>
                <p className="text-abradepa-yellow font-bold uppercase text-[10px] tracking-widest mb-6">
                  Psicóloga e Neuropsicóloga
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-8 px-4 sm:px-0">
              <h4 className="text-xl font-black text-abradepa-dark uppercase tracking-widest flex items-center gap-3">
                <Sparkles className="text-abradepa-yellow" /> Palestra
              </h4>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-abradepa-yellow transition-all group">
                <h5 className="font-black text-abradepa-dark uppercase text-sm mb-4 leading-relaxed group-hover:text-abradepa-medium transition-colors">
                  1. Equilíbrio Emocional para mães atípicas
                </h5>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  Foco no suporte psicológico e estratégias de enfrentamento
                  para mães de crianças atípicas, promovendo resiliência e saúde
                  emocional para toda a família.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-abradepa-yellow">
        <div className="max-w-4xl mx-auto text-center text-abradepa-dark">
          <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">
            Interessado em nossas palestras ou workshops?
          </h3>
          <p className="mb-12 font-bold text-sm opacity-80 uppercase tracking-widest">
            Entre em contato conosco para informações sobre agendamento e
            valores sociais.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secundary bg-abradepa-dark text-white py-5 px-14 rounded-full text-sm font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Consultar agenda <MessageCircle size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
