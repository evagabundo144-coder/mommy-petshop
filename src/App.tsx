import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HighlightSection } from './components/HighlightSection';
import { LocationSection } from './components/LocationSection';
import { ServicesSection } from './components/ServicesSection';
import { StoreSection } from './components/StoreSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { siteConfig } from './config/siteConfig';
import {
  AboutPage,
  ArticleDetailPage,
  BlogListPage,
  ContactPage,
  GalleryPage,
  PrivacyPage,
  ServicesPage,
} from './pages/InternalPages';
import {
  parseRouteFromLocation,
  RouteState,
  routeToPath,
} from './types/navigation';

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => parseRouteFromLocation());

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRouteFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback(
    (nextRoute: RouteState, sectionId?: string) => {
      const targetPath = routeToPath(nextRoute);
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
      }
      setRoute(nextRoute);

      if (nextRoute.page === 'home' && sectionId) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }, 50);
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    []
  );

  const selectedArticle =
    route.page === 'artigo' && route.articleSlug
      ? siteConfig.articles.find((a) => a.slug === route.articleSlug) ||
        siteConfig.articles[0]
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FA] text-[#24202A] overflow-x-hidden">
      <Header currentRoute={route} onNavigate={handleNavigate} />

      <main className="flex-1">
        {route.page === 'home' && (
          <>
            <HeroSection
              onExploreServices={() =>
                handleNavigate({ page: 'home' }, 'servicos')
              }
            />
            <AboutSection
              onOpenAboutPage={() => handleNavigate({ page: 'sobre' })}
            />
            <ServicesSection
              onOpenServicesPage={() => handleNavigate({ page: 'servicos' })}
            />
            <HighlightSection />
            <GallerySection
              onOpenGalleryPage={() => handleNavigate({ page: 'galeria' })}
            />
            <DifferentialsSection />
            <TestimonialsSection />
            <BlogSection
              onSelectArticle={(slug) =>
                handleNavigate({ page: 'artigo', articleSlug: slug })
              }
              onOpenBlogPage={() => handleNavigate({ page: 'dicas' })}
            />
            <StoreSection
              onConsultServices={() => handleNavigate({ page: 'servicos' })}
            />
            <LocationSection />
            <ContactSection />
          </>
        )}

        {route.page === 'sobre' && <AboutPage onNavigate={handleNavigate} />}
        {route.page === 'servicos' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {route.page === 'galeria' && (
          <GalleryPage onNavigate={handleNavigate} />
        )}
        {route.page === 'dicas' && (
          <BlogListPage onNavigate={handleNavigate} />
        )}
        {route.page === 'artigo' && selectedArticle && (
          <ArticleDetailPage
            article={selectedArticle}
            onNavigate={handleNavigate}
          />
        )}
        {route.page === 'contato' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
        {route.page === 'privacidade' && (
          <PrivacyPage onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}
