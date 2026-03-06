import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, MapPin, Mail } from 'lucide-react';

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
            style={{ height: 'auto' }}
            className="mb-6 brightness-0 invert"
          />
          <p className="text-abradepa-pale text-sm leading-relaxed">
            Associação Brasileira de Apoio à Saúde Integral. Transformando vidas
            através do acolhimento e da capacitação técnica.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-lg mb-6 text-abradepa-yellow uppercase tracking-wider">
            Sede
          </h4>
          <div className="space-y-4 text-sm text-white w-full max-w-70 md:max-w-none">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin
                size={18}
                className="shrink-0 text-abradepa-yellow mt-0.5"
              />
              <p className="text-left">
                Rua Guararapes, 1261 - Apt 32
                <br />
                Vila Izabel - Curitiba/PR
                <br />
                CEP: 80.320-210
              </p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Mail size={18} className="shrink-0 text-abradepa-yellow" />
              <p className="text-left">contato@abradepa.org.br</p>
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
                href="/#quem-somos"
                className="hover:text-abradepa-light transition-colors"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                href="/#objetivos"
                className="hover:text-abradepa-light transition-colors"
              >
                Objetivos
              </Link>
            </li>
            <li>
              <Link
                href="/novidades"
                className="hover:text-abradepa-light transition-colors"
              >
                Novidades
              </Link>
            </li>
            <li>
              <Link
                href="/transparencia"
                className="hover:text-abradepa-light transition-colors font-bold"
              >
                Transparência
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold text-lg mb-6 text-abradepa-yellow uppercase tracking-wider">
            Redes Sociais
          </h4>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/abradepa_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-abradepa-yellow hover:text-abradepa-dark transition-all"
              aria-label="Instagram da ABRADEPA"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@simoneborgesdermopigmentacao"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-abradepa-yellow hover:text-abradepa-dark transition-all"
              aria-label="YouTube da ABRADEPA"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-abradepa-pale/60 tracking-wider">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2026 ABRADEPA - CNPJ: 47.368.448/0001-26</p>
        </div>
        <p className="text-center md:text-right">
          Desenvolvido por Daniele K. Santos
        </p>
      </div>
    </footer>
  );
}
