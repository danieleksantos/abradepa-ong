'use client';

import React from 'react';
import {
  GraduationCap,
  Users,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from 'lucide-react';

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
          <div className="mt-12 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-abradepa-yellow text-abradepa-dark py-4 px-10 rounded-full font-black uppercase text-xs tracking-widest inline-flex items-center gap-2 hover:bg-white transition-all shadow-xl"
            >
              Faça contato conosco <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3 px-4 sm:px-0">
              <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 text-center">
                <div className="w-20 h-20 bg-abradepa-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 text-abradepa-dark">
                  <Users size={40} />
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
                    d: 'A palestra apresenta os Florais de Bach como uma ferramenta complementar de autocuidado, ajudando no equilíbrio emocional, mental e espiritual de quem cuida, convive ou apoia outras pessoas. Ela conecta saúde integral, autoconhecimento e desenvolvimento de virtudes humanas alinhada à filosofia do Dr.Edward Bach e à visão da OMS.',
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
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-abradepa-yellow">
                  <GraduationCap size={40} />
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
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h5 className="font-black text-abradepa-dark uppercase text-sm mb-6 leading-relaxed border-l-4 border-abradepa-yellow pl-4">
                    1. Palestra de Regulação Emocional do comportamento
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Transtorno do Processamento Sensorial',
                      '8 sistemas Sensoriais',
                      'Sistema Sensorial de Propriocepção',
                      'Sistema Sensorial de vestibular',
                      'Sistema Sensorial de interocepção',
                    ].map((item, i) => (
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

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h5 className="font-black text-abradepa-dark uppercase text-sm mb-6 leading-relaxed border-l-4 border-abradepa-yellow pl-4">
                    2. Palestra de estratégias para a inclusão da criança TEA
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Rotina visível e previsível',
                      'Movimento e Atividades adaptadas',
                      'Treinamento da consciência corporal',
                      'Ambiente Sensorial adequado',
                    ].map((item, i) => (
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
            className="btn-secondary bg-abradepa-dark text-white py-5 px-14 rounded-full text-sm font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Falar com a Abradepa <MessageCircle size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
