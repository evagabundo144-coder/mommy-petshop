import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { SmartImage } from './SmartImage';

export function HighlightSection() {
  return (
    <section className="relative overflow-hidden bg-[#40145F] py-20 sm:py-24 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-[#7026A8]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Texto e conversão */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="h-1 w-14 rounded-full bg-[#FFD43B]" aria-hidden="true" />

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.12] tracking-tight text-white text-balance">
              Pequenos momentos.{' '}
              <span className="text-[#FFD43B]">Um amor gigante.</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#F2E8FA]">
              {siteConfig.highlight.description}
            </p>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#FFD43B] px-6 py-3.5 text-sm font-bold tracking-wide text-[#40145F] shadow-[0_12px_28px_rgba(255,212,59,0.22)] transition-all duration-150 hover:bg-[#F5C419] hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>{siteConfig.highlight.ctaLabel}</span>
              </a>
            </div>
          </motion.div>

          {/* Fotografia cinematográfica cachorro e gato juntos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#2A0B40] p-2 sm:p-3 shadow-[0_24px_60px_rgba(12,3,20,0.45)]">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-[20px]">
                <SmartImage
                  src={siteConfig.images.highlight}
                  alt="Cachorro e gato descansando juntos em manta aconchegante com iluminação quente"
                  fallbackTitle="Mommy Petshop — Vínculo e Carinho"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
