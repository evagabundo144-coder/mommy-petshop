import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { SmartImage } from './SmartImage';

interface BlogSectionProps {
  onSelectArticle: (slug: string) => void;
  onOpenBlogPage?: () => void;
}

export function BlogSection({
  onSelectArticle,
  onOpenBlogPage,
}: BlogSectionProps) {
  return (
    <section
      id="dicas"
      className="bg-[#F8F7FA] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
              CONTEÚDOS DEMONSTRATIVOS · BEM-ESTAR ANIMAL
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#24202A] text-balance">
              {siteConfig.blogSection.title}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#5A5266]">
              {siteConfig.blogSection.subtitle}
            </p>
          </div>

          {onOpenBlogPage && (
            <button
              type="button"
              onClick={onOpenBlogPage}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-xl border border-[#7026A8]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#40145F] transition-colors hover:bg-[#F2E8FA] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7026A8]"
            >
              <span>Ver todas as dicas</span>
              <ArrowUpRight className="h-4 w-4 text-[#7026A8]" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteConfig.articles.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-[#7026A8]/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(64,20,95,0.09)]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#F2E8FA]">
                <SmartImage
                  src={article.coverImage}
                  alt={article.coverAlt}
                  fallbackTitle={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#5A5266]">
                    <span className="font-semibold text-[#7026A8]">
                      {article.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold leading-snug text-[#24202A]">
                    {article.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#5A5266]">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#7026A8]/10">
                  <button
                    type="button"
                    onClick={() => onSelectArticle(article.slug)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#F2E8FA] px-4 py-2.5 text-xs font-bold tracking-wide text-[#40145F] transition-colors duration-150 group-hover:bg-[#7026A8] group-hover:text-white whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7026A8]"
                  >
                    <span>LER CONTEÚDO</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
