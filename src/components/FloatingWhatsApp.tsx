import React from "react";
import { buildContextualWhatsAppUrl } from "@/utils/whatsapp";

export default function FloatingWhatsApp() {
  const [open, setOpen] = React.useState(false);
  const chatUrl = buildContextualWhatsAppUrl();

  return (
    <div className="fixed z-[1000]">
      {/* Toggle Button */}
      <button
        type="button"
        className="wa-fab"
        aria-label="Abrir WhatsApp"
        onClick={() => setOpen((v) => !v)}
      >
        <svg className="wa-fab__icon" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M19.11 17.76c-.29-.14-1.68-.83-1.94-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.9 1.12-.17.19-.33.22-.62.07-1.68-.83-2.77-1.49-3.88-3.38-.29-.5.29-.46.83-1.53.09-.19.04-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.19 2 3.04 4.84 4.27.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.68-.69 1.92-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
          <path fill="currentColor" d="M26.07 5.93A10.94 10.94 0 0016 2a10.94 10.94 0 00-9.93 16.01L4 30l12.18-2.02A10.96 10.96 0 0016 28a10.94 10.94 0 0010.07-16.07zm-10.07 19.6a8.63 8.63 0 01-4.4-1.2l-.32-.19-7.28 1.21 1.24-7.11-.21-.33A8.63 8.63 0 1116 25.53z"/>
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          className="absolute right-4 bottom-16 md:right-6 md:bottom-20 w-[88vw] max-w-[360px] rounded-2xl overflow-hidden shadow-2xl
                     animate-[fadeIn_160ms_ease-out] border border-black/5"
          role="dialog" aria-label="WhatsApp"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "#25D366" }}>
            <span className="text-white font-semibold">WhatsApp</span>
            <button aria-label="Fechar" onClick={() => setOpen(false)} className="text-white/90 hover:text-white">
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="bg-[#F4FBF7] px-4 pt-4 pb-2">
            <div className="inline-block bg-white text-[#111] rounded-2xl px-3 py-2 shadow-sm">
              <p className="text-sm leading-snug">Olá 👋<br/>Podemos ajudá-lo?</p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-[#F4FBF7] px-4 pb-4">
            <a
              href={chatUrl}
              target="_blank" rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-white font-medium
                         transition hover:opacity-95"
              style={{ backgroundColor: "#25D366" }}
              aria-label="Abrir bate-papo no WhatsApp"
            >
              Abrir bate-papo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
              </svg>
            </a>
            <p className="mt-2 text-xs text-[#6B7280]">Você será redirecionado para o WhatsApp Web ou aplicativo.</p>
          </div>
        </div>
      )}
    </div>
  );
}