import { Heart, MessageSquareHeart, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';

const ICONS = {
  heart: Heart,
  sparkles: Sparkles,
  shield: ShieldCheck,
  message: MessageSquareHeart,
};

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="bg-[#F2E8FA]/65 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
            NOSSOS PILARES DE ATENDIMENTO
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#24202A] text-balance">
            Por que o carinho está em cada detalhe?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.differentials.map((item, idx) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between rounded-[22px] border border-[#7026A8]/12 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(64,20,95,0.08)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2E8FA] text-[#7026A8]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-display text-sm font-bold tabular-nums text-[#7026A8]/70">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#24202A]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#5A5266]">
                    {item.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-6 h-1 w-10 rounded-full bg-[#FFD43B]"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
