import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { SmartImage } from './SmartImage';

interface AboutSectionProps {
  onOpenAboutPage?: () => void;
}

export function AboutSection({ onOpenAboutPage }: AboutSectionProps) {
  return (
    <section
      id="nossa-historia"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna visual esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-full w-full rounded-[24px] bg-[#F2E8FA]"
              />
              <div
                aria-hidden="true"
                className="absolute top-6 -left-3 h-24 w-3 rounded-full bg-[#FFD43B]"
              />
              <div className="relative h-full overflow-hidden rounded-[24px] border border-[#7026A8]/12 bg-[#F8F7FA] shadow-[0_14px_36px_rgba(64,20,95,0.08)]">
                <SmartImage
                  src={siteConfig.images.about}
                  alt="Atendimento acolhedor com cachorro feliz na Mommy Petshop"
                  fallbackTitle="Cuidado e atenção na Mommy Petshop"
                  className="h-full min-h-[320px] lg:min-h-[440px] w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Coluna editorial direita */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
              NOSSA ESSÊNCIA · ALFENAS - MG
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#24202A] text-balance">
              {siteConfig.about.title}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#5A5266]">
              {siteConfig.about.description}
            </p>

            {/* Três destaques institucionais */}
            <div className="divide-y divide-[#7026A8]/10 border-y border-[#7026A8]/12">
              {siteConfig.about.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="flex items-start gap-4 py-4"
                >
                  <span className="font-display text-sm font-bold tabular-nums text-[#7026A8] bg-[#F2E8FA] px-2.5 py-1 rounded-lg shrink-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#24202A]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#5A5266]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {onOpenAboutPage && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onOpenAboutPage}
                  className="inline-flex items-center gap-2 font-display text-sm font-bold text-[#7026A8] transition-colors hover:text-[#40145F] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7026A8] rounded"
                >
                  <span>Conhecer mais sobre a Mommy Petshop</span>
                  <ArrowUpRight className="h-4 w-4 text-[#7026A8]" aria-hidden="true" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
