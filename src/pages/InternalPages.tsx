import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BlogArticle, buildWhatsAppUrl, ServiceItem, siteConfig } from '../config/siteConfig';
import { RouteState } from '../types/navigation';
import { ContactSection } from '../components/ContactSection';
import { GallerySection } from '../components/GallerySection';
import { LocationSection } from '../components/LocationSection';
import { SmartImage } from '../components/SmartImage';

interface InternalPageProps {
  onNavigate: (route: RouteState, sectionId?: string) => void;
}

function PageBanner({
  kicker,
  title,
  subtitle,
  onBackHome,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  onBackHome: () => void;
}) {
  return (
    <section className="bg-gradient-to-br from-[#40145F] via-[#591C87] to-[#7026A8] pt-28 pb-14 sm:pt-32 sm:pb-16 text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-4">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFF1B8] transition-colors hover:text-[#FFD43B] cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Voltar para a página inicial</span>
        </button>

        <p className="font-display text-xs font-bold tracking-[0.16em] text-[#FFD43B]">
          {kicker}
        </p>

        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance max-w-3xl">
          {title}
        </h1>

        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#F2E8FA]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function AboutPage({ onNavigate }: InternalPageProps) {
  return (
    <div>
      <PageBanner
        kicker="SOBRE NÓS · MOMMY PETSHOP"
        title="Um cuidado especial para quem faz parte da sua família."
        subtitle="Conheça o propósito, os valores e a identidade da Mommy Petshop em Alfenas - MG."
        onBackHome={() => onNavigate({ page: 'home' })}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-6 overflow-hidden rounded-[24px] border border-[#7026A8]/12 shadow-md">
              <SmartImage
                src={siteConfig.images.about}
                alt="Atendimento atencioso com cachorro na Mommy Petshop"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24202A]">
                Carinho que faz parte da família
              </h2>
              <p className="text-base leading-relaxed text-[#5A5266]">
                {siteConfig.about.description}
              </p>
              {siteConfig.about.extendedParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed text-[#5A5266]">
                  {paragraph}
                </p>
              ))}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'servicos' })}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#FFD43B] px-5 py-2.5 text-xs font-bold tracking-wide text-[#40145F] hover:bg-[#F5C419] cursor-pointer"
                >
                  CONHECER SERVIÇOS
                </button>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#7026A8]/20 bg-[#F8F7FA] px-5 py-2.5 text-xs font-bold tracking-wide text-[#40145F] hover:bg-[#F2E8FA]"
                >
                  <MessageCircle className="h-4 w-4 text-[#7026A8]" aria-hidden="true" />
                  <span>FALAR PELO WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {siteConfig.about.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-[22px] border border-[#7026A8]/12 bg-[#F8F7FA] p-6 space-y-3"
              >
                <span className="inline-block font-display text-sm font-bold tabular-nums text-[#7026A8] bg-[#F2E8FA] px-2.5 py-1 rounded-lg">
                  {pillar.number}
                </span>
                <h3 className="font-display text-lg font-bold text-[#24202A]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5A5266]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F7FA] py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-[#7026A8]">
              NOSSA FACHADA EM ALFENAS - MG
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24202A]">
              Identidade visual conectada à loja física
            </h2>
            <p className="text-base leading-relaxed text-[#5A5266]">
              O amarelo acolhedor e o roxo marcante da fachada da Mommy Petshop guiam cada detalhe deste espaço digital, fortalecendo o reconhecimento da loja em Alfenas.
            </p>
          </div>
          <div className="lg:col-span-6 overflow-hidden rounded-[22px] border border-[#7026A8]/15 shadow-md">
            <SmartImage
              src={siteConfig.images.facade}
              alt="Fachada da Mommy Petshop em Alfenas - MG"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServicesPage({ onNavigate }: InternalPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    'todos' | ServiceItem['category']
  >('todos');

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'todos') return siteConfig.services;
    return siteConfig.services.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <PageBanner
        kicker="SERVIÇOS E PRODUTOS · CATEGORIAS"
        title="Tudo o que seu pet merece."
        subtitle="Explore as categorias ilustrativas de cuidados, higiene, produtos e atendimento especial e consulte a disponibilidade pelo WhatsApp."
        onBackHome={() => onNavigate({ page: 'home' })}
      />

      <section className="bg-[#F8F7FA] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div
            role="tablist"
            aria-label="Filtrar serviços por categoria"
            className="mb-10 flex flex-wrap gap-2"
          >
            {[
              { id: 'todos' as const, label: 'Todas as categorias' },
              { id: 'estetica' as const, label: 'Banho e Tosa' },
              { id: 'produtos' as const, label: 'Produtos e Acessórios' },
              { id: 'cuidados' as const, label: 'Higiene e Cuidados Especiais' },
            ].map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`min-h-[42px] rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#7026A8] text-white'
                      : 'bg-white text-[#5A5266] border border-[#7026A8]/12 hover:bg-[#F2E8FA]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-6">
            {filteredServices.map((service) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#7026A8]/12 bg-white lg:grid-cols-12 shadow-[0_10px_30px_rgba(64,20,95,0.05)]"
              >
                <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#F2E8FA]">
                  <SmartImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 space-y-5">
                  <div className="space-y-3">
                    <p className="font-display text-xs font-bold tracking-[0.14em] text-[#7026A8]">
                      {service.number} · {service.categoryLabel}
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24202A]">
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed text-[#5A5266]">
                      {service.fullDescription}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-[#24202A]"
                        >
                          <Check className="h-4 w-4 text-[#7026A8] shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#7026A8]/10 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-[#5A5266]">
                      Categoria ilustrativa · consulte disponibilidade atual
                    </span>
                    <a
                      href={buildWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#FFD43B] px-5 py-2.5 text-xs font-bold tracking-wide text-[#40145F] transition-colors hover:bg-[#F5C419] whitespace-nowrap"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>CONSULTAR DISPONIBILIDADE</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function GalleryPage({ onNavigate }: InternalPageProps) {
  return (
    <div>
      <PageBanner
        kicker="GALERIA FOTOGRÁFICA · MOMMY PETSHOP"
        title="Um universo de fofura e cuidado."
        subtitle="Explore composições publicitárias de cães, gatos, acessórios e momentos de carinho em alta definição."
        onBackHome={() => onNavigate({ page: 'home' })}
      />
      <GallerySection showFilterTabs />
    </div>
  );
}

export function BlogListPage({ onNavigate }: InternalPageProps) {
  return (
    <div>
      <PageBanner
        kicker="DICAS E CONTEÚDOS · CUIDADO ANIMAL"
        title="Dicas para cuidar ainda melhor do seu pet."
        subtitle="Artigos demonstrativos com orientações práticas sobre higiene, cuidados com a pelagem e escolha de acessórios."
        onBackHome={() => onNavigate({ page: 'home' })}
      />

      <section className="bg-[#F8F7FA] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-8">
          {siteConfig.articles.map((article) => (
            <article
              key={article.slug}
              className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#7026A8]/12 bg-white md:grid-cols-12 shadow-[0_10px_30px_rgba(64,20,95,0.05)]"
            >
              <div className="md:col-span-5 aspect-[16/10] md:aspect-auto overflow-hidden bg-[#F2E8FA]">
                <SmartImage
                  src={article.coverImage}
                  alt={article.coverAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:col-span-7 flex flex-col justify-between p-6 sm:p-8 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#5A5266]">
                    <span className="font-semibold text-[#7026A8]">
                      {article.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[#24202A]">
                    {article.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#5A5266]">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({ page: 'artigo', articleSlug: article.slug })
                    }
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#7026A8] px-5 py-2.5 text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#40145F] cursor-pointer"
                  >
                    <span>LER CONTEÚDO COMPLETO</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ArticleDetailPage({
  article,
  onNavigate,
}: InternalPageProps & { article: BlogArticle }) {
  const otherArticles = siteConfig.articles.filter(
    (item) => item.slug !== article.slug
  );

  return (
    <div>
      <section className="bg-[#40145F] pt-28 pb-12 sm:pt-32 sm:pb-16 text-white">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 space-y-5">
          <button
            type="button"
            onClick={() => onNavigate({ page: 'dicas' })}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFF1B8] hover:text-[#FFD43B] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Voltar para todas as dicas</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#FFF1B8]">
            <span className="font-bold text-[#FFD43B]">{article.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>Conteúdo demonstrativo</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-balance">
            {article.title}
          </h1>
        </div>
      </section>

      <article className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="overflow-hidden rounded-[24px] border border-[#7026A8]/12 shadow-md">
            <SmartImage
              src={article.coverImage}
              alt={article.coverAlt}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <p className="text-lg leading-relaxed font-medium text-[#24202A]">
            {article.intro}
          </p>

          <div className="space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-display text-2xl font-bold text-[#40145F]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-base leading-relaxed text-[#5A5266]"
                  >
                    {p}
                  </p>
                ))}
                {section.checklist && (
                  <ul className="mt-3 space-y-2 rounded-2xl bg-[#F8F7FA] p-5 border border-[#7026A8]/10">
                    {section.checklist.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2.5 text-sm text-[#24202A]"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 text-[#7026A8] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="rounded-[22px] bg-[#F2E8FA] p-6 sm:p-8 space-y-4">
            <p className="text-sm sm:text-base font-medium text-[#40145F]">
              {article.closingTip}
            </p>
            <a
              href={buildWhatsAppUrl(
                `Olá, Mommy Petshop! Li a dica "${article.title}" no site e gostaria de tirar uma dúvida.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#FFD43B] px-5 py-2.5 text-xs font-bold tracking-wide text-[#40145F] hover:bg-[#F5C419]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>CONVERSAR NO WHATSAPP</span>
            </a>
          </div>

          <div className="pt-8 border-t border-[#7026A8]/12 space-y-5">
            <h3 className="font-display text-xl font-bold text-[#24202A]">
              Leia também
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {otherArticles.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() =>
                    onNavigate({ page: 'artigo', articleSlug: item.slug })
                  }
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#7026A8]/12 bg-[#F8F7FA] text-left transition-colors hover:bg-[#F2E8FA] cursor-pointer"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <SmartImage
                      src={item.coverImage}
                      alt={item.coverAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <p className="text-xs font-semibold text-[#7026A8]">
                      {item.categoryLabel}
                    </p>
                    <p className="font-display text-base font-bold text-[#24202A]">
                      {item.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export function ContactPage({ onNavigate }: InternalPageProps) {
  return (
    <div>
      <PageBanner
        kicker="CONTATO E LOCALIZAÇÃO · ALFENAS - MG"
        title="Fale com a Mommy Petshop."
        subtitle="Envie sua mensagem diretamente pelo WhatsApp, confira nosso Instagram e consulte a localização da loja em Alfenas - MG."
        onBackHome={() => onNavigate({ page: 'home' })}
      />
      <ContactSection />
      <LocationSection />
    </div>
  );
}

export function PrivacyPage({ onNavigate }: InternalPageProps) {
  return (
    <div>
      <PageBanner
        kicker="TRANSPARÊNCIA E PRIVACIDADE"
        title="Política de Privacidade"
        subtitle="Informações sobre o funcionamento deste site institucional e o encaminhamento direto de mensagens."
        onBackHome={() => onNavigate({ page: 'home' })}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 space-y-6 text-base leading-relaxed text-[#5A5266]">
          <p>
            Este website institucional da <strong>Mommy Petshop</strong> (Alfenas - MG) tem caráter informativo e de apresentação comercial.
          </p>
          <h2 className="font-display text-xl font-bold text-[#24202A]">
            1. Dados informados no formulário de contato
          </h2>
          <p>
            As informações preenchidas no formulário (nome, telefone e mensagem) não são armazenadas em bancos de dados ocultos neste site. Elas são utilizadas exclusivamente no seu navegador para preparar o texto que você decide enviar voluntariamente ao WhatsApp oficial da loja.
          </p>
          <h2 className="font-display text-xl font-bold text-[#24202A]">
            2. Serviços externos
          </h2>
          <p>
            Ao clicar nos botões de WhatsApp, Instagram ou Google Maps, você será direcionado às respectivas plataformas externas, regidas por suas próprias políticas de privacidade.
          </p>
          <h2 className="font-display text-xl font-bold text-[#24202A]">
            3. Contato direto
          </h2>
          <p>
            Para confirmar quaisquer informações comerciais, horários ou disponibilidade de produtos e serviços, entre em contato pelo WhatsApp oficial:{' '}
            <strong className="text-[#40145F]">{siteConfig.contact.phoneDisplay}</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
