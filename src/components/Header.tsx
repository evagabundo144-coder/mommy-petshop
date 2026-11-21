import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { PageRoute, RouteState } from '../types/navigation';

interface HeaderProps {
  currentRoute: RouteState;
  onNavigate: (route: RouteState, sectionId?: string) => void;
}

interface NavItem {
  label: string;
  sectionId?: string;
  targetPage?: PageRoute;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Início', sectionId: 'inicio', targetPage: 'home' },
  { label: 'Nossa história', sectionId: 'nossa-historia', targetPage: 'sobre' },
  { label: 'Serviços', sectionId: 'servicos', targetPage: 'servicos' },
  { label: 'Galeria', sectionId: 'galeria', targetPage: 'galeria' },
  { label: 'Diferenciais', sectionId: 'diferenciais' },
  { label: 'Dicas', sectionId: 'dicas', targetPage: 'dicas' },
  { label: 'Localização', sectionId: 'localizacao' },
  { label: 'Contato', sectionId: 'contato', targetPage: 'contato' },
];

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (item: NavItem) => {
    setMobileOpen(false);
    if (currentRoute.page === 'home' && item.sectionId) {
      onNavigate({ page: 'home' }, item.sectionId);
      return;
    }
    if (item.targetPage) {
      onNavigate({ page: item.targetPage });
      return;
    }
    onNavigate({ page: 'home' }, item.sectionId);
  };

  const handleContactCta = () => {
    setMobileOpen(false);
    if (currentRoute.page === 'home') {
      onNavigate({ page: 'home' }, 'contato');
    } else {
      onNavigate({ page: 'contato' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_6px_24px_rgba(64,20,95,0.08)] border-b border-[#7026A8]/10'
          : 'bg-white/90 backdrop-blur-sm border-b border-black/5'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Lado esquerdo: assinatura visual inspirada na fachada */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            onNavigate({ page: 'home' }, 'inicio');
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7026A8] rounded-lg"
          aria-label="Mommy Petshop — Página inicial"
        >
          <BrandLogo variant="dark" />
        </a>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden xl:flex items-center gap-5"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.targetPage &&
              currentRoute.page === item.targetPage &&
              currentRoute.page !== 'home';

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleItemClick(item)}
                className={`relative py-1 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7026A8] rounded ${
                  isActive
                    ? 'text-[#7026A8] font-semibold'
                    : 'text-[#24202A]/85 hover:text-[#7026A8]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#FFD43B]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Ação principal + menu mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleContactCta}
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#FFD43B] px-4 py-2 text-xs font-bold tracking-wide text-[#40145F] shadow-sm transition-all duration-150 hover:bg-[#F5C419] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40145F]"
          >
            FALE CONOSCO
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#7026A8]/15 bg-[#F8F7FA] text-[#40145F] transition-colors hover:bg-[#F2E8FA] xl:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7026A8]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile / Tablet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden border-t border-[#7026A8]/10 bg-white shadow-xl"
          >
            <nav
              aria-label="Navegação mobile"
              className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-4 sm:px-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="flex min-h-[44px] items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-medium text-[#24202A] transition-colors hover:bg-[#F2E8FA] hover:text-[#7026A8] cursor-pointer"
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-[#7026A8]/10">
                <button
                  type="button"
                  onClick={handleContactCta}
                  className="flex min-h-[46px] w-full items-center justify-center rounded-xl bg-[#FFD43B] px-5 py-3 text-sm font-bold tracking-wide text-[#40145F] transition-colors hover:bg-[#F5C419] cursor-pointer"
                >
                  FALE CONOSCO
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
