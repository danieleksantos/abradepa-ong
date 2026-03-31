'use client';

import Image from 'next/image';
import { MessageCircle, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export default function CapacitacaoPage() {
  const whatsappUrl = 'https://wa.me/5541995912817';

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
            técnico e apoio emocional, promovendo a saúde integral.
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
                      src="/palestrantes/simone.jpeg"
                      alt="Simone Borges"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-abradepa-dark uppercase leading-tight mb-2">
                  Simone Borges
                </h3>
                <p className="text-abradepa-medium font-bold uppercase text-[10px] tracking-widest mb-6">
                  Anaplastologista e Dermopigmentadora Paramédica
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full mb-6"></div>
                <div className="text-slate-600 text-sm leading-relaxed text-justify italic">
                  <p>
                    Sou anaplastologista, especialista em próteses estéticas e
                    em Dermopigmentação Paramédica, com mais de duas décadas de
                    atuação na área reconstrutiva. Meu trabalho é voltado à
                    reabilitação estética e emocional de pacientes oncológicos,
                    amputados e com malformações congênitas, devolvendo
                    identidade e autoestima. Atuo também como perita judicial,
                    ministrante master internacional e designer cirúrgico,
                    unindo técnica e humanização para gerar impacto social e
                    transformar vidas.
                  </p>
                </div>
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
                    t: 'Reconstrução Pós-Mastectomia',
                    d: 'Uma abordagem técnica e humanizada sobre possibilidades reais de reconstrução, autoestima e qualidade de vida após o câncer de mama.',
                  },
                  {
                    t: 'Redesenhando Histórias: Reconstrução Pós-Mastectomia',
                    d: 'Uma palestra que vai além da técnica, trazendo reflexão, acolhimento e transformação na jornada de mulheres que enfrentaram o câncer de mama.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-abradepa-yellow transition-all group"
                  >
                    <h5 className="font-black text-abradepa-dark uppercase text-sm mb-2 group-hover:text-abradepa-medium transition-colors">
                      {i + 1}. {item.t}
                    </h5>
                    <p className="text-slate-500 text-sm leading-relaxed italic">
                      {item.d}
                    </p>
                  </div>
                ))}
                <p className="text-slate-500 text-sm leading-relaxed italic px-3">
                  * Palestras indicadas para campanhas de saúde como Outubro
                  Rosa, empresas (SIPAT), instituições, hospitais e eventos
                  voltados à conscientização, prevenção e reabilitação
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
                      alt="Gisele Borges"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight mb-2 text-white">
                  Gisele Borges
                </h3>
                <p className="text-abradepa-yellow font-bold uppercase text-[10px] tracking-widest mb-6">
                  Terapeuta Floral e Pedagoga
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full mb-6"></div>
                <div className="text-white/80 text-sm leading-relaxed text-justify italic">
                  <p>
                    Sou Terapeuta Floral Integrativa, Pedagoga e Educadora de
                    Florais de Bach. Promovo equilíbrio emocional e bem-estar
                    por meio de atendimentos individualizados, com uma abordagem
                    ética, sensível e humanizada. Também atuo na formação de
                    profissionais com cursos, palestras e vivências, e acompanho
                    pessoas autistas e seus familiares, sempre respeitando suas
                    particularidades. Dedico minha trajetória ao cuidado
                    integral e ao desenvolvimento pessoal.
                  </p>
                </div>
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
                    t: 'Terapia Floral e qualidade de vida: Apoio para famílias atípicas',
                    d: 'Autocuidado e equilíbrio emocional através dos Florais de Bach para cuidadores.',
                  },
                  {
                    t: 'Workshop de Terapia Floral – Vivendo os Florais de Bach',
                    d: 'Vivência prática para profissionais que buscam integrar a terapia ao cuidado emocional.',
                  },
                  {
                    t: 'Cuide de Si! Filosofia dos Florais de Bach',
                    d: 'Apresentação da ferramenta como suporte complementar ao equilíbrio cotidiano.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-abradepa-yellow transition-all group"
                  >
                    <h5 className="font-black text-abradepa-dark uppercase text-sm mb-2 group-hover:text-abradepa-medium transition-colors">
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

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3 px-4 sm:px-0">
              <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-2 border-abradepa-yellow rounded-full -m-1" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src="/palestrantes/rita.jpeg"
                      alt="Rita Schunemann"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-abradepa-dark uppercase leading-tight mb-2">
                  Rita Schunemann
                </h3>
                <p className="text-abradepa-medium font-bold uppercase text-[10px] tracking-widest mb-6">
                  Pedagoga e Psicopedagoga
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full mb-6"></div>
                <div className="text-slate-600 text-sm leading-relaxed text-justify italic">
                  <p>
                    Sou Professora, Pedagoga e Psicopedagoga, com especialização
                    em alfabetização e inclusão de crianças com Deficiência
                    Intelectual, incluindo PEI, adaptação curricular e
                    alfabetização de crianças não verbais. Com mais de 25 anos
                    de experiência, dedico meu trabalho a crianças com
                    deficiência, síndromes e transtornos do
                    neurodesenvolvimento, com foco em uma prática pedagógica
                    individualizada e inclusiva. Também realizo palestras sobre
                    regulação emocional para educadores, famílias e
                    profissionais da área.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-8 px-4 sm:px-0">
              <h4 className="text-xl font-black text-abradepa-dark uppercase tracking-widest flex items-center gap-3">
                <BookOpen className="text-abradepa-yellow" /> Programas
                Educacionais
              </h4>
              {[
                {
                  t: '1. Regulação Emocional do Comportamento',
                  items: [
                    'Sistemas Sensoriais',
                    'Propriocepção e Vestibular',
                    'Interocepção',
                  ],
                },
                {
                  t: '2. Estratégias para Inclusão da Criança TEA',
                  items: [
                    'Rotina Visível',
                    'Atividades Adaptadas',
                    'Consciência Corporal',
                  ],
                },
              ].map((prog, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
                >
                  <h5 className="font-black text-abradepa-dark uppercase text-sm mb-6 border-l-4 border-abradepa-yellow pl-4">
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
                      src="/palestrantes/pietra.jpeg"
                      alt="Pietra"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight mb-2 text-white">
                  Pietra
                </h3>
                <p className="text-abradepa-yellow font-bold uppercase text-[10px] tracking-widest mb-6">
                  Nutricionista Clínica
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full mb-6"></div>
                <div className="text-white/80 text-sm leading-relaxed text-justify italic">
                  <p>
                    Sou nutricionista clínica, ofereço um acompanhamento
                    individualizado voltado para diferentes necessidades de
                    saúde. Atuo no cuidado nutricional de crianças autistas, na
                    saúde da mulher em suas diversas fases da vida e no suporte
                    a pessoas que desejam melhorar sua performance esportiva.
                    Minha abordagem é sempre acolhedora, técnica e
                    personalizada, respeitando as particularidades de cada
                    paciente e promovendo saúde de forma integral.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-8 px-4 sm:px-0">
              <h4 className="text-xl font-black text-abradepa-dark uppercase tracking-widest flex items-center gap-3">
                <Sparkles className="text-abradepa-yellow" /> Palestra
              </h4>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-abradepa-yellow transition-all group">
                <h5 className="font-black text-abradepa-dark uppercase text-sm mb-4 leading-relaxed group-hover:text-abradepa-medium transition-colors">
                  1. Alimentação e suas influências no TDAH e TEA
                </h5>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  Análise técnica sobre como as escolhas alimentares impactam
                  diretamente o comportamento e o bem-estar de indivíduos com
                  TDAH e TEA.
                </p>
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
                      src="/palestrantes/eunice.jpeg"
                      alt="Eunice Roberto"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight mb-2 text-abradepa-dark">
                  Eunice Roberto
                </h3>
                <p className="text-abradepa-medium font-bold uppercase text-[10px] tracking-widest mb-6">
                  Psicóloga e Neuropsicóloga
                </p>
                <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full mb-6"></div>
                <div className="text-slate-600 text-sm leading-relaxed text-justify italic">
                  <p>
                    Sou psicóloga e neuropsicóloga, CRP 08/42084, realizo
                    palestras voltadas à promoção da saúde mental e emocional,
                    com uma abordagem técnica, acolhedora e prática. Trabalho
                    com temas como ansiedade, autocuidado, desenvolvimento
                    infantil e parentalidade, sempre buscando oferecer
                    orientação e ferramentas que possam ser aplicadas no dia a
                    dia.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-8 px-4 sm:px-0">
              <h4 className="text-xl font-black text-abradepa-dark uppercase tracking-widest flex items-center gap-3">
                <Sparkles className="text-abradepa-yellow" /> Palestra
              </h4>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-abradepa-yellow transition-all group">
                <h5 className="font-black text-abradepa-dark uppercase text-sm mb-4 leading-relaxed group-hover:text-abradepa-medium transition-colors">
                  1. Equilíbrio Emocional para mães atípicas
                </h5>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  Suporte psicológico e estratégias de enfrentamento para mães
                  de crianças atípicas, promovendo resiliência e saúde emocional
                  familiar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-abradepa-yellow">
        <div className="max-w-4xl mx-auto text-center text-abradepa-dark">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tighter">
            Interessado em agendar uma palestra?
          </h3>
          <p className="mb-12 font-bold text-sm md:text-base opacity-80 uppercase tracking-widest">
            Entre em contato para informações sobre agenda e valores sociais.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secundary bg-abradepa-dark text-white py-5 px-14 rounded-full text-sm font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            Consultar agenda <MessageCircle size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
