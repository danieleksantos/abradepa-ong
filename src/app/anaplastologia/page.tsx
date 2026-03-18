'use client';

import React from 'react';
import Image from 'next/image';
import { Stethoscope, Heart, Info } from 'lucide-react';

export default function AnaplastologiaPage() {
  const whatsappUrl = 'https://wa.me/554198611626';

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-abradepa-dark pt-40 pb-24 text-white px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            ANAPLASTOLOGIA - PRÓTESES PERSONALIZADAS
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-abradepa-yellow uppercase mb-8">
            Estética para pacientes amputados e oncológicos
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed">
            A Anaplastologia é uma especialidade que une ciência e arte para
            desenvolver próteses altamente realistas e totalmente
            personalizadas, produzidas em silicone de grau médico. Indicada para
            pacientes que necessitam de reconstrução de estruturas faciais e
            corporais, a anaplastologia não devolve apenas a estética, mas
            também a autoestima, a identidade e a qualidade de vida.
          </p>
        </div>
      </section>

      {/* RECONSTRUÇÃO */}
      <section className="py-20 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-abradepa-dark uppercase mb-8">
            RECONSTRUÇÃO DE ESTRUTURAS FACIAIS E CORPORAIS
          </h2>
          <div className="text-slate-700 leading-relaxed space-y-6 text-sm md:text-base">
            <p>
              As próteses são indicadas para pacientes que perderam estruturas
              como nariz, orelhas, olhos, dedos das mãos e dos pés, em
              decorrência de amputações, acidentes, malformações congênitas,
              doenças, traumas ou cirurgias oncológicas.
            </p>
            <p className="font-bold text-lg text-abradepa-dark">
              Cada prótese é desenvolvida sob medida, garantindo um resultado
              natural, discreto e individualizado.
            </p>
            <div className="pt-4">
              <p className="font-black uppercase text-[10px] tracking-[0.2em] text-slate-400 mb-4">
                Principais aplicações:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-xs font-black uppercase text-abradepa-dark tracking-tight">
                <li>• Prótese de aréola mamária</li>
                <li>• Prótese de mama externa para sutiã</li>
                <li>• Prótese de nariz</li>
                <li>• Prótese de orelha</li>
                <li>• Prótese ocular</li>
                <li>• Prótese de dedos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS - APENAS IMAGENS QUADRADAS E SUTIS */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-abradepa-dark uppercase mb-20 text-center tracking-[0.3em]">
            APLICAÇÃO DOS SERVIÇOS
          </h2>

          <div className="space-y-32">
            {/* Prótese de mama externa */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de mama externa para sutiã
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  As próteses são indicadas para pacientes que passaram por
                  mastectomia total ou radical. Desenvolvidas em silicone de
                  grau médico biocompatível, proporcionam um aspecto natural,
                  leve e anatômico, sendo utilizadas diretamente no sutiã, sem
                  necessidade de adesivos.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Protese externa para sutia.png"
                  alt="Prótese de mama externa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Prótese de aréola mamária */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de aréola mamária
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  Indicada para pacientes que perderam a aréola devido à
                  mastectomia, necrose ou cirurgias reparadoras. A confecção não
                  requer tomografia, sendo realizada por meio de registro
                  fotográfico e medidas personalizadas, com definição de cor,
                  diâmetro, textura e relevo. Finalidade: trata-se de uma
                  prótese estética não funcional, voltada à reabilitação do
                  complexo aréolo-mamilar.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Protese de Areola mamária.jpeg"
                  alt="Prótese de aréola mamária"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Prótese de orelha */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de orelha
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  Indicação: pacientes com anotia, microtia, perda por trauma ou
                  ressecção cirúrgica. Confecção: produzida em silicone de grau
                  médico a partir de tomografia computadorizada e modelagem
                  digital 3D. Finalidade: prótese estética não funcional, com
                  foco na reabilitação facial.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Prótese de orelha.jpeg"
                  alt="Prótese de orelha"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Prótese de dedos */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de dedos
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  Indicada para amputações traumáticas, cirurgias oncológicas,
                  complicações de diabetes (como necrose), doenças vasculares e
                  malformações congênitas. As próteses são desenvolvidas sob
                  medida em silicone de grau médico, utilizando tomografia
                  computadorizada e espelhamento anatômico para reproduzir com
                  precisão forma, textura e coloração da pele. Finalidade:
                  prótese estética não funcional, com objetivo de reabilitação
                  visual, integração estética do membro e recuperação da
                  autoestima.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Protese de dedo.jpeg"
                  alt="Prótese de dedos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Prótese de nariz */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de nariz
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  Indicação: perda parcial ou total do nariz por câncer, traumas
                  faciais, necrose ou malformações. Confecção: realizada com
                  base em tomografia computadorizada e reconstrução digital 3D.
                  Finalidade: prótese estética não funcional, voltada à
                  reabilitação facial, restauração da harmonia estética e
                  identidade do paciente.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Protese de nariz.jpeg"
                  alt="Prótese de nariz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO HUMANIZADO */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Heart
            className="text-abradepa-yellow mx-auto mb-6"
            size={48}
            fill="currentColor"
          />
          <h2 className="text-2xl font-black text-abradepa-dark uppercase mb-6 tracking-widest">
            ATENDIMENTO HUMANIZADO
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed italic px-4">
            "Cada paciente possui uma história única, e o trabalho é
            desenvolvido respeitando essa individualidade. Através da
            anaplastologia facial, mamária e de membros, é possível proporcionar
            ao paciente o reencontro com sua imagem, promovendo mais segurança,
            dignidade e qualidade de vida."
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-abradepa-dark uppercase mb-10 text-center tracking-widest">
            DÚVIDAS FREQUENTES (FAQ)
          </h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                1. Quais tipos de próteses são confeccionadas e para quem são
                indicadas?
                <span className="text-abradepa-yellow font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-4 text-xs text-slate-500 space-y-2 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                <p>
                  • Prótese de aréola mamária: pacientes pós-mastectomia ou
                  necrose areolar
                </p>
                <p>
                  • Prótese de mama externa: pacientes com mastectomia total ou
                  radical
                </p>
                <p>
                  • Prótese de dedos: amputações por trauma, diabetes ou
                  malformações
                </p>
                <p>• Prótese de orelha: microtia, anotia ou traumas</p>
                <p>• Prótese de nariz: perda por câncer, trauma ou cirurgia</p>
                <p>• Prótese ocular: perda do globo ocular</p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                2. Quais materiais são utilizados?
                <span className="text-abradepa-yellow font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Todas as próteses são confeccionadas em silicone de grau médico,
                sendo: Hipoalergênico, Atóxico, Durável e Biocompatível com a
                pele.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                3. Como as próteses são fixadas?
                <span className="text-abradepa-yellow font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-4 text-xs text-slate-500 space-y-2 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                <p>• Aréola: adesivo de grau médico (fixação de 7 a 10 dias)</p>
                <p>• Mama externa: encaixe no sutiã</p>
                <p>
                  • Orelha e nariz: adesivo ou sistema com ímã/clipe (avaliação
                  médica)
                </p>
                <p>• Dedos e olhos: retenção mecânica (sem cola)</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="py-24 px-4 bg-abradepa-yellow">
        <div className="max-w-4xl mx-auto text-center text-abradepa-dark">
          <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">
            CHAMADA FINAL
          </h3>
          <p className="text-xl font-black mb-4 uppercase tracking-tight italic">
            Recupere sua confiança com a Anaplastologia.
          </p>
          <p className="mb-12 font-bold text-sm opacity-80 uppercase tracking-widest">
            Agende sua consulta e descubra como é possível transformar a forma
            como você se vê.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-abradepa-dark text-white hover:bg-slate-800 py-5 px-14 rounded-full text-sm font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Agendar Consulta <Stethoscope size={20} />
          </a>
          <div className="mt-16 pt-8 border-t border-abradepa-dark/10 text-[9px] uppercase font-black tracking-[0.25em] opacity-40 space-y-1">
            <p>Valor definido apenas após avaliação individual.</p>
            <p>
              A consulta é cobrada por tratar-se de uma avaliação técnica
              especializada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
