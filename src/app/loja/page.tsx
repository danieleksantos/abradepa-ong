'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, ShoppingCart, ShieldCheck } from 'lucide-react';
import products from '@/data/products.json';

export default function LojaPage() {
  const whatsappUrl = 'https://wa.me/5541991541319';

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <section className="bg-abradepa-dark pt-40 pb-24 text-white px-4 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none hidden lg:block">
          <ShoppingBag size={400} strokeWidth={0.5} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <ShoppingBag className="text-abradepa-yellow" size={20} />
              <span className="text-abradepa-pale text-xs font-bold uppercase tracking-[0.2em]">
                Consumo Solidário
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight uppercase">
              Loja Virtual
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              Cada produto adquirido reverte fundos diretamente para nossos
              atendimentos gratuitos de anaplastologia e saúde integral. Sua
              compra pode ajudar a redesenhar uma história hoje.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-abradepa-dark uppercase tracking-widest shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col grow">
                  <h2 className="text-xl font-black text-abradepa-dark mb-3 uppercase tracking-tight">
                    {product.name}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 grow">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Valor
                      </span>
                      <span className="text-2xl font-black text-abradepa-dark">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <a
                      href={`${whatsappUrl}?text=Olá! Gostaria de encomendar o produto: ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 text-xs hover:brightness-110"
                    >
                      <ShoppingCart size={18} />
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6 text-abradepa-yellow/60">
            <ShieldCheck size={28} strokeWidth={1.5} />
          </div>

          <h3 className="text-xl font-black text-abradepa-dark mb-4 uppercase tracking-[0.15em]">
            Informações de Envio
          </h3>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10">
            O envio é realizado para todo o Brasil. O prazo de entrega e o valor
            do frete serão informados individualmente durante o atendimento via
            WhatsApp.
          </p>
        </div>
      </section>
    </div>
  );
}
