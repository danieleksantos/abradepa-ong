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
  MessageCircle,
} from 'lucide-react';
import { VolunteerModal } from '@/components/VolunteerModal';

export default function ComoApoiarPage() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pixKey = 'financeiroabradepa@gmail.com';
  const whatsappNumber = '5541995912817';
  const whatsappMessage =
    'Olá! Gostaria de saber mais sobre como me tornar um Associado Profissional da Abradepa.';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const beneficiosProfissionais = [
    'Encaminhamento de pacientes e interessados para profissionais associados de acordo com sua especialidade e região de atendimento;',
    'Inclusão no Diretório Nacional de Profissionais Associados da Abradepa, ampliando a visibilidade profissional e facilitando a localização e indicação de especialistas em diferentes regiões do Brasil;',
    'Divulgação do perfil profissional através dos canais institucionais da Abradepa;',
    'Participação em uma rede nacional de profissionais das áreas de dermomicropigmentação paramédica, micropigmentação, anaplastologia, estética, saúde e reabilitação;',
    'Certificação internacional através do CIBS – Conselho Internacional de Beleza e Saúde para instrutores, professores e ministrantes de cursos associados, bem como para alunos de cursos chancelados pela Abradepa;',
    'Participação em projetos sociais, científicos, educacionais e campanhas promovidas pela associação;',
    'Descontos e condições especiais em cursos, congressos, feiras, workshops, palestras, eventos técnicos, premiações e iniciativas de reconhecimento profissional;',
    'Benefícios e condições diferenciadas através de convênios e empresas parceiras;',
    'Descontos e vantagens junto a empresas parceiras de pigmentos, equipamentos, silicones, insumos para próteses, materiais, produtos e tecnologias utilizadas pelos profissionais da área;',
    'Descontos e benefícios através de parcerias com farmácias, hotéis, academias, cartões de benefícios em saúde e demais empresas conveniadas;',
    'Participação em grupos de estudo, atualização profissional e desenvolvimento técnico-científico;',
    'Certificados de participação em ações, campanhas, projetos e atividades institucionais da associação;',
    'Networking e integração com profissionais de diversas regiões do Brasil;',
    'Fortalecimento, valorização e representatividade das categorias profissionais junto à sociedade, empresas parceiras e instituições.',
  ];

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

            <div className="bg-slate-50 border border-slate-300 p-8 md:p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center gap-6 hover:border-abradepa-yellow transition-all duration-300 shadow-sm">
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
                className="btn-primary w-full max-w-xs py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group cursor-pointer hover:scale-105"
              >
                Preencher Formulário
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-abradepa-dark tracking-tight mb-6">
              Profissionais da Área
            </h2>
            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-left md:text-center">
              <p>
                A{' '}
                <strong className="text-abradepa-dark">
                  Abradepa – Associação Brasileira de Dermomicropigmentação
                  Paramédica e Anaplastologia
                </strong>{' '}
                reúne profissionais comprometidos com a reabilitação, inclusão,
                reconstrução estética, desenvolvimento científico e excelência
                profissional.
              </p>
              <p>
                Se você atua nas áreas de dermomicropigmentação paramédica,
                micropigmentação, anaplastologia, próteses estéticas, próteses
                faciais, reconstrução areolar, oncologia, reabilitação, saúde,
                estética ou áreas correlatas, convidamos você a fazer parte da
                nossa rede nacional de profissionais.
              </p>
              <p>
                Ao integrar a Abradepa, você passa a fazer parte de uma
                associação dedicada ao fortalecimento da categoria, ao
                desenvolvimento profissional, à promoção de projetos sociais,
                científicos e educacionais e à ampliação do acesso dos pacientes
                a profissionais qualificados em todo o Brasil.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-black uppercase text-abradepa-dark text-center mb-10 tracking-tight border-b-2 border-abradepa-yellow pb-4 inline-block mx-auto justify-center w-fit">
              Benefícios do Associado
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beneficiosProfissionais.map((beneficio, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <CheckCircle2
                    className="text-abradepa-dark shrink-0 mt-0.5"
                    size={24}
                  />
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-abradepa-dark rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-abradepa-yellow opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-3xl mx-auto relative z-10 mb-8">
              Faça parte da Abradepa e contribua para o fortalecimento da{' '}
              <span className="text-abradepa-yellow font-bold">
                dermomicropigmentação paramédica, da micropigmentação, da
                anaplastologia, da reconstrução estética, da reabilitação e da
                inclusão
              </span>{' '}
              em todo o Brasil.
            </p>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary relative z-10 flex items-center justify-center gap-3 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all"
            >
              Fale com nossa equipe
              <MessageCircle size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-black text-abradepa-dark uppercase">
                    <span className="text-xs font-black text-abradepa-dark uppercase tracking-widest mb-1 block">
                      Abradepa parceria com cartão de benefícios à saúde.
                    </span>
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
                    alt="Abradepa parceria com cartão de benefícios à saúde."
                    width={280}
                    height={180}
                    className="relative drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-abradepa-dark font-light leading-relaxed">
              Junte-se à Abradepa nessa nobre causa e seja parte do movimento
              que <strong> redesenha histórias e restaura a vida.</strong>
            </p>
            <div className="pt-6">
              <p className="text-abradepa-medium font-black text-sm md:text-base uppercase italic flex items-center justify-center gap-3">
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
      </section>

      <VolunteerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
