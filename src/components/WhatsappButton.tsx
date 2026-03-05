'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function WhatsappButton() {
  const phoneNumber = '554198611626';
  const message = encodeURIComponent(
    'Olá! Gostaria de mais informações sobre os serviços da ABRADEPA.',
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:scale-110 active:scale-95 group"
      aria-label="Falar pelo WhatsApp"
    >
      <div className="flex h-12 w-12 items-center justify-center md:h-16 md:w-16">
        <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
      </div>

      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-abradepa-dark px-3 py-2 text-sm font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Dúvidas? Fale conosco!
      </span>
    </Link>
  );
}
