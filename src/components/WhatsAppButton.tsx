import { buildWhatsAppUrl } from '../config/siteConfig';

export function WhatsAppButton() {
  return (
    <div className="group fixed right-5 bottom-5 z-40 flex items-center gap-3">
      {/* Tooltip discreto */}
      <span
        role="tooltip"
        className="pointer-events-none hidden sm:inline-flex translate-x-2 rounded-xl bg-[#24202A] px-3.5 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap"
      >
        Fale conosco
      </span>

      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp da Mommy Petshop"
        title="Fale conosco"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.42)] transition-transform duration-200 hover:scale-105 hover:bg-[#20BD5A] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40145F]"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 3C8.832 3 3 8.832 3 16c0 2.487.703 4.896 2.033 6.981L3.37 28.63l5.799-1.622A12.92 12.92 0 0 0 16 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 23.6c-2.164 0-4.28-.617-6.113-1.784l-.438-.279-3.44.962.952-3.36-.306-.453A10.566 10.566 0 0 1 5.4 16C5.4 10.155 10.155 5.4 16 5.4S26.6 10.155 26.6 16 21.845 26.6 16 26.6zm5.815-7.926c-.318-.159-1.883-.929-2.175-1.036-.291-.106-.503-.159-.715.16-.212.318-.821 1.035-1.007 1.247-.185.212-.371.239-.689.08-.318-.159-1.344-.495-2.559-1.579-.946-.844-1.584-1.886-1.77-2.204-.185-.318-.02-.49.14-.648.143-.143.318-.371.477-.557.159-.185.212-.318.318-.53.106-.212.053-.398-.027-.557-.08-.159-.715-1.724-.98-2.36-.258-.62-.52-.536-.715-.546l-.61-.011c-.212 0-.557.08-.848.398-.291.318-1.112 1.087-1.112 2.65 0 1.564 1.139 3.076 1.298 3.288.159.212 2.241 3.422 5.43 4.799.758.327 1.35.523 1.812.669.761.242 1.454.208 2.002.126.611-.091 1.883-.77 2.148-1.513.265-.742.265-1.379.185-1.512-.079-.133-.291-.212-.609-.371z" />
        </svg>
      </a>
    </div>
  );
}
