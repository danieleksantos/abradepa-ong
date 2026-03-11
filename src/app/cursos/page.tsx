'use client';

import React from 'react';
import {
  GraduationCap,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export default function CursosEBeneficiosPage() {
  const whatsappUrl = 'https://wa.me/5541991541319';

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <section className="bg-abradepa-dark pt-32 pb-24 text-white px-4 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none hidden lg:block">
          <GraduationCap size={600} strokeWidth={0.5} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <ShieldCheck className="text-abradepa-yellow" size={20} />
              <span className="text-abradepa-pale text-xs font-bold uppercase tracking-[0.2em]">
                Educação e Bem-estar
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-tight">
              Cursos e Benefícios
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light italic border-l-4 border-abradepa-yellow pl-6">
              Capacitação técnica de excelência e acesso a serviços de saúde
              integrados para transformar a realidade de profissionais e
              pacientes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-full text-slate-600">
              <CreditCard size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Acesso Facilitado
              </span>
            </div>
            <h2 className="text-4xl font-black text-abradepa-dark uppercase tracking-tight leading-tight">
              Cartão de Benefícios ABRADEPA Saúde+
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed text-justify md:text-left">
              <p>
                <strong>Cuidado acessível para você, família e seu Pet!</strong>{' '}
                Acesso facilitado a uma rede de profissionais como médicos,
                psicólogos, nutricionistas e enfermeiros, todos disponíveis na
                modalidade online.
              </p>
              <p>
                Por um valor acessível, este cartão abrange o titular e mais
                seis membros da família, assegurando que todos tenham cuidado de
                saúde de forma prática e econômica, incluindo seu pet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                'Serviço de Orientação 24h',
                'Apoio Psicológico Ilimitado',
                'Apoio Nutricional',
                'Telemedicina Livre (Clínico)',
                'Descontos em 5.500 Farmácias',
                'Telemedicina PET 24h',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-abradepa-yellow shrink-0"
                  />
                  <span className="text-xs font-bold text-slate-500 uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={`${whatsappUrl}?text=Olá! Gostaria de adquirir o Cartão Saúde+`}
              target="_blank"
              className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-sm font-black uppercase tracking-widest mt-6 hover:scale-105"
            >
              Solicitar Cartão via WhatsApp
              <MessageCircle size={20} />
            </a>
          </div>

          <div className="relative">
            <div className="bg-abradepa-dark rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl min-h-100 flex flex-col justify-center">
              <CreditCard
                size={300}
                className="absolute -right-20 -bottom-20 opacity-5 -rotate-12"
              />
              <h3 className="text-3xl font-black uppercase mb-6 leading-tight relative z-10">
                Uma parte do valor <br />
                <span className="text-abradepa-yellow text-4xl uppercase">
                  Salva Vidas
                </span>
              </h3>
              <p className="text-white/70 text-lg font-light leading-relaxed relative z-10">
                Ao adquirir o cartão, você custeia recursos essenciais como
                próteses e terapias para pacientes carentes assistidos pela
                nossa associação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="h-56 bg-white rounded-[2.5rem] border border-slate-100 flex items-center justify-center p-8 shadow-sm group hover:border-abradepa-yellow transition-all">
                <GraduationCap
                  size={70}
                  className="text-abradepa-yellow group-hover:scale-110 transition-transform"
                />
              </div>

              <div className="h-56 bg-abradepa-yellow rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-md text-abradepa-dark">
                <span className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">
                  Reconhecimento
                </span>
                <p className="font-black text-center uppercase leading-tight tracking-tighter">
                  Dupla <br /> Certificação
                </p>
              </div>

              <div className="h-56 bg-abradepa-dark rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-md text-white">
                <span className="text-[10px] font-black uppercase tracking-widest mb-2 text-abradepa-yellow">
                  Abrangência
                </span>
                <p className="font-black text-center uppercase leading-tight tracking-tighter">
                  Brasil <br /> e Europa
                </p>
              </div>

              <div className="h-56 bg-white rounded-[2.5rem] border border-slate-100 flex items-center justify-center p-8 shadow-sm group hover:border-abradepa-yellow transition-all">
                <ShieldCheck
                  size={70}
                  className="text-abradepa-medium group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full text-abradepa-medium border border-slate-200">
              <GraduationCap size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Formação Profissional
              </span>
            </div>

            <h2 className="text-4xl font-black text-abradepa-dark uppercase tracking-tight leading-tight">
              Capacitação Profissional <br /> e Conscientização
            </h2>

            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
              <p>
                Realização de cursos de formação, eventos, seminários e
                palestras. Produção de materiais informativos para capacitar
                profissionais e divulgar conhecimento técnico.
              </p>

              <ul className="space-y-4">
                {[
                  'Dermopigmentação Paramédica Especializada',
                  'Workshops de Anaplastologia e Próteses',
                  'Eventos e Seminários Internacionais',
                  'Saúde Integral e Práticas Inclusivas',
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight
                      size={18}
                      className="text-abradepa-yellow shrink-0"
                    />
                    <span className="text-sm font-bold text-slate-700 uppercase">
                      {li}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`${whatsappUrl}?text=Olá! Gostaria de informações sobre os cursos e palestras`}
              target="_blank"
              className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-sm font-black uppercase tracking-widest mt-6 shadow-xl"
            >
              Consultar Agenda de Cursos
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-abradepa-medium font-black text-xs uppercase tracking-[0.4em] italic mb-4">
            Abradepa Saúde Integral
          </p>
          <p className="text-slate-400 text-sm font-light uppercase tracking-widest">
            Redesenhando Histórias!
          </p>
        </div>
      </section>
    </div>
  );
}
