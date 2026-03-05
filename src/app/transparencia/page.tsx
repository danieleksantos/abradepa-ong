'use client';

import React from 'react';
import {
  Building2,
  Download,
  ClipboardCheck,
  FileDown,
  Scale,
  ShieldCheck,
  Mail,
  Network,
} from 'lucide-react';

const DocumentCard = ({
  title,
  filename,
  size,
}: {
  title: string;
  filename: string;
  size: string;
}) => (
  <a
    href={`/docs/${filename}`}
    download={filename}
    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 group text-left"
  >
    <div className="flex items-center gap-4">
      <div className="p-2 bg-abradepa-yellow/20 rounded-lg text-abradepa-yellow">
        <FileDown size={20} />
      </div>
      <div>
        <span className="font-bold text-sm block text-white">{title}</span>
        <span className="text-[10px] text-abradepa-pale uppercase tracking-widest font-semibold">
          {size}
        </span>
      </div>
    </div>
    <Download
      size={18}
      className="text-white/40 group-hover:text-abradepa-yellow transition-transform"
    />
  </a>
);

export default function TransparenciaPage() {
  const infoFiscais = [
    {
      label: 'Razão Social',
      value:
        'Associação Brasileira de Dermomicropigmentação Paramédica e Anaplastologia',
    },
    { label: 'CNPJ', value: '47.368.448/0001-26' },
    { label: 'Data de Fundação', value: '30 de março de 2022' },
    { label: 'Natureza Jurídica', value: '399-9 - Associação Privada' },
    {
      label: 'Atividade Principal',
      value: 'Práticas integrativas e complementares em saúde humana',
    },
    {
      label: 'Sede Administrativa',
      value: 'Rua Guararapes, 1261, Vila Izabel, Curitiba/PR',
    },
    { label: 'Situação Cadastral', value: 'Ativa' },
  ];

  const diretoriaOficial = [
    { name: 'Simone Borges', role: 'Presidente Fundadora' },
    { name: 'Gisele Lázara de Farias Borges', role: 'Vice-Presidente' },
    { name: 'Danielle Christinne Mateus', role: 'Conselho Fiscal' },
    { name: 'Adriana Gomes', role: 'Conselho Fiscal' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="bg-abradepa-dark pt-32 pb-24 text-white px-4 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none hidden lg:block">
          <Network size={600} strokeWidth={0.5} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-abradepa-yellow" size={20} />
                <span className="text-abradepa-pale text-xs font-bold uppercase tracking-[0.2em]">
                  Institucional
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Portal da Transparência
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Ética e responsabilidade como base fundamental do nosso apoio à
                saúde integral.
              </p>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-abradepa-yellow/10 blur-[100px] rounded-full"></div>
                <ShieldCheck
                  size={260}
                  strokeWidth={0.5}
                  className="relative z-10 text-white/10 -rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white rounded-4xl p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-12 border-b border-slate-50 pb-6">
                <Building2 className="text-abradepa-medium" size={28} />
                <h2 className="text-2xl font-black text-abradepa-dark">
                  Identificação Fiscal
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {infoFiscais.map((info, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                      {info.label}
                    </span>
                    <p className="text-slate-900 font-bold text-base leading-snug">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-abradepa-dark rounded-[2.5rem] p-10 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <ClipboardCheck className="text-abradepa-yellow" size={32} />
                <h2 className="text-2xl font-black">Certidões e Atas</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DocumentCard
                  title="Ata de Fundação"
                  filename="ata-fundacao-abradepa.pdf"
                  size="1.8 MB"
                />
                <DocumentCard
                  title="Cartão CNPJ"
                  filename="cnpj-abradepa.pdf"
                  size="450 KB"
                />
              </div>

              <div className="mt-8 flex items-start gap-3 text-white/40 text-[11px] italic">
                <Scale size={16} className="shrink-0 mt-0.5" />
                <p>
                  Registros oficiais conforme o 2º Registro de Títulos e
                  Documentos de Curitiba/PR.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-4xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-black text-abradepa-dark mb-8 border-b border-slate-50 pb-4">
                Corpo Diretivo
              </h3>
              <div className="space-y-6">
                {diretoriaOficial.map((m, i) => (
                  <div key={i}>
                    <p className="text-sm font-black text-slate-800 leading-tight">
                      {m.name}
                    </p>
                    <p className="text-[10px] font-bold text-abradepa-medium uppercase tracking-wider mt-1">
                      {m.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-4xl p-8 text-white mt-20">
              <h4 className="font-black text-lg mb-4 text-abradepa-yellow">
                Dúvidas?
              </h4>
              <p className="text-xs text-slate-400 mb-8 leading-relaxed font-medium">
                Para outras informações oficiais, utilize nosso canal de contato
                direto via e-mail.
              </p>
              <a
                href="mailto:contato@abradepa.org.br"
                className="btn-primary w-full text-sm py-4"
              >
                <Mail size={18} />
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
