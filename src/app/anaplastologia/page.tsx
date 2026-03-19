'use client';

import React from 'react';
import Image from 'next/image';
import { Stethoscope, Heart } from 'lucide-react';

export default function AnaplastologiaPage() {
  const whatsappUrl = 'https://wa.me/554198611626';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-abradepa-dark pt-40 pb-24 text-white px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            ANAPLASTOLOGIA - PRÓTESES PERSONALIZADAS
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-abradepa-yellow uppercase mb-8">
            Estética para pacientes amputados e oncológicos
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            A Anaplastologia é uma especialidade que une ciência e arte para
            desenvolver próteses altamente realistas e totalmente
            personalizadas, produzidas em silicone de grau médico. Indicada para
            pacientes que necessitam de reconstrução de estruturas faciais e
            corporais, a anaplastologia não devolve apenas a estética, mas
            também a autoestima, a identidade e a qualidade de vida.
          </p>
        </div>
      </section>

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
            <p className="font-bold text-lg text-gray-700">
              Cada prótese é desenvolvida sob medida, garantindo um resultado
              natural, discreto e individualizado.
            </p>
            <div className="pt-4">
              <p className="font-black uppercase text-lg tracking-[0.2em] text-abradepa-dark mb-4">
                Principais aplicações:
              </p>
              <ul className="grid grid-cols-1 gap-y-3 text-xs uppercase tracking-tight text-slate-700">
                <li
                  onClick={() => scrollToSection('areola')}
                  className="cursor-pointer hover:border-b hover:border-abradepa-yellow transition-all w-fit pb-0.5"
                >
                  • Prótese de aréola mamária
                </li>
                <li
                  onClick={() => scrollToSection('mama')}
                  className="cursor-pointer hover:border-b hover:border-abradepa-yellow transition-all w-fit pb-0.5"
                >
                  • Prótese de mama externa para sutiã
                </li>
                <li
                  onClick={() => scrollToSection('nariz')}
                  className="cursor-pointer hover:border-b hover:border-abradepa-yellow transition-all w-fit pb-0.5"
                >
                  • Prótese de nariz
                </li>
                <li
                  onClick={() => scrollToSection('orelha')}
                  className="cursor-pointer hover:border-b hover:border-abradepa-yellow transition-all w-fit pb-0.5"
                >
                  • Prótese de orelha
                </li>
                <li
                  onClick={() => scrollToSection('servicos')}
                  className="cursor-pointer hover:border-b hover:border-abradepa-yellow transition-all w-fit pb-0.5"
                >
                  • Prótese ocular
                </li>
                <li
                  onClick={() => scrollToSection('dedos')}
                  className="cursor-pointer hover:border-b hover:border-abradepa-yellow transition-all w-fit pb-0.5"
                >
                  • Prótese de dedos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-abradepa-dark uppercase mb-20 text-center tracking-[0.3em]">
            APLICAÇÃO DOS SERVIÇOS
          </h2>

          <div className="space-y-32">
            <div
              id="mama"
              className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 scroll-mt-24"
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de mama externa para sutiã
                </h3>
                <p className="text-slate-600 text-sm md:text-lg leading-relaxed italic">
                  As próteses são indicadas para pacientes que passaram por
                  mastectomia total ou radical. Desenvolvidas em silicone de
                  grau médico biocompatível, proporcionam um aspecto natural,
                  leve e anatômico, sendo utilizadas diretamente no sutiã, sem
                  necessidade de adesivos.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-4xl overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Protese externa para sutia.png"
                  alt="Prótese de mama externa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="areola"
              className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 scroll-mt-24"
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de aréola mamária
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  Indicada para pacientes que perderam a aréola devido à
                  mastectomia, necrose ou cirurgias reparadoras. A confecção não
                  requer tomografia, sendo realizada por meio de registro
                  fotográfico e medidas personalizadas, com definição de cor,
                  diâmetro, textura e relevo. Finalidade: trata-se de uma
                  prótese estética não funcional, voltada à reabilitação do
                  complexo aréolo-mamilar.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-4xl overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Protese de Areola mamária.jpeg"
                  alt="Prótese de aréola mamária"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="orelha"
              className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 scroll-mt-24"
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de orelha
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  Indicação: pacientes com anotia, microtia, perda por trauma ou
                  ressecção cirúrgica. Confecção: produzida em silicone de grau
                  médico a partir de tomografia computadorizada e modelagem
                  digital 3D. Finalidade: prótese estética não funcional, com
                  foco na reabilitação facial.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-4xl overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Prótese de orelha.jpeg"
                  alt="Prótese de orelha"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="dedos"
              className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 scroll-mt-24"
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de dedos
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed italic">
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
              <div className="w-64 h-64 shrink-0 relative rounded-4xl overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/anaplastologia/Protese de dedo.jpeg"
                  alt="Prótese de dedos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div
              id="nariz"
              className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 scroll-mt-24"
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-black text-abradepa-dark mb-4 uppercase tracking-tighter">
                  Prótese de nariz
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  Indicação: perda parcial ou total do nariz por câncer, traumas
                  faciais, necrose ou malformações. Confecção: realizada com
                  base em tomografia computadorizada e reconstrução digital 3D.
                  Finalidade: prótese estética não funcional, voltada à
                  reabilitação facial, restauração da harmonia estética e
                  identidade do paciente.
                </p>
              </div>
              <div className="w-64 h-64 shrink-0 relative rounded-4xl overflow-hidden shadow-sm border border-slate-100">
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
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
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
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
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
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
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

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                4. Pode usar no dia a dia?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Sim. Inclusive banho, piscina, praia e atividades diárias,
                dependendo do tipo de prótese.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                5. Pode ser feito à distância?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Sim, dependendo do tipo de prótese. Casos mais complexos exigem
                tomografia ou escaneamento 3D.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                6. Precisa de manutenção?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Sim. Recomenda-se revisão periódica, especialmente em próteses
                expostas.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                7. Qual a durabilidade?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Pode durar vários anos, dependendo dos cuidados.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                8. Quais cuidados?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-4 text-xs text-slate-500 space-y-2 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                <p>• Lavar com sabão neutro</p>
                <p>• Secar naturalmente</p>
                <p>• Não usar produtos químicos</p>
                <p>• Armazenar corretamente</p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                9. Plano de saúde cobre?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Geralmente não. Em casos oncológicos, pode haver possibilidade
                de reembolso.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                10. Preciso de especialista?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Sim. O uso de materiais inadequados pode causar riscos à saúde.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                11. Qual o valor?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Definido apenas após avaliação individual.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50">
              <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest">
                12. A consulta é cobrada?
                <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium">
                Sim. Trata-se de uma avaliação técnica especializada.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-abradepa-yellow">
        <div className="max-w-4xl mx-auto text-center text-abradepa-dark">
          <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">
            Recupere sua confiança com a Anaplastologia.
          </h3>
          <p className="mb-12 font-bold text-sm opacity-80 uppercase tracking-widest">
            Agende sua consulta e descubra como é possível transformar a forma
            como você se vê.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secundary bg-abradepa-dark text-white py-5 px-14 rounded-full text-sm font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Agendar Consulta <Stethoscope size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
