'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "relative text-abradepa-dark font-medium transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-abradepa-yellow after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo-abradepa.png"
              alt="Logo ABRADEPA"
              width={70}
              height={70}
              priority
              className="object-contain"
            />
          </Link>

          <nav className="hidden xl:flex items-center space-x-6">
            <Link href="/" className={linkStyle}>
              Home
            </Link>
            <Link href="/sobre" className={linkStyle}>
              Quem Somos
            </Link>
            <Link href="/transparencia" className={linkStyle}>
              Transparência
            </Link>
            <Link href="/#objetivos" className={linkStyle}>
              Objetivos
            </Link>
            <Link href="/blog" className={linkStyle}>
              Blog
            </Link>
            <Link href="/loja" className={linkStyle}>
              Loja Virtual
            </Link>

            <Link
              href="/cursos"
              className="btn-primary px-6 py-2.5 text-sm whitespace-nowrap shadow-sm hover:shadow-md hover:brightness-110"
            >
              Cursos e Benefícios
            </Link>
          </nav>

          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-abradepa-dark focus:outline-none"
              aria-label="Abrir menu"
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
        <div className="xl:hidden bg-white border-b border-gray-100 absolute w-full left-0 p-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300 z-50">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2"
          >
            Home
          </Link>
          <Link
            href="/sobre"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2"
          >
            Quem Somos
          </Link>
          <Link
            href="/transparencia"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2"
          >
            Transparência
          </Link>
          <Link
            href="/#objetivos"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2"
          >
            Objetivos
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2"
          >
            Blog
          </Link>
          <Link
            href="/loja"
            onClick={() => setIsOpen(false)}
            className="block text-abradepa-dark font-medium py-2"
          >
            Loja Virtual
          </Link>
          <Link
            href="/cursos"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full py-3 hover:brightness-110"
          >
            Cursos e Benefícios
          </Link>
        </div>
      )}
    </header>
  );
}
