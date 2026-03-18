'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    const nomeCandidato = formData.get('nome');
    formData.append(
      '_subject',
      `${nomeCandidato} deseja ser voluntário na Abradepa`,
    );

    try {
      const response = await fetch('https://formspree.io/f/xreyreod', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        alert('Ops! Algo deu errado. Por favor, tente novamente.');
      }
    } catch {
      alert('Erro de conexão. Verifique sua internet.');
    } finally {
      setIsSending(false);
    }
  };

  // LÓGICA DE CORES:
  // 1. Inicia neutro (border-slate-200).
  // 2. No foco, fica amarelo (focus:border-abradepa-yellow).
  // 3. APENAS se estiver com foco E for inválido, fica vermelho (focus:invalid:border-red-500).
  const inputClass =
    'w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:border-abradepa-yellow focus:ring-1 focus:ring-abradepa-yellow focus:invalid:border-red-500 focus:invalid:ring-red-500 peer';

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-abradepa-dark/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2.5rem] w-full max-w-xl max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative animate-in zoom-in-95 duration-300"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-20"
        >
          <X size={24} className="text-slate-400" />
        </button>

        <div className="p-8 md:p-12">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in-50">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-black text-abradepa-dark uppercase mb-2">
                Enviado!
              </h3>
              <p className="text-slate-500 text-sm">
                Recebemos seu interesse. Em breve entraremos em contato.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-2xl font-black text-abradepa-dark uppercase mb-2 leading-tight">
                  Seja um Voluntário
                </h3>
                <p className="text-slate-500 text-sm">
                  Preencha os campos abaixo para iniciar sua jornada conosco.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 ml-1 tracking-widest">
                    Nome Completo
                  </label>
                  <input
                    required
                    name="nome"
                    type="text"
                    placeholder="Como podemos te chamar?"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 ml-1 tracking-widest">
                      WhatsApp (DDD + Número)
                    </label>
                    <input
                      required
                      name="whatsapp"
                      type="tel"
                      pattern=".{11}" // Exige exatamente 11 caracteres para ser válido
                      title="Digite 11 números (DDD + número)"
                      placeholder="41999999999"
                      value={phone}
                      onChange={handlePhoneChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 ml-1 tracking-widest">
                      E-mail
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 ml-1 tracking-widest">
                    Por que quer ser voluntário?
                  </label>
                  <textarea
                    required
                    name="motivo"
                    rows={3}
                    placeholder="Sua motivação..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 ml-1 tracking-widest">
                    Como pode contribuir?
                  </label>
                  <textarea
                    required
                    name="contribuicao"
                    rows={3}
                    placeholder="Suas habilidades..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-widest mt-4 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      Enviar Solicitação <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
