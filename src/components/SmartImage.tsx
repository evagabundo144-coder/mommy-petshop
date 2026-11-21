import { useState } from 'react';
import { PawPrint } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function SmartImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  priority = false,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F2E8FA] via-[#FAF6FE] to-[#FFF1B8]/50 p-6 text-center text-[#40145F] ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7026A8]/10 text-[#7026A8]">
          <PawPrint className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-semibold">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
