'use client';

const supporters = [
  { name: 'Ana Hickmann', type: 'video' },
  { name: 'Adrenalina Motos', type: 'logo' },
  { name: 'Mary Kay', type: 'logo' },
  { name: 'Armazém Garagem', type: 'logo' },
  { name: 'Radio Mix 98.3 FM Curitiba', type: 'logo' },
  { name: 'Profile Prime', type: 'logo' },
  { name: 'América Qualificações Técnicas', type: 'logo' },
  { name: 'SEJUF', type: 'logo' },
  { name: 'UNIFAPI', type: 'logo' },
];

export function Supporters() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-abradepa-medium font-bold uppercase tracking-[0.2em] text-xs mb-3">
            Parceiros e Apoiadores
          </h2>
          <h3 className="text-3xl font-extrabold text-abradepa-dark">
            Empresas que Redesenham Histórias
          </h3>
          <p className="mt-4 text-slate-500 text-sm max-w-2xl mx-auto">
            A solidariedade e as parcerias com entidades públicas e privadas são
            instrumentos fundamentais de impacto social positivo para a
            ABRADEPA.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {supporters.map((partner, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex justify-center p-4 group"
            >
              <div className="relative w-full h-16 flex items-center justify-center border border-dashed border-slate-200 rounded-xl group-hover:border-abradepa-yellow transition-colors">
                <span className="text-[10px] font-bold text-slate-400 uppercase text-center px-2">
                  {partner.name}
                </span>
                {/* Assim que receber as logos, substitua o span pela tag Image:
                  <Image 
                    src={`/supporters/${partner.name.toLowerCase().replace(/ /g, '-')}.png`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400 italic">
            Apoiamos e somos apoiados por iniciativas que garantem o direito à
            reconstrução e dignidade para todos.
          </p>
        </div>
      </div>
    </section>
  );
}
