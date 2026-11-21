import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { SmartImage } from './SmartImage';

interface ServicesSectionProps {
  onOpenServicesPage?: () => void;
}

export function ServicesSection({ onOpenServicesPage }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      className="bg-[#F8F7FA] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
              CATEGORIAS DE CUIDADO E PRODUTOS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#24202A] text-balance">
              {siteConfig.servicesSection.title}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#5A5266]">
              {siteConfig.servicesSection.subtitle}
            </p>
          </div>

          {onOpenServicesPage && (
            <button
              type="button"
              onClick={onOpenServicesPage}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-xl border border-[#7026A8]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#40145F] transition-colors hover:bg-[#F2E8FA] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7026A8]"
            >
              <span>Ver detalhes dos serviços</span>
              <ArrowUpRight className="h-4 w-4 text-[#7026A8]" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Grade 6 categorias */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.05, 0.25),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-[#7026A8]/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(64,20,95,0.1)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2E8FA]">
                <SmartImage
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackTitle={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#5A5266]">
                    <span className="font-display font-bold tabular-nums text-[#7026A8]">
                      {service.number} · {service.categoryLabel}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-6 rounded-full bg-[#FFD43B] transition-all duration-200 group-hover:w-10"
                    />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#24202A]">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#5A5266]">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#7026A8]/10">
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#F2E8FA] px-4 py-2.5 text-xs font-bold tracking-wide text-[#40145F] transition-colors duration-150 group-hover:bg-[#FFD43B] group-hover:text-[#40145F] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7026A8]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#7026A8]" aria-hidden="true" />
                    <span>CONSULTAR DISPONIBILIDADE</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Nota de transparência comercial */}
        <p className="mt-8 text-center text-xs sm:text-sm text-[#5A5266]">
          {siteConfig.servicesSection.disclaimer}
        </p>
      </div>
    </section>
  );
}
