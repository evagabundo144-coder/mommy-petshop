import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig';
import { RouteState } from '../types/navigation';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (route: RouteState, sectionId?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B0C41] text-white border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Marca & descrição institucional */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'home' }, 'inicio');
              }}
              className="inline-block"
            >
              <BrandLogo variant="light" />
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-[#F2E8FA]/85">
              Mommy Petshop — carinho que faz parte da família. Um espaço dedicado ao bem-estar, higiene, produtos e cuidados especiais para cães e gatos em Alfenas - MG.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-[#FFF1B8]">
              <MapPin className="h-4 w-4 text-[#FFD43B] shrink-0" aria-hidden="true" />
              <span>{siteConfig.brand.cityState}</span>
            </div>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-xs font-bold tracking-[0.16em] text-[#FFD43B] uppercase">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F2E8FA]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'home' }, 'inicio')}
                  className="hover:text-[#FFD43B] transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'sobre' })}
                  className="hover:text-[#FFD43B] transition-colors cursor-pointer"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'galeria' })}
                  className="hover:text-[#FFD43B] transition-colors cursor-pointer"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'dicas' })}
                  className="hover:text-[#FFD43B] transition-colors cursor-pointer"
                >
                  Dicas e Conteúdos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'contato' })}
                  className="hover:text-[#FFD43B] transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold tracking-[0.16em] text-[#FFD43B] uppercase">
              Categorias
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F2E8FA]/85">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate({ page: 'servicos' })}
                    className="hover:text-[#FFD43B] transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato configurável */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold tracking-[0.16em] text-[#FFD43B] uppercase">
              Contato
            </h3>
            <div className="space-y-3 text-sm text-[#F2E8FA]/90">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FFD43B] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#FFD43B] shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FFD43B] transition-colors"
              >
                <Instagram className="h-4 w-4 text-[#FFD43B] shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.instagramHandle}</span>
              </a>

              <p className="text-xs leading-relaxed text-[#F2E8FA]/70 pt-1">
                {siteConfig.contact.addressNote}
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-8 sm:flex-row sm:items-center sm:justify-between text-xs text-[#F2E8FA]/75">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>
              © {currentYear} {siteConfig.brand.name}. Todos os direitos reservados.
            </span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'privacidade' })}
              className="underline-offset-4 hover:text-[#FFD43B] hover:underline cursor-pointer"
            >
              Política de privacidade
            </button>
          </div>

          <p className="font-display font-semibold text-[#FFF1B8]">
            {siteConfig.brand.footerPhrase}
          </p>
        </div>
      </div>
    </footer>
  );
}
