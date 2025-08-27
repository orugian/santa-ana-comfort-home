import { WHATSAPP_NUMBER_DIGITS, WHATSAPP_DEFAULT_MSG } from "@/config/whatsapp";

// Normalize to E.164 (digits only). For BR numbers given with DDD, add "55" if missing.
export function toBrazilE164Digits(raw: string) {
  const digits = raw.replace(/\D+/g, "");
  // If already starts with 55, keep; otherwise prefix 55
  return digits.startsWith("55") ? digits : `55${digits}`;
}

export function buildWhatsAppUrl(rawNumberOrCustomText?: string, text?: string) {
  // Handle both old signature (customText) and new signature (rawNumber, text)
  if (typeof text === "string") {
    // New signature: buildWhatsAppUrl(rawNumber, text)
    const phone = toBrazilE164Digits(rawNumberOrCustomText!);
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${phone}?text=${encoded}`;
  } else {
    // Old signature: buildWhatsAppUrl(customText?)
    const messageText = rawNumberOrCustomText ?? WHATSAPP_DEFAULT_MSG;
    const url = `https://wa.me/${WHATSAPP_NUMBER_DIGITS}?text=${encodeURIComponent(messageText)}`;
    return url;
  }
}

export function buildWhatsAppUrlFallback(rawNumber: string, text: string) {
  const phone = toBrazilE164Digits(rawNumber);
  const encoded = encodeURIComponent(text);
  // Fallback endpoint used by some networks
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
}

/** Robust opener: tries wa.me, then api.whatsapp.com, then hard redirect */
export function openWhatsApp(rawNumber: string, text: string) {
  const primary = buildWhatsAppUrl(rawNumber, text);
  const fallback = buildWhatsAppUrlFallback(rawNumber, text);

  // Try new tab (best UX)
  let w: Window | null = window.open(primary, "_blank", "noopener,noreferrer");
  // If blocked by popup blocker, redirect current tab
  if (!w || w.closed || typeof w.closed === "undefined") {
    window.location.href = primary;
    // As a safety timeout, switch to fallback if wa.me is blocked
    setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.href = fallback;
      }
    }, 1200);
  }
}

export function buildContextualWhatsAppUrl() {
  const path = typeof window !== "undefined" ? window.location.href : "";
  return buildWhatsAppUrl(`${WHATSAPP_DEFAULT_MSG} (Página: ${path})`);
}