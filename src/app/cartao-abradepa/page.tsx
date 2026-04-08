'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Stethoscope, Dog } from 'lucide-react';

export default function CartaoAbradepaPage() {
  const planosIniciais = [
    {
      nome: 'ABRADEPA SAÚDE+ ESSENCIAL',
      preco: '29,90',
      link: 'https://parceiros.MEUCLUBE.online/abradepa/VendaExterna/678B4AEA-9953-4192-A32C-5977A544B482/2255CB39-9B10-4694-A2F1-494DB8D6B08F/',
      cor: 'border-slate-200',
      bg: 'bg-white',
      vantagens: [
        'ACESSO TÁ DODÓI 24H',
        'REDE EM TODO BRASIL',
        'TELEMEDICINA TRIAGEM',
        'TELEPSICOLOGIA',
        'TELENUTRIÇÃO',
        'ATÉ 75% OFF FARMÁCIAS',
      ],
    },
    {
      nome: 'ABRADEPA SAÚDE+ BRONZE',
      preco: '35,90',
      link: 'https://parceiros.MEUCLUBE.online/abradepa/VendaExterna/678B4AEA-9953-4192-A32C-5977A544B482/38FC040C-98E4-4A97-A766-CB55AB042CB8/',
      cor: 'border-orange-200',
      bg: 'bg-white',
      vantagens: [
        'ACESSO TÁ DODÓI 24H',
        'REDE EM TODO BRASIL',
        'TELEMEDICINA LIVRE',
        'TELEPSICOLOGIA',
        'TELENUTRIÇÃO',
        'ATÉ 75% OFF FARMÁCIAS',
      ],
    },
    {
      nome: 'ABRADEPA SAÚDE + PRATA',
      preco: '39,90',
      link: 'https://parceiros.MEUCLUBE.online/abradepa/VendaExterna/678B4AEA-9953-4192-A32C-5977A544B482/76848EAB-2252-4A43-B410-F8ED1403D132/',
      cor: 'border-slate-300',
      bg: 'bg-white',
      vantagens: [
        'ACESSO TÁ DODÓI 24H',
        'REDE EM TODO BRASIL',
        'TELEMEDICINA ESPECIALIZADA',
        'TELEPSICOLOGIA',
        'TELENUTRIÇÃO',
        'ATÉ 75% OFF FARMÁCIAS',
      ],
    },
  ];

  const planosDestaque = [
    {
      nome: 'ABRADEPA SAÚDE+ OURO',
      preco: '44,90',
      link: 'https://parceiros.MEUCLUBE.online/abradepa/VendaExterna/678B4AEA-9953-4192-A32C-5977A544B482/9E5CBEB6-D630-4C25-9F86-750C90D3FED1/',
      cor: 'border-abradepa-yellow',
      bg: 'bg-yellow-50/40',
      destaque: true,
      vantagens: [
        'ACESSO TÁ DODÓI 24H',
        'REDE EM TODO BRASIL',
        'TELEMEDICINA ESPECIALIZADA',
        'TELEPERSONAL',
        'TELEPSICOLOGIA',
        'TELENUTRIÇÃO',
        'ATÉ 75% OFF FARMÁCIAS',
      ],
    },
    {
      nome: 'ABRADEPA SAÚDE+ PREMIUM',
      preco: '49,90',
      link: 'https://parceiros.MEUCLUBE.online/abradepa/VendaExterna/678B4AEA-9953-4192-A32C-5977A544B482/AD5EFB88-6D5F-466A-BCE1-9577E39981B9/',
      cor: 'border-slate-800',
      bg: 'bg-slate-900',
      textWhite: true,
      destaque: true,
      vantagens: [
        'ACESSO TÁ DODÓI 24H',
        'REDE EM TODO BRASIL',
        'TELEMEDICINA ESPECIALIZADA',
        'TELEPERSONAL',
        'TELEPSICOLOGIA',
        'TELENUTRIÇÃO',
        'ATÉ 75% OFF FARMÁCIAS',
        'SEGURO DE VIDA PARA O TITULAR',
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="bg-abradepa-dark pt-22 md:pt-44 pb-12 md:pb-32 text-white px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-tight">
            Cartão de Benefícios <br />
            <span className="text-abradepa-yellow text-3xl md:text-5xl italic">
              Abradepa Saúde+
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Ao adquirir o cartão Abradepa, você apoia nossa iniciativa social e
            garante mais saúde para você e sua família!
          </p>
        </div>
      </section>

      <section className="py-10 md:py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-abradepa-yellow/20 text-abradepa-dark px-4 py-2 rounded-full mb-6 font-black uppercase text-xs tracking-widest">
                <Stethoscope size={16} /> Programa Tá Dodói
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-abradepa-dark uppercase mb-6 leading-tight">
                Você nunca fica sozinho
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic">
                🩺 Com o Tá Dodói, você nunca fica sozinho quando surge uma
                dúvida de saúde ou desconforto emocional. Nossa equipe está
                disponível 24h para orientar você.
              </p>
            </div>
            <div className="shrink-0">
              <div className="relative w-48 h-60">
                <div className="absolute -top-3 -right-3 w-full h-full border-2 border-abradepa-yellow rounded-[2.5rem]" />
                <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden border-4 border-abradepa-medium bg-white shadow-xl">
                  <Image
                    src="/cartao-ta-dodoi.png"
                    alt="Logo Tá Dodói"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-5 md:mb-20">
            <div className="flex-1 text-center md:text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-abradepa-dark uppercase tracking-tight mb-6 leading-[0.9]">
                Escolha o <br />
                <span className="text-abradepa-yellow">seu plano</span>
              </h2>
              <div className="w-20 h-2 bg-abradepa-dark mb-8 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-slate-500 text-lg font-medium">
                Selecione a opção que melhor atende às suas necessidades e
                comece a usar agora mesmo.
              </p>
            </div>

            <div className="flex-none relative group max-w-xs w-full">
              <div className="absolute inset-0 bg-abradepa-yellow blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative transform md:rotate-3 hover:rotate-0 transition-all duration-700">
                <Image
                  src="/cartao-abradepa.png"
                  alt="Cartão Abradepa Saúde+"
                  width={333}
                  height={280}
                  className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                  style={{ width: '333px', height: '280px' }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {planosIniciais.map((plano, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 rounded-[2.5rem] border-2 shadow-sm transition-all hover:shadow-xl ${plano.cor} ${plano.bg}`}
              >
                <h4 className="text-sm font-black text-abradepa-dark mb-6 text-center uppercase italic">
                  {plano.nome}
                </h4>
                <div className="text-center mb-8">
                  <span className="text-slate-400 text-sm font-bold">R$</span>
                  <span className="text-4xl font-black text-abradepa-dark">
                    {plano.preco.split(',')[0]}
                  </span>
                  <span className="text-lg font-black text-abradepa-dark">
                    ,{plano.preco.split(',')[1]}
                  </span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                    Mensais
                  </p>
                </div>
                <ul className="space-y-4 mb-10 grow border-t border-slate-50 pt-6">
                  {plano.vantagens.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-[10px] font-bold uppercase text-slate-600 leading-tight"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-abradepa-yellow shrink-0"
                      />{' '}
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={plano.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary hover:scale-105"
                >
                  Adquirir agora
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {planosDestaque.map((plano, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-8 rounded-[3rem] border-2 shadow-lg transition-all hover:shadow-2xl w-full md:max-w-sm ${plano.cor} ${plano.bg} ${plano.textWhite ? 'text-white' : 'text-slate-900'}`}
              >
                <span
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg whitespace-nowrap ${plano.textWhite ? 'bg-abradepa-yellow text-abradepa-dark' : 'bg-abradepa-dark text-abradepa-yellow'}`}
                >
                  + completo
                </span>
                <h4
                  className={`text-base font-black mb-6 text-center uppercase italic ${plano.textWhite ? 'text-abradepa-yellow' : 'text-abradepa-dark'}`}
                >
                  {plano.nome}
                </h4>
                <div className="text-center mb-8">
                  <span className="text-slate-400 text-sm font-bold">R$</span>
                  <span className="text-5xl font-black">
                    {plano.preco.split(',')[0]}
                  </span>
                  <span className="text-lg font-black">
                    ,{plano.preco.split(',')[1]}
                  </span>
                </div>
                <ul className="space-y-4 mb-10 grow border-t border-white/10 pt-6">
                  {plano.vantagens.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-[10px] font-bold uppercase leading-tight"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-abradepa-yellow shrink-0"
                      />
                      <span
                        className={
                          plano.textWhite ? 'text-slate-300' : 'text-slate-600'
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plano.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary hover:scale-105`}
                >
                  Adquirir Agora
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-100 mx-auto bg-abradepa-medium text-white p-8 md:p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-15 h-15 bg-white rounded-3xl flex items-center justify-center shrink-0">
                <Dog size={40} className="text-abradepa-medium" />
              </div>
              <div className="grow">
                <h3 className="text-2xl font-black uppercase text-white mb-2 tracking-tight">
                  Telemedicina PET (online)
                </h3>
                <p className="text-white/80 italic leading-relaxed text-[16px]">
                  Inclua seu pet no Cartão por apenas{' '}
                  <span className="text-white font-bold underline decoration-abradepa-yellow">
                    R$ 10,00 adicionais
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto pt-10 border-t border-slate-100">
          <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 leading-relaxed italic">
            * O Programa Tá Dodói não substitui atendimentos de emergência
            presencial.
          </p>
        </div>
      </section>
    </div>
  );
}
