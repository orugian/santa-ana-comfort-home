import { WHATSAPP_NUMBER_DIGITS, WHATSAPP_DEFAULT_MSG } from "@/config/whatsapp";

export function buildWhatsAppUrl(customText?: string) {
  const text = customText ?? WHATSAPP_DEFAULT_MSG;
  const url = `https://wa.me/${WHATSAPP_NUMBER_DIGITS}?text=${encodeURIComponent(text)}`;
  return url; // Works for desktop (Web) and mobile, redirects to app if available
}

export function buildContextualWhatsAppUrl() {
  const path = typeof window !== "undefined" ? window.location.href : "";
  return buildWhatsAppUrl(`${WHATSAPP_DEFAULT_MSG} (Página: ${path})`);
}