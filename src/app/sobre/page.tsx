'use client';

import { Users, Target, Eye, Heart } from 'lucide-react';
import { Founder } from '@/components/Founder';
import { Support } from '@/components/Support';

export default function SobrePage() {
  const diretoria = [
    { name: 'Simone Borges', role: 'Presidente' },
    { name: 'Gisele Lázara de Farias Borges', role: 'Vice-Presidente' },
    { name: 'Rita Schunemann', role: 'Secretária Geral' },
    { name: 'Georgia Teixeira', role: 'Diretora Financeira' },
  ];

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <section className="bg-abradepa-dark pt-32 pb-24 text-white px-4 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none hidden lg:block text-white">
          <Users size={400} strokeWidth={0.5} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <Users className="text-abradepa-yellow" size={20} />
            <span className="text-abradepa-pale text-xs font-bold uppercase tracking-[0.2em]">
              Nossa Essência
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight uppercase">
            Quem Somos
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light italic border-l-4 border-abradepa-yellow pl-6 max-w-2xl">
            "A Abradepa é uma ponte entre a dor e a esperança. Entre a perda e a
            reconstrução. Entre o silêncio e a voz."
          </p>
        </div>
      </section>

      <Founder />

      <section className="py-24 bg-abradepa-dark relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-abradepa-yellow rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] transition-all group">
                <div className="w-14 h-14 bg-abradepa-yellow rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:rotate-6 shrink-0 shadow-lg shadow-abradepa-yellow/20">
                  <Target size={30} className="text-abradepa-dark" />
                </div>
                <h3 className="text-abradepa-yellow font-black text-2xl uppercase mb-4 tracking-tight">
                  Missão
                </h3>
                <p className="text-white text-base leading-relaxed font-light grow">
                  Promover saúde integral por meio de acolhimento humanizado,
                  tratamentos especializados, apoio emocional, psicológico e
                  social, garantindo dignidade, autoestima e esperança às
                  pessoas que enfrentam desafios complexos de saúde. A Abradepa
                  atua para ampliar o acesso a terapias, reconstruções, práticas
                  integrativas e projetos inclusivos, capacititando cada
                  indivíduo a redesenhar sua história com qualidade de vida e
                  confiança.
                </p>
              </div>

              <div className="flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] transition-all group">
                <div className="w-14 h-14 bg-abradepa-yellow rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-rotate-6 shrink-0 shadow-lg shadow-abradepa-yellow/20">
                  <Eye size={30} className="text-abradepa-dark" />
                </div>
                <h3 className="text-abradepa-yellow font-black text-2xl uppercase mb-4 tracking-tight">
                  Visão
                </h3>
                <p className="text-white text-base leading-relaxed font-light grow">
                  Ser referência nacional e internacional em apoio à saúde
                  integral, reconhecida pelo impacto humano, social e
                  transformador de suas ações, contribuindo para uma sociedade
                  mais inclusiva, consciente e solidária, onde toda pessoa tenha
                  acesso ao cuidado integral, à reconstrução física e emocional
                  e ao direito de viver com dignidade.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Heart size={30} className="text-abradepa-yellow" />
                </div>
                <h2 className="text-abradepa-yellow text-3xl font-black uppercase tracking-tight">
                  Nossos Valores
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {[
                  {
                    title: 'Humanização',
                    desc: 'Colocar o ser humano no centro de tudo, atuando com empatia, respeito, acolhimento e compaixão.',
                  },
                  {
                    title: 'Comprometimento',
                    desc: 'Dedicar-se profundamente à transformação de vidas e à defesa do direito ao acesso à saúde integral.',
                  },
                  {
                    title: 'Integridade',
                    desc: 'Atuar com ética, transparência, responsabilidade e coerência em todas as ações e parcerias.',
                  },
                  {
                    title: 'Solidariedade',
                    desc: 'Fortalecer o voluntariado, as parcerias e o apoio coletivo como instrumentos de impacto social positivo.',
                  },
                  {
                    title: 'Esperança',
                    desc: 'Inspirar novos olhares para a vida, restaurando a confiança, a autoestima e a alegria de viver, mesmo diante das adversidades.',
                  },
                ].map((v, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-5 rounded-2xl border-l-4 border-abradepa-yellow bg-white/5 transition-all"
                  >
                    <span className="text-abradepa-yellow font-black text-xl leading-none">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-abradepa-yellow font-bold text-sm uppercase tracking-wider mb-1">
                        {v.title}
                      </h4>
                      <p className="text-white text-xs font-medium leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Support />

      <section className="py-20 px-4 bg-white border-t border-slate-50">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-black text-abradepa-dark uppercase tracking-tight mb-6">
              Governança
            </h2>
            <p className="text-slate-500 leading-relaxed font-light">
              Nossa diretoria é composta por profissionais comprometidos com a
              transparência e excelência.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diretoria.map((membro, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col gap-1 shadow-sm hover:border-abradepa-yellow transition-all duration-300"
              >
                <span className="text-lg font-black text-abradepa-dark uppercase">
                  {membro.name}
                </span>
                <span className="text-xs font-bold text-abradepa-medium uppercase tracking-[0.2em]">
                  {membro.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
