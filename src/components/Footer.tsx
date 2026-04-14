'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-abradepa-dark text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/logo-abradepa.png"
            alt="Logo ABRADEPA"
            width={120}
            height={120}
            priority
            className="mb-6 brightness-0 invert"
          />
          <p className="text-white font-black text-sm mb-1 uppercase tracking-wider">
            ABRADEPA - Saúde Integral
          </p>
          <p className="text-abradepa-yellow text-xs italic font-extrabold leading-relaxed mb-6">
            Redesenhando Histórias!
          </p>

          <div className="flex space-x-3">
            <Link
              href="https://www.instagram.com/abradepa_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-abradepa-yellow hover:text-abradepa-dark transition-all"
              aria-label="Siga a Abradepa no Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@simoneborgesdermopigmentacao"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-abradepa-yellow hover:text-abradepa-dark transition-all"
              aria-label="Assista nosso canal no YouTube"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-black text-lg mb-6 text-abradepa-yellow uppercase tracking-widest">
            Sede Curitiba
          </h3>
          <div className="space-y-5 text-sm text-white w-full">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin
                size={18}
                className="shrink-0 text-abradepa-yellow mt-0.5"
                aria-hidden="true"
              />
              <address className="not-italic text-left text-xs leading-relaxed font-medium">
                Biocentro - R. Padre Anchieta, 1846
                <br />
                Sobreloja Sala 6 - Bigorrilho
                <br />
                CEP: 80.730-000 - Curitiba/PR
              </address>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail
                  size={16}
                  className="shrink-0 text-abradepa-yellow"
                  aria-hidden="true"
                />
                <p className="text-left text-xs font-medium">
                  contatoabradepa@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone
                  size={16}
                  className="shrink-0 text-abradepa-yellow"
                  aria-hidden="true"
                />
                <p className="text-left text-xs font-medium">(41) 99591-2817</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-black text-lg mb-6 text-abradepa-yellow uppercase tracking-widest text-center md:text-left">
            Navegação e Serviços
          </h3>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 text-[11px] md:text-sm font-bold uppercase tracking-tight justify-items-start px-8 md:px-0">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="hover:text-abradepa-yellow transition-colors italic font-black text-abradepa-yellow"
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Nossa história
              </Link>
              <Link
                href="/transparencia"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Transparência
              </Link>
              <Link
                href="/como-apoiar"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Como Apoiar
              </Link>
              <Link
                href="/capacitacao"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Palestras e Cursos
              </Link>
              <Link
                href="/blog"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/anaplastologia"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Anaplastologia
              </Link>
              <Link
                href="/dermopigmentacao"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Dermopigmentação
              </Link>
              <Link
                href="/terapia-floral"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Terapia Floral
              </Link>
              <Link
                href="/projetos-e-parcerias"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Projetos e Parcerias
              </Link>
              <Link
                href="/cartao-abradepa"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Cartão Saúde+
              </Link>
              <Link
                href="/loja"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Loja Virtual
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 pb-20 md:pb-8 flex flex-col items-center text-center text-slate-300 tracking-wider space-y-4">
        <div className="font-bold text-[13px]">
          <p>© 2026 - ABRADEPA | Todos os direitos reservados</p>
        </div>
        <div className="font-bold text-[11px] text-white">
          Desenvolvido por{' '}
          <Link
            href="https://danieleksantos.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conheça o trabalho de Daniele K. Santos, desenvolvedora deste site"
            className="text-abradepa-yellow hover:text-white transition-all underline underline-offset-4 decoration-abradepa-yellow/30"
          >
            Daniele K. Santos
          </Link>
        </div>
      </div>
    </footer>
  );
}
