'use client';

import React from 'react';
import Image from 'next/image';
import { Stethoscope, Heart, CheckCircle2 } from 'lucide-react';

export default function DermopigmentacaoPage() {
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
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            DERMOPIGMENTAÇÃO PARAMÉDICA
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-abradepa-yellow uppercase mb-8">
            Reconstrução Estética Avançada
          </h2>
        </div>
      </section>

      <section className="py-20 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-slate-700 leading-relaxed space-y-6 text-lg md:text-xl">
            <p>
              A Dermopigmentação Paramédica é uma técnica especializada que alia
              arte, ciência e precisão para reconstrução estética de áreas
              afetadas, promovendo a harmonização da pele e a recuperação da
              autoestima. Indicada para pacientes que necessitam corrigir
              cicatrizes, reconstruir estruturas como aréolas mamárias ou tratar
              alterações de pigmentação, essa técnica proporciona resultados
              naturais e discretos.
            </p>
            <p>
              São utilizados pigmentos paramédicos de alta qualidade, com
              técnicas personalizadas, garantindo integração com o tom e a
              textura da pele.
            </p>

            <div className="pt-4">
              <p className="font-black uppercase text-lg tracking-[0.2em] text-abradepa-dark mb-6">
                Principais aplicações:
              </p>
              <ul className="grid grid-cols-1 gap-y-3 text-xs uppercase tracking-tight text-slate-700 font-bold">
                <li
                  onClick={() => scrollToSection('areola')}
                  className="cursor-pointer hover:border-b hover:border-abradepa-yellow transition-all w-fit pb-0.5"
                >
                  • Reconstrução de Aréola Mamária
                </li>
                <li
                  onClick={() => scrollToSection('cicatrizes')}
                  className="cursor-pointer hover:border-b hover:border-abradepa-yellow transition-all w-fit pb-0.5"
                >
                  • Dermopigmentação para Cicatrizes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-abradepa-dark uppercase mb-20 text-center tracking-[0.3em]">
            APLICAÇÕES DA DERMOPIGMENTAÇÃO PARAMÉDICA
          </h2>

          <div className="space-y-32">
            <div id="areola" className="scroll-mt-24">
              <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-black text-abradepa-dark mb-6 uppercase tracking-tighter border-l-4 border-abradepa-yellow pl-4">
                    Reconstrução de Aréola Mamária
                  </h3>
                  <div className="space-y-4 text-slate-600 md:text-lg leading-relaxed italic">
                    <p>
                      A reconstrução de aréola é realizada por meio da técnica
                      realista 3D, proporcionando profundidade, naturalidade e
                      fidelidade estética.
                    </p>
                    <p>
                      <strong className="text-abradepa-dark uppercase text-sm not-italic font-black">
                        Indicação:
                      </strong>{' '}
                      pacientes que passaram por mastectomia, cirurgias
                      reparadoras ou que apresentam assimetrias e alterações de
                      coloração na região.
                    </p>
                    <ul className="space-y-2 text-sm not-italic font-bold text-slate-700 uppercase tracking-tighter">
                      <li>• Reconstrução estética da aréola mamária</li>
                      <li>• Correção de assimetrias</li>
                      <li>• Ajuste de coloração</li>
                    </ul>
                  </div>
                </div>
                <div className="w-64 h-64 shrink-0 relative rounded-4xl overflow-hidden shadow-sm border border-slate-100">
                  <Image
                    src="/Dermopigmentacao/Dermopigmentacao Paramedica em areolas.jpeg"
                    alt="Reconstrução de Aréola"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div id="cicatrizes" className="scroll-mt-24">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-black text-abradepa-dark mb-6 uppercase tracking-tighter border-l-4 border-abradepa-yellow pl-4">
                    Dermopigmentação para Cicatrizes
                  </h3>
                  <div className="space-y-4 text-slate-600 md:text-lg leading-relaxed italic">
                    <p>
                      Por meio de técnicas avançadas, é possível tratar e
                      suavizar cicatrizes decorrentes de cirurgias, queimaduras,
                      acidentes, além de alterações como vitiligo e
                      hipopigmentações.
                    </p>
                    <ul className="space-y-2 text-sm not-italic font-bold text-slate-700 uppercase tracking-tighter">
                      <li>
                        • Correção de cicatrizes cirúrgicas ou traumáticas
                      </li>
                      <li>• Reconstrução estética de áreas cicatriciais</li>
                      <li>• Harmonização do tom da pele</li>
                    </ul>
                  </div>
                </div>
                <div className="w-64 h-64 shrink-0 relative rounded-4xl overflow-hidden shadow-sm border border-slate-100">
                  <Image
                    src="/Dermopigmentacao/Dermopigmentacao Paramedica reconstrucao de queimaduras.jpeg"
                    alt="Correção de Cicatrizes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-slate-50">
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square relative rounded-3xl overflow-hidden mb-4 shadow-sm">
                  <Image
                    src="/Dermopigmentacao/Dermopigmentacao Paramedica em vitiligo.jpeg"
                    alt="Tratamento de Vitiligo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest text-center italic">
                  Tratamento de Vitiligo e Hipopigmentação
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square relative rounded-3xl overflow-hidden mb-4 shadow-sm">
                  <Image
                    src="/Dermopigmentacao/Dermopigmentacao Paramedica reconstrucao de Estrias.jpeg"
                    alt="Reconstrução de Estrias"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest text-center italic">
                  Reconstrução de Estrias
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square relative rounded-3xl overflow-hidden mb-4 shadow-sm">
                  <Image
                    src="/Dermopigmentacao/Dermopigmentacao Paramedica Tricopigmentacao capilar.jpeg"
                    alt="Tricopigmentação Capilar"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest text-center italic">
                  Tricopigmentação Capilar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-abradepa-dark text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black uppercase mb-12 text-center tracking-widest text-abradepa-yellow">
            DIFERENCIAL DO ATENDIMENTO
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Técnicas personalizadas para cada tipo de pele',
              'Pigmentos hipoalergênicos e seguros',
              'Atendimento especializado e humanizado',
              'Resultados discretos e naturais',
              'Foco na autoestima e no bem-estar do paciente',
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 text-sm font-medium"
              >
                <CheckCircle2
                  className="text-abradepa-yellow shrink-0"
                  size={18}
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-abradepa-dark uppercase mb-10 text-center tracking-widest">
            DÚVIDAS FREQUENTES (FAQ)
          </h2>
          <div className="space-y-4">
            {[
              {
                q: '1. A consulta é cobrada?',
                a: 'Sim. A consulta é uma etapa técnica e essencial para avaliação individualizada.',
              },
              {
                q: '2. Qual tipo de pigmento é utilizado?',
                a: 'São utilizados pigmentos paramédicos de alta qualidade, desenvolvidos para uso seguro na pele, com alta estabilidade e biocompatibilidade.',
              },
              {
                q: '3. Qual a diferença entre dermopigmentação, micropigmentação e tatuagem?',
                a: 'A dermopigmentação paramédica é voltada para reconstrução estética e correção de imperfeições. Utiliza técnicas e pigmentos específicos, diferentes da tatuagem e da micropigmentação estética convencional.',
              },
              {
                q: '4. Em quais casos é indicada?',
                a: '• Cicatrizes cirúrgicas ou traumáticas\n• Queimaduras\n• Vitiligo e hipopigmentação\n• Reconstrução de aréolas mamárias',
              },
              {
                q: '5. Existe contraindicação?',
                a: 'Sim. Deve ser avaliada individualmente, considerando condições de saúde, pele e uso de medicamentos.',
              },
              {
                q: '6. Pacientes que usam medicamentos contínuos podem realizar?',
                a: 'Depende do medicamento e do quadro clínico. Avaliação prévia é obrigatória.',
              },
              {
                q: '7. Quanto tempo após cirurgia posso realizar?',
                a: 'O tempo varia conforme o processo de cicatrização. A liberação deve ser feita após avaliação profissional.',
              },
              {
                q: '8. O resultado é imediato?',
                a: 'O resultado inicial é visível, porém o aspecto final ocorre após o processo completo de cicatrização.',
              },
              {
                q: '9. O que acontece com o pigmento após o procedimento?',
                a: 'O pigmento se acomoda gradualmente na pele, podendo ocorrer leve clareamento durante a cicatrização.',
              },
              {
                q: '10. Quantas sessões são necessárias?',
                a: 'Depende de cada caso, podendo variar conforme a área e resposta da pele.',
              },
              {
                q: '11. Remove completamente a cicatriz?',
                a: 'Não remove a cicatriz, mas melhora significativamente o aspecto visual e a uniformidade da pele.',
              },
              {
                q: '12. Quais cuidados após o procedimento?',
                a: '• Evitar sol\n• Não aplicar produtos químicos\n• Seguir orientações profissionais\n• Manter a área limpa e protegida',
              },
              {
                q: '13. Posso enviar foto para orçamento?',
                a: 'Sim, para uma estimativa inicial. O valor final depende de avaliação presencial.',
              },
              {
                q: '14. Qual o valor do procedimento?',
                a: 'Definido apenas após avaliação individual.',
              },
              {
                q: '15. Onde encontrar profissionais qualificados?',
                a: 'É fundamental buscar profissionais especializados em dermopigmentação paramédica, com formação adequada e uso de materiais seguros.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:bg-slate-50/50"
              >
                <summary className="list-none font-bold text-abradepa-dark uppercase cursor-pointer flex justify-between items-center text-xs tracking-widest leading-relaxed">
                  {faq.q}
                  <span className="text-abradepa-dark font-black text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="pt-4 text-xs text-slate-500 border-t border-slate-100 mt-4 leading-relaxed font-medium whitespace-pre-line">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-abradepa-yellow">
        <div className="max-w-4xl mx-auto text-center text-abradepa-dark">
          <Heart
            className="text-abradepa-dark mx-auto mb-6"
            size={48}
            fill="currentColor"
          />
          <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">
            Harmonização e Autoestima
          </h3>
          <p className="mb-12 font-bold text-sm opacity-80 uppercase tracking-widest">
            A reconstrução estética que respeita a sua pele e a sua história.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secundary bg-abradepa-dark text-white py-5 px-14 rounded-full text-sm font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Agendar Avaliação <Stethoscope size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
