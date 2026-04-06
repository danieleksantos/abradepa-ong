'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Users,
  Heart,
  Copy,
  Check,
  Plus,
  Send,
} from 'lucide-react';
import { VolunteerModal } from '@/components/VolunteerModal';

export default function ComoApoiarPage() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pixKey = 'financeiroabradepa@gmail.com';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-abradepa-dark pt-40 pb-24 text-white px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            Como Apoiar a Abradepa
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-abradepa-yellow uppercase mb-8">
            Seu Apoio Transforma Vidas!
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic font-light">
            Cada cicatriz redesenhada, no físico e no emocional, representa uma
            história de superação. Para que essas histórias continuem sendo
            escritas com um final feliz, a Abradepa precisa do seu apoio.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-abradepa-dark text-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center group relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight text-abradepa-yellow">
                  Seja um doador!
                </h3>

                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Toda contribuição faz a diferença, permitindo à Abradepa
                    ampliar atendimentos e levar esperança. Use o QR Code ao
                    lado ou copie a chave abaixo.
                  </p>

                  <div className="shrink-0 bg-white p-3 rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/qr-pix.png"
                      alt="QR Code Pix Abradepa"
                      width={110}
                      height={110}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div
                  onClick={handleCopyPix}
                  className="bg-white/5 p-5 rounded-2xl border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-all group/pix active:scale-[0.98]"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-abradepa-pale mb-2">
                    Chave Pix (Clique para copiar)
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <p className="font-mono text-sm md:text-base font-bold tracking-wider break-all">
                      {pixKey}
                    </p>
                    {copied ? (
                      <Check className="text-green-400" size={18} />
                    ) : (
                      <Copy
                        className="text-abradepa-yellow group-hover/pix:scale-110 transition-transform"
                        size={18}
                      />
                    )}
                  </div>
                  {copied && (
                    <p className="text-[10px] text-green-400 font-bold uppercase mt-2 animate-bounce">
                      Chave copiada!
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center gap-6 hover:border-abradepa-yellow transition-all duration-300 shadow-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                <Users className="text-abradepa-medium" size={32} />
              </div>
              <div className="space-y-2">
                <h4 className="font-black uppercase text-xl text-abradepa-dark leading-tight">
                  Torne-se um voluntário!
                </h4>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">
                  Preencha nosso formulário e ajude a redesenhar histórias com
                  suas habilidades.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary w-full max-w-xs py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group cursor-pointer"
              >
                Preencher Formulário
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-black text-abradepa-dark uppercase">
                    Cartão de Benefícios ABRADEPA Saúde+
                  </h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Adquira o cartão e garanta acesso a telemedicina 24h,
                  descontos em farmácias e apoio nutricional para você e sua
                  família, enquanto ajuda a financiar os atendimentos da
                  associação.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8">
                  {[
                    'Telemedicina 24h',
                    'Apoio Psicológico',
                    'Descontos em Farmácias',
                    'Atendimento Pet',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-tight"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-abradepa-yellow"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/cartao-abradepa"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-abradepa-dark hover:text-abradepa-medium transition-colors cursor-pointer group"
                >
                  <span className="border-b-2 border-abradepa-yellow pb-0.5">
                    Saiba mais sobre as vantagens
                  </span>
                  <Plus
                    size={14}
                    className="text-abradepa-yellow group-hover:scale-110 transition-transform"
                  />
                </Link>
              </div>

              <div className="hidden lg:block shrink-0 relative group">
                <div className="absolute inset-0 bg-abradepa-yellow/10 blur-3xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Link href="/cartao-abradepa">
                  <Image
                    src="/cartao-abradepa.png"
                    alt="Cartão Abradepa Saúde+"
                    width={280}
                    height={180}
                    className="relative drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-2"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center pt-16 mt-16 border-t border-slate-100">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-abradepa-dark font-light leading-relaxed">
                Junte-se à Abradepa nessa nobre causa e seja parte do movimento
                que <strong> redesenha histórias e restaura a vida.</strong>
              </p>
              <div className="pt-6">
                <p className="text-abradepa-medium font-black text-sm md:text-base uppercase italic flex items-center justify-center gap-3 tracking-[0.3em]">
                  Apoie a Abradepa. Apoie a vida.{' '}
                  <Heart
                    size={20}
                    className="text-abradepa-yellow animate-pulse"
                    fill="currentColor"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VolunteerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
