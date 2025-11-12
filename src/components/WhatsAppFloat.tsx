// src/components/WhatsAppFloat.tsx
import React from "react";

export const WhatsAppFloat: React.FC = () => {
  const phone = "5511961391788"; // +55 11 96139-1788
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        grid h-14 w-14 place-items-center rounded-full
        bg-[#25D366] text-white
        shadow-lg ring-1 ring-black/5
        transition transform
        hover:scale-105 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-white/80
      "
    >
      {/* Official-style WhatsApp glyph (simple-icons path). No masks/gradients => no distortion */}
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297.835-1.45 1.523-2.038 1.622-.543.092-1.244.131-2.01-.126-.463-.153-1.053-.346-1.826-.676-3.213-1.386-5.304-4.617-5.457-4.834-.154-.216-1.304-1.737-1.304-3.316 0-1.58.827-2.36 1.121-2.675.297-.317.65-.396.868-.396.216 0 .434.002.626.012.2.01.47-.076.736.564.297.718 1.013 2.49 1.1 2.674.086.185.144.4.028.617-.115.216-.173.35-.339.542-.173.2-.357.45-.509.606-.173.173-.353.36-.151.706.202.347.9 1.48 1.934 2.395 1.331 1.158 2.451 1.52 2.8 1.693.347.173.55.154.756-.093.202-.245.868-1.012 1.1-1.36.232-.347.463-.288.756-.173.297.115 1.873.883 2.195 1.043.317.173.53.25.61.386.08.14.08.81-.217 1.646M11.792 0C5.28 0 0 5.28 0 11.792c0 2.093.55 4.062 1.507 5.78L0 24l6.6-1.732a11.77 11.77 0 005.192 1.23c6.514 0 11.792-5.28 11.792-11.792C23.584 5.28 18.306 0 11.792 0z"/>
      </svg>
      <span className="sr-only">Open WhatsApp chat</span>
    </a>
  );
};