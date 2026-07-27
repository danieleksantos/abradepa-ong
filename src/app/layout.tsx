import { Montserrat } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsappButton } from '@/components/WhatsappButton';
import { Metadata } from 'next';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abradepa.org.br'),
  alternates: {
    canonical: '/',
  },
  title: {
    default:
      'ABRADEPA | Associação Bras. de Dermopigmentação Paramédica e Anaplastologia',
    template: '%s | ABRADEPA',
  },
  description:
    'Promovemos saúde integral e reabilitação através da anaplastologia, dermopigmentação paramédica, próteses estéticas e práticas integrativas. Saiba mais!',
  authors: [{ name: 'ABRADEPA' }],
  creator: 'ABRADEPA',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.abradepa.org.br',
    title: 'ABRADEPA | Saúde Integral e Reabilitação Estética',
    description:
      'Transformando vidas e redesenhando histórias com acolhimento humanizado, anaplastologia e dermopigmentação paramédica.',
    siteName: 'ABRADEPA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Logo da ABRADEPA - Associação Brasileira de Dermomicropigmentação Paramédica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABRADEPA | Dermopigmentação Paramédica e Anaplastologia',
    description: 'Promovendo saúde integral e acolhimento humanizado.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-slate-50 flex min-h-screen flex-col`}
      >
        <Header />
        <main className="grow">{children}</main>

        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
