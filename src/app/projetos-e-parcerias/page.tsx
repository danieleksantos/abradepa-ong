'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MessageCircle,
  Handshake,
  Heart,
  ShieldCheck,
  X,
  Maximize2,
  BookOpen,
} from 'lucide-react';

export default function ProjetosParceriasPage() {
  const whatsappUrl = 'https://wa.me/5541995912817';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => setSelectedImage(src);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="bg-white min-h-screen relative font-sans">
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-abradepa-yellow transition-colors cursor-pointer"
            onClick={closeLightbox}
          >
            <X size={40} />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Visualização ampliada"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      <section className="bg-abradepa-dark pt-40 pb-28 text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
          Projetos e Parcerias
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-abradepa-yellow uppercase mb-8 tracking-widest leading-relaxed">
          Unindo forças para transformar realidades
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic font-light">
          A Abradepa acredita que o impacto social é potencializado através da
          colaboração técnica e humana.
        </p>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3 px-4 sm:px-0">
            <div className="bg-slate-900 p-8 rounded-[3rem] shadow-xl text-white text-center border border-slate-800">
              <div
                className="relative w-48 h-48 mx-auto mb-6 cursor-pointer group/img"
                onClick={() =>
                  openLightbox(
                    '/projetos-e-parcerias/atendimento-voluntario-1.jpeg',
                  )
                }
              >
                <div className="absolute inset-0 border-2 border-abradepa-yellow rounded-4xl -m-2 rotate-3" />
                <div className="relative w-full h-full rounded-4xl overflow-hidden border-2 border-slate-900 shadow-md">
                  <Image
                    src="/projetos-e-parcerias/atendimento-voluntario-1.jpeg"
                    alt="Atendimento Voluntário"
                    fill
                    className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                    <Maximize2 className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase text-white leading-tight">
                Projetos Sociais
              </h3>
              <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full mt-4"></div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 space-y-8">
            <h4 className="text-xl font-black text-abradepa-dark uppercase flex items-center gap-3">
              <Heart className="text-abradepa-yellow" /> Atendimento Voluntário
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  t: 'Programa de Voluntariado',
                  img: '/projetos-e-parcerias/atendimento-voluntario-2.jpeg',
                },
                {
                  t: 'Doação de Prótese',
                  img: '/projetos-e-parcerias/programa-voluntariado.jpeg',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group cursor-pointer hover:border-abradepa-yellow transition-all"
                  onClick={() => openLightbox(item.img)}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.t}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                      <Maximize2 className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-black text-abradepa-dark uppercase text-sm">
                      {item.t}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white border-y border-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3 px-4 sm:px-0">
            <div className="bg-slate-900 p-8 rounded-[3rem] shadow-xl text-white text-center border border-slate-800">
              <div
                className="relative w-48 h-48 mx-auto mb-6 cursor-pointer group/img"
                onClick={() =>
                  openLightbox(
                    '/projetos-e-parcerias/parceria-privada-com-Rotary-club-Batel.jpeg',
                  )
                }
              >
                <div className="absolute inset-0 border-2 border-abradepa-yellow rounded-4xl -m-2 -rotate-3" />
                <div className="relative w-full h-full rounded-4xl overflow-hidden border-2 border-slate-900 shadow-md">
                  <Image
                    src="/projetos-e-parcerias/parceria-privada-com-Rotary-club-Batel.jpeg"
                    alt="Card Principal Rotary"
                    fill
                    className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                    <Maximize2 className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase text-abradepa-yellow leading-tight">
                Projetos Corporativos
              </h3>
              <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full mt-4"></div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 space-y-8">
            <h4 className="text-xl font-black text-abradepa-dark uppercase flex items-center gap-3">
              <Handshake className="text-abradepa-yellow" /> Parcerias privadas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  t: 'Rede Ana Hickmann',
                  img: '/projetos-e-parcerias/parceria-privada-Ana-Hickman.jpeg',
                },
                {
                  t: 'Rotary Club Batel',
                  img: '/projetos-e-parcerias/parceria-privada-com-Rotary-club-Batel-2.jpeg',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm overflow-hidden group cursor-pointer hover:border-abradepa-yellow transition-all"
                  onClick={() => openLightbox(item.img)}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.t}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                      <Maximize2 className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-black text-abradepa-dark uppercase text-xs">
                      {item.t}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3 px-4 sm:px-0">
            <div className="bg-slate-900 p-8 rounded-[3rem] shadow-xl text-white text-center border border-slate-800">
              <div
                className="relative w-48 h-48 mx-auto mb-6 cursor-pointer group/img"
                onClick={() =>
                  openLightbox(
                    '/projetos-e-parcerias/parceria-publica-com-delegada.jpeg',
                  )
                }
              >
                <div className="absolute inset-0 border-2 border-abradepa-yellow rounded-4xl -m-2 rotate-2" />
                <div className="relative w-full h-full rounded-4xl overflow-hidden border-2 border-slate-900 shadow-md">
                  <Image
                    src="/projetos-e-parcerias/parceria-publica-com-delegada.jpeg"
                    alt="Card Principal Delegada"
                    fill
                    className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                    <Maximize2 className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase text-white leading-tight">
                Cooperação Institucional
              </h3>
              <div className="w-12 h-1 bg-abradepa-yellow mx-auto rounded-full mt-4"></div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 space-y-8">
            <h4 className="text-xl font-black text-abradepa-dark uppercase flex items-center gap-3">
              <ShieldCheck className="text-abradepa-yellow" /> Parcerias
              Públicas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  t: 'Voluntariado Sejuf',
                  img: '/projetos-e-parcerias/programa-voluntariado-Sejuf.jpeg',
                },
                {
                  t: 'Convênios Governamentais',
                  img: '/projetos-e-parcerias/parceria-publica-com-Sejuf.jpeg',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm group hover:border-abradepa-yellow transition-all cursor-pointer"
                  onClick={() => openLightbox(item.img)}
                >
                  <div className="relative h-40 w-full mb-4 rounded-2xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.t}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                      <Maximize2 className="text-white" />
                    </div>
                  </div>
                  <h5 className="font-black text-abradepa-dark uppercase text-xs">
                    {item.t}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-3xl font-black text-abradepa-dark uppercase tracking-tighter mb-4">
              Palestras Educacionais
            </h4>
            <div className="flex items-center justify-center gap-2 text-abradepa-medium font-bold uppercase text-xs mb-6 tracking-widest">
              <BookOpen size={16} /> Disseminando Conhecimento
            </div>
            <div className="w-20 h-1.5 bg-abradepa-yellow mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((num) => {
                const src = `/projetos-e-parcerias/palestra-${num}.jpeg`;
                return (
                  <div
                    key={num}
                    className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-lg group border-2 border-slate-50 cursor-pointer"
                    onClick={() => openLightbox(src)}
                  >
                    <Image
                      src={src}
                      alt={`Palestra Educacional ${num}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="text-white" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-3xl font-black text-abradepa-dark uppercase tracking-tighter mb-4">
            Projeto Outubro Rosa
          </h4>
          <div className="w-20 h-1.5 bg-abradepa-yellow mx-auto rounded-full mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => {
              const src = `/projetos-e-parcerias/outubro-rosa-${num}.jpeg`;
              return (
                <div
                  key={num}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md group border-2 border-slate-100 cursor-pointer"
                  onClick={() => openLightbox(src)}
                >
                  <Image
                    src={src}
                    alt={`Outubro Rosa ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Maximize2 className="text-white" size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-abradepa-yellow text-center">
        <h3 className="text-2xl md:text-3xl font-black uppercase mb-8 text-abradepa-dark">
          Quer apoiar um projeto?
        </h3>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secundary bg-abradepa-dark text-white py-5 px-14 rounded-full text-sm font-black uppercase inline-flex items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          Fale conosco <MessageCircle size={20} />
        </a>
      </section>
    </div>
  );
}
