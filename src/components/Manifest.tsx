'use client';

import { ShieldCheck, Heart } from 'lucide-react';

export function Manifest() {
  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none">
        <ShieldCheck
          size={400}
          className="text-abradepa-dark -translate-x-1/2 translate-y-1/4"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-block px-6 py-3 mb-8 border border-abradepa-yellow rounded-full">
          <span className="text-abradepa-dark font-black text-[15px] uppercase tracking-[0.3em]">
            Manifesto Institucional
          </span>
        </div>

        <div className="space-y-8 text-slate-700">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Acreditamos que saúde vai muito além da ausência de doença. <br />
              <strong className="text-abradepa-dark uppercase tracking-tight">
                Saúde é dignidade. É pertencimento.
              </strong>
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed italic text-slate-500">
              É a possibilidade de se reconhecer no espelho, no mundo e na
              própria história.
            </p>
          </div>

          <div className="h-px w-24 bg-abradepa-yellow/40 mx-auto my-10" />

          <div className="text-base md:text-lg leading-relaxed space-y-6 max-w-3xl mx-auto text-slate-600 text-justify md:text-center font-light">
            <p>
              A Abradepa nasce do encontro entre ciência e humanidade, técnica e
              sensibilidade, cuidado e esperança. Somos uma associação que
              acolhe pessoas em momentos de fragilidade, mas também em fases de
              <strong className="text-abradepa-dark">
                {' '}
                reconstrução, transformação e recomeço.
              </strong>
            </p>

            <p>
              Aqui, cada pessoa é vista em sua totalidade — corpo, mente,
              emoções e contexto social. Atuamos para restaurar não apenas o
              físico, mas a autoestima, a confiança e o sentido de viver.
            </p>

            <p>
              Trabalhamos para ampliar o acesso à saúde integral, às terapias
              especializadas, ao apoio psicológico, às práticas integrativas e
              complementares e às reconstruções que devolvem identidade e
              dignidade.
              <strong className="text-abradepa-dark italic">
                {' '}
                Acreditamos que ninguém deve ser invisível diante da dor.
              </strong>
            </p>

            <p>
              Somos movidos pela humanização, guiados pela inovação,
              fortalecidos pelo comprometimento e sustentados pela integridade.
              Valorizamos a solidariedade como força coletiva e cultivamos a
              esperança como princípio fundamental.
            </p>

            <p className="text-abradepa-dark font-black italic text-lg md:text-xl pt-4">
              A Abradepa é uma ponte entre a dor e a esperança. <br />
              Entre a perda e a reconstrução. Entre o silêncio e a voz.
            </p>

            <p className="pt-4">
              Seguimos firmes porque acreditamos que toda pessoa merece cuidado,
              respeito e a chance de recomeçar. E enquanto houver histórias a
              serem redesenhadas, estaremos aqui.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-slate-200">
          <p className="text-abradepa-medium font-black text-sm md:text-base tracking-[0.4em] uppercase italic flex items-center justify-center gap-3">
            Redesenhando Histórias!{' '}
            <Heart
              size={18}
              className="text-abradepa-yellow animate-pulse"
              fill="currentColor"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
