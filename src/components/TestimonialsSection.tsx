import { MessageCircle, Quote, Star, User } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-10">
          <div className="max-w-2xl space-y-3">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
              RELATOS DE TUTORES · ESPAÇO RESERVADO
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#24202A] text-balance">
              {siteConfig.testimonials.title}
            </h2>
            <p className="text-base leading-relaxed text-[#5A5266]">
              {siteConfig.testimonials.subtitle}
            </p>
          </div>

          <a
            href={buildWhatsAppUrl(
              'Olá, Mommy Petshop! Gostaria de compartilhar meu depoimento sobre o atendimento recebido.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-xl bg-[#FFD43B] px-5 py-2.5 text-xs font-bold tracking-wide text-[#40145F] transition-colors hover:bg-[#F5C419] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40145F]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>ENVIAR SEU DEPOIMENTO</span>
          </a>
        </div>

        {/* Cartões demonstrativos transparentes — sem avaliações inventadas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteConfig.testimonials.slots.map((slot, idx) => (
            <motion.article
              key={slot.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="flex flex-col justify-between rounded-[22px] border border-dashed border-[#7026A8]/25 bg-[#F8F7FA] p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs text-[#7026A8]">
                  <span className="font-semibold">{slot.label}</span>
                  <Quote className="h-4 w-4 text-[#7026A8]/55" aria-hidden="true" />
                </div>

                {/* Espaço visual para avaliação sem inventar nota falsa */}
                <div className="flex items-center gap-1.5 text-xs text-[#5A5266]">
                  <div className="flex items-center gap-0.5 text-[#FFD43B]" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-3.5 w-3.5 stroke-[#7026A8]/40 fill-transparent" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#5A5266]">
                    {slot.ratingLabel}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[#5A5266] italic">
                  “{slot.quotePlaceholder}”
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#7026A8]/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2E8FA] text-[#7026A8]">
                  <User className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-[#24202A] truncate">
                    {slot.clientLabel}
                  </p>
                  <p className="text-xs text-[#5A5266] truncate">
                    {slot.petLabel}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#5A5266]">
          {siteConfig.testimonials.demoNotice}
        </p>
      </div>
    </section>
  );
}
