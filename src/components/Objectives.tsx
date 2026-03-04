import {
  HeartPulse,
  GraduationCap,
  CreditCard,
  Accessibility,
} from 'lucide-react';

const actingAreas = [
  {
    title: 'Apoio Oncológico e Anaplastologia',
    description:
      'Confecção de próteses estéticas para pacientes oncológicos e amputados com valor social, visando a reabilitação e autoestima.',
    icon: <Accessibility className="w-8 h-8" />,
    color: 'bg-abradepa-dark',
  },
  {
    title: 'Saúde Integral e PICS',
    description:
      'Oferta de terapias integrativas e práticas complementares para restaurar o equilíbrio interno entre corpo e mente.',
    icon: <HeartPulse className="w-8 h-8" />,
    color: 'bg-abradepa-medium',
  },
  {
    title: 'Educação e Capacitação',
    description:
      'Cursos livres com dupla certificação e chancelados, focados no desenvolvimento profissional em saúde integral.',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'bg-abradepa-yellow',
  },
  {
    title: 'Cartão de Benefícios',
    description:
      'Programa de acesso facilitado a serviços de saúde e bem-estar para toda a rede de associados da ONG.',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'bg-slate-800',
  },
];

export function Objectives() {
  return (
    <section id="objetivos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-abradepa-medium font-bold uppercase tracking-[0.2em] text-sm mb-4">
            O que fazemos
          </h2>
          <h3 className="text-4xl font-extrabold text-abradepa-dark">
            Nossos Objetivos em Ação
          </h3>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-lg">
            Atuamos em diversas frentes para garantir que a saúde integral seja
            acessível, promovendo a inclusão total e a continuidade do cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actingAreas.map((area, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${area.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {area.icon}
              </div>
              <h4 className="text-xl font-bold text-abradepa-dark mb-4 leading-tight">
                {area.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
