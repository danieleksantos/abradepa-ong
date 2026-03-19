'use client';

import React from 'react';
import {
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  Smartphone,
  Users,
  Globe,
  ShieldCheck,
  Dog,
  ArrowRight,
  Send,
} from 'lucide-react';

export default function CartaoAbradepaPage() {
  const planos = [
    {
      nome: 'ABRADEPA SAÚDE+ BRONZE',
      preco: '29,90',
      link: 'https://go.pontobrweb.com.br/6of',
      cor: 'border-orange-300',
      bg: 'bg-orange-50',
      vantagens: [
        'ACESSO ILIMITADO AO TÁ DODÓI 24H',
        'REDE PARCEIRA EM TODO BRASIL',
        'TELEMEDICINA COM TRIAGEM',
        'TELEPSICOLOGIA',
        'TELENUTRIÇÃO',
        'ATÉ 75% OFF EM MEDICAMENTOS',
        'MAIS DE 5500 FARMÁCIAS',
      ],
    },
    {
      nome: 'ABRADEPA SAÚDE + PRATA',
      preco: '39,90',
      link: 'https://go.pontobrweb.com.br/6oh',
      cor: 'border-slate-300',
      bg: 'bg-slate-50',
      vantagens: [
        'ACESSO ILIMITADO AO TÁ DODÓI 24H',
        'REDE PARCEIRA EM TODO BRASIL',
        'TELEMEDICINA LIVRE E ESPECIALIZADA',
        'TELEPSICOLOGIA',
        'TELENUTRIÇÃO',
        'DESCONTO EM MEDICAMENTO E PERFUMARIA',
      ],
    },
    {
      nome: 'ABRADEPA SAÚDE+ OURO',
      preco: '44,90',
      link: 'https://go.pontobrweb.com.br/6og',
      cor: 'border-abradepa-yellow',
      bg: 'bg-yellow-50/30',
      destaque: true,
      vantagens: [
        'ACESSO ILIMITADO AO TÁ DODÓI 24H',
        'REDE PARCEIRA EM TODO BRASIL',
        'TELEMEDICINA LIVRE E ESPECIALIZADA',
        'TELEPERSONAL',
        'TELEPSICOLOGIA',
        'TELENUTRIÇÃO',
        'DESCONTO EM MEDICAMENTO E PERFUMARIA',
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-abradepa-dark pt-44 pb-24 text-white px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-tight">
            Cartão de Benefícios <br />
            <span className="text-abradepa-yellow text-3xl md:text-5xl">
              Abradepa Saúde+
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Ao adquirir o cartão Abradepa, você apoia nossa iniciativa social e
            garante mais saúde e bem-estar para você e mais 7 familiares!
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-abradepa-yellow/20 text-abradepa-dark px-4 py-2 rounded-full mb-6 font-black uppercase text-xs tracking-widest">
              <Stethoscope size={16} /> Programa Tá Dodói
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-abradepa-dark uppercase mb-6 leading-tight">
              Você nunca fica sozinho
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic">
              🩺 Com o Tá Dodói, você nunca fica sozinho quando surge uma dúvida
              de saúde ou um desconforto emocional. Nossa equipe está disponível
              24h para conversar por telefone, chat ou vídeo, oferecendo
              orientação clara e acolhedora. É como ter alguém de confiança por
              perto, pronto para ajudar sem que você precise sair de casa.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
            <h3 className="text-xl font-black text-abradepa-dark uppercase mb-10 tracking-widest border-b border-slate-100 pb-6 text-center md:text-left">
              O que o Tá Dodói oferece:
            </h3>

            <div className="space-y-10">
              {[
                {
                  icon: <HeartPulse className="text-red-500" />,
                  t: 'Atendimento 24 horas, todos os dias',
                  d: 'suporte imediato com profissionais da saúde durante o ano inteiro.',
                },
                {
                  icon: <Smartphone className="text-blue-500" />,
                  t: 'Serviços integrados',
                  d: 'telemedicina, apoio psicológico e orientação nutricional em um único lugar.',
                },
                {
                  icon: <Send className="text-abradepa-medium" />,
                  t: 'Acesso simples e rápido',
                  d: 'atendimento por telefone, chat ou vídeo. Aplicativo (Google Play ou App Store), com agendamento ágil.',
                },
                {
                  icon: <Users className="text-green-500" />,
                  t: 'Cuidado para toda a família',
                  d: 'o cartão inclui o Titular + 7 pessoas da família.',
                },
                {
                  icon: <Globe className="text-purple-500" />,
                  t: 'Cobertura em todo o Brasil',
                  d: 'acesso as consultas em qualquer cidade do Brasil.',
                },
                {
                  icon: <ShieldCheck className="text-orange-500" />,
                  t: 'Orientação segura',
                  d: 'não substitui atendimentos de emergência presencial; o foco é acolhimento e direcionamento adequado.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center"
                >
                  <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-lg text-slate-700 leading-relaxed">
                      <strong className="text-abradepa-dark font-black uppercase text-xs md:text-sm tracking-wider mr-1">
                        {item.t} —
                      </strong>
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-abradepa-dark uppercase tracking-tight mb-6">
              Escolha o seu plano
            </h2>
            <div className="w-24 h-1.5 bg-abradepa-yellow mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planos.map((plano, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-10 rounded-[2.5rem] border-2 ${plano.cor} ${plano.bg} transition-all hover:shadow-xl hover:-translate-y-2`}
              >
                {plano.destaque && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-abradepa-dark text-abradepa-yellow px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                    Mais Completo
                  </span>
                )}

                <h4 className="text-lg font-black text-abradepa-dark mb-8 text-center uppercase leading-tight min-h-12 flex items-center justify-center italic">
                  {plano.nome}
                </h4>

                <div className="text-center mb-10">
                  <span className="text-slate-400 text-sm font-bold">R$</span>
                  <span className="text-5xl font-black text-abradepa-dark">
                    {plano.preco.split(',')[0]}
                  </span>
                  <span className="text-lg font-black text-abradepa-dark">
                    ,{plano.preco.split(',')[1]}
                  </span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
                    Mensais
                  </p>
                </div>

                <ul className="space-y-4 mb-12 grow">
                  {plano.vantagens.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-[11px] font-bold uppercase text-slate-600 leading-tight"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-abradepa-yellow shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={plano.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-abradepa-dark text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg"
                >
                  Adquirir Agora <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-slate-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-abradepa-yellow/30">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 bg-abradepa-yellow rounded-3xl flex items-center justify-center shadow-lg shrink-0">
                <Dog size={40} className="text-abradepa-dark" />
              </div>
              <div className="grow">
                <h3 className="text-2xl font-black uppercase text-abradepa-yellow mb-2">
                  Pode incluir: Telemedicina PET (online)
                </h3>
                <p className="text-white/70 italic leading-relaxed">
                  Inclua seu pet no Cartão por apenas{' '}
                  <span className="text-white font-bold">
                    R$ 10,00 adicionais
                  </span>{' '}
                  e tenha acesso a suporte médico-veterinário online sempre que
                  precisar!
                </p>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <Dog size={200} />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto pt-16 border-t border-slate-100">
          <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 leading-relaxed italic">
            * O Tá Dodói não substitui atendimentos de emergência presencial; o
            foco é acolhimento e direcionamento adequado. <br />
            Cuidado extensivo para toda a família: Titular + 7 pessoas.
          </p>
        </div>
      </section>
    </div>
  );
}
