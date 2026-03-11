'use client';

import Image from 'next/image';
import { Gavel, Microscope, Award } from 'lucide-react';

export function Founder() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative h-150 w-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="/simone-abradepa.png"
                alt="Simone Borges - Presidente ABRADEPA"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-abradepa-yellow p-6 rounded-3xl shadow-lg hidden md:block max-w-70]">
              <div className="flex items-center gap-3 mb-3 text-abradepa-dark">
                <Gavel size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Impacto Político
                </span>
              </div>
              <p className="text-abradepa-dark font-bold text-sm leading-snug">
                Autora do Anteprojeto de Lei 1326/2022 para Saúde Integral.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-abradepa-dark uppercase tracking-tight leading-tight">
              Simone Borges: A Força Motriz e Visionária por Trás da Abradepa
            </h2>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed text-justify font-light">
              <p>
                Simone Borges é a fundadora, mantenedora e presidente da
                Abradepa (@abradepa_), uma profissional com 27 anos de dedicação
                na área de saúde e estética reconstrutiva. Sua paixão e
                expertise se destacam na reconstrução em anaplastologia e na
                criação de próteses estéticas personalizadas. Ela é uma
                referência na dermopigmentação paramédica e ministra cursos e
                palestras por todo o Brasil e na Europa; capacitando inúmeros
                profissionais e compartilhando seu vasto conhecimento técnico.
              </p>
              <p>
                Simone é a idealizadora do "Projeto Redesenhando Histórias",
                aprovado pela SEJUF, que já impactou positivamente a vida de
                muitas pacientes oncológicas atendidas em hospitais públicos e
                ONGs.
              </p>
              <p>
                Reconhecida e premiada tanto no Brasil quanto na Europa, Simone
                recebeu diversas honrarias por suas contribuições na
                dermopigmentação paramédica e anaplastologia.
              </p>
              <p>
                Além disso, Simone é autora de um projeto de lei Federal (PL
                número 1326/2022) que está em tramitação em Brasília, com o
                objetivo de garantir à todos os pacientes oncológicos o direito
                à reconstrução com próteses e dermopigmentação paramédica,
                reafirmando seu compromisso com uma saúde pública de forma
                gratuita como direito para todos.
              </p>
              <p>
                Com uma carreira focada em inovação, empatia e transformação,
                Simone Borges é, sem dúvida, uma líder incontestável, trazendo
                esperança e dignidade onde mais são necessárias. Seu trabalho
                vai muito além da estética: ela oferece novas oportunidades de
                vida, restaurando a confiança e a autoestima daqueles que
                enfrentam os maiores desafios.
              </p>
              <p>
                Simone Borges é reconhecida e premiada internacionalmente por
                sua capacidade de redesenhar histórias e transformar vidas,
                sempre com o foco em proporcionar saúde, bem-estar e
                empoderamento a quem mais precisa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div className="flex gap-3 items-start">
                <Microscope
                  className="text-abradepa-medium shrink-0"
                  size={20}
                />
                <p className="text-[11px] font-bold text-slate-500 uppercase leading-snug tracking-tighter">
                  Referência em Anaplastologia e Dermomicropigmentação
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Award className="text-abradepa-medium shrink-0" size={20} />
                <p className="text-[11px] font-bold text-slate-500 uppercase leading-snug tracking-tighter">
                  Gestão de Projetos de Alto Impacto Social
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
