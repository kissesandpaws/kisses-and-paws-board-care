// Google Ads (Google tag) para medir conversiones. El tag base se carga en
// __root.tsx; aqui van el id y las etiquetas de conversion, y los disparadores.
//
// La reserva ocurre en otro dominio (la app de reservas en Railway), asi que el
// tag lleva "linker" con ese dominio para poder atribuir la conversion de
// reserva a la campana que trajo al visitante. La conversion de reserva
// (bookingConfirmed) se dispara en la propia app de reservas, no aqui; se deja
// documentada para que ambas partes usen las mismas etiquetas.

export const GOOGLE_ADS_ID = "AW-11294943757";
export const BOOKING_DOMAIN = "kissesandpaws-production.up.railway.app";

export const CONVERSIONS = {
  whatsappClick: "AW-11294943757/inuSCIXzm4odEI3U7Ikq",
  bookingConfirmed: "AW-11294943757/Ahj2CLHTmoodEI3U7Ikq",
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Cuenta una conversion cuando alguien pincha WhatsApp. Los botones abren en una
// pestana nueva (target="_blank"), asi que la pagina no se va y el evento se
// envia sin problemas; aun asi va protegido por si el tag no ha cargado.
export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: CONVERSIONS.whatsappClick });
  }
}
