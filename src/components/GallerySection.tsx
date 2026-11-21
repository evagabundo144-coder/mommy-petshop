import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { GalleryItem, siteConfig } from '../config/siteConfig';
import { SmartImage } from './SmartImage';

interface GallerySectionProps {
  onOpenGalleryPage?: () => void;
  showFilterTabs?: boolean;
}

type GalleryFilter = 'todos' | GalleryItem['category'];

const FILTER_OPTIONS: { id: GalleryFilter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'caes', label: 'Cachorros' },
  { id: 'gatos', label: 'Gatos' },
  { id: 'cuidados', label: 'Cuidados' },
  { id: 'produtos', label: 'Produtos & Acessórios' },
];

export function GallerySection({
  onOpenGalleryPage,
  showFilterTabs = true,
}: GallerySectionProps) {
  const [filter, setFilter] = useState<GalleryFilter>('todos');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    if (filter === 'todos') return siteConfig.gallery;
    return siteConfig.gallery.filter((item) => item.category === filter);
  }, [filter]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % items.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + items.length) % items.length
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, items.length]);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section
      id="galeria"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div className="max-w-2xl space-y-3">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
              GALERIA EDITORIAL
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#24202A] text-balance">
              Um universo de fofura e cuidado.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#5A5266]">
              Fotografias publicitárias que representam o carinho com cães, gatos, produtos e momentos de atenção especial. Clique em qualquer imagem para ampliar.
            </p>
          </div>

          {onOpenGalleryPage && (
            <button
              type="button"
              onClick={onOpenGalleryPage}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-xl border border-[#7026A8]/20 bg-[#F8F7FA] px-5 py-2.5 text-sm font-semibold text-[#40145F] transition-colors hover:bg-[#F2E8FA] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7026A8]"
            >
              <span>Ver galeria completa</span>
              <ArrowUpRight className="h-4 w-4 text-[#7026A8]" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Abas de filtro interativas */}
        {showFilterTabs && (
          <div
            role="tablist"
            aria-label="Filtrar galeria por categoria"
            className="mb-8 flex flex-wrap items-center gap-2"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = filter === option.id;
              return (
                <button
                  key={option.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => {
                    setFilter(option.id);
                    setActiveIndex(null);
                  }}
                  className={`min-h-[40px] rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7026A8] ${
                    isSelected
                      ? 'bg-[#7026A8] text-white shadow-sm'
                      : 'bg-[#F8F7FA] text-[#5A5266] border border-[#7026A8]/10 hover:bg-[#F2E8FA] hover:text-[#40145F]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Mosaico Editorial */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.2) }}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Ampliar fotografia: ${item.title}`}
              className={`group relative overflow-hidden rounded-[22px] border border-[#7026A8]/10 bg-[#F8F7FA] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7026A8] ${
                filter === 'todos' && idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div
                className={`w-full overflow-hidden ${
                  filter === 'todos' && idx === 0
                    ? 'aspect-[16/10]'
                    : filter === 'todos' && idx === 1
                    ? 'aspect-[4/5] sm:aspect-[4/4] lg:aspect-[16/10]'
                    : 'aspect-[4/3]'
                }`}
              >
                <SmartImage
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackTitle={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Scrim de leitura medido */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B072B]/88 via-[#1B072B]/45 to-transparent p-5 pt-14 text-white">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-[#FFD43B] uppercase">
                      {item.categoryLabel}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-[#FFD43B] group-hover:text-[#40145F]"
                  >
                    <Expand className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização ampliada: ${activeItem.title}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#180626]/92 p-4 sm:p-6 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[24px] border border-white/15 bg-[#2A0B40] text-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Fechar visualização ampliada"
                className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-[#FFD43B] hover:text-[#40145F] cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative bg-black/30">
                <img
                  src={activeItem.image}
                  alt={activeItem.imageAlt}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-full object-contain mx-auto"
                />

                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(
                          (activeIndex - 1 + items.length) % items.length
                        )
                      }
                      aria-label="Imagem anterior"
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-xl bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-[#FFD43B] hover:text-[#40145F] cursor-pointer"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex((activeIndex + 1) % items.length)
                      }
                      aria-label="Próxima imagem"
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-xl bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-[#FFD43B] hover:text-[#40145F] cursor-pointer"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 bg-[#2A0B40]">
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-[#FFD43B] uppercase">
                    {activeItem.categoryLabel}
                  </p>
                  <h3 className="font-display text-lg font-bold text-white">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-[#F2E8FA]/90">
                    {activeItem.caption}
                  </p>
                </div>
                <p className="text-xs font-medium tabular-nums text-[#FFF1B8] shrink-0">
                  {activeIndex + 1} / {items.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
