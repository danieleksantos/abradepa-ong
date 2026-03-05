'use client';

import {
  GraduationCap,
  CreditCard,
  HeartPulse,
  Accessibility,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  BookOpen,
  LucideIcon,
} from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
  link: string;
  type: 'pago' | 'social';
}

const BenefitCard = ({
  title,
  description,
  icon: Icon,
  cta,
  link,
  type,
}: BenefitCardProps) => (
  <div className="bg-white rounded-4xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all group">
    <div className="w-full flex justify-between items-start mb-6">
      <div className="p-4 bg-abradepa-pale/10 rounded-2xl text-abradepa-dark group-hover:bg-abradepa-yellow transition-colors">
        <Icon size={32} />
      </div>
      <span
        className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
          type === 'pago'
            ? 'bg-slate-100 text-slate-500'
            : 'bg-abradepa-yellow/20 text-abradepa-dark'
        }`}
      >
        {type === 'pago' ? 'Valor Social' : 'Apoio Gratuito'}
      </span>
    </div>

    <div className="grow">
      <h2 className="text-2xl font-black text-abradepa-dark mb-4 tracking-tight uppercase">
        {title}
      </h2>
      <p className="text-slate-600 leading-relaxed mb-8 text-left">
        {description}
      </p>
    </div>

    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="btn-primary w-fit px-8 py-3 text-sm flex items-center gap-2"
    >
      {cta}
      {link.startsWith('http') ? (
        <ExternalLink size={16} />
      ) : (
        <ChevronRight size={16} />
      )}
    </a>
  </div>
);

export default function CursosPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-abradepa-dark pt-32 pb-24 text-white px-4 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none hidden lg:block">
          <BookOpen size={600} strokeWidth={0.5} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-abradepa-yellow" size={20} />
                <span className="text-abradepa-pale text-xs font-bold uppercase tracking-[0.2em]">
                  Oportunidades
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Cursos e Benefícios
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Expandindo o conhecimento e o acesso a práticas integrativas
                para a transformação social.
              </p>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-abradepa-yellow/10 blur-[100px] rounded-full"></div>
                <GraduationCap
                  size={260}
                  strokeWidth={0.5}
                  className="relative z-10 text-white/10 -rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitCard
            title="Capacitação Profissional"
            description="Cursos livres com dupla certificação focados em dermomicropigmentação paramédica e práticas integrativas (PICS)."
            icon={GraduationCap}
            cta="Acessar Plataforma"
            link="https://exemplo-link-cursos.com"
            type="pago"
          />

          <BenefitCard
            title="Cartão Benefício Saúde"
            description="Acesso facilitado a consultas e exames através de nossa rede conveniada para todos os associados da ONG."
            icon={CreditCard}
            cta="Solicitar Adesão"
            link="https://exemplo-link-cartao.com"
            type="pago"
          />

          <BenefitCard
            title="Reconstrução Oncológica"
            description="Próteses estéticas e procedimentos de reconstrução para pacientes oncológicos e amputados com valor social."
            icon={Accessibility}
            cta="Agendar Avaliação"
            link="/#fale-conosco"
            type="social"
          />

          <BenefitCard
            title="Terapias Integrativas"
            description="Atendimentos gratuitos e projetos como PROPICS, promovendo o equilíbrio físico e emocional no SUS."
            icon={HeartPulse}
            cta="Conhecer Projetos"
            link="/#fale-conosco"
            type="social"
          />
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-dashed border-slate-200">
          <p className="text-[10px] text-abradepa-dark italic leading-relaxed text-center uppercase tracking-wider">
            Conforme previsto no Regimento Interno, a ABRADEPA atua na
            implantação de projetos (PROREDH, PROTECON, PROPICS), podendo contar
            com Entidades Mantenedoras para viabilizar o acesso social.
          </p>
        </div>
      </section>
    </div>
  );
}
