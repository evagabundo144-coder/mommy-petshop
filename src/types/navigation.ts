export type PageRoute =
  | 'home'
  | 'sobre'
  | 'servicos'
  | 'galeria'
  | 'dicas'
  | 'artigo'
  | 'contato'
  | 'privacidade';

export interface RouteState {
  page: PageRoute;
  articleSlug?: string;
}

export function parseRouteFromLocation(): RouteState {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/sobre') return { page: 'sobre' };
  if (path === '/servicos') return { page: 'servicos' };
  if (path === '/galeria') return { page: 'galeria' };
  if (path === '/dicas') return { page: 'dicas' };
  if (path.startsWith('/dicas/')) {
    const slug = path.replace('/dicas/', '').trim();
    return slug ? { page: 'artigo', articleSlug: slug } : { page: 'dicas' };
  }
  if (path === '/contato') return { page: 'contato' };
  if (path === '/privacidade') return { page: 'privacidade' };

  return { page: 'home' };
}

export function routeToPath(route: RouteState): string {
  switch (route.page) {
    case 'sobre':
      return '/sobre';
    case 'servicos':
      return '/servicos';
    case 'galeria':
      return '/galeria';
    case 'dicas':
      return '/dicas';
    case 'artigo':
      return route.articleSlug ? `/dicas/${route.articleSlug}` : '/dicas';
    case 'contato':
      return '/contato';
    case 'privacidade':
      return '/privacidade';
    case 'home':
    default:
      return '/';
  }
}
