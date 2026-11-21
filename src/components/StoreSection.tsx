import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { SmartImage } from './SmartImage';

interface StoreSectionProps {
  onConsultServices: () => void;
}

export function StoreSection({ onConsultServices }: StoreSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Quadro editorial da fachada real da Mommy Petshop */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 h-full w-full rounded-[26px] bg-[#FFD43B]"
              />
              <div className="relative overflow-hidden rounded-[24px] border border-[#7026A8]/15 bg-[#F8F7FA] shadow-[0_20px_50px_rgba(64,20,95,0.12)]">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <SmartImage
                    src={siteConfig.images.facade}
                    alt="Fotografia real da fachada da loja Mommy Petshop com toldo amarelo e identidade roxa em Alfenas - MG"
                    fallbackTitle="Fachada Mommy Petshop — Alfenas - MG"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#40145F] px-5 py-3 text-xs text-white">
                  <span className="font-display font-bold tracking-wide text-[#FFD43B]">
                    LOJA FÍSICA · MOMMY PETSHOP
                  </span>
                  <span className="text-[#F2E8FA]">
                    Identidade oficial em Alfenas - MG
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo institucional ao lado da fachada */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
              MOMMY PETSHOP · IDENTIDADE LOCAL
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#24202A] text-balance">
              Uma loja feita para quem ama os animais.
            </h2>

            <div className="space-y-3">
              <p className="font-display text-lg font-bold text-[#7026A8]">
                Estamos em Alfenas, Minas Gerais!
              </p>
              <p className="text-base leading-relaxed text-[#5A5266]">
                Conheça nossa loja e entre em contato para consultar nossos serviços e produtos. Nossa presença digital reflete o mesmo acolhimento e identidade visual da nossa fachada física.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-[#7026A8]/12 text-sm text-[#24202A]">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#7026A8] shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.addressLine}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="h-4 w-4 text-[#7026A8] shrink-0" aria-hidden="true" />
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#7026A8] hover:underline"
                >
                  {siteConfig.contact.instagramHandle}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#FFD43B] px-5 py-3 text-xs font-bold tracking-wide text-[#40145F] transition-colors hover:bg-[#F5C419] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>CONSULTAR PELO WHATSAPP</span>
              </a>

              <button
                type="button"
                onClick={onConsultServices}
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-[#7026A8]/20 bg-[#F8F7FA] px-5 py-3 text-xs font-bold tracking-wide text-[#40145F] transition-colors hover:bg-[#F2E8FA] whitespace-nowrap cursor-pointer"
              >
                VER CATEGORIAS
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
