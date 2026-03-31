'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, MessageCircle, HelpCircle } from 'lucide-react';

export default function TerapiaFloralPage() {
  const whatsappUrl = 'https://wa.me/5541995912817';

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-abradepa-dark pt-40 pb-24 text-white px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            Terapia Floral Integrativa
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-abradepa-yellow uppercase mb-8">
            Equilíbrio emocional e bem-estar natural
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            A Terapia Floral é uma prática complementar que utiliza essências
            florais naturais para promover equilíbrio emocional e mental.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black text-abradepa-dark uppercase mb-6 leading-tight">
              A Origem e o Reconhecimento
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                Criada na década de 1930 pelo médico inglês Dr. Edward Bach, a
                terapia se baseia na ideia de que o equilíbrio emocional é
                fundamental para a saúde integral. Seu sistema floral nasceu com
                a proposta de proporcionar apoio emocional de maneira natural e
                prática.
              </p>
              <p>
                Ela atua de forma sutil, respeitando a individualidade de cada
                pessoa e favorecendo autoconhecimento, consciência emocional e
                apoio em processos de transformação pessoal.
              </p>
              <p className="font-bold text-abradepa-medium">
                Reconhecida pela Organização Mundial da Saúde (OMS) e integrada
                ao SUS em 2018 como Prática Integrativa e Complementar em Saúde
                (PICS).
              </p>
            </div>
          </div>
          <div className="w-full md:w-80 h-80 relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-abradepa-yellow shrink-0">
            <Image
              src="/terapia-floral.png"
              alt="Terapia Floral"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-abradepa-dark uppercase mb-12 text-center tracking-widest">
            INDICAÇÕES DO CUIDADO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-black text-abradepa-medium mb-4 uppercase text-sm tracking-tighter">
                Equilíbrio e Emoções
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                Suporte para ansiedade, medo, estresse, processos de luto e
                transições de vida. Acolhimento especial para a neurodiversidade
                (Autismo/PCD) e suas famílias.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-black text-abradepa-medium mb-4 uppercase text-sm tracking-tighter">
                Saúde e Longevidade
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                Apoio emocional para mulheres em tratamento oncológico e idosos
                que buscam serenidade diante da solidão ou inseguranças do
                envelhecer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Leaf className="text-abradepa-yellow mx-auto mb-6" size={48} />
          <h2 className="text-2xl md:text-3xl font-black text-abradepa-dark uppercase mb-8">
            O ATENDIMENTO PERSONALIZADO
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm md:text-lg italic mb-5">
            O atendimento inicia-se com uma escuta ativa e observação cuidadosa
            e acolhedora .A partir das informações compartilhadas, é elaborada
            uma indicação de uma fórmula personalizada com essências florais,
            selecionadas de acordo com os estados emocionais e mentais
            apresentados
          </p>
          <p className="text-slate-700 leading-relaxed text-sm md:text-lg italic mb-5">
            A Terapia Floral convida o indivíduo a participar ativamente do seu
            processo de cuidado, favorecendo o autoconhecimento, a consciência
            emocional e o desenvolvimento pessoal.
          </p>
          <p className="text-slate-700 leading-relaxed text-sm md:text-lg italic">
            O trabalho é conduzido de forma ética e respeitosa, considerando o
            ritmo e a singularidade de cada pessoa
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HelpCircle className="text-abradepa-medium" size={28} />
            <h2 className="text-xl md:text-2xl font-black text-abradepa-dark uppercase tracking-widest">
              DÚVIDAS FREQUENTES
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'A Terapia Floral substitui tratamentos médicos ou psicológicos?',
                a: 'Não. A Terapia Floral é uma prática complementar e não substitui tratamentos médicos, psicológicos ou psiquiátricos. Pode ser utilizada como apoio emocional integrado a outros acompanhamentos.',
              },
              {
                q: 'As essências florais possuem contraindicações?',
                a: 'De modo geral, as essências florais não apresentam contraindicações conhecidas, pois não atuam de forma farmacológica. Ainda assim, a indicação deve ser feita por profissional qualificado.',
              },
              {
                q: 'Como funciona a avaliação inicial?',
                a: 'A avaliação é realizada por meio de escuta atenta e acolhedora, considerando aspectos emocionais, comportamentais e o momento de vida da pessoa.',
              },
              {
                q: 'Quantas sessões são necessárias?',
                a: 'O número de sessões varia conforme as necessidades individuais. Algumas pessoas percebem benefícios nas primeiras semanas, enquanto outras optam por acompanhamento contínuo.',
              },
              {
                q: 'O resultado é imediato?',
                a: 'Os efeitos são sutis e progressivos, respeitando o ritmo emocional de cada pessoa.',
              },
              {
                q: 'A terapia pode ser associada a outros acompanhamentos?',
                a: 'Sim. A Terapia Floral pode ser associada a outros tratamentos e acompanhamentos terapêuticos.',
              },
              {
                q: 'Crianças podem realizar Terapia Floral?',
                a: 'Sim. A Terapia Floral é indicada para crianças, com abordagem adequada à fase de desenvolvimento e às necessidades emocionais.',
              },
              {
                q: 'Pessoas que usam medicamentos podem realizar?',
                a: 'Sim. As essências florais não interferem em tratamentos medicamentosos, pois não possuem ação química.',
              },
              {
                q: 'O atendimento é individual?',
                a: 'Sim. O atendimento é individualizado, respeitando a singularidade de cada pessoa.',
              },
              {
                q: 'Quem pode se beneficiar da terapia floral?',
                a: 'A Terapia Floral é indicada para todas as fases da vida (crianças, adolescentes, adultos e idosos), oferecendo apoio emocional de forma individualizada.',
              },
              {
                q: 'Posso enviar informações para avaliação prévia?',
                a: 'Sim. É possível marcar uma Sessão Diagnóstica para avaliação técnica.',
              },
              {
                q: 'Como funciona o atendimento voluntário?',
                a: 'O atendimento voluntário segue critérios específicos e disponibilidade do profissional. Informações podem ser fornecidas diretamente no contato.',
              },
              {
                q: 'Qual o valor do atendimento?',
                a: 'Os valores são informados diretamente no contato, de forma transparente.',
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50"
              >
                <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                  {item.q}
                  <span className="text-abradepa-medium font-black text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-abradepa-yellow">
        <div className="max-w-5xl mx-auto text-center text-abradepa-dark">
          <h3 className="text-2xl font-black uppercase mb-8 tracking-tighter">
            Um caminho de acolhimento, consciência emocional e bem-estar
            integral!
          </h3>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-abradepa-dark text-white py-5 px-14 rounded-full text-sm font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Agendar sessão <MessageCircle size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
