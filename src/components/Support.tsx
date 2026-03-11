'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  CheckCircle2,
  QrCode,
  Users,
  Heart,
  Copy,
  Check,
  MessageCircle,
} from 'lucide-react';

export function Support() {
  const [copied, setCopied] = useState(false);
  const pixKey = '00.000.000/0001-00'; // Substitua pela chave real

  const whatsappCartaoUrl =
    'https://wa.me/5541991541319?text=Olá! Gostaria de saber mais informações e adquirir o Cartão de Benefícios ABRADEPA Saúde+.';
  const whatsappVoluntarioUrl =
    'https://wa.me/5541991541319?text=Olá! Gostaria de enviar meu currículo para ser voluntário na Abradepa.';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="apoio" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-abradepa-dark uppercase mb-6 tracking-tight">
            Seu Apoio Transforma Vidas!
          </h2>
          <div className="space-y-4 text-slate-600 text-lg font-light leading-relaxed">
            <p>
              Cada cicatriz redesenhada, no físico e no emocional, representam
              uma história de superação. Para que essas histórias continuem
              sendo escritas com um final feliz, a Abradepa precisa do seu
              apoio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20">
          <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-abradepa-yellow rounded-2xl flex items-center justify-center shadow-sm">
                <CreditCard className="text-abradepa-dark" size={24} />
              </div>
              <h3 className="text-xl font-black text-abradepa-dark uppercase">
                Como Você Pode Fazer a Diferença:
              </h3>
            </div>

            <p className="text-sm font-bold text-abradepa-dark mb-4 uppercase tracking-tight">
              Adquira o Cartão de Benefícios ABRADEPA Saúde+
            </p>

            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Ao adquirir o cartão, você se une à missão da Abradepa. Uma parte
              do valor é destinada a custear recursos essenciais para os
              pacientes assistidos pela associação.
            </p>

            <div className="space-y-4 mb-10 grow">
              <p className="text-xs font-black uppercase text-slate-400 tracking-widest">
                Vantagens para Titular + 6 Pessoas:
              </p>
              {[
                {
                  t: 'Orientação 24h',
                  d: 'Informações em saúde por telefone 24h por dia.',
                },
                {
                  t: 'Apoio Psicológico',
                  d: 'Consultas ilimitadas de terapia breve online.',
                },
                {
                  t: 'Apoio Nutricional',
                  d: 'Consultas ilimitadas agendadas via 0800 ou App.',
                },
                {
                  t: 'Telemedicina Livre',
                  d: 'Consultas ilimitadas com clínico geral online.',
                },
                {
                  t: 'Descontos em Farmácias',
                  d: 'Até 70% em mais de 5.500 farmácias parceiras.',
                },
                {
                  t: 'Telemedicina Pet 24h',
                  d: 'Atendimento veterinário por vídeo para um pet.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <CheckCircle2
                    size={16}
                    className="text-abradepa-yellow shrink-0 mt-0.5"
                  />
                  <p className="text-slate-600">
                    <strong>{item.t}:</strong> {item.d}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={whatsappCartaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 group"
            >
              Adquirir Cartão via WhatsApp
              <MessageCircle
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>

          <div className="space-y-6 flex flex-col h-full">
            <div className="bg-abradepa-dark text-white rounded-[2.5rem] p-10 grow relative overflow-hidden flex flex-col justify-center group">
              <QrCode
                className="absolute right-0 bottom-0 opacity-5 -mr-4 -mb-4 group-hover:scale-110 transition-transform duration-500"
                size={180}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tight text-abradepa-yellow">
                  Faça uma Doação via Pix!
                </h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-md">
                  Toda contribuição faz a diferença, permitindo à Abradepa
                  ampliar atendimentos e levar esperança a um número crescente
                  de pessoas.
                </p>

                <div
                  onClick={handleCopyPix}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-all group/pix active:scale-[0.98]"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-abradepa-pale mb-2">
                    Chave Pix (Clique para copiar)
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <p className="font-mono text-lg font-bold tracking-wider">
                      {pixKey}
                    </p>
                    {copied ? (
                      <Check className="text-green-400" size={20} />
                    ) : (
                      <Copy
                        className="text-abradepa-yellow group-hover/pix:scale-110 transition-transform"
                        size={20}
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

            <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center gap-6 hover:border-abradepa-yellow transition-all duration-300 shadow-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                <Users className="text-abradepa-medium" size={32} />
              </div>
              <div className="space-y-2">
                <h4 className="font-black uppercase text-lg text-abradepa-dark leading-tight">
                  Torne-se voluntário na Abradepa!
                </h4>
                <p className="text-slate-500 text-sm">
                  Envie seu currículo e ajude a redesenhar histórias.
                </p>
              </div>
              <a
                href={whatsappVoluntarioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group"
              >
                Enviar Currículo via WhatsApp
                <MessageCircle
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center pt-10 border-t border-slate-100">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-abradepa-dark font-light leading-relaxed">
              Junte-se à equipe da Abradepa nessa nobre causa. Seja parte do
              movimento que
              <strong> redesenha histórias e restaura a vida.</strong>
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Sua generosidade é a força que impulsiona a transformação.
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
  );
}
