import { FormEvent, useState } from 'react';
import { CheckCircle2, ExternalLink, MessageCircle, Send } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanMessage = message.trim();

    if (cleanName.length < 2) {
      setError('Por favor, informe seu nome para prepararmos a mensagem.');
      return;
    }

    const digits = cleanPhone.replace(/\D/g, '');
    if (digits.length < 8) {
      setError('Por favor, informe um telefone válido com DDD.');
      return;
    }

    if (cleanMessage.length < 5) {
      setError('Escreva uma breve mensagem sobre o que seu pet precisa.');
      return;
    }

    const formattedText = [
      `Olá, ${siteConfig.brand.name}!`,
      `Meu nome é ${cleanName}.`,
      `Telefone para contato: ${cleanPhone}.`,
      `Mensagem: ${cleanMessage}`,
    ].join('\n');

    const url = buildWhatsAppUrl(formattedText);
    setPreparedUrl(url);

    // Abre a conversa oficial no WhatsApp em nova aba via ação direta do usuário
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gradient-to-br from-[#40145F] via-[#5A1D88] to-[#7026A8] py-20 sm:py-24 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FFD43B]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Lado esquerdo: convite à conversa */}
          <div className="lg:col-span-5 space-y-5">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-[#FFF1B8]">
              ATENDIMENTO DIRETO · WHATSAPP
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white text-balance">
              Vamos conversar sobre o seu{' '}
              <span className="text-[#FFD43B]">melhor amigo</span>?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#F2E8FA]">
              Estamos prontos para receber sua mensagem. Entre em contato e consulte as informações da Mommy Petshop.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/15 text-sm text-[#F2E8FA]">
              <p>
                <strong className="text-[#FFD43B]">WhatsApp oficial:</strong>{' '}
                <span className="tabular-nums">{siteConfig.contact.phoneDisplay}</span>
              </p>
              <p>
                <strong className="text-[#FFD43B]">Cidade:</strong>{' '}
                {siteConfig.brand.cityState}
              </p>
              <p className="text-xs text-[#F2E8FA]/80">
                Ao clicar no botão ao lado, sua mensagem é montada automaticamente e aberta diretamente no WhatsApp oficial da loja.
              </p>
            </div>
          </div>

          {/* Lado direito: formulário preparado para WhatsApp */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[24px] border border-white/15 bg-white p-6 sm:p-8 text-[#24202A] shadow-[0_24px_60px_rgba(18,4,30,0.35)]"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold tracking-wide text-[#40145F] uppercase"
                  >
                    Seu nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex.: Mariana Silva"
                    required
                    className="mt-2 w-full rounded-xl border border-[#7026A8]/20 bg-[#F8F7FA] px-4 py-3 text-sm text-[#24202A] placeholder:text-[#5A5266]/60 focus:border-[#7026A8] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold tracking-wide text-[#40145F] uppercase"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex.: (35) 9 9999-9999"
                    required
                    className="mt-2 w-full rounded-xl border border-[#7026A8]/20 bg-[#F8F7FA] px-4 py-3 text-sm text-[#24202A] placeholder:text-[#5A5266]/60 focus:border-[#7026A8] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold tracking-wide text-[#40145F] uppercase"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte o nome ou porte do seu pet e como podemos ajudar..."
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-[#7026A8]/20 bg-[#F8F7FA] px-4 py-3 text-sm text-[#24202A] placeholder:text-[#5A5266]/60 focus:border-[#7026A8] focus:bg-white focus:outline-none"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-xs font-semibold text-red-700 border border-red-200"
                >
                  {error}
                </p>
              )}

              {preparedUrl && (
                <div
                  role="status"
                  className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl bg-[#F2E8FA] px-4 py-3 text-xs text-[#40145F] border border-[#7026A8]/20"
                >
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-[#7026A8] shrink-0" aria-hidden="true" />
                    <span>Mensagem preparada para o WhatsApp da Mommy Petshop!</span>
                  </div>
                  <a
                    href={preparedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[#7026A8] underline whitespace-nowrap"
                  >
                    <span>Abrir conversa</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#FFD43B] px-6 py-3.5 text-sm font-bold tracking-wide text-[#40145F] shadow-sm transition-all duration-150 hover:bg-[#F5C419] hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40145F]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>ENVIAR PELO WHATSAPP</span>
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
