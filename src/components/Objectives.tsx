'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Scrollbar } from 'swiper/modules';
import {
  CreditCard,
  Accessibility,
  Sparkles,
  HeartPulse,
  Share2,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/scrollbar';

const actingAreas = [
  {
    title: 'Cartão de Benefícios ABRADEPA Saúde+',
    items: [
      'Cuidado acessível para você, família e seu Pet.',
      'Médicos, psicólogos e nutricionistas online.',
      'Abrange titular e mais seis membros da família.',
      'Saúde de forma prática e econômica.',
    ],
    icon: <CreditCard size={28} />,
    color: 'bg-abradepa-dark',
  },
  {
    title: 'Anaplastologia',
    items: [
      'Próteses personalizadas (dedos, orelhas, nariz e olhos).',
      'Próteses oncológicas de Aréolas e mamas externas.',
      'Recuperão da imagem e da autoestima.',
      'Equilíbrio psicológico e reintegração social.',
    ],
    icon: <Accessibility size={28} />,
    color: 'bg-abradepa-medium',
  },
  {
    title: 'Dermopigmentação Paramédica',
    items: [
      'Reconstrução de aréolas pós-mastectomia.',
      'Reconstrução de cicatrizes e queimaduras.',
      'Alopecia capilar e lábios leporino.',
    ],
    icon: <Sparkles size={28} />,
    color: 'bg-abradepa-yellow',
  },
  {
    title: 'Apoio Psicológico e Terapias Complementares',
    items: [
      'Psicólogos e Práticas Integrativas (PICS).',
      'Suporte para famílias atípicas (Autismo/PCD).',
      'Psicopedagogia (Método Fônico Mediado).',
      'Apoio essencial às mães atípicas.',
    ],
    icon: <HeartPulse size={28} />,
    color: 'bg-slate-800',
  },
  {
    title: 'Projetos e Parcerias',
    items: [
      'Programas e projetos sociais estruturados.',
      'Parcerias públicas e privadas.',
      'Atendimento voluntário e expansão de alcance.',
    ],
    icon: <Share2 size={28} />,
    color: 'bg-abradepa-dark',
  },
  {
    title: 'Capacitação Profissional e Conscientização',
    items: [
      'Cursos, eventos, seminários e palestras.',
      'Materiais informativos para profissionais.',
      'Conscientização sobre saúde integral e inclusiva.',
    ],
    icon: <GraduationCap size={28} />,
    color: 'bg-abradepa-medium',
  },
];

export function Objectives() {
  return (
    <section id="objetivos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-abradepa-dark uppercase tracking-tight mb-4">
              Pilares de Apoio à Saúde Integral
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed italic">
              A Abradepa oferece suporte especializado abrangendo a recuperação
              física, mental, emocional e social.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="swiper-prev-btn p-3 rounded-full bg-abradepa-yellow border border-abradepa-yellow text-abradepa-dark hover:bg-abradepa-dark hover:border-abradepa-dark hover:text-white transition-all shadow-md active:scale-90 shrink-0 cursor-pointer">
              <ChevronLeft size={24} strokeWidth={3} />
            </button>

            <button className="swiper-next-btn p-3 rounded-full bg-abradepa-yellow border border-abradepa-yellow text-abradepa-dark hover:bg-abradepa-dark hover:border-abradepa-dark hover:text-white transition-all shadow-md active:scale-90 shrink-0 cursor-pointer">
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, A11y, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1.1}
            grabCursor={true}
            navigation={{
              prevEl: '.swiper-prev-btn',
              nextEl: '.swiper-next-btn',
            }}
            scrollbar={{
              draggable: true,
              hide: false, // Deixa a barra sempre visível no mobile
              el: '.swiper-custom-scrollbar',
            }}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.2 },
            }}
            className="overflow-visible! cursor-grab active:cursor-grabbing"
          >
            {actingAreas.map((area, index) => (
              <SwiperSlide key={index} className="h-auto! pb-12">
                <div className="p-8 md:p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-1 group select-none">
                  <div
                    className={`w-14 h-14 ${area.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shrink-0`}
                  >
                    {area.icon}
                  </div>

                  <h4 className="text-lg font-black text-abradepa-dark mb-6 leading-tight uppercase tracking-tight min-h-14 flex items-center">
                    {area.title}
                  </h4>

                  <ul className="space-y-4 grow">
                    {area.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-abradepa-yellow shrink-0 mt-0.5"
                        />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-custom-scrollbar mt-8 h-1.5 bg-slate-100 rounded-full overflow-hidden md:hidden"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-scrollbar-drag {
          background: #ffd200 !important;
        }
      `}</style>
    </section>
  );
}
