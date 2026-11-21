import { Clock, ExternalLink, Instagram, MapPin, Phone } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { SmartImage } from './SmartImage';

export function LocationSection() {
  return (
    <section
      id="localizacao"
      className="bg-[#F8F7FA] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-10">
          <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
            LOCALIZAÇÃO E ATENDIMENTO
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#24202A] text-balance">
            Venha conhecer a Mommy Petshop.
          </h2>
          <p className="text-base leading-relaxed text-[#5A5266]">
            Estamos em Alfenas, Minas Gerais. Utilize o mapa abaixo ou fale diretamente pelo WhatsApp para confirmar o endereço exato e os horários de atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
          {/* Mapa do Google Maps */}
          <div className="lg:col-span-7 overflow-hidden rounded-[24px] border border-[#7026A8]/12 bg-white shadow-[0_14px_34px_rgba(64,20,95,0.06)] flex flex-col">
            <div className="relative min-h-[340px] flex-1 bg-[#F2E8FA]">
              <iframe
                title="Mapa de localização da Mommy Petshop em Alfenas - MG"
                src={siteConfig.contact.googleMapsEmbedUrl}
                className="h-full min-h-[340px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#7026A8]/10 bg-white px-5 py-4">
              <div className="text-xs sm:text-sm text-[#5A5266]">
                Pesquisa no mapa:{' '}
                <strong className="text-[#24202A]">
                  {siteConfig.contact.googleMapsQuery}
                </strong>
              </div>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[#FFD43B] px-4 py-2 text-xs font-bold tracking-wide text-[#40145F] transition-colors hover:bg-[#F5C419] whitespace-nowrap"
              >
                <span>ABRIR NO GOOGLE MAPS</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Informações de contato + referência visual da fachada */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 rounded-[24px] border border-[#7026A8]/12 bg-white p-6 shadow-[0_14px_34px_rgba(64,20,95,0.06)]">
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2E8FA] text-[#7026A8]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#24202A]">
                    Endereço comercial
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-[#7026A8]">
                    {siteConfig.contact.addressLine}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#5A5266]">
                    {siteConfig.contact.addressNote}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2E8FA] text-[#7026A8]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#24202A]">
                    Telefone e WhatsApp
                  </h3>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-block text-sm font-semibold tabular-nums text-[#7026A8] hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2E8FA] text-[#7026A8]">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#24202A]">
                    Instagram oficial
                  </h3>
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-block text-sm font-semibold text-[#7026A8] hover:underline"
                  >
                    {siteConfig.contact.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2E8FA] text-[#7026A8]">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#24202A]">
                    Horário de funcionamento
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#5A5266]">
                    {siteConfig.contact.hoursNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Referência visual da fachada */}
            <div className="overflow-hidden rounded-2xl border border-[#7026A8]/12 bg-[#F8F7FA]">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <SmartImage
                  src={siteConfig.images.facade}
                  alt="Referência visual da fachada da Mommy Petshop com toldo amarelo"
                  fallbackTitle="Referência visual da fachada"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-2.5 text-xs font-medium text-[#5A5266]">
                Referência visual da fachada para facilitar sua chegada.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
