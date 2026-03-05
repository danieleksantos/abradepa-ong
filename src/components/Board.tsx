import Image from 'next/image';

const members = [
  {
    name: 'Simone Borges',
    role: 'Diretora Presidente',
    bio: 'Dermopigmentadora paramédica fundadora, lidera a missão de unir técnica e humanização na reabilitação oncológica.',
    image: '/simone-abradepa.png',
  },
  {
    name: 'Gisele Lázara de Farias Borges',
    role: 'Vice-Presidente',
    bio: 'Terapeuta focada em práticas integrativas (PICS) para o equilíbrio físico e emocional dos pacientes.',
    image: '/person.png',
  },
  {
    name: 'Danielle Christinne Mateus',
    role: 'Conselho Fiscal',
    bio: 'Especialista em Gestão Pública, responsável por assegurar a transparência e conformidade institucional da ONG.',
    image: '/person.png',
  },
];

export function Board() {
  return (
    <section id="diretoria" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h3 className="text-4xl font-extrabold text-abradepa-dark">
            Nossa Diretoria
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Corpo diretivo eleito para o mandato 2022-2026, comprometido com o
            acolhimento e a excelência técnica.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-abradepa-yellow rounded-full -rotate-6 group-hover:rotate-0 transition-transform" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
                <Image
                  src={members[0].image}
                  alt={members[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <h4 className="text-xl font-bold text-abradepa-dark">
              {members[0].name}
            </h4>
            <p className="text-abradepa-medium font-semibold text-sm mb-4 uppercase tracking-wider">
              {members[0].role}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "{members[0].bio}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
            {members.slice(1).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all group"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-slate-200 rounded-full group-hover:bg-abradepa-yellow transition-colors" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-abradepa-dark">
                  {member.name}
                </h4>
                <p className="text-abradepa-medium font-semibold text-xs mb-3 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-6 bg-slate-100/50 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
          <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest">
            Gestão registrada sob o CNPJ 47.368.448/0001-26. Atividade:
            Atividades de práticas integrativas e complementares em saúde humana
            (CNAE 86.90-9/01).
          </p>
        </div>
      </div>
    </section>
  );
}
