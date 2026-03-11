'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-abradepa-dark text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/logo-abradepa.png"
            alt="Logo ABRADEPA"
            width={120}
            height={120}
            style={{ width: 'auto', height: 'auto' }}
            className="mb-6 brightness-0 invert"
          />
          <p className="text-white font-bold text-sm mb-2 uppercase">
            ABRADEPA - Saúde Integral
          </p>
          <p className="text-abradepa-yellow text-xs italic leading-relaxed">
            Redesenhando Histórias!
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-lg mb-6 text-abradepa-yellow uppercase tracking-wider">
            Sede Curitiba
          </h4>
          <div className="space-y-4 text-sm text-white w-full">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin
                size={18}
                className="shrink-0 text-abradepa-yellow mt-0.5"
              />
              <p className="text-left">
                Biocentro - R. Padre Anchieta, 1846
                <br />
                Sobreloja Sala 6 - Bigorrilho
                <br />
                CEP: 80.730-000 - Curitiba/PR
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={18} className="shrink-0 text-abradepa-yellow" />
                <p className="text-left text-xs">contatoabradepa@gmail.com </p>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone size={18} className="shrink-0 text-abradepa-yellow" />
                <p className="text-left text-xs">(41) 99154-1319 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-lg mb-6 text-abradepa-yellow uppercase tracking-wider">
            Navegação
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link
                href="/sobre"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                href="/transparencia"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Transparência
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/loja"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Loja Virtual
              </Link>
            </li>
            <li>
              <Link
                href="/cursos"
                className="hover:text-abradepa-yellow transition-colors"
              >
                Cursos e Benefícios
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-lg mb-6 text-abradepa-yellow uppercase tracking-wider">
            Siga-nos
          </h4>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/abradepa_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-abradepa-yellow hover:text-abradepa-dark transition-all"
              aria-label="@abradepa_ no Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@simoneborgesdermopigmentacao"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-abradepa-yellow hover:text-abradepa-dark transition-all"
              aria-label="YouTube Simone Borges"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-abradepa-pale/60 tracking-wider">
        <div className="text-center md:text-left mb-4 md:mb-0 font-bold">
          <p>© 2026 - Todos os Direitos reservados ABRADEPA</p>
        </div>
        <p className="text-center md:text-right font-bold">
          Desenvolvido por Daniele K. Santos
        </p>
      </div>
    </footer>
  );
}
