'use client';
import { useState } from 'react';

export default function TesteCondicionalPage() {
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  // O Estado ÚNICO que guarda tudo. O que não for usado, fica em branco.
  const [formData, setFormData] = useState({
    categoria: '',
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    estado: '',
    // Específicos de Profissional
    profissao: '',
    especialidade: '',
    // Específicos de Paciente
    necessidade: '',
  });

  // Função inteligente que atualiza qualquer campo do formulário
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      // 1. Envia para a planilha no Google Sheets
      await fetch(
        'https://script.google.com/macros/s/AKfycbzzdhHZ2pH93WwgKCy4UNxOBPaKfngRGCT2idHft5ywylbPG4wjn30o-RpTWQ222JHUZw/exec',
        {
          method: 'POST',
          mode: 'no-cors', // A mágica anti-bloqueio do navegador
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(formData),
        },
      );

      setStatus('success');

      // 2. Monta a mensagem personalizada para o WhatsApp
      const numeroTeste = '5516982038845'; // 55 (Brasil) + DDD + Número do seu teste
      const mensagem = `Olá, equipe ABRADEPA! Acabei de realizar meu pré-cadastro no site.\n\n*Nome:* ${formData.nome}\n*Categoria:* ${formData.categoria}\n\nGostaria de dar continuidade ao processo!`;

      // Codifica a mensagem para formato de link (substitui espaços por %20, etc)
      const urlWhatsApp = `https://wa.me/${numeroTeste}?text=${encodeURIComponent(mensagem)}`;

      // 3. Limpa o formulário (opcional, já que vamos sair da página)
      setFormData({
        categoria: '',
        nome: '',
        email: '',
        telefone: '',
        cidade: '',
        estado: '',
        profissao: '',
        especialidade: '',
        necessidade: '',
      });

      // 4. Redireciona o usuário para o WhatsApp
      window.location.href = urlWhatsApp;
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert('Erro ao enviar o cadastro. Tente novamente.');
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex justify-center items-start">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-black text-slate-800 mb-6">
          Cadastro ABRADEPA
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* 1. SELEÇÃO DE CATEGORIA (O gatilho da mágica) */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-600">
              Categoria de Associação *
            </label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
              className="p-3 border border-slate-300 rounded-lg bg-slate-50 focus:border-blue-500 outline-none"
            >
              <option value="">Selecione como quer se associar...</option>
              <option value="Profissional">Associado Profissional</option>
              <option value="Voluntário">Associado Voluntário</option>
              <option value="Paciente">Associado Paciente</option>
              <option value="Parceiro">Parceiro Institucional</option>
            </select>
          </div>

          {/* SÓ MOSTRA OS CAMPOS SE A PESSOA TIVER ESCOLHIDO UMA CATEGORIA */}
          {formData.categoria && (
            <>
              {/* === DADOS COMUNS PARA TODAS AS CATEGORIAS === */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Nome Completo ou Razão Social"
                  className="p-3 border border-slate-300 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-mail"
                  className="p-3 border border-slate-300 rounded-lg"
                />
                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="WhatsApp"
                  className="p-3 border border-slate-300 rounded-lg"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                    placeholder="Cidade"
                    className="p-3 border border-slate-300 rounded-lg"
                  />
                  <input
                    type="text"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                    placeholder="UF"
                    className="p-3 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              {/* === RENDERIZAÇÃO CONDICIONAL === */}

              {/* Campos APENAS para Profissional */}
              {formData.categoria === 'Profissional' && (
                <div className="flex flex-col gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100 mt-2">
                  <p className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                    Dados Profissionais
                  </p>
                  <input
                    type="text"
                    name="profissao"
                    value={formData.profissao}
                    onChange={handleChange}
                    required
                    placeholder="Sua Profissão (Ex: Enfermeiro, Micropigmentador)"
                    className="p-3 border border-slate-300 rounded-lg"
                  />
                  <input
                    type="text"
                    name="especialidade"
                    value={formData.especialidade}
                    onChange={handleChange}
                    placeholder="Especialidade / Registro (Opcional)"
                    className="p-3 border border-slate-300 rounded-lg"
                  />
                </div>
              )}

              {/* Campos APENAS para Paciente */}
              {formData.categoria === 'Paciente' && (
                <div className="flex flex-col gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100 mt-2">
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Informações de Atendimento
                  </p>
                  <textarea
                    name="necessidade"
                    value={formData.necessidade}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Descreva brevemente como a ABRADEPA pode te ajudar..."
                    className="p-3 border border-slate-300 rounded-lg resize-none"
                  />
                </div>
              )}

              {/* Parágrafo informativo dinâmico */}
              <p className="text-xs text-slate-500 italic mt-2">
                * Após o envio, você será direcionado para o nosso WhatsApp para
                finalizar o cadastro como <strong>{formData.categoria}</strong>.
              </p>

              {/* BOTÃO DE SUBMIT */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-slate-800 text-white font-bold py-4 rounded-lg hover:bg-slate-900 transition-colors disabled:opacity-50 mt-4"
              >
                {status === 'loading'
                  ? 'Enviando...'
                  : 'Enviar Cadastro e ir para WhatsApp'}
              </button>
            </>
          )}
        </form>
      </div>
    </main>
  );
}
