import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { SmartImage } from './SmartImage';

interface HeroSectionProps {
  onExploreServices: () => void;
}

export function HeroSection({ onExploreServices }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#40145F] via-[#591C87] to-[#7026A8] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 text-white"
    >
      {/* Elementos arquitetônicos sutis inspirados no toldo amarelo e arcos da fachada */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#FFD43B]/14 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#8A42C5]/35 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Lado esquerdo: Conteúdo principal */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="font-display text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#FFF1B8]">
              {siteConfig.hero.kicker}
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white text-balance">
              <span className="text-[#FFD43B]">Amor</span>, cuidado e{' '}
              <span className="text-[#FFD43B]">carinho</span> em cada detalhe.
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#F2E8FA]">
              {siteConfig.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#FFD43B] px-6 py-3.5 text-sm font-bold tracking-wide text-[#40145F] shadow-[0_12px_28px_rgba(255,212,59,0.28)] transition-all duration-150 hover:bg-[#F5C419] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>{siteConfig.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-150 hover:bg-white/18 hover:border-[#FFD43B]/60 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD43B]"
              >
                <MessageCircle className="h-4 w-4 text-[#FFD43B]" aria-hidden="true" />
                <span>{siteConfig.hero.secondaryCta}</span>
              </a>
            </div>

            <div className="pt-2 border-t border-white/12">
              <p className="text-sm font-medium text-[#FFF1B8]/95">
                {siteConfig.hero.supportingText}
              </p>
            </div>
          </motion.div>

          {/* Lado direito: Composição fotográfica em camadas inspirada na fachada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Camada geométrica amarela de profundidade */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 h-full w-full rounded-[28px] bg-[#FFD43B] opacity-90"
              />
              {/* Camada de contraste roxo médio */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 h-2/3 w-2/3 rounded-[28px] bg-[#8A42C5]/60"
              />

              {/* Quadro principal da fotografia */}
              <div className="relative overflow-hidden rounded-[26px] border-2 border-white/20 bg-[#2E0D46] shadow-[0_24px_60px_rgba(20,5,32,0.45)]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <SmartImage
                    src={siteConfig.images.hero}
                    alt="Cachorro caramelo e gato malhado prateado lado a lado em estúdio profissional da Mommy Petshop"
                    fallbackTitle="Mommy Petshop — Carinho e Cuidado"
                    priority
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                {/* Etiqueta visual estruturada na base do quadro */}
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#2B0C41]/95 px-5 py-3.5 border-t border-white/10">
                  <span className="font-display text-xs sm:text-sm font-bold tracking-[0.12em] text-[#FFD43B]">
                    {siteConfig.hero.badgeText}
                  </span>
                  <span className="text-xs font-medium text-[#F2E8FA]">
                    Cães &amp; Gatos · {siteConfig.brand.cityState}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
