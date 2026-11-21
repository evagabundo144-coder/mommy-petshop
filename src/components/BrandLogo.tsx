interface BrandLogoProps {
  variant?: 'dark' | 'light';
}

export function BrandLogo({ variant = 'dark' }: BrandLogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-[#40145F]';
  const accentStroke = variant === 'light' ? '#FFD43B' : '#7026A8';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      {/* Elemento geométrico inspirado no toldo amarelo e no arco roxo da fachada */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="2" y="2" width="32" height="32" rx="10" fill="#40145F" />
        <path
          d="M6 12.5L9.5 7.5H26.5L30 12.5H6Z"
          fill="#FFD43B"
        />
        <path
          d="M6 12.5H30V14.8C30 15.7941 29.1941 16.6 28.2 16.6H7.8C6.80589 16.6 6 15.7941 6 14.8V12.5Z"
          fill="#FFD43B"
        />
        <circle cx="13.5" cy="21" r="1.4" fill="#FFD43B" />
        <circle cx="18" cy="19.4" r="1.4" fill="#FFD43B" />
        <circle cx="22.5" cy="21" r="1.4" fill="#FFD43B" />
        <path
          d="M12.5 26.8C12.5 24.149 14.9624 22 18 22C21.0376 22 23.5 24.149 23.5 26.8C23.5 28.5673 21.8807 30 19.8833 30H16.1167C14.1193 30 12.5 28.5673 12.5 26.8Z"
          fill="#FFFFFF"
          stroke={accentStroke}
          strokeWidth="0.6"
        />
      </svg>
      <span className={`font-display text-lg sm:text-xl font-bold tracking-tight ${textColor}`}>
        Mommy <span className={variant === 'light' ? 'text-[#FFD43B]' : 'text-[#7026A8]'}>Petshop</span>
      </span>
    </span>
  );
}
