'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const linkStyle =
    "relative text-abradepa-dark font-medium transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-abradepa-yellow after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left flex items-center gap-1 cursor-pointer py-1";

  const dropdownItemStyle =
    'block px-4 py-2 text-sm text-abradepa-dark hover:bg-slate-50 hover:text-abradepa-medium transition-colors font-bold uppercase tracking-tighter';

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="shrink-0 flex items-center"
            aria-label="Ir para a página inicial da ABRADEPA"
          >
            <Image
              src="/logo-abradepa.png"
              alt="Logo ABRADEPA"
              width={70}
              height={70}
              priority
              className="object-contain"
            />
          </Link>

          <nav
            className="hidden md:flex items-center space-x-4 lg:space-x-6"
            aria-label="Menu principal"
          >
            <Link href="/" className={linkStyle}>
              Home
            </Link>
            <Link href="/sobre" className={linkStyle}>
              Quem Somos
            </Link>
            <Link href="/transparencia" className={linkStyle}>
              Transparência
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={linkStyle}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Objetivos
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-100 shadow-xl rounded-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link href="/anaplastologia" className={dropdownItemStyle}>
                    Anaplastologia
                  </Link>
                  <Link href="/dermopigmentacao" className={dropdownItemStyle}>
                    Dermopigmentação
                  </Link>
                  <Link href="/terapia-floral" className={dropdownItemStyle}>
                    Terapia Floral
                  </Link>
                  <Link
                    href="/projetos-e-parcerias"
                    className={dropdownItemStyle}
                  >
                    Projetos e Parcerias
                  </Link>
                  <Link href="/capacitacao" className={dropdownItemStyle}>
                    Capacitação e Palestras
                  </Link>
                  <Link href="/cartao-abradepa" className={dropdownItemStyle}>
                    Cartão de Benefícios
                  </Link>
                </div>
              )}
            </div>

            <Link href="/como-apoiar" className={linkStyle}>
              Como apoiar
            </Link>
            <Link href="/blog" className={linkStyle}>
              Blog
            </Link>
            <Link href="/loja" className={linkStyle}>
              Loja Virtual
            </Link>

            <Link
              href="/cursos-e-beneficios"
              className="btn-primary px-4 lg:px-6 py-2.5 text-xs lg:text-sm whitespace-nowrap shadow-sm hover:shadow-md hover:brightness-110"
            >
              Cursos e Benefícios
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-abradepa-dark focus:outline-none"
              aria-label={
                isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
              }
              aria-expanded={isOpen}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav
          className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 p-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300 z-50 overflow-y-auto max-h-[90vh]"
          aria-label="Menu móvel"
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2 text-lg"
          >
            Home
          </Link>
          <Link
            href="/sobre"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2 text-lg"
          >
            Quem Somos
          </Link>
          <Link
            href="/transparencia"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2 text-lg"
          >
            Transparência
          </Link>

          <div className="py-2 space-y-3">
            <span className="block text-abradepa-dark font-medium py-2 text-lg">
              Objetivos
            </span>
            <div className="pl-4 space-y-4 border-l-2 border-slate-100">
              <Link
                href="/anaplastologia"
                onClick={() => setIsOpen(false)}
                className="block text-sm py-1 text-slate-500 font-bold uppercase"
              >
                Anaplastologia
              </Link>
              <Link
                href="/dermopigmentacao"
                onClick={() => setIsOpen(false)}
                className="block text-sm py-1 text-slate-500 font-bold uppercase"
              >
                Dermopigmentação
              </Link>
              <Link
                href="/terapia-floral"
                onClick={() => setIsOpen(false)}
                className="block text-sm py-1 text-slate-500 font-bold uppercase"
              >
                Terapia Floral
              </Link>
              <Link
                href="/projetos-e-parcerias"
                onClick={() => setIsOpen(false)}
                className="block text-sm py-1 text-slate-500 font-bold uppercase"
              >
                Parcerias
              </Link>
              <Link
                href="/capacitacao"
                onClick={() => setIsOpen(false)}
                className="block text-sm py-1 text-slate-500 font-bold uppercase"
              >
                Capacitação
              </Link>
              <Link
                href="/cartao-abradepa"
                onClick={() => setIsOpen(false)}
                className="block text-sm py-1 text-slate-500 font-bold uppercase"
              >
                Cartão Saúde+
              </Link>
            </div>
          </div>

          <Link
            href="/como-apoiar"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2 text-lg"
          >
            Como apoiar
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2 text-lg"
          >
            Blog
          </Link>
          <Link
            href="/loja"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2 text-lg"
          >
            Loja Virtual
          </Link>

          <div className="pt-4">
            <Link
              href="/cursos-e-beneficios"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full py-4 text-center block shadow-lg"
            >
              Cursos e Benefícios
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
