import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsappButton } from '@/components/WhatsappButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'ABRADEPA | Associação de Apoio à Saúde Integral',
  description:
    'Promovendo saúde integral através de acolhimento humanizado, anaplastologia, dermopigmentação paramédica e práticas integrativas.',
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
